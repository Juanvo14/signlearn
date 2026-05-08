import { useNavigate } from 'react-router-dom'
import { Flame, Star, Lock, CheckCircle2, ArrowRight } from 'lucide-react'
import { useStore } from '@/lib/store'
import { MODULES } from '@/data/curriculum'

export default function HomePage() {
  const navigate = useNavigate()
  const user = useStore((s) => s.user)
  const getLevelInfo = useStore((s) => s.getLevelInfo)
  const isPremium = user?.plan === 'premium'
  const { level, xp, nextLevelXP, currentLevelXP, progress } = getLevelInfo()
  const completed = user?.completedLessons || []

  const allLessons = MODULES.flatMap((m) => m.lessons)
  const nextLesson = allLessons.find((l) => !completed.includes(l.id) && (isPremium || l.free))

  return (
    <div className="px-4 py-5 space-y-5">

      {/* Greeting */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Hola, {user?.name?.split(' ')[0]} 👋
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">Sigue practicando hoy</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="card p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-gold-600 mb-1">
            <Flame size={16} />
            <span className="font-semibold text-base">{user?.streak || 0}</span>
          </div>
          <p className="text-[11px] text-gray-400">días seguidos</p>
        </div>
        <div className="card p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-brand-600 mb-1">
            <Star size={16} />
            <span className="font-semibold text-base">{xp}</span>
          </div>
          <p className="text-[11px] text-gray-400">XP total</p>
        </div>
        <div className="card p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-purple-500 mb-1">
            <span className="font-semibold text-base">Nv.{level}</span>
          </div>
          <p className="text-[11px] text-gray-400">nivel actual</p>
        </div>
      </div>

      {/* XP progress */}
      <div className="card p-4">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Nivel {level}</span>
          <span>{xp} / {nextLevelXP} XP</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-600 rounded-full progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Continue lesson */}
      {nextLesson && (
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Continuar</p>
          <button
            onClick={() => navigate(`/lessons/${nextLesson.id}`)}
            className="card w-full p-4 flex items-center gap-4 hover:border-brand-200 transition-colors text-left"
          >
            <span className="text-3xl">{nextLesson.emoji}</span>
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">{nextLesson.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{nextLesson.signs.length} señas · {nextLesson.duration}</p>
            </div>
            <ArrowRight size={16} className="text-gray-300" />
          </button>
        </div>
      )}

      {/* Recent lessons */}
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Lecciones</p>
        <div className="grid grid-cols-2 gap-3">
          {allLessons.slice(0, 4).map((lesson) => {
            const locked = !isPremium && !lesson.free
            const done = completed.includes(lesson.id)
            return (
              <button
                key={lesson.id}
                disabled={locked}
                onClick={() => !locked && navigate(`/lessons/${lesson.id}`)}
                className={`lesson-card card p-4 text-left relative ${locked ? 'locked opacity-60 cursor-default' : ''} ${done ? 'border-brand-100' : ''}`}
              >
                <span className="text-2xl mb-2 block">{lesson.emoji}</span>
                <p className="text-sm font-medium text-gray-900 leading-snug">{lesson.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{lesson.signs.length} señas</p>
                {locked && (
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                    <Lock size={10} className="text-gray-400" />
                  </div>
                )}
                {done && !locked && (
                  <div className="absolute top-2.5 right-2.5">
                    <CheckCircle2 size={16} className="text-brand-500" />
                  </div>
                )}
                {locked && (
                  <span className="absolute top-0 right-0 text-[9px] font-semibold bg-gold-100 text-gold-900 px-2 py-0.5 rounded-bl-lg rounded-tr-xl">
                    Premium
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Upgrade banner */}
      {!isPremium && (
        <button
          onClick={() => navigate('/plans')}
          className="w-full rounded-2xl bg-gradient-to-r from-brand-800 to-brand-600 p-4 flex items-center justify-between text-left"
        >
          <div>
            <p className="font-semibold text-white text-sm">Desbloquea todo el contenido</p>
            <p className="text-brand-200 text-xs mt-0.5">50+ lecciones, sin anuncios, certificado</p>
          </div>
          <span className="text-xs font-semibold bg-white text-brand-800 px-3 py-1.5 rounded-xl shrink-0">
            Ver planes
          </span>
        </button>
      )}

    </div>
  )
}
