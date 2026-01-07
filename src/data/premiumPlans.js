// Sistema de Monetización Actualizado - Swinger World

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
      'Perfil básico',
      'Ver perfiles limitados',
      'Chat limitado',
      'Acceso a comunidad'
    ],
    cta: 'Comenzar Gratis',
    gradient: 'from-gray-700 to-gray-800',
    borderColor: 'border-gray-600'
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '29.99',
    period: '/mes',
    features: [
      'Likes ilimitados',
      'Chat sin límites',
      'Ver quién te visita',
      'Radar avanzado',
      'Sin anuncios'
    ],
    cta: 'Mejorar a PRO',
    link: 'https://buy.stripe.com/9B67sMcYT8Ir200aoZdjO02',
    popular: true,
    gradient: 'from-purple-600 to-pink-600',
    borderColor: 'border-purple-500'
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: '49',
    period: '/mes',
    features: [
      'Todo de PRO',
      'Perfil destacado',
      'Super Likes ilimitados',
      'Videollamadas HD',
      'AI Members exclusivas',
      'Eventos VIP'
    ],
    cta: 'Acceso ELITE',
    link: 'https://buy.stripe.com/dRm6oI4snf6P9ss9kVdjO03',
    gradient: 'from-red-500 to-orange-500',
    borderColor: 'border-red-500'
  },
  {
    id: 'ruby',
    name: 'RUBY',
    price: '81.99',
    period: '/año',
    features: [
      'Todo de ELITE',
      'Ahorra 40% anual',
      'Badge exclusivo RUBY',
      'Prioridad absoluta',
      'Soporte premium 24/7',
      'Acceso anticipado a features'
    ],
    cta: 'Plan Anual RUBY',
    link: 'https://buy.stripe.com/aFaaEY3ojf6P5ccdBbdjO04',
    gradient: 'from-red-600 to-pink-600',
    borderColor: 'border-red-400',
    badge: 'AHORRA 40%'
  },
  {
    id: 'diamond',
    name: 'DIAMOND',
    price: '210',
    period: 'de por vida',
    features: [
      '✨ Acceso ILIMITADO',
      'Todas las funciones para siempre',
      'Badge único DIAMOND',
      'Concierge personal',
      'Eventos exclusivos DIAMOND',
      'Sin pagos recurrentes',
      'Garantía de por vida'
    ],
    cta: 'Acceso Vitalicio',
    link: 'https://buy.stripe.com/28E8wQ2kf9Mv8ooeFfdjO05',
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    borderColor: 'border-cyan-400',
    badge: 'EXCLUSIVO'
  }
];

// Super Likes y Super Match (usando tokens)
export const BOOST_PACKAGES = [
  {
    id: 'super_like_single',
    name: 'Super Like',
    cost: 5,
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
  }
];

export default {
  TOKEN_PACKAGES,
  MEMBERSHIP_PLANS,
  BOOST_PACKAGES
};
