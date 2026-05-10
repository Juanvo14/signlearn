import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, X, Play, ChevronRight, Lock } from 'lucide-react'
import { useStore } from '@/lib/store'
import { MODULES } from '@/data/curriculum'

// Componente del video de YouTube embebido
function YouTubePlayer({ videoId, title }) {
  const [started, setStarted] = useState(false)

  if (!started) {
    return (
      <div
        className="relative w-full bg-gray-900 rounded-xl overflow-hidden cursor-pointer group"
        style={{ aspectRatio: '16/9' }}
        onClick={() => setStarted(true)}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play size={22} className="text-brand-700 ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-white text-xs font-medium truncate">{title}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full rounded-xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default function LessonDetailPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const user = useStore((s) => s.user)
  const addXP = useStore((s) => s.addXP)
  const completeLesson = useStore((s) => s.completeLesson)
  const updateStreak = useStore((s) => s.updateStreak)
  const isPremium = user?.plan === 'premium'

  const lesson = MODULES.flatMap((m) => m.lessons).find((l) => l.id === lessonId)

  const [phase, setPhase] = useState('learn') // 'learn' | 'quiz' | 'result'
  const [signIndex, setSignIndex] = useState(0)
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [correct, setCorrect] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizOptions] = useState(() =>
    lesson?.quiz.map(q => [...q.options].sort(() => Math.random() - 0.5)) ?? []
  )

  if (!lesson) {
    return <div className="p-8 text-center text-gray-400">Lección no encontrada</div>
  }

  // Bloqueo Premium
  if (!isPremium && !lesson.free) {
    return (
      <div className="px-4 py-5 flex flex-col items-center min-h-[calc(100vh-8rem)]">
        <button onClick={() => navigate(-1)} className="self-start text-gray-400 hover:text-gray-600 mb-6">
          <ArrowLeft size={20} />
        </button>
        <div className="card w-full p-8 text-center mt-4">
          <Lock size={32} className="text-gray-300 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Contenido Premium</h3>
          <p className="text-sm text-gray-500 mb-5">
            Esta lección está disponible con el plan Premium.
          </p>
          <button onClick={() => navigate('/plans')} className="btn-primary w-full max-w-xs mx-auto block">
            Ver planes
          </button>
        </div>
      </div>
    )
  }

  const currentSign = lesson.signs[signIndex]
  const currentQ = lesson.quiz[quizIndex]
  const totalQuestions = lesson.quiz.length

  // ── FASE LEARN ───────────────────────────────────────────────────
  if (phase === 'learn') {
    return (
      <div className="px-4 py-5 flex flex-col min-h-[calc(100vh-8rem)]">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900 text-sm">{lesson.title}</h2>
            <p className="text-xs text-gray-400">{lesson.signs.length} señas · {lesson.xp} XP</p>
          </div>
        </div>

        {/* Video de YouTube — siempre arriba */}
        <div className="mb-4">
          <YouTubePlayer videoId={lesson.videoId} title={lesson.videoTitle} />
        </div>

        {/* Progreso de señas */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-gray-400">Señas de esta lección</p>
          <span className="text-xs font-medium text-brand-700">{signIndex + 1} / {lesson.signs.length}</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-brand-500 rounded-full progress-fill"
            style={{ width: `${((signIndex + 1) / lesson.signs.length) * 100}%` }}
          />
        </div>

        {/* Seña actual — descripción debajo del video */}
        <div className="card flex-1 flex flex-col items-center justify-center p-6 text-center mb-4">
          <span className="text-6xl mb-4 block">{currentSign.emoji}</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{currentSign.word}</h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{currentSign.description}</p>
        </div>

        {/* Navegación entre señas */}
        <div className="flex gap-3">
          {signIndex > 0 && (
            <button onClick={() => setSignIndex(signIndex - 1)} className="btn-secondary flex items-center gap-2 flex-1 justify-center">
              <ArrowLeft size={16} /> Anterior
            </button>
          )}
          {signIndex < lesson.signs.length - 1 ? (
            <button onClick={() => setSignIndex(signIndex + 1)} className="btn-primary flex items-center gap-2 flex-1 justify-center">
              Siguiente <ArrowRight size={16} />
            </button>
          ) : (
            <button onClick={() => setPhase('quiz')} className="btn-primary flex items-center gap-2 flex-1 justify-center">
              Empezar quiz <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    )
  }

  // ── FASE QUIZ ────────────────────────────────────────────────────
  if (phase === 'quiz') {
    const options = quizOptions[quizIndex] || currentQ.options

    const handleAnswer = (option) => {
      if (selected) return
      setSelected(option)
      const isCorrect = option === currentQ.correct
      if (isCorrect) setCorrect((c) => c + 1)
      setAnswers((a) => [...a, { question: currentQ.emoji, answer: option, correct: isCorrect }])

      setTimeout(() => {
        if (quizIndex < totalQuestions - 1) {
          setQuizIndex((i) => i + 1)
          setSelected(null)
        } else {
          const finalCorrect = correct + (isCorrect ? 1 : 0)
          const score = Math.round((finalCorrect / totalQuestions) * 100)
          completeLesson(lessonId, score)
          addXP(Math.round(lesson.xp * (score / 100)))
          updateStreak()
          setPhase('result')
        }
      }, 900)
    }

    return (
      <div className="px-4 py-5 flex flex-col min-h-[calc(100vh-8rem)]">
        <div className="flex items-center gap-3 mb-5">
          <button onClick={() => setPhase('learn')} className="text-gray-400 hover:text-gray-600">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-500 rounded-full progress-fill"
                style={{ width: `${(quizIndex / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
          <span className="text-xs text-gray-400">{quizIndex + 1}/{totalQuestions}</span>
        </div>

        <div className="card p-6 text-center mb-5">
          <p className="text-xs text-gray-400 mb-3">Esta seña significa:</p>
          <span className="text-6xl block">{currentQ.emoji}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => {
            let cls = 'card p-4 text-sm font-medium text-center cursor-pointer border-2 transition-all active:scale-95 '
            if (!selected) cls += 'border-transparent hover:border-brand-300 hover:text-brand-700'
            else if (option === currentQ.correct) cls += 'answer-correct border-transparent'
            else if (option === selected) cls += 'answer-wrong border-transparent'
            else cls += 'opacity-40 border-transparent'
            return (
              <button key={option} className={cls} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ── FASE RESULT ──────────────────────────────────────────────────
  const score = Math.round((correct / totalQuestions) * 100)
  const earned = Math.round(lesson.xp * (score / 100))

  return (
    <div className="px-4 py-5 flex flex-col items-center min-h-[calc(100vh-8rem)]">
      <div className="card w-full p-6 text-center mb-4 mt-4">
        <span className="text-5xl block mb-3">
          {score >= 80 ? '🏆' : score >= 50 ? '👍' : '💪'}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {score >= 80 ? '¡Excelente!' : score >= 50 ? '¡Buen trabajo!' : '¡Sigue practicando!'}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{correct} de {totalQuestions} correctas</p>
        <div className="flex gap-3 justify-center">
          <div className="bg-brand-50 rounded-xl px-4 py-2 text-center">
            <p className="text-lg font-semibold text-brand-700">+{earned}</p>
            <p className="text-xs text-brand-500">XP ganados</p>
          </div>
          <div className="bg-gray-50 rounded-xl px-4 py-2 text-center">
            <p className="text-lg font-semibold text-gray-700">{score}%</p>
            <p className="text-xs text-gray-400">puntuación</p>
          </div>
        </div>
      </div>

      <div className="card w-full p-4 mb-4">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Resumen</p>
        <div className="space-y-2">
          {answers.map((a, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="text-xl">{a.question}</span>
              <span className="flex-1 text-gray-600">{a.answer}</span>
              {a.correct
                ? <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                : <X size={16} className="text-red-400 shrink-0" />
              }
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex gap-3">
        <button
          onClick={() => { setPhase('quiz'); setQuizIndex(0); setSelected(null); setCorrect(0); setAnswers([]) }}
          className="btn-secondary flex-1"
        >
          Repetir quiz
        </button>
        <button onClick={() => navigate('/lessons')} className="btn-primary flex-1">
          Ver lecciones
        </button>
      </div>
    </div>
  )
}
