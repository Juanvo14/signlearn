# SignLearn — Guía de Deploy

## Stack
- React 18 + Vite
- Tailwind CSS
- Zustand (estado global + persistencia en localStorage)
- React Router v6

---

## Estructura del proyecto

```
signlearn/
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Topbar + bottom nav + ad banner
│   │   └── AdBanner.jsx      # Banner rotativo para usuarios Free
│   ├── pages/
│   │   ├── AuthPage.jsx      # Login y registro
│   │   ├── HomePage.jsx      # Dashboard principal
│   │   ├── LessonsPage.jsx   # Lista de módulos y lecciones
│   │   ├── LessonDetailPage.jsx  # Aprender señas + quiz
│   │   ├── PracticePage.jsx  # Práctica rápida (limitada en Free)
│   │   ├── PlansPage.jsx     # Comparativa Free vs Premium
│   │   └── ProfilePage.jsx   # Perfil y progreso
│   ├── lib/
│   │   └── store.js          # Estado global (Zustand)
│   ├── data/
│   │   └── curriculum.js     # Módulos, lecciones, señas y quizzes
│   └── styles/
│       └── globals.css       # Tailwind + estilos globales
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 1. Instalar y correr en local

```bash
npm install
npm run dev
# App en http://localhost:5173
```

## 2. Build de producción

```bash
npm run build
# Genera /dist listo para deploy
```

---

## 3. Deploy en Vercel (recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy desde la carpeta del proyecto
vercel

# Seguir los pasos:
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
```

O conécta el repositorio de GitHub en vercel.com y el deploy es automático.

**vercel.json** (ya incluido):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
Este archivo es necesario para que React Router funcione en Vercel.

---

## 4. Deploy en Netlify

```bash
# Instala Netlify CLI
npm i -g netlify-cli

netlify deploy --dir=dist --prod
```

O arrastra la carpeta `/dist` a netlify.com/drop.

**_redirects** (ya incluido en /public):
```
/* /index.html 200
```

---

## 5. Deploy en servidor propio (Nginx)

```bash
# Copia /dist al servidor
scp -r dist/ user@tu-servidor:/var/www/signlearn

# Configuración Nginx
server {
    listen 80;
    server_name tusitio.com;
    root /var/www/signlearn;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

---

## 6. Integración de Stripe (pendiente)

En `src/pages/PlansPage.jsx`, reemplaza `handleUpgrade`:

```js
const handleUpgrade = async () => {
  const res = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: user.id, plan: 'premium' })
  })
  const { url } = await res.json()
  window.location.href = url  // Redirige a Stripe
}
```

El webhook de Stripe llama a tu backend en `/api/stripe-webhook`, que actualiza el plan en tu base de datos y llama a `upgradeToPremium()` del store.

---

## 7. Variables de entorno

Crea un archivo `.env` en la raíz:

```env
VITE_API_URL=https://tu-backend.com
VITE_STRIPE_PUBLIC_KEY=pk_live_xxxx
```

---

## Plan Free vs Premium

| Función               | Free        | Premium         |
|-----------------------|-------------|-----------------|
| Lecciones             | 3           | 18+             |
| Práctica diaria       | 5 señas     | Ilimitada       |
| Anuncios              | Sí          | No              |
| Videos de señas       | No          | Sí              |
| Certificado           | No          | Sí              |
| Precio                | $0          | $7/mes          |

---

## Próximos pasos recomendados

1. Conectar backend (Node/Express o Supabase) para usuarios reales
2. Integrar Stripe para cobros
3. Agregar videos reales de señas (YouTube embeds o Cloudinary)
4. Push notifications para recordar la racha diaria
5. Modo offline con Service Worker
