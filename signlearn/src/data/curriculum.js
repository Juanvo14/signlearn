// ─── CURRICULUM DATA ───────────────────────────────────────────────
// Toda la data de lecciones, señas y quizzes para SignLearn

export const MODULES = [
  {
    id: 'mod-1',
    title: 'Módulo 1: Fundamentos',
    description: 'Las bases del lenguaje de señas',
    free: true,
    lessons: [
      {
        id: 'lesson-greetings',
        title: 'Saludos básicos',
        emoji: '🤚',
        xp: 50,
        free: true,
        duration: '5 min',
        signs: [
          { id: 's1', emoji: '👋', word: 'Hola', description: 'Agita la mano abierta de lado a lado', videoUrl: null },
          { id: 's2', emoji: '✋', word: 'Adiós', description: 'Mano abierta moviéndose hacia afuera', videoUrl: null },
          { id: 's3', emoji: '🙏', word: 'Gracias', description: 'Toca los labios con la punta de los dedos y extiende la mano hacia afuera', videoUrl: null },
          { id: 's4', emoji: '🤲', word: 'Por favor', description: 'Palma abierta sobre el pecho en círculo', videoUrl: null },
          { id: 's5', emoji: '🫡', word: 'Buenos días', description: 'Mano en la frente, luego extiende hacia afuera', videoUrl: null },
          { id: 's6', emoji: '🌙', word: 'Buenas noches', description: 'Mano en forma de C cerca de la mejilla', videoUrl: null },
        ],
        quiz: [
          { emoji: '👋', correct: 'Hola', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'] },
          { emoji: '🙏', correct: 'Gracias', options: ['Hola', 'Por favor', 'Gracias', 'Buenos días'] },
          { emoji: '✋', correct: 'Adiós', options: ['Hola', 'Adiós', 'Buenas noches', 'Por favor'] },
          { emoji: '🤲', correct: 'Por favor', options: ['Gracias', 'Por favor', 'Hola', 'Buenos días'] },
        ]
      },
      {
        id: 'lesson-numbers',
        title: 'Números del 1 al 10',
        emoji: '🔢',
        xp: 60,
        free: true,
        duration: '8 min',
        signs: [
          { id: 'n1', emoji: '☝️', word: 'Uno', description: 'Levanta el dedo índice', videoUrl: null },
          { id: 'n2', emoji: '✌️', word: 'Dos', description: 'Índice y dedo medio extendidos', videoUrl: null },
          { id: 'n3', emoji: '🤟', word: 'Tres', description: 'Pulgar, índice y dedo medio extendidos', videoUrl: null },
          { id: 'n4', emoji: '🖖', word: 'Cuatro', description: 'Cuatro dedos extendidos, pulgar doblado', videoUrl: null },
          { id: 'n5', emoji: '🖐️', word: 'Cinco', description: 'Todos los dedos extendidos', videoUrl: null },
          { id: 'n6', emoji: '🤙', word: 'Seis', description: 'Pulgar y meñique extendidos', videoUrl: null },
          { id: 'n7', emoji: '👈', word: 'Siete', description: 'Pulgar toca el dedo medio', videoUrl: null },
          { id: 'n8', emoji: '🤌', word: 'Ocho', description: 'Pulgar toca el anular', videoUrl: null },
          { id: 'n9', emoji: '🤏', word: 'Nueve', description: 'Pulgar toca el meñique', videoUrl: null },
          { id: 'n10', emoji: '👌', word: 'Diez', description: 'Pulgar levantado, mano rotando', videoUrl: null },
        ],
        quiz: [
          { emoji: '☝️', correct: 'Uno', options: ['Uno', 'Dos', 'Tres', 'Cuatro'] },
          { emoji: '✌️', correct: 'Dos', options: ['Uno', 'Dos', 'Tres', 'Cinco'] },
          { emoji: '🖐️', correct: 'Cinco', options: ['Cuatro', 'Cinco', 'Seis', 'Siete'] },
          { emoji: '👌', correct: 'Diez', options: ['Ocho', 'Nueve', 'Diez', 'Siete'] },
        ]
      },
      {
        id: 'lesson-alphabet',
        title: 'Abecedario',
        emoji: '🔤',
        xp: 80,
        free: false,
        duration: '15 min',
        signs: [
          { id: 'a1', emoji: '🅰️', word: 'A', description: 'Puño cerrado con pulgar al lado', videoUrl: null },
          { id: 'a2', emoji: '🅱️', word: 'B', description: 'Cuatro dedos juntos y extendidos, pulgar doblado', videoUrl: null },
          { id: 'a3', emoji: '©️', word: 'C', description: 'Dedos curvados en forma de C', videoUrl: null },
        ],
        quiz: [
          { emoji: '🅰️', correct: 'A', options: ['A', 'B', 'C', 'D'] },
          { emoji: '🅱️', correct: 'B', options: ['A', 'B', 'C', 'E'] },
        ]
      }
    ]
  },
  {
    id: 'mod-2',
    title: 'Módulo 2: Vocabulario',
    description: 'Palabras del día a día',
    free: false,
    lessons: [
      {
        id: 'lesson-animals',
        title: 'Animales',
        emoji: '🐾',
        xp: 70,
        free: false,
        duration: '10 min',
        signs: [
          { id: 'an1', emoji: '🐶', word: 'Perro', description: 'Golpea el muslo con la mano, luego chasquea los dedos', videoUrl: null },
          { id: 'an2', emoji: '🐱', word: 'Gato', description: 'Dedos en la mejilla simulando bigotes', videoUrl: null },
          { id: 'an3', emoji: '🐦', word: 'Pájaro', description: 'Índice y pulgar juntos frente a la boca, abriéndose y cerrándose', videoUrl: null },
          { id: 'an4', emoji: '🐟', word: 'Pez', description: 'Mano plana moviéndose como un pez nadando', videoUrl: null },
          { id: 'an5', emoji: '🐘', word: 'Elefante', description: 'Mano en la nariz imitando una trompa', videoUrl: null },
        ],
        quiz: [
          { emoji: '🐶', correct: 'Perro', options: ['Perro', 'Gato', 'Pájaro', 'Pez'] },
          { emoji: '🐱', correct: 'Gato', options: ['Perro', 'Gato', 'Elefante', 'Pez'] },
        ]
      },
      {
        id: 'lesson-food',
        title: 'Comida y bebidas',
        emoji: '🍽️',
        xp: 70,
        free: false,
        duration: '10 min',
        signs: [
          { id: 'f1', emoji: '🍞', word: 'Pan', description: 'Mano curva frotando la otra', videoUrl: null },
          { id: 'f2', emoji: '💧', word: 'Agua', description: 'Letra W tocando los labios', videoUrl: null },
          { id: 'f3', emoji: '🍎', word: 'Manzana', description: 'Índice doblado girando en la mejilla', videoUrl: null },
          { id: 'f4', emoji: '🥛', word: 'Leche', description: 'Mano abierta y cerrada como ordeñando', videoUrl: null },
          { id: 'f5', emoji: '☕', word: 'Café', description: 'Mano en C rotando sobre la otra', videoUrl: null },
        ],
        quiz: [
          { emoji: '💧', correct: 'Agua', options: ['Agua', 'Leche', 'Café', 'Pan'] },
          { emoji: '🍎', correct: 'Manzana', options: ['Pan', 'Café', 'Manzana', 'Leche'] },
        ]
      },
      {
        id: 'lesson-family',
        title: 'Familia',
        emoji: '👨‍👩‍👧',
        xp: 65,
        free: false,
        duration: '8 min',
        signs: [
          { id: 'fam1', emoji: '👨', word: 'Papá', description: 'Pulgar tocando la frente', videoUrl: null },
          { id: 'fam2', emoji: '👩', word: 'Mamá', description: 'Pulgar tocando el mentón', videoUrl: null },
          { id: 'fam3', emoji: '👦', word: 'Hermano', description: 'Señal de niño, luego juntar manos', videoUrl: null },
          { id: 'fam4', emoji: '👧', word: 'Hermana', description: 'Señal de niña, luego juntar manos', videoUrl: null },
          { id: 'fam5', emoji: '👴', word: 'Abuelo', description: 'Pulgar en la frente, luego dos arcos', videoUrl: null },
        ],
        quiz: [
          { emoji: '👨', correct: 'Papá', options: ['Papá', 'Mamá', 'Hermano', 'Abuelo'] },
          { emoji: '👩', correct: 'Mamá', options: ['Papá', 'Mamá', 'Hermana', 'Abuelo'] },
        ]
      },
      {
        id: 'lesson-emotions',
        title: 'Emociones',
        emoji: '❤️',
        xp: 60,
        free: false,
        duration: '8 min',
        signs: [
          { id: 'e1', emoji: '😊', word: 'Feliz', description: 'Mano abierta en el pecho moviéndose hacia arriba', videoUrl: null },
          { id: 'e2', emoji: '😢', word: 'Triste', description: 'Manos abiertas descendiendo por la cara', videoUrl: null },
          { id: 'e3', emoji: '😡', word: 'Enojado', description: 'Dedos curvados frente a la cara moviéndose hacia afuera', videoUrl: null },
          { id: 'e4', emoji: '😨', word: 'Miedo', description: 'Ambas manos frente al pecho con dedos extendidos, temblando', videoUrl: null },
          { id: 'e5', emoji: '😍', word: 'Amor', description: 'Brazos cruzados sobre el pecho', videoUrl: null },
        ],
        quiz: [
          { emoji: '😊', correct: 'Feliz', options: ['Feliz', 'Triste', 'Enojado', 'Miedo'] },
          { emoji: '😢', correct: 'Triste', options: ['Feliz', 'Triste', 'Amor', 'Miedo'] },
        ]
      }
    ]
  },
  {
    id: 'mod-3',
    title: 'Módulo 3: Conversación',
    description: 'Frases completas y diálogos',
    free: false,
    lessons: [
      {
        id: 'lesson-intro',
        title: 'Presentarme',
        emoji: '🧑‍🤝‍🧑',
        xp: 90,
        free: false,
        duration: '12 min',
        signs: [
          { id: 'i1', emoji: '👤', word: 'Yo', description: 'Índice señalando al pecho', videoUrl: null },
          { id: 'i2', emoji: '👉', word: 'Tú', description: 'Índice señalando a la otra persona', videoUrl: null },
          { id: 'i3', emoji: '📛', word: 'Me llamo', description: 'Dedos índices cruzados, luego señalar al pecho', videoUrl: null },
          { id: 'i4', emoji: '🏠', word: 'Vivo en', description: 'Forma de casa con las manos, luego señalar', videoUrl: null },
        ],
        quiz: [
          { emoji: '👤', correct: 'Yo', options: ['Yo', 'Tú', 'Me llamo', 'Vivo en'] },
          { emoji: '👉', correct: 'Tú', options: ['Yo', 'Tú', 'Me llamo', 'Hola'] },
        ]
      },
      {
        id: 'lesson-questions',
        title: 'Preguntas básicas',
        emoji: '❓',
        xp: 85,
        free: false,
        duration: '10 min',
        signs: [
          { id: 'q1', emoji: '❓', word: 'Qué', description: 'Mano abierta moviéndose de lado a lado', videoUrl: null },
          { id: 'q2', emoji: '👁️', word: 'Dónde', description: 'Índice apuntando y moviéndose de lado a lado', videoUrl: null },
          { id: 'q3', emoji: '🕐', word: 'Cuándo', description: 'Círculo con el índice en la palma contraria', videoUrl: null },
          { id: 'q4', emoji: '🤔', word: 'Por qué', description: 'Índice en la sien moviéndose hacia afuera', videoUrl: null },
        ],
        quiz: [
          { emoji: '❓', correct: 'Qué', options: ['Qué', 'Dónde', 'Cuándo', 'Por qué'] },
          { emoji: '🕐', correct: 'Cuándo', options: ['Qué', 'Dónde', 'Cuándo', 'Por qué'] },
        ]
      }
    ]
  }
]

export const TOTAL_LESSONS = MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
export const TOTAL_SIGNS = MODULES.reduce((acc, m) =>
  acc + m.lessons.reduce((a, l) => a + l.signs.length, 0), 0)

export const AD_POOL = [
  { text: 'Aprende idiomas con Duolingo. Descarga gratis.', cta: 'Ver más' },
  { text: 'Audífonos JBL — 30% de descuento hoy.', cta: 'Comprar' },
  { text: 'Coursera: cursos con certificado desde $0.', cta: 'Explorar' },
  { text: 'Amazon Prime — Prueba gratis 30 días.', cta: 'Activar' },
  { text: 'Spotify Premium — Escucha sin anuncios.', cta: 'Probar' },
]
