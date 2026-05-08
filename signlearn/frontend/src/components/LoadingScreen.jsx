export default function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      color: '#6b7280',
      fontSize: '14px'
    }}>
      <span style={{ fontSize: '36px' }}>✋</span>
      Cargando SignLearn...
    </div>
  );
}
