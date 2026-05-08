import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import useAuthStore from '../hooks/useAuthStore';
import styles from './Layout.module.css';

export default function Layout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name
    ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  return (
    <div className={styles.app}>
      <header className={styles.topbar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>✋</span>
          SignLearn
        </div>
        <div className={styles.topRight}>
          <span className={user?.plan === 'premium' ? styles.badgePremium : styles.badgeFree}>
            {user?.plan === 'premium' ? 'Premium' : 'Free'}
          </span>
          <span className={styles.xp}>⭐ {user?.xp || 0} XP</span>
          <div className={styles.avatar} onClick={handleLogout} title="Cerrar sesion">
            {initials}
          </div>
        </div>
      </header>

      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.tabActive : styles.tab}>
          🏠 Inicio
        </NavLink>
        <NavLink to="/lessons" className={({ isActive }) => isActive ? styles.tabActive : styles.tab}>
          📖 Lecciones
        </NavLink>
        <NavLink to="/practice" className={({ isActive }) => isActive ? styles.tabActive : styles.tab}>
          ⚡ Practicar
        </NavLink>
        <NavLink to="/plans" className={({ isActive }) => isActive ? styles.tabActive : styles.tab}>
          👑 Planes
        </NavLink>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
