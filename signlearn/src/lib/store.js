import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  signIn, signUp, signOut,
  getProfile, updateProgress,
  supabase
} from './supabase'

export const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      // ── Auth ─────────────────────────────────────────────────────
      login: async (email, password) => {
        set({ loading: true, error: null })
        try {
          const { user: authUser } = await signIn(email, password)
          const profile = await getProfile(authUser.id)
          set({ user: { ...profile, email: authUser.email }, isAuthenticated: true, loading: false })
          return { success: true }
        } catch (err) {
          const msg = mapError(err.message)
          set({ loading: false, error: msg })
          return { success: false, error: msg }
        }
      },

      register: async (name, email, password) => {
        set({ loading: true, error: null })
        try {
          await signUp(email, password, name)
          return await get().login(email, password)
        } catch (err) {
          const msg = mapError(err.message)
          set({ loading: false, error: msg })
          return { success: false, error: msg }
        }
      },

      logout: async () => {
        await signOut()
        set({ user: null, isAuthenticated: false, error: null })
      },

      restoreSession: async () => {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) { set({ isAuthenticated: false }); return }
        try {
          const profile = await getProfile(session.user.id)
          set({ user: { ...profile, email: session.user.email }, isAuthenticated: true })
        } catch {
          set({ isAuthenticated: false })
        }
      },

      clearError: () => set({ error: null }),

      // ── Plan ─────────────────────────────────────────────────────
      upgradeToPremium: async () => {
        const userId = get().user?.id
        if (!userId) return
        const updated = await updateProgress(userId, { plan: 'premium' })
        set((s) => ({ user: { ...s.user, ...updated } }))
      },

      isPremium: () => get().user?.plan === 'premium',

      // ── Progress ─────────────────────────────────────────────────
      addXP: async (amount) => {
        const user = get().user
        if (!user) return
        const newXP = (user.xp || 0) + amount
        set((s) => ({ user: { ...s.user, xp: newXP } }))
        updateProgress(user.id, { xp: newXP }).catch(console.error)
      },

      completeLesson: async (lessonId, score) => {
        const user = get().user
        if (!user) return
        const already = (user.completed_lessons || []).includes(lessonId)
        const newCompleted = already ? user.completed_lessons : [...(user.completed_lessons || []), lessonId]
        const newScores = { ...(user.quiz_scores || {}), [lessonId]: Math.max(user.quiz_scores?.[lessonId] || 0, score) }
        set((s) => ({ user: { ...s.user, completed_lessons: newCompleted, quiz_scores: newScores } }))
        updateProgress(user.id, { completed_lessons: newCompleted, quiz_scores: newScores }).catch(console.error)
      },

      updateStreak: async () => {
        const user = get().user
        if (!user) return
        const today = new Date().toDateString()
        const last = user.last_activity ? new Date(user.last_activity).toDateString() : null
        if (last === today) return
        const yesterday = new Date(Date.now() - 86400000).toDateString()
        const newStreak = last === yesterday ? (user.streak || 0) + 1 : 1
        set((s) => ({ user: { ...s.user, streak: newStreak, last_activity: today } }))
        updateProgress(user.id, { streak: newStreak, last_activity: new Date().toISOString() }).catch(console.error)
      },

      getLevelInfo: () => {
        const xp = get().user?.xp || 0
        const level = Math.floor(xp / 500) + 1
        const nextLevelXP = level * 500
        const progress = ((xp - (level - 1) * 500) / 500) * 100
        return { level, xp, nextLevelXP, progress }
      },
    }),
    {
      name: 'signlearn-cache',
      partialize: (s) => ({ user: s.user, isAuthenticated: s.isAuthenticated })
    }
  )
)

function mapError(msg = '') {
  if (msg.includes('Invalid login')) return 'Email o contraseña incorrectos.'
  if (msg.includes('Email not confirmed')) return 'Confirma tu email antes de entrar.'
  if (msg.includes('already registered')) return 'Este email ya tiene una cuenta.'
  if (msg.includes('Password should be')) return 'La contraseña debe tener al menos 6 caracteres.'
  if (msg.includes('rate limit')) return 'Demasiados intentos. Espera unos minutos.'
  return 'Algo salió mal. Intenta de nuevo.'
}
