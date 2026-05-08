import { useNavigate } from 'react-router-dom'
import { LogOut, Star, Flame, BookOpen, CheckCircle2 } from 'lucide-react'
import { useStore } from '@/lib/store'
import { MODULES, TOTAL_SIGNS } from '@/data/curriculum'

export default function ProfilePage() {
  const navigate = useNavigate()
  const user = useStore((s) => s.user)
  const logout = useStore((s) => s.logout)
  const getLevelInfo = useStore((s) => s.getLevelInfo)
  const isPremium = user?.plan === 'premium'
  const { level, xp, progress } = getLevelInfo()
  const completed = user?.completedLessons || []
  const totalLessons = MODULES.flatMap((m) => m.lessons).length

  const handleLogout = () => {
    logout()
    navigate('/auth')
  }

  return (
    <div className="px-4 py-5 space-y-5">

      {/* Avatar + name */}
      <div className="card p-5 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center text-white text-xl font-semibold">
          {user?.name?.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{user?.name}</h3>
          <p className="text-sm text-gray-400">{user?.email}</p>
          <span className={`mt-1 inline-block ${isPremium ? 'badge-premium' : 'badge-free'}`}>
            {isPremium ? 'Plan Premium' : 'Plan Free'}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="card p-4">
          <div className="flex items-center gap-2 text-brand-600 mb-1">
            <Star size={16} />
            <span className="font-semibold">{xp} XP</span>
          </div>
          <p className="text-xs text-gray-400">Nivel {level}</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand-500 rounded-full progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-2 text-gold-600 mb-1">
            <Flame size={16} />
            <span className="font-semibold">{user?.streak || 0} días</span>
          </div>
          <p className="text-xs text-gray-400">Racha actual</p>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-2 text-purple-500 mb-1">
            <BookOpen size={16} />
            <span className="font-semibold">{completed.length}/{totalLessons}</span>
          </div>
          <p className="text-xs text-gray-400">Lecciones completas</p>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-2 text-green-500 mb-1">
            <CheckCircle2 size={16} />
            <span className="font-semibold">{TOTAL_SIGNS}</span>
          </div>
          <p className="text-xs text-gray-400">Señas disponibles</p>
        </div>
      </div>

      {/* Upgrade if free */}
      {!isPremium && (
        <button
          onClick={() => navigate('/plans')}
          className="w-full rounded-2xl bg-gradient-to-r from-brand-800 to-brand-600 p-4 flex items-center justify-between"
        >
          <div className="text-left">
            <p className="font-semibold text-white text-sm">Mejora a Premium</p>
            <p className="text-brand-200 text-xs mt-0.5">Acceso completo por $7/mes</p>
          </div>
          <span className="text-xs font-semibold bg-white text-brand-800 px-3 py-1.5 rounded-xl">
            Ver planes
          </span>
        </button>
      )}

      {/* Lessons completed list */}
      {completed.length > 0 && (
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Lecciones completadas</p>
          <div className="card divide-y divide-gray-50 overflow-hidden">
            {MODULES.flatMap((m) => m.lessons)
              .filter((l) => completed.includes(l.id))
              .map((lesson) => (
                <div key={lesson.id} className="flex items-center gap-3 px-4 py-3">
                  <span className="text-xl">{lesson.emoji}</span>
                  <span className="text-sm text-gray-700 flex-1">{lesson.title}</span>
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                    {user?.quizScores?.[lesson.id] || 0}%
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      )}

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full card p-4 flex items-center justify-center gap-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
      >
        <LogOut size={16} /> Cerrar sesión
      </button>
    </div>
  )
}
