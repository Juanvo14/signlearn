import { useState } from 'react'
import { Check, X, Loader2 } from 'lucide-react'
import { useStore } from '@/lib/store'
import { TOTAL_LESSONS, TOTAL_SIGNS } from '@/data/curriculum'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const CHECKOUT_URL = `${SUPABASE_URL}/functions/v1/create-checkout`

const FEATURES = [
  { label: 'Lecciones disponibles', free: '3 lecciones', premium: `${TOTAL_LESSONS}+ lecciones` },
  { label: 'Señas en total',        free: '16 señas',    premium: `${TOTAL_SIGNS}+ señas`      },
  { label: 'Práctica diaria',       free: '5 por día',   premium: 'Ilimitada'                  },
  { label: 'Anuncios',              free: true,          premium: false, invert: true           },
  { label: 'Videos de señas',       free: false,         premium: true                          },
  { label: 'Estadísticas',          free: false,         premium: true                          },
  { label: 'Acceso sin internet',   free: false,         premium: true                          },
  { label: 'Certificado oficial',   free: false,         premium: true                          },
  { label: 'Comunidad premium',     free: false,         premium: true                          },
]

export default function PlansPage() {
  const user = useStore((s) => s.user)
  const isPremium = user?.plan === 'premium'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleUpgrade = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, email: user.email })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No se recibió URL de pago')
      }
    } catch (err) {
      setError('No se pudo iniciar el pago. Verifica que la función de Stripe esté activa.')
      setLoading(false)
    }
  }

  return (
    <div className="px-4 py-5 space-y-5">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900">Elige tu plan</h2>
        <p className="text-sm text-gray-500 mt-1">Empieza gratis. Mejora cuando estés listo.</p>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-2 gap-3">

        {/* Free */}
        <div className={`card p-4 ${!isPremium ? 'border-brand-300 border-2' : ''}`}>
          <p className="font-semibold text-gray-900 text-sm mb-1">Free</p>
          {!isPremium && (
            <span className="inline-block text-[10px] font-medium text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full mb-2">
              Tu plan
            </span>
          )}
          <p className="text-2xl font-semibold text-gray-900 mt-2">$0</p>
          <p className="text-xs text-gray-400">/ mes</p>
          <p className="text-xs text-gray-500 mt-2 mb-4">Acceso básico para empezar.</p>
          <button disabled className="w-full py-2 rounded-xl text-xs font-medium text-gray-400 bg-gray-100 cursor-default">
            {isPremium ? 'Plan anterior' : 'Plan actual'}
          </button>
        </div>

        {/* Premium */}
        <div className="card p-4 border-2 border-brand-600 relative overflow-hidden">
          <span className="absolute top-0 right-0 text-[9px] font-bold bg-brand-600 text-white px-2 py-1 rounded-bl-xl">
            POPULAR
          </span>
          <p className="font-semibold text-gray-900 text-sm mb-1">Premium</p>
          {isPremium && (
            <span className="inline-block text-[10px] font-medium text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full mb-2">
              Tu plan
            </span>
          )}
          <p className="text-2xl font-semibold text-gray-900 mt-2">$7</p>
          <p className="text-xs text-gray-400">/ mes</p>
          <p className="text-xs text-gray-500 mt-2 mb-4">Todo el contenido sin límites.</p>
          {isPremium
            ? <button disabled className="w-full py-2 rounded-xl text-xs font-medium bg-brand-50 text-brand-700 cursor-default">Activo</button>
            : (
              <button
                onClick={handleUpgrade}
                disabled={loading}
                className="w-full py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-800 transition-colors active:scale-95 flex items-center justify-center gap-1.5"
              >
                {loading ? <Loader2 size={13} className="animate-spin" /> : null}
                {loading ? 'Redirigiendo...' : 'Obtener Premium'}
              </button>
            )
          }
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          <p className="text-xs text-red-500">{error}</p>
        </div>
      )}

      {/* Feature comparison */}
      <div className="card overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-4 py-2">
          <p className="text-xs font-medium text-gray-400 col-span-1">Función</p>
          <p className="text-xs font-medium text-gray-500 text-center">Free</p>
          <p className="text-xs font-semibold text-brand-700 text-center">Premium</p>
        </div>
        {FEATURES.map((f) => (
          <div key={f.label} className="grid grid-cols-3 px-4 py-3 border-b border-gray-50 last:border-0 items-center">
            <p className="text-xs text-gray-600 col-span-1 pr-2">{f.label}</p>
            <div className="flex justify-center">
              {typeof f.free === 'string'
                ? <span className="text-[11px] text-gray-500">{f.free}</span>
                : f.free
                  ? f.invert ? <X size={14} className="text-red-400" /> : <Check size={14} className="text-brand-500" />
                  : <X size={14} className="text-gray-300" />
              }
            </div>
            <div className="flex justify-center">
              {typeof f.premium === 'string'
                ? <span className="text-[11px] text-brand-700 font-medium">{f.premium}</span>
                : f.premium
                  ? <Check size={14} className="text-brand-500" />
                  : <X size={14} className="text-gray-300" />
              }
            </div>
          </div>
        ))}
      </div>

      {!isPremium && (
        <button
          onClick={handleUpgrade}
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-brand-800 to-brand-600 p-4 text-white font-semibold text-sm active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : null}
          {loading ? 'Redirigiendo a Stripe...' : 'Empezar Premium — $7/mes'}
        </button>
      )}

      {isPremium && (
        <div className="card p-4 text-center">
          <span className="text-2xl">✅</span>
          <p className="font-semibold text-gray-900 text-sm mt-2">Tienes Premium activo</p>
          <p className="text-xs text-gray-400 mt-1">Disfruta de todo el contenido sin límites.</p>
        </div>
      )}
    </div>
  )
}
