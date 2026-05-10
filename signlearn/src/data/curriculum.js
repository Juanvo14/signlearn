// ─── CURRICULUM — Lengua de Señas Colombiana (LSC) ──────────────
// videoId: ID de YouTube del video principal de cada lección

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
        // "Aprende a saludar en lenguaje de señas" — INSOR Colombia
        videoId: '7neOq1w4ZXE',
        videoTitle: 'Saludos en Lengua de Señas Colombiana',
        signs: [
          { id: 's1', emoji: '👋', word: 'Hola', description: 'Agita la mano abierta de lado a lado' },
          { id: 's2', emoji: '✋', word: 'Adiós', description: 'Mano abierta moviéndose hacia afuera' },
          { id: 's3', emoji: '🙏', word: 'Gracias', description: 'Toca los labios con la punta de los dedos y extiende la mano hacia afuera' },
          { id: 's4', emoji: '🤲', word: 'Por favor', description: 'Palma abierta sobre el pecho en círculo' },
          { id: 's5', emoji: '🫡', word: 'Buenos días', description: 'Mano en la frente, luego extiende hacia afuera' },
          { id: 's6', emoji: '🌙', word: 'Buenas noches', description: 'Mano en forma de C cerca de la mejilla' },
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
        // "NÚMEROS - Lengua de Señas Colombiana - LSC"
        videoId: 'd9HWbqY0TCM',
        videoTitle: 'Números en Lengua de Señas Colombiana',
        signs: [
          { id: 'n1', emoji: '☝️', word: 'Uno',   description: 'Levanta el dedo índice' },
          { id: 'n2', emoji: '✌️', word: 'Dos',   description: 'Índice y dedo medio extendidos' },
          { id: 'n3', emoji: '🤟', word: 'Tres',  description: 'Pulgar, índice y dedo medio extendidos' },
          { id: 'n4', emoji: '🖖', word: 'Cuatro',description: 'Cuatro dedos extendidos, pulgar doblado' },
          { id: 'n5', emoji: '🖐️', word: 'Cinco', description: 'Todos los dedos extendidos' },
          { id: 'n6', emoji: '🤙', word: 'Seis',  description: 'Pulgar y meñique extendidos' },
          { id: 'n7', emoji: '👈', word: 'Siete', description: 'Pulgar toca el dedo medio' },
          { id: 'n8', emoji: '🤌', word: 'Ocho',  description: 'Pulgar toca el anular' },
          { id: 'n9', emoji: '🤏', word: 'Nueve', description: 'Pulgar toca el meñique' },
          { id: 'n10',emoji: '👌', word: 'Diez',  description: 'Pulgar levantado, mano rotando' },
        ],
        quiz: [
          { emoji: '☝️', correct: 'Uno',   options: ['Uno', 'Dos', 'Tres', 'Cuatro'] },
          { emoji: '✌️', correct: 'Dos',   options: ['Uno', 'Dos', 'Tres', 'Cinco'] },
          { emoji: '🖐️', correct: 'Cinco', options: ['Cuatro', 'Cinco', 'Seis', 'Siete'] },
          { emoji: '👌', correct: 'Diez',  options: ['Ocho', 'Nueve', 'Diez', 'Siete'] },
        ]
      },
      {
        id: 'lesson-alphabet',
        title: 'Abecedario',
        emoji: '🔤',
        xp: 80,
        free: false,
        duration: '15 min',
        // "Lección 1 - Cómo saludar en lengua de señas (LSC)"
        videoId: 'BTe1ulzazio',
        videoTitle: 'Abecedario en Lengua de Señas Colombiana',
        signs: [
          { id: 'a1', emoji: '🅰️', word: 'A', description: 'Puño cerrado con pulgar al lado' },
          { id: 'a2', emoji: '🅱️', word: 'B', description: 'Cuatro dedos juntos extendidos, pulgar doblado' },
          { id: 'a3', emoji: '©️',  word: 'C', description: 'Dedos curvados en forma de C' },
          { id: 'a4', emoji: '↩️', word: 'D', description: 'Índice apunta arriba, demás dedos curvados tocando el pulgar' },
          { id: 'a5', emoji: '📧', word: 'E', description: 'Todos los dedos doblados tocando el pulgar' },
        ],
        quiz: [
          { emoji: '🅰️', correct: 'A', options: ['A', 'B', 'C', 'D'] },
          { emoji: '🅱️', correct: 'B', options: ['A', 'B', 'C', 'E'] },
          { emoji: '©️',  correct: 'C', options: ['A', 'B', 'C', 'D'] },
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
        // "Los Animales - Parte 1. En Lengua de Señas Colombiana (LSC)"
        videoId: 'xZcEhxO2pto',
        videoTitle: 'Animales en Lengua de Señas Colombiana',
        signs: [
          { id: 'an1', emoji: '🐶', word: 'Perro',    description: 'Golpea el muslo con la mano, luego chasquea los dedos' },
          { id: 'an2', emoji: '🐱', word: 'Gato',     description: 'Dedos en la mejilla simulando bigotes' },
          { id: 'an3', emoji: '🐦', word: 'Pájaro',   description: 'Índice y pulgar frente a la boca abriéndose y cerrándose' },
          { id: 'an4', emoji: '🐟', word: 'Pez',      description: 'Mano plana moviéndose como un pez nadando' },
          { id: 'an5', emoji: '🐘', word: 'Elefante', description: 'Mano en la nariz imitando una trompa' },
        ],
        quiz: [
          { emoji: '🐶', correct: 'Perro',    options: ['Perro', 'Gato', 'Pájaro', 'Pez'] },
          { emoji: '🐱', correct: 'Gato',     options: ['Perro', 'Gato', 'Elefante', 'Pez'] },
          { emoji: '🐘', correct: 'Elefante', options: ['Pez', 'Pájaro', 'Elefante', 'Gato'] },
        ]
      },
      {
        id: 'lesson-food',
        title: 'Comida y bebidas',
        emoji: '🍽️',
        xp: 70,
        free: false,
        duration: '10 min',
        // "Aprende La Familia En Lengua De Señas Colombiana LSC" — usamos un video general de vocabulario
        videoId: 'BOkKR7A3n3c',
        videoTitle: 'Vocabulario básico en Lengua de Señas Colombiana',
        signs: [
          { id: 'f1', emoji: '🍞', word: 'Pan',      description: 'Mano curva frotando la otra' },
          { id: 'f2', emoji: '💧', word: 'Agua',     description: 'Letra W tocando los labios' },
          { id: 'f3', emoji: '🍎', word: 'Manzana',  description: 'Índice doblado girando en la mejilla' },
          { id: 'f4', emoji: '🥛', word: 'Leche',    description: 'Mano abierta y cerrada como ordeñando' },
          { id: 'f5', emoji: '☕', word: 'Café',     description: 'Mano en C rotando sobre la otra' },
        ],
        quiz: [
          { emoji: '💧', correct: 'Agua',    options: ['Agua', 'Leche', 'Café', 'Pan'] },
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
        // "La Familia en Lengua de Señas Colombiana"
        videoId: '-34WMYNZkCs',
        videoTitle: 'La Familia en Lengua de Señas Colombiana',
        signs: [
          { id: 'fam1', emoji: '👨', word: 'Papá',    description: 'Pulgar tocando la frente' },
          { id: 'fam2', emoji: '👩', word: 'Mamá',    description: 'Pulgar tocando el mentón' },
          { id: 'fam3', emoji: '👦', word: 'Hermano', description: 'Señal de niño, luego juntar manos' },
          { id: 'fam4', emoji: '👧', word: 'Hermana', description: 'Señal de niña, luego juntar manos' },
          { id: 'fam5', emoji: '👴', word: 'Abuelo',  description: 'Pulgar en la frente, luego dos arcos' },
        ],
        quiz: [
          { emoji: '👨', correct: 'Papá',    options: ['Papá', 'Mamá', 'Hermano', 'Abuelo'] },
          { emoji: '👩', correct: 'Mamá',    options: ['Papá', 'Mamá', 'Hermana', 'Abuelo'] },
          { emoji: '👦', correct: 'Hermano', options: ['Papá', 'Abuelo', 'Hermano', 'Hermana'] },
        ]
      },
      {
        id: 'lesson-emotions',
        title: 'Emociones',
        emoji: '❤️',
        xp: 60,
        free: false,
        duration: '8 min',
        // "Aprende a saludar en lenguaje de señas" — video INSOR general
        videoId: '7neOq1w4ZXE',
        videoTitle: 'Emociones en Lengua de Señas Colombiana',
        signs: [
          { id: 'e1', emoji: '😊', word: 'Feliz',   description: 'Mano abierta en el pecho moviéndose hacia arriba' },
          { id: 'e2', emoji: '😢', word: 'Triste',  description: 'Manos abiertas descendiendo por la cara' },
          { id: 'e3', emoji: '😡', word: 'Enojado', description: 'Dedos curvados frente a la cara moviéndose hacia afuera' },
          { id: 'e4', emoji: '😨', word: 'Miedo',   description: 'Ambas manos frente al pecho con dedos extendidos temblando' },
          { id: 'e5', emoji: '😍', word: 'Amor',    description: 'Brazos cruzados sobre el pecho' },
        ],
        quiz: [
          { emoji: '😊', correct: 'Feliz',  options: ['Feliz', 'Triste', 'Enojado', 'Miedo'] },
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
        videoId: 'D-qiTsuAZmY',
        videoTitle: 'Presentaciones en Lengua de Señas Colombiana',
        signs: [
          { id: 'i1', emoji: '👤', word: 'Yo',        description: 'Índice señalando al pecho' },
          { id: 'i2', emoji: '👉', word: 'Tú',        description: 'Índice señalando a la otra persona' },
          { id: 'i3', emoji: '📛', word: 'Me llamo',  description: 'Dedos índices cruzados, luego señalar al pecho' },
          { id: 'i4', emoji: '🏠', word: 'Vivo en',   description: 'Forma de casa con las manos, luego señalar' },
        ],
        quiz: [
          { emoji: '👤', correct: 'Yo',       options: ['Yo', 'Tú', 'Me llamo', 'Vivo en'] },
          { emoji: '👉', correct: 'Tú',       options: ['Yo', 'Tú', 'Me llamo', 'Hola'] },
          { emoji: '📛', correct: 'Me llamo', options: ['Yo', 'Tú', 'Me llamo', 'Vivo en'] },
        ]
      },
      {
        id: 'lesson-questions',
        title: 'Preguntas básicas',
        emoji: '❓',
        xp: 85,
        free: false,
        duration: '10 min',
        videoId: 'BTe1ulzazio',
        videoTitle: 'Preguntas en Lengua de Señas Colombiana',
        signs: [
          { id: 'q1', emoji: '❓', word: 'Qué',     description: 'Mano abierta moviéndose de lado a lado' },
          { id: 'q2', emoji: '👁️', word: 'Dónde',   description: 'Índice apuntando y moviéndose de lado a lado' },
          { id: 'q3', emoji: '🕐', word: 'Cuándo',  description: 'Círculo con el índice en la palma contraria' },
          { id: 'q4', emoji: '🤔', word: 'Por qué', description: 'Índice en la sien moviéndose hacia afuera' },
        ],
        quiz: [
          { emoji: '❓', correct: 'Qué',    options: ['Qué', 'Dónde', 'Cuándo', 'Por qué'] },
          { emoji: '🕐', correct: 'Cuándo', options: ['Qué', 'Dónde', 'Cuándo', 'Por qué'] },
        ]
      }
    ]
  }
]

export const TOTAL_LESSONS = MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
export const TOTAL_SIGNS   = MODULES.reduce((acc, m) =>
  acc + m.lessons.reduce((a, l) => a + l.signs.length, 0), 0)

export const AD_POOL = [
  { text: 'Aprende idiomas con Duolingo. Descarga gratis.',  cta: 'Ver más'   },
  { text: 'Audífonos JBL — 30% de descuento hoy.',          cta: 'Comprar'   },
  { text: 'Coursera: cursos con certificado desde $0.',      cta: 'Explorar'  },
  { text: 'Amazon Prime — Prueba gratis 30 días.',           cta: 'Activar'   },
  { text: 'Spotify Premium — Escucha sin anuncios.',         cta: 'Probar'    },
]
