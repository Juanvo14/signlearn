import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../hooks/useAuthStore';
import toast from 'react-hot-toast';
import styles from './AuthPage.module.css';

export default function LoginPage() {
  const { login } = useAuthStore();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error('Completa todos los campos');
      return;
    }
    setLoading(true);
    const result = await login(form.email, form.password);
    if (!result.success) {
      toast.error(result.error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoMark}>✋</div>
        <h1 className={styles.title}>SignLearn</h1>
        <p className={styles.subtitle}>Inicia sesion para continuar</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              placeholder="tu@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Contrasena</label>
            <input
              type="password"
              className={styles.input}
              placeholder="••••••"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? 'Entrando...' : 'Iniciar sesion'}
          </button>
        </form>

        <p className={styles.switch}>
          No tienes cuenta? <Link to="/register">Registrate gratis</Link>
        </p>
      </div>
    </div>
  );
}
