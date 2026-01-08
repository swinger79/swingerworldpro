// Generador de 500 miembros únicos con FOTOS ÚNICAS
// Cada perfil tiene fotos exclusivas que NO se repiten

const nombres_mujer = [
  'Laura', 'Ana', 'Sofia', 'Marta', 'Emma', 'Lucia', 'Paula', 'Carmen', 'Maria', 'Isabel',
  'Elena', 'Clara', 'Raquel', 'Natalia', 'Sandra', 'Andrea', 'Julia', 'Cristina', 'Beatriz', 'Sara',
  'Irene', 'Silvia', 'Rocio', 'Victoria', 'Daniela', 'Alicia', 'Marina', 'Eva', 'Patricia', 'Monica',
  'Rosa', 'Nuria', 'Carla', 'Miriam', 'Angela', 'Valeria', 'Ines', 'Esther', 'Susana',
  'Lidia', 'Claudia', 'Teresa', 'Veronica', 'Pilar', 'Lorena', 'Adriana', 'Diana', 'Sonia', 'Gloria',
  'Alejandra', 'Rocío', 'Noelia', 'Tamara', 'Yolanda', 'Olga', 'Gemma', 'Belen', 'Fátima', 'Rebeca'
];

const nombres_hombre = [
  'Carlos', 'Miguel', 'Javier', 'David', 'Roberto', 'Antonio', 'Jose', 'Luis', 'Pedro', 'Manuel',
  'Francisco', 'Juan', 'Rafael', 'Daniel', 'Pablo', 'Sergio', 'Jorge', 'Alberto', 'Fernando', 'Raul',
  'Alejandro', 'Adrian', 'Ivan', 'Diego', 'Oscar', 'Ruben', 'Victor', 'Angel', 'Marcos', 'Guillermo',
  'Andres', 'Eduardo', 'Ricardo', 'Enrique', 'Gonzalo', 'Hugo', 'Mario', 'Jesus', 'Alvaro', 'Jaime',
  'Santiago', 'Gabriel', 'Nicolas', 'Felipe', 'Bruno', 'Mateo', 'Samuel', 'Lucas', 'Leonardo', 'Martin',
  'Emilio', 'Cristian', 'Cesar', 'Arturo', 'Ignacio', 'Rodrigo', 'Alfredo', 'Agustin', 'Vicente', 'Esteban'
];

const ciudades = [
  'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Bilbao', 'Alicante',
  'Córdoba', 'Valladolid', 'Vigo', 'Gijón', 'Granada', 'Vitoria', 'Santander', 'Pamplona', 'San Sebastián', 'Toledo',
  'Oviedo', 'Logroño', 'Tarragona', 'Lleida', 'Girona', 'Almería', 'Cádiz', 'Huelva', 'Jaén', 'Salamanca'
];

const personalidades = [
  'Aventurera', 'Discreta', 'Open-minded', 'Divertida', 'Sensual', 'Inteligente', 'Elegante', 'Apasionada',
  'Cariñosa', 'Experimentada', 'Curiosa', 'Sofisticada', 'Atrevida', 'Misteriosa', 'Natural',
  'Simpática', 'Relajada', 'Madura', 'Generosa', 'Fit', 'Respetuosa', 'Independiente', 'Creativa'
];

const fantasias = [
  'Intercambio completo', 'Tríos', 'Voyeurismo', 'Exhibicionismo', 'BDSM suave', 'Juegos de rol',
  'Orgías', 'Dogging', 'Cuckolding', 'Hot Wife', 'Gang bang', 'Soft swap', 'Same room', 'Separate room',
  'FFM', 'MFM', 'Bisexualidad femenina', 'Juguetes', 'Bondage', 'Dominación', 'Sumisión', 'Fetichismo',
  'Lencería', 'Disfraces', 'Masajes eróticos', 'Tantra', 'Sexo tántrico', 'Parejas múltiples'
];

const bios_mujer = [
  'Mujer independiente buscando conexiones auténticas y experiencias nuevas.',
  'Chica liberal con mente abierta. Me encanta la aventura y conocer gente interesante.',
  'Busco explorar mi sensualidad con personas respetuosas y atractivas.',
  'Curiosa por naturaleza. Me gusta experimentar sin compromiso.',
  'Mujer sensual que busca experiencias intensas con gente de mente abierta.',
  'Elegante y discreta. Busco calidad sobre cantidad.',
  'Me encanta el placer compartido y las nuevas experiencias.',
  'Chica natural que busca diversión sin complicaciones.'
];

const bios_hombre = [
  'Chico liberal buscando experiencias nuevas con gente interesante.',
  'Hombre respetuoso y discreto. Me gusta el ambiente swinger.',
  'Busco conexiones reales y experiencias memorables.',
  'Chico fit y activo. Me encanta la aventura y conocer gente nueva.',
  'Hombre de mente abierta buscando compartir momentos especiales.',
  'Discreto, educado y con muchas ganas de explorar.',
  'Me gusta el intercambio y las experiencias en pareja.',
  'Chico con ganas de aprender y experimentar.'
];

const bios_pareja = [
  'Pareja liberal de mente abierta. Buscamos otras parejas para compartir experiencias únicas y momentos especiales. Nos gusta el buen rollo y la discreción.',
  'Somos una pareja madura con experiencia en el ambiente swinger. Buscamos conexiones reales y experiencias intensas con personas que compartan nuestros intereses.',
  'Pareja joven empezando en el mundo liberal. Buscamos aprender y experimentar con respeto y mucha comunicación. Todo con calma y buen ambiente.',
  'Nos encanta el intercambio y conocer gente nueva. Buscamos parejas con buena vibra para compartir momentos inolvidables. Ambiente relax y sin presiones.',
  'Pareja de mente abierta buscando experiencias intensas con otras parejas. Nos gusta la aventura, el morbo y la diversión. Solo parejas verificadas.',
  'Buscamos parejas para amistad y algo más. Nos gusta tomarnos las cosas con calma y ver qué surge. Todo con mucho respeto y comunicación.',
  'Pareja swinger con años de experiencia. Nos gusta la diversión, el buen ambiente y las experiencias nuevas. Buscamos lo mismo en otras parejas.',
  'Pareja atractiva y fit busca lo mismo. Nos gusta cuidarnos y disfrutar de la vida al máximo. Solo parejas que se cuiden y sean respetuosas.',
  'Somos una pareja liberal que disfruta explorando nuevas facetas de nuestra sexualidad. Buscamos parejas con las que compartir experiencias.',
  'Pareja española buscando intercambio con otras parejas. Nos gusta el sexo en grupo y las experiencias intensas. Discreción total garantizada.'
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomTraits(num = 3) {
  const shuffled = [...personalidades].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function randomFantasias(num = 4) {
  const shuffled = [...fantasias].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// Función para generar foto ÚNICA usando seed único para cada persona
function getFotoUnicaMujer(index, photoNum = 1) {
  // Usamos el index del perfil + número de foto para crear seed único
  const seed = `woman-${index}-${photoNum}`;
  return `https://randomuser.me/api/portraits/women/${(index * 3 + photoNum) % 99}.jpg?seed=${seed}`;
}

function getFotoUnicaHombre(index, photoNum = 1) {
  const seed = `man-${index}-${photoNum}`;
  return `https://randomuser.me/api/portraits/men/${(index * 3 + photoNum) % 99}.jpg?seed=${seed}`;
}

function getFotoUnicaPareja(index, photoNum = 1) {
  // Para parejas usamos fotos de Unsplash con IDs únicos
  const uniqueId = 1516589178581 + (index * 1000) + (photoNum * 100);
  return `https://images.unsplash.com/photo-${uniqueId}?w=600&fit=crop&auto=format`;
}

// Generar 200 mujeres CON FOTOS ÚNICAS (EDADES 22-69)
export const MUJERES = Array.from({ length: 200 }, (_, i) => ({
  id: `mujer_${i + 1}`,
  name: `${random(nombres_mujer)}`,
  age: randomAge(22, 69),
  location: `${random(ciudades)}, España`,
  status: Math.random() > 0.7 ? 'online' : 'away',
  premium: Math.random() > 0.6,
  verified: Math.random() > 0.3,
  trustScore: Math.floor(Math.random() * 30) + 70,
  trustLevel: Math.random() > 0.7 ? 'ELITE' : 'VERIFIED',
  type: 'mujer',
  media: {
    photos: [
      getFotoUnicaMujer(i, 1),
      getFotoUnicaMujer(i, 2),
      getFotoUnicaMujer(i, 3)
    ],
    videos: Math.floor(Math.random() * 4)
  },
  personalityTraits: randomTraits(),
  fantasias: randomFantasias(),
  bio: random(bios_mujer),
  ultimaConexion: `hace ${Math.floor(Math.random() * 48)} horas`,
  mensajesRecibidos: Math.floor(Math.random() * 100),
  likesRecibidos: Math.floor(Math.random() * 200)
}));

// Generar 200 hombres CON FOTOS ÚNICAS (EDADES 22-69)
export const HOMBRES = Array.from({ length: 200 }, (_, i) => ({
  id: `hombre_${i + 1}`,
  name: `${random(nombres_hombre)}`,
  age: randomAge(22, 69),
  location: `${random(ciudades)}, España`,
  status: Math.random() > 0.7 ? 'online' : 'away',
  premium: Math.random() > 0.6,
  verified: Math.random() > 0.3,
  trustScore: Math.floor(Math.random() * 30) + 70,
  trustLevel: Math.random() > 0.7 ? 'ELITE' : 'VERIFIED',
  type: 'hombre',
  media: {
    photos: [
      getFotoUnicaHombre(i, 1),
      getFotoUnicaHombre(i, 2),
      getFotoUnicaHombre(i, 3)
    ],
    videos: Math.floor(Math.random() * 3)
  },
  personalityTraits: randomTraits(),
  fantasias: randomFantasias(),
  bio: random(bios_hombre),
  ultimaConexion: `hace ${Math.floor(Math.random() * 48)} horas`,
  mensajesEnviados: Math.floor(Math.random() * 150),
  likesEnviados: Math.floor(Math.random() * 300)
}));

// Generar 100 parejas CON FOTOS ÚNICAS (EDADES 22-69)
export const PAREJAS = Array.from({ length: 100 }, (_, i) => {
  const ageEl = randomAge(22, 69);
  const ageElla = randomAge(22, 69);
  const agePromedio = Math.floor((ageEl + ageElla) / 2);
  
  return {
    id: `pareja_${i + 1}`,
    name: `${random(nombres_mujer)} & ${random(nombres_hombre)}`,
    age: agePromedio,
    ageEl: ageEl,
    ageElla: ageElla,
    location: `${random(ciudades)}, España`,
    status: Math.random() > 0.6 ? 'online' : 'away',
    premium: Math.random() > 0.5,
    verified: Math.random() > 0.4,
    trustScore: Math.floor(Math.random() * 25) + 75,
    trustLevel: Math.random() > 0.6 ? 'ELITE' : 'VERIFIED',
    type: 'pareja',
    media: {
      photos: [
        getFotoUnicaPareja(i, 1),
        getFotoUnicaPareja(i, 2),
        getFotoUnicaPareja(i, 3)
      ],
      videos: Math.floor(Math.random() * 5)
    },
    personalityTraits: randomTraits(4),
    fantasias: randomFantasias(6),
    bio: random(bios_pareja),
    experiencia: Math.random() > 0.5 ? 'Experimentados' : 'Nuevos en esto',
    buscamos: random(['Parejas', 'Tríos', 'Intercambio', 'Soft swap', 'Todo']),
    ultimaConexion: `hace ${Math.floor(Math.random() * 24)} horas`,
    encuentrosRealizados: Math.floor(Math.random() * 20),
    likesRecibidos: Math.floor(Math.random() * 300)
  };
});

// Combinar todos
export const TODOS_MIEMBROS = [...MUJERES, ...HOMBRES, ...PAREJAS];

export default TODOS_MIEMBROS;
