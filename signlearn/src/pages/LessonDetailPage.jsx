import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, X, Play, ChevronRight, Lock } from 'lucide-react'
import { useStore } from '@/lib/store'
import { MODULES } from '@/data/curriculum'
import { SignIllustration } from '@/components/SignIllustration'

function YouTubePlayer({ videoId, title }) {
  const [started, setStarted] = useState(false)
  if (!started) {
    return (
      <div className="relative w-full bg-gray-900 rounded-2xl overflow-hidden cursor-pointer group" style={{ aspectRatio: '16/9' }} onClick={() => setStarted(true)}>
        <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Play size={24} className="text-brand-700 ml-1" fill="currentColor"/>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
          <p className="text-white text-xs font-medium truncate">{title}</p>
          <p className="text-white/60 text-[10px] mt-0.5">Toca para reproducir</p>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </div>
  )
}

// Genera rondas de quiz mezclando los dos tipos
function buildQuizRounds(quiz) {
  return quiz.map((q, i) => ({
    ...q,
    // Alterna: par = definición -> elige ilustración, impar = ilustración -> elige palabra
    type: i % 2 === 0 ? 'word-to-image' : 'image-to-word',
    shuffledOptions: [...q.options].sort(() => Math.random() - 0.5)
  }))
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
  const quizRounds = useMemo(() => lesson ? buildQuizRounds(lesson.quiz) : [], [lesson])

  const [phase, setPhase] = useState('learn')
  const [signIndex, setSignIndex] = useState(0)
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [correct, setCorrect] = useState(0)
  const [answers, setAnswers] = useState([])

  if (!lesson) return <div className="p-8 text-center text-gray-400">Lección no encontrada</div>

  if (!isPremium && !lesson.free) {
    return (
      <div className="px-4 py-5 flex flex-col items-center min-h-[calc(100vh-8rem)]">
        <button onClick={() => navigate(-1)} className="self-start text-gray-400 hover:text-gray-600 mb-6"><ArrowLeft size={20}/></button>
        <div className="card w-full p-8 text-center mt-4">
          <Lock size={32} className="text-gray-300 mx-auto mb-3"/>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Contenido Premium</h3>
          <p className="text-sm text-gray-500 mb-5">Esta lección está disponible con el plan Premium.</p>
          <button onClick={() => navigate('/plans')} className="btn-primary w-full max-w-xs mx-auto block">Ver planes</button>
        </div>
      </div>
    )
  }

  const currentSign = lesson.signs[signIndex]
  const totalQuestions = quizRounds.length
  const currentQ = quizRounds[quizIndex]

  // ── FASE LEARN ───────────────────────────────────────────────────
  if (phase === 'learn') {
    return (
      <div className="px-4 py-5 flex flex-col min-h-[calc(100vh-8rem)]">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600"><ArrowLeft size={20}/></button>
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900 text-sm">{lesson.title}</h2>
            <p className="text-xs text-gray-400">{lesson.signs.length} señas · {lesson.xp} XP</p>
          </div>
          <span className="text-xs font-medium text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">{lesson.duration}</span>
        </div>

        {/* VIDEO */}
        <div className="mb-4">
          <YouTubePlayer videoId={lesson.videoId} title={lesson.videoTitle}/>
        </div>

        {/* Progreso */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-400">Seña {signIndex + 1} de {lesson.signs.length}</p>
          <div className="flex gap-1">
            {lesson.signs.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i <= signIndex ? 'bg-brand-500' : 'bg-gray-200'}`}/>
            ))}
          </div>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-brand-500 rounded-full progress-fill" style={{ width: `${((signIndex + 1) / lesson.signs.length) * 100}%` }}/>
        </div>

        {/* Ilustración + descripción */}
        <div className="card flex-1 flex flex-col items-center p-5 mb-4">
          <SignIllustration word={currentSign.word} size={160}/>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{currentSign.word}</h3>
          <p className="text-sm text-gray-500 leading-relaxed text-center max-w-xs">{currentSign.description}</p>
        </div>

        <div className="flex gap-3">
          {signIndex > 0 && (
            <button onClick={() => setSignIndex(signIndex - 1)} className="btn-secondary flex items-center gap-2 flex-1 justify-center">
              <ArrowLeft size={16}/> Anterior
            </button>
          )}
          {signIndex < lesson.signs.length - 1 ? (
            <button onClick={() => setSignIndex(signIndex + 1)} className="btn-primary flex items-center gap-2 flex-1 justify-center">
              Siguiente <ArrowRight size={16}/>
            </button>
          ) : (
            <button onClick={() => setPhase('quiz')} className="btn-primary flex items-center gap-2 flex-1 justify-center">
              Empezar quiz <ChevronRight size={16}/>
            </button>
          )}
        </div>
      </div>
    )
  }

  // ── FASE QUIZ ────────────────────────────────────────────────────
  if (phase === 'quiz') {
    const handleAnswer = (option) => {
      if (selected) return
      setSelected(option)
      const isCorrect = option === currentQ.correct
      if (isCorrect) setCorrect((c) => c + 1)
      setAnswers((a) => [...a, { word: currentQ.correct, answer: option, correct: isCorrect }])
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

    // Tipo A: se muestra la PALABRA y se elige la ILUSTRACIÓN correcta
    if (currentQ.type === 'word-to-image') {
      return (
        <div className="px-4 py-5 flex flex-col min-h-[calc(100vh-8rem)]">
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setPhase('learn')} className="text-gray-400 hover:text-gray-600"><ArrowLeft size={20}/></button>
            <div className="flex-1">
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 rounded-full progress-fill" style={{ width: `${(quizIndex / totalQuestions) * 100}%` }}/>
              </div>
            </div>
            <span className="text-xs text-gray-400">{quizIndex + 1}/{totalQuestions}</span>
          </div>

          {/* Pregunta: definición / palabra */}
          <div className="card p-5 text-center mb-5">
            <p className="text-xs text-gray-400 mb-2">¿Cuál es la seña para?</p>
            <p className="text-2xl font-semibold text-gray-900">{currentQ.correct}</p>
            <p className="text-xs text-gray-400 mt-1">Elige la ilustración correcta</p>
          </div>

          {/* Opciones: 4 ilustraciones */}
          <div className="grid grid-cols-2 gap-3">
            {currentQ.shuffledOptions.map((option) => {
              let border = 'border-2 border-transparent'
              if (selected) {
                if (option === currentQ.correct) border = 'border-2 border-brand-500 ring-2 ring-brand-200'
                else if (option === selected) border = 'border-2 border-red-400 ring-2 ring-red-100'
                else border = 'border-2 border-transparent opacity-40'
              }
              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selected}
                  className={`card p-2 flex flex-col items-center gap-1 transition-all active:scale-95 ${border} ${!selected ? 'hover:border-brand-300' : ''}`}
                >
                  <SignIllustration word={option} size={100}/>
                  <span className="text-xs font-medium text-gray-500">{option}</span>
                </button>
              )
            })}
          </div>
        </div>
      )
    }

    // Tipo B: se muestra la ILUSTRACIÓN y se elige la PALABRA correcta
    return (
      <div className="px-4 py-5 flex flex-col min-h-[calc(100vh-8rem)]">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setPhase('learn')} className="text-gray-400 hover:text-gray-600"><ArrowLeft size={20}/></button>
          <div className="flex-1">
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 rounded-full progress-fill" style={{ width: `${(quizIndex / totalQuestions) * 100}%` }}/>
            </div>
          </div>
          <span className="text-xs text-gray-400">{quizIndex + 1}/{totalQuestions}</span>
        </div>

        {/* Pregunta: ilustración */}
        <div className="card p-5 flex flex-col items-center mb-5">
          <p className="text-xs text-gray-400 mb-3">Esta seña significa:</p>
          <SignIllustration word={currentQ.correct} size={150}/>
        </div>

        {/* Opciones: 4 palabras */}
        <div className="grid grid-cols-2 gap-3">
          {currentQ.shuffledOptions.map((option) => {
            let cls = 'card p-4 text-sm font-medium text-center cursor-pointer border-2 transition-all active:scale-95 '
            if (!selected) cls += 'border-transparent hover:border-brand-300 hover:text-brand-700'
            else if (option === currentQ.correct) cls += 'answer-correct border-transparent'
            else if (option === selected) cls += 'answer-wrong border-transparent'
            else cls += 'opacity-40 border-transparent'
            return (
              <button key={option} className={cls} onClick={() => handleAnswer(option)}>{option}</button>
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
        <span className="text-5xl block mb-3">{score >= 80 ? '🏆' : score >= 50 ? '👍' : '💪'}</span>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{score >= 80 ? '¡Excelente!' : score >= 50 ? '¡Buen trabajo!' : '¡Sigue practicando!'}</h3>
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
        <div className="space-y-3">
          {answers.map((a, i) => (
            <div key={i} className="flex items-center gap-3">
              <SignIllustration word={a.word} size={40}/>
              <div className="flex-1">
                <p className="text-sm text-gray-700 font-medium">{a.word}</p>
                {!a.correct && <p className="text-xs text-red-400">Respondiste: {a.answer}</p>}
              </div>
              {a.correct ? <CheckCircle2 size={18} className="text-brand-500 shrink-0"/> : <X size={18} className="text-red-400 shrink-0"/>}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex gap-3">
        <button onClick={() => { setPhase('quiz'); setQuizIndex(0); setSelected(null); setCorrect(0); setAnswers([]) }} className="btn-secondary flex-1">
          Repetir quiz
        </button>
        <button onClick={() => navigate('/lessons')} className="btn-primary flex-1">Ver lecciones</button>
      </div>
    </div>
  )
}
