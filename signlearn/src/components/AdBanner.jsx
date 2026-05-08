import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { AD_POOL } from '@/data/curriculum'

export default function AdBanner() {
  const [adIndex, setAdIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setAdIndex((i) => (i + 1) % AD_POOL.length)
      setVisible(true)
    }, 15000)
    return () => clearInterval(t)
  }, [])

  if (!visible) return null

  const ad = AD_POOL[adIndex]

  return (
    <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center gap-3">
      <span className="text-[9px] font-medium text-gray-400 uppercase tracking-wider shrink-0">
        Publicidad
      </span>
      <p className="text-xs text-gray-500 flex-1 truncate">{ad.text}</p>
      <button className="text-xs font-medium text-brand-600 shrink-0 hover:underline">
        {ad.cta}
      </button>
      <button
        onClick={() => setVisible(false)}
        className="text-gray-300 hover:text-gray-500 shrink-0"
      >
        <X size={13} />
      </button>
    </div>
  )
}
