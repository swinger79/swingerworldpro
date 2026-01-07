// Miembros con fotos reales de personas
export const AI_MEMBERS_ENHANCED = [
  {
    id: 1,
    name: "Laura & Carlos",
    age: 32,
    location: "Madrid, España",
    status: "online",
    premium: true,
    verified: true,
    trustScore: 95,
    trustLevel: "ELITE",
    type: "pareja",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400",
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400"
      ],
      videos: 2
    },
    personalityTraits: ["Aventurera", "Discreta", "Open-minded"],
    bio: "Pareja liberal de Madrid. Buscamos experiencias nuevas y gente con buena onda."
  },
  {
    id: 2,
    name: "Ana & Miguel",
    age: 28,
    location: "Barcelona, España",
    status: "online",
    premium: true,
    verified: true,
    trustScore: 92,
    trustLevel: "ELITE",
    type: "pareja",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
      ],
      videos: 3
    },
    personalityTraits: ["Divertidos", "Respetuosos", "Fit"],
    bio: "Pareja de Barcelona. Nos encanta viajar y conocer gente interesante."
  },
  {
    id: 3,
    name: "Sofia",
    age: 30,
    location: "Valencia, España",
    status: "online",
    premium: true,
    verified: true,
    trustScore: 88,
    trustLevel: "ELITE",
    type: "mujer",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
      ],
      videos: 1
    },
    personalityTraits: ["Sensual", "Inteligente", "Elegante"],
    bio: "Mujer independiente buscando conexiones auténticas."
  },
  {
    id: 4,
    name: "David & Paula",
    age: 35,
    location: "Sevilla, España",
    status: "online",
    premium: true,
    verified: true,
    trustScore: 90,
    trustLevel: "ELITE",
    type: "pareja",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
      ],
      videos: 2
    },
    personalityTraits: ["Apasionados", "Cariñosos", "Experimentados"],
    bio: "Pareja swinger con experiencia. Ambiente relax y buen rollo."
  },
  {
    id: 5,
    name: "Emma & Javier",
    age: 26,
    location: "Málaga, España",
    status: "online",
    premium: false,
    verified: true,
    trustScore: 75,
    trustLevel: "VERIFIED",
    type: "pareja",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
      ],
      videos: 0
    },
    personalityTraits: ["Jóvenes", "Curiosos", "Divertidos"],
    bio: "Pareja joven empezando en el mundo liberal."
  },
  {
    id: 6,
    name: "Marta",
    age: 34,
    location: "Bilbao, España",
    status: "away",
    premium: true,
    verified: true,
    trustScore: 85,
    trustLevel: "VERIFIED",
    type: "mujer",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400"
      ],
      videos: 1
    },
    personalityTraits: ["Sofisticada", "Atrevida", "Misteriosa"],
    bio: "Mujer elegante buscando experiencias únicas."
  },
  {
    id: 7,
    name: "Roberto & Clara",
    age: 40,
    location: "Zaragoza, España",
    status: "online",
    premium: true,
    verified: true,
    trustScore: 93,
    trustLevel: "ELITE",
    type: "pareja",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400"
      ],
      videos: 3
    },
    personalityTraits: ["Maduros", "Experimentados", "Generosos"],
    bio: "Pareja madura con mucha experiencia en el ambiente."
  },
  {
    id: 8,
    name: "Lucia",
    age: 29,
    location: "Granada, España",
    status: "online",
    premium: false,
    verified: true,
    trustScore: 70,
    trustLevel: "VERIFIED",
    type: "mujer",
    media: {
      photos: [
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400",
        "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400"
      ],
      videos: 0
    },
    personalityTraits: ["Natural", "Simpática", "Relajada"],
    bio: "Chica de Granada buscando nuevas amistades."
  }
].filter(m => m.age >= 22 && m.age <= 69);

export default AI_MEMBERS_ENHANCED;
