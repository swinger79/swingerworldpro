// Sistema de Monetización NIVEL DIOS - Swinger World

export const TOKEN_PACKAGES = [
  {
    id: 'tokens_50',
    name: '50 Tokens',
    price: '19',
    tokens: 50,
    description: 'Perfecto para empezar',
    link: 'https://buy.stripe.com/7sYdRaaQL0bVdIIcx7djO01',
    popular: false,
    gradient: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500'
  },
  {
    id: 'tokens_99',
    name: '99 Tokens',
    price: '40',
    tokens: 99,
    description: 'Más valor',
    link: 'https://buy.stripe.com/7sYcN67Ez1fZ6gg54FdjO00',
    popular: true,
    gradient: 'from-purple-600 to-pink-600',
    borderColor: 'border-purple-500'
  }
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    period: '',
    features: [
      '10 likes por día',
      'Ver perfiles cerca',
      '1 Super Like al mes',
      'Chat básico',
      'Fotos/videos de otros borrosos'
    ],
    cta: 'Comenzar Gratis',
    gradient: 'from-gray-700 to-gray-800',
    borderColor: 'border-gray-600',
    videoCalls: 0
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '29.99',
    period: '/mes',
    features: [
      '❤️ Likes ILIMITADOS',
      '👁️ Ver quién visitó tu perfil',
      '🔥 5 Super Likes al día',
      '💬 Chat prioritario',
      '📍 Cambiar ubicación',
      '🚫 Sin anuncios',
      '⏮️ Retroceder swipes',
      '📊 Estadísticas',
      '📸 Subir fotos/videos',
      '👀 Ver contenido borroso de otros'
    ],
    cta: 'Mejorar a PRO',
    link: 'https://buy.stripe.com/9B67sMcYT8Ir200aoZdjO02',
    popular: true,
    gradient: 'from-purple-600 to-pink-600',
    borderColor: 'border-purple-500',
    videoCalls: 0
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: '49',
    period: '/mes',
    features: [
      '⭐ Todo de PRO +',
      '📹 5 videollamadas HD/mes',
      '👑 Perfil destacado (3x visto)',
      '💎 Super Likes ILIMITADOS',
      '🤖 AI Members Premium',
      '🎭 Modo Incógnito',
      '🎟️ Eventos VIP',
      '📸 Ver fotos privadas desbloqueadas',
      '❤️ Dar likes/corazones',
      '🚫 NO comentar (solo GOLD+)',
      '📹 Hacer videollamadas'
    ],
    cta: 'Acceso ELITE',
    link: 'https://buy.stripe.com/dRm6oI4snf6P9ss9kVdjO03',
    gradient: 'from-red-500 to-orange-500',
    borderColor: 'border-red-500',
    videoCalls: 5
  },
  {
    id: 'gold',
    name: 'GOLD',
    price: '79.99',
    period: '/mes',
    features: [
      '⭐ Todo de ELITE +',
      '📹 10 videollamadas HD/mes',
      '👑 Perfil destacado (6x visto)',
      '💎 Super Likes ILIMITADOS',
      '🤖 AI Members Premium',
      '🎭 Modo Incógnito',
      '🎟️ Eventos VIP',
      '📸 Fotos privadas desbloqueadas',
      '💬 COMENTAR fotos/videos',
      '📹 Videollamadas ilimitadas',
      '🔔 Notificaciones instant'
    ],
    cta: 'Acceso GOLD',
    link: 'https://buy.stripe.com/4gM9AUcYT2k37kkfJjdjO07',
    gradient: 'from-yellow-500 to-amber-600',
    borderColor: 'border-yellow-500',
    videoCalls: 10
  },
  {
    id: 'ruby',
    name: 'RUBY',
    price: '129.99',
    period: '/año',
    features: [
      '💎 Todo de GOLD +',
      '💰 Ahorra 40% anual',
      '📹 15 videollamadas HD/mes',
      '🏆 Badge exclusivo RUBY',
      '⚡ Prioridad absoluta',
      '🎯 Aparecer primero',
      '📞 Soporte VIP 24/7',
      '🎁 Boost mensual gratis',
      '🔮 Acceso anticipado',
      '📊 Analytics avanzados',
      '🎪 Fiestas RUBY exclusivas',
      '🛡️ Verificación prioritaria'
    ],
    cta: 'Plan Anual RUBY',
    link: 'https://buy.stripe.com/bJe4gAaQL6Aj7kkfJjdjO06',
    gradient: 'from-red-600 to-pink-600',
    borderColor: 'border-red-400',
    badge: 'AHORRA 40%',
    videoCalls: 15
  },
  {
    id: 'diamond',
    name: 'DIAMOND',
    price: '230',
    period: 'vitalicio',
    features: [
      '♾️ ACCESO ILIMITADO VIDA',
      '📹 Videollamadas ILIMITADAS',
      '💎 Badge DIAMOND único',
      '🎩 Concierge personal',
      '👔 Eventos DIAMOND (100 personas)',
      '🌍 Viajes VIP',
      '🎯 Match forzado 3x/mes',
      '🔓 TODO contenido privado',
      '📍 TOP 1 cualquier ubicación',
      '🎁 Regalos trimestrales',
      '🏰 Club privado DIAMOND',
      '🚫 Sin pagos NUNCA',
      '📜 Herencia transferible'
    ],
    cta: 'Acceso Vitalicio',
    link: 'https://buy.stripe.com/28E8wQ2kf9Mv8ooeFfdjO05',
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    borderColor: 'border-cyan-400',
    badge: 'EXCLUSIVO',
    videoCalls: 999
  }
];

export const BOOST_PACKAGES = [
  {
    id: 'super_like_single',
    name: 'Super Like',
    cost: 1,
    costType: 'tokens',
    description: 'Destaca tu like',
    icon: '⭐'
  },
  {
    id: 'super_match_30min',
    name: 'Boost 30 min',
    cost: 10,
    costType: 'tokens',
    description: 'Visibilidad x10',
    icon: '🚀'
  },
  {
    id: 'super_match_24h',
    name: 'Boost 24 horas',
    cost: 30,
    costType: 'tokens',
    description: 'Un día completo destacado',
    icon: '💎'
  },
  {
    id: 'video_call_extra',
    name: 'Videollamada Extra',
    cost: 12,
    costType: 'tokens',
    description: 'Añade 1 videollamada HD',
    icon: '📹'
  }
];

export default {
  TOKEN_PACKAGES,
  MEMBERSHIP_PLANS,
  BOOST_PACKAGES
};
