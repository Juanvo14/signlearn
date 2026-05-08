import { useNavigate } from 'react-router-dom'
import { Lock, CheckCircle2, ChevronRight } from 'lucide-react'
import { useStore } from '@/lib/store'
import { MODULES } from '@/data/curriculum'

export default function LessonsPage() {
  const navigate = useNavigate()
  const user = useStore((s) => s.user)
  const isPremium = user?.plan === 'premium'
  const completed = user?.completedLessons || []

  return (
    <div className="px-4 py-5 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Lecciones</h2>

      {MODULES.map((mod) => (
        <div key={mod.id}>
          <div className="flex items-center gap-2 mb-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{mod.title}</p>
            {!isPremium && !mod.free && (
              <span className="text-[9px] font-semibold bg-gold-100 text-gold-900 px-2 py-0.5 rounded-full">
                Premium
              </span>
            )}
          </div>
          <div className="card divide-y divide-gray-50 overflow-hidden">
            {mod.lessons.map((lesson) => {
              const locked = !isPremium && !lesson.free
              const done = completed.includes(lesson.id)
              return (
                <button
                  key={lesson.id}
                  disabled={locked}
                  onClick={() => !locked && navigate(`/lessons/${lesson.id}`)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 text-left transition-colors
                    ${locked ? 'opacity-60 cursor-default bg-gray-50/50' : 'hover:bg-gray-50 active:bg-gray-100'}`}
                >
                  <span className="text-2xl w-8 text-center shrink-0">{lesson.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{lesson.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {lesson.signs.length} señas · {lesson.duration} · {lesson.xp} XP
                    </p>
                  </div>
                  {locked
                    ? <Lock size={14} className="text-gray-300 shrink-0" />
                    : done
                      ? <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                      : <ChevronRight size={16} className="text-gray-300 shrink-0" />
                  }
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {!isPremium && (
        <button
          onClick={() => navigate('/plans')}
          className="w-full rounded-2xl bg-gradient-to-r from-brand-800 to-brand-600 p-4 flex items-center justify-between"
        >
          <div className="text-left">
            <p className="font-semibold text-white text-sm">Accede a todos los módulos</p>
            <p className="text-brand-200 text-xs mt-0.5">Módulos 2 y 3 disponibles con Premium</p>
          </div>
          <span className="text-xs font-semibold bg-white text-brand-800 px-3 py-1.5 rounded-xl shrink-0">
            Ver planes
          </span>
        </button>
      )}
    </div>
  )
}
