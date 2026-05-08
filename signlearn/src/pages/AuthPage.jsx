import { useState } from 'react'
import { useStore } from '@/lib/store'
import { resetPassword } from '@/lib/supabase'
import { Eye, EyeOff, Mail } from 'lucide-react'

export default function AuthPage() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [resetSent, setResetSent] = useState(false)

  const login = useStore((s) => s.login)
  const register = useStore((s) => s.register)
  const loading = useStore((s) => s.loading)
  const error = useStore((s) => s.error)
  const clearError = useStore((s) => s.clearError)

  const setField = (k, v) => { clearError(); setForm((f) => ({ ...f, [k]: v })) }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (mode === 'reset') {
      await resetPassword(form.email)
      setResetSent(true)
      return
    }
    if (mode === 'register') {
      await register(form.name.trim(), form.email, form.password)
    } else {
      await login(form.email, form.password)
    }
  }

  if (resetSent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-brand-800 to-brand-600 flex items-center justify-center px-5">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
            <Mail size={24} className="text-brand-600" />
          </div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Revisa tu email</h3>
          <p className="text-sm text-gray-500 mb-4">
            Enviamos un enlace a <strong>{form.email}</strong> para restablecer tu contraseña.
          </p>
          <button onClick={() => { setMode('login'); setResetSent(false) }} className="btn-primary w-full">
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-800 to-brand-600 flex flex-col items-center justify-center px-5">
      <div className="mb-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
          <span className="text-3xl">🤚</span>
        </div>
        <h1 className="text-2xl font-semibold text-white">SignLearn</h1>
        <p className="text-brand-200 text-sm mt-1">Aprende lenguaje de señas</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
        {mode !== 'reset' && (
          <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-5">
            {['login', 'register'].map((m) => (
              <button key={m} onClick={() => { setMode(m); clearError() }}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all
                  ${mode === m ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {m === 'login' ? 'Iniciar sesión' : 'Registrarme'}
              </button>
            ))}
          </div>
        )}

        {mode === 'reset' && (
          <div className="mb-5">
            <h3 className="font-semibold text-gray-900 mb-1">Olvidé mi contraseña</h3>
            <p className="text-xs text-gray-400">Te enviamos un enlace a tu email.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Nombre</label>
              <input type="text" value={form.name} onChange={(e) => setField('name', e.target.value)}
                placeholder="Tu nombre" required
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400 transition-colors" />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
            <input type="email" value={form.email} onChange={(e) => setField('email', e.target.value)}
              placeholder="tu@email.com" required
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-brand-400 transition-colors" />
          </div>

          {mode !== 'reset' && (
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs font-medium text-gray-500">Contraseña</label>
                {mode === 'login' && (
                  <button type="button" onClick={() => { setMode('reset'); clearError() }}
                    className="text-xs text-brand-600 hover:underline">
                    Olvidé mi contraseña
                  </button>
                )}
              </div>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} value={form.password}
                  onChange={(e) => setField('password', e.target.value)}
                  placeholder="••••••••" required minLength={6}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 pr-10 text-sm focus:outline-none focus:border-brand-400 transition-colors" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
          )}

          {error && (
            <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
          )}

          <button type="submit" disabled={loading}
            className="btn-primary w-full flex items-center justify-center gap-2 mt-1">
            {loading
              ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              : mode === 'login' ? 'Entrar'
              : mode === 'register' ? 'Crear cuenta gratis'
              : 'Enviar enlace'
            }
          </button>

          {mode === 'reset' && (
            <button type="button" onClick={() => { setMode('login'); clearError() }} className="btn-secondary w-full">
              Cancelar
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
