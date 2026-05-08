import { useState, useCallback } from 'react'
import { Zap, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/lib/store'
import { MODULES } from '@/data/curriculum'

function buildQuestions(isPremium) {
  const all = []
  MODULES.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      if (!isPremium && !lesson.free) return
      lesson.quiz.forEach((q) => all.push(q))
    })
  })
  return all.sort(() => Math.random() - 0.5)
}

const FREE_LIMIT = 5

export default function PracticePage() {
  const navigate = useNavigate()
  const user = useStore((s) => s.user)
  const addXP = useStore((s) => s.addXP)
  const isPremium = user?.plan === 'premium'

  const [questions] = useState(() => buildQuestions(isPremium))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[index % questions.length]
  const shuffled = useState(() => [...q.options].sort(() => Math.random() - 0.5))[0]

  const hitLimit = !isPremium && answered >= FREE_LIMIT

  const handleAnswer = useCallback((option) => {
    if (selected || hitLimit) return
    setSelected(option)
    const isCorrect = option === q.correct
    if (isCorrect) {
      setScore((s) => s + 1)
      addXP(5)
    }
    setAnswered((a) => a + 1)
    setTimeout(() => {
      if (!isPremium && answered + 1 >= FREE_LIMIT) {
        setDone(true)
        return
      }
      setIndex((i) => i + 1)
      setSelected(null)
    }, 800)
  }, [selected, hitLimit, q, answered, isPremium, addXP])

  if (done || hitLimit) {
    return (
      <div className="px-4 py-5 flex flex-col items-center">
        <div className="card w-full p-6 text-center mt-4 mb-5">
          <span className="text-5xl block mb-3">🔒</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Límite diario alcanzado</h3>
          <p className="text-sm text-gray-500 mb-4">
            Con el plan Free puedes practicar {FREE_LIMIT} señas por día. Obtén Premium para práctica ilimitada.
          </p>
          <div className="bg-brand-50 rounded-xl px-4 py-3 inline-flex items-center gap-2 mb-4">
            <span className="text-brand-700 font-semibold">{score}</span>
            <span className="text-brand-500 text-sm">correctas hoy · +{score * 5} XP</span>
          </div>
        </div>
        <button onClick={() => navigate('/plans')} className="btn-primary w-full mb-3">
          Obtener Premium
        </button>
        <button onClick={() => { setIndex(0); setSelected(null); setScore(0); setAnswered(0); setDone(false) }}
          className="btn-secondary w-full">
          Volver a intentar mañana
        </button>
      </div>
    )
  }

  return (
    <div className="px-4 py-5 flex flex-col min-h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Zap size={20} className="text-brand-600" /> Práctica rápida
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
            {score} correctas
          </span>
          {!isPremium && (
            <span className="text-xs text-gray-400">
              {answered}/{FREE_LIMIT}
            </span>
          )}
        </div>
      </div>

      {!isPremium && (
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gold-400 rounded-full progress-fill"
            style={{ width: `${(answered / FREE_LIMIT) * 100}%` }}
          />
        </div>
      )}

      <div className="card flex-1 flex flex-col items-center justify-center p-8 text-center mb-5 min-h-44">
        <p className="text-xs text-gray-400 mb-3">Esta seña significa:</p>
        <span className="text-7xl block">{q.emoji}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {shuffled.map((option) => {
          let cls = 'card p-4 text-sm font-medium text-center cursor-pointer border-2 transition-all active:scale-95 '
          if (!selected) cls += 'border-transparent hover:border-brand-300 hover:text-brand-700'
          else if (option === q.correct) cls += 'answer-correct border-transparent'
          else if (option === selected) cls += 'answer-wrong border-transparent'
          else cls += 'opacity-40 border-transparent'
          return (
            <button key={option} className={cls} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          )
        })}
      </div>

      {!isPremium && (
        <button
          onClick={() => navigate('/plans')}
          className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-brand-600 transition-colors"
        >
          <Lock size={12} /> Desbloquea práctica ilimitada con Premium
        </button>
      )}
    </div>
  )
}
