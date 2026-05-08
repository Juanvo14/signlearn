require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');

const lessons = [
  {
    title: 'Saludos basicos',
    description: 'Aprende las señas mas comunes para saludar.',
    module: 1,
    order: 1,
    emoji: '🤚',
    isPremium: false,
    xpReward: 50,
    totalExercises: 6,
    signs: [
      { word: 'Hola', emoji: '👋', description: 'Agita la mano abierta.', options: ['Hola', 'Adios', 'Gracias', 'Por favor'] },
      { word: 'Adios', emoji: '✋', description: 'Mueve la mano de lado a lado.', options: ['Hola', 'Adios', 'Buenas noches', 'Hasta luego'] },
      { word: 'Gracias', emoji: '🙏', description: 'Toca los labios y extiende la mano.', options: ['Gracias', 'Por favor', 'De nada', 'Perdon'] },
      { word: 'Por favor', emoji: '🤲', description: 'Palmas hacia arriba juntas.', options: ['Gracias', 'Por favor', 'Hola', 'Ayuda'] },
      { word: 'Como estas', emoji: '🤔', description: 'Señala al otro y mueve los pulgares.', options: ['Como estas', 'Bien gracias', 'Hola', 'Hasta luego'] },
      { word: 'Bien', emoji: '👍', description: 'Pulgar hacia arriba.', options: ['Bien', 'Mal', 'Mas o menos', 'No se'] }
    ]
  },
  {
    title: 'Numeros del 1 al 10',
    description: 'Aprende a contar con tus manos.',
    module: 1,
    order: 2,
    emoji: '🔢',
    isPremium: false,
    xpReward: 60,
    totalExercises: 10,
    signs: [
      { word: 'Uno', emoji: '☝️', description: 'Indice hacia arriba.', options: ['Uno', 'Dos', 'Tres', 'Cuatro'] },
      { word: 'Dos', emoji: '✌️', description: 'Indice y medio extendidos.', options: ['Uno', 'Dos', 'Tres', 'Cuatro'] },
      { word: 'Tres', emoji: '🤟', description: 'Tres dedos extendidos.', options: ['Dos', 'Tres', 'Cuatro', 'Cinco'] },
      { word: 'Cuatro', emoji: '🖖', description: 'Cuatro dedos extendidos.', options: ['Tres', 'Cuatro', 'Cinco', 'Seis'] },
      { word: 'Cinco', emoji: '🖐️', description: 'Mano abierta completa.', options: ['Cuatro', 'Cinco', 'Seis', 'Siete'] },
      { word: 'Seis', emoji: '🤙', description: 'Pulgar e indice extendidos.', options: ['Cinco', 'Seis', 'Siete', 'Ocho'] },
      { word: 'Siete', emoji: '7️⃣', description: 'Gesto especifico de siete.', options: ['Seis', 'Siete', 'Ocho', 'Nueve'] },
      { word: 'Ocho', emoji: '8️⃣', description: 'Gesto especifico de ocho.', options: ['Siete', 'Ocho', 'Nueve', 'Diez'] },
      { word: 'Nueve', emoji: '9️⃣', description: 'Gesto especifico de nueve.', options: ['Ocho', 'Nueve', 'Diez', 'Cinco'] },
      { word: 'Diez', emoji: '🔟', description: 'Pulgar arriba y sacudir.', options: ['Nueve', 'Diez', 'Cero', 'Cinco'] }
    ]
  },
  {
    title: 'Abecedario con señas',
    description: 'Deletrea cualquier palabra letra por letra.',
    module: 1,
    order: 3,
    emoji: '🔤',
    isPremium: false,
    xpReward: 100,
    totalExercises: 8,
    signs: [
      { word: 'A', emoji: '✊', description: 'Puno cerrado con pulgar a un lado.', options: ['A', 'B', 'C', 'D'] },
      { word: 'B', emoji: '🖐️', description: 'Dedos extendidos juntos, pulgar doblado.', options: ['A', 'B', 'C', 'D'] },
      { word: 'C', emoji: '🤏', description: 'Mano en forma de C.', options: ['B', 'C', 'D', 'E'] },
      { word: 'D', emoji: '☝️', description: 'Indice curvo con otros dedos cerrados.', options: ['C', 'D', 'E', 'F'] }
    ]
  },
  {
    title: 'Animales',
    description: 'Señas para hablar de animales.',
    module: 2,
    order: 1,
    emoji: '🐾',
    isPremium: true,
    xpReward: 80,
    totalExercises: 6,
    signs: [
      { word: 'Perro', emoji: '🐕', description: 'Chasquear y palmear la pierna.', options: ['Perro', 'Gato', 'Pajaro', 'Pez'] },
      { word: 'Gato', emoji: '🐈', description: 'Bigotes con los dedos en las mejillas.', options: ['Perro', 'Gato', 'Conejo', 'Raton'] },
      { word: 'Pajaro', emoji: '🐦', description: 'Dos dedos abren y cierran como pico.', options: ['Pajaro', 'Pez', 'Serpiente', 'Insecto'] },
      { word: 'Pez', emoji: '🐟', description: 'Mano plana se mueve como pez nadando.', options: ['Pez', 'Pajaro', 'Tortuga', 'Cangrejo'] }
    ]
  },
  {
    title: 'Familia',
    description: 'Señas para los miembros de tu familia.',
    module: 2,
    order: 2,
    emoji: '👨‍👩‍👧',
    isPremium: true,
    xpReward: 80,
    totalExercises: 5,
    signs: [
      { word: 'Mama', emoji: '👩', description: 'Tocar la mejilla con la A.', options: ['Mama', 'Papa', 'Hermano', 'Hermana'] },
      { word: 'Papa', emoji: '👨', description: 'Tocar la frente con la A.', options: ['Mama', 'Papa', 'Abuelo', 'Tio'] },
      { word: 'Hermano', emoji: '👦', description: 'B en la frente luego en el puno.', options: ['Hermano', 'Hermana', 'Primo', 'Amigo'] },
      { word: 'Hermana', emoji: '👧', description: 'B en la mejilla luego en el puno.', options: ['Hermano', 'Hermana', 'Prima', 'Amiga'] }
    ]
  },
  {
    title: 'Comida y bebidas',
    description: 'Vocabulario esencial para el comedor.',
    module: 2,
    order: 3,
    emoji: '🍕',
    isPremium: true,
    xpReward: 80,
    totalExercises: 8,
    signs: [
      { word: 'Agua', emoji: '💧', description: 'W en los labios.', options: ['Agua', 'Leche', 'Jugo', 'Cafe'] },
      { word: 'Leche', emoji: '🥛', description: 'Abrir y cerrar el puno.', options: ['Agua', 'Leche', 'Jugo', 'Refresco'] },
      { word: 'Pan', emoji: '🍞', description: 'Cortar con mano encima del brazo.', options: ['Pan', 'Arroz', 'Sopa', 'Ensalada'] },
      { word: 'Fruta', emoji: '🍎', description: 'F girar en la mejilla.', options: ['Fruta', 'Verdura', 'Carne', 'Dulce'] }
    ]
  },
  {
    title: 'Emociones',
    description: 'Expresa como te sientes.',
    module: 2,
    order: 4,
    emoji: '❤️',
    isPremium: true,
    xpReward: 70,
    totalExercises: 5,
    signs: [
      { word: 'Feliz', emoji: '😊', description: 'Mano circular en el pecho hacia arriba.', options: ['Feliz', 'Triste', 'Enojado', 'Sorprendido'] },
      { word: 'Triste', emoji: '😢', description: 'Dedos bajan por las mejillas.', options: ['Feliz', 'Triste', 'Asustado', 'Aburrido'] },
      { word: 'Enojado', emoji: '😡', description: 'Garras en la cara con tension.', options: ['Enojado', 'Feliz', 'Triste', 'Cansado'] },
      { word: 'Amor', emoji: '❤️', description: 'Brazos cruzados en el pecho.', options: ['Amor', 'Amistad', 'Paz', 'Alegria'] }
    ]
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB...');

    await Lesson.deleteMany({});
    console.log('Lecciones anteriores eliminadas.');

    await Lesson.insertMany(lessons);
    console.log(`${lessons.length} lecciones insertadas.`);

    await mongoose.disconnect();
    console.log('Seed completado.');
    process.exit(0);
  } catch (error) {
    console.error('Error en seed:', error);
    process.exit(1);
  }
};

seed();
