import useAuthStore from '../hooks/useAuthStore';

const ADS = [
  { text: 'Aprende idiomas con Duolingo. Descarga gratis.', cta: 'Ver oferta' },
  { text: 'Audifonos JBL con 30% de descuento hoy.', cta: 'Comprar' },
  { text: 'Coursera: cursos con certificado desde $0.', cta: 'Explorar' },
  { text: 'Notificaciones de app - SignLearn Premium sin anuncios.', cta: 'Actualizar' }
];

export default function AdBanner() {
  const { user } = useAuthStore();
  if (user?.plan === 'premium') return null;

  const ad = ADS[Math.floor(Math.random() * ADS.length)];

  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.07)',
      borderRadius: '10px',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '1.5rem'
    }}>
      <div>
        <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
          Publicidad
        </div>
        <div style={{ fontSize: '13px', color: '#6b7280' }}>{ad.text}</div>
      </div>
      <a href="#" style={{ fontSize: '12px', fontWeight: '500', color: 'var(--green)', whiteSpace: 'nowrap' }}>
        {ad.cta}
      </a>
    </div>
  );
}
