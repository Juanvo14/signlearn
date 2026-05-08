import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Home, BookOpen, Zap, Crown, User } from 'lucide-react'
import { useStore } from '@/lib/store'
import AdBanner from '@/components/AdBanner'

const NAV = [
  { to: '/',        icon: Home,     label: 'Inicio'   },
  { to: '/lessons', icon: BookOpen, label: 'Lecciones' },
  { to: '/practice',icon: Zap,      label: 'Practicar' },
  { to: '/plans',   icon: Crown,    label: 'Planes'   },
  { to: '/profile', icon: User,     label: 'Perfil'   },
]

export default function Layout() {
  const user = useStore((s) => s.user)
  const isPremium = user?.plan === 'premium'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-2xl mx-auto">

      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 px-4 h-14 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white font-semibold text-sm">
            SL
          </div>
          <span className="font-semibold text-gray-900">SignLearn</span>
        </div>
        <div className="flex items-center gap-2">
          {isPremium
            ? <span className="badge-premium">Premium</span>
            : <span className="badge-free">Free</span>
          }
          <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-800 text-xs font-semibold">
            {user?.name?.slice(0,2).toUpperCase() || 'U'}
          </div>
        </div>
      </header>

      {/* Ad banner for free users */}
      {!isPremium && <AdBanner />}

      {/* Page content */}
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white border-t border-gray-100 flex items-stretch z-20">
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium transition-colors
               ${isActive ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'}`
            }
          >
            <Icon size={20} strokeWidth={1.8} />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
