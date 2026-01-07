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
      'Chat básico (respuestas lentas)',
      'Anuncios visibles'
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
      '💬 Chat prioritario (respuestas rápidas)',
      '📍 Cambiar ubicación (cualquier ciudad)',
      '🚫 Sin anuncios',
      '⏮️ Retroceder (deshacer último swipe)',
      '📊 Estadísticas de perfil'
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
      '📹 5 videollamadas HD al mes',
      '👑 Perfil destacado (3x más visto)',
      '💎 Super Likes ILIMITADOS',
      '🤖 Acceso a AI Members Premium',
      '🎭 Modo Incógnito (navega sin ser visto)',
      '🎟️ Invitaciones eventos VIP',
      '📸 Ver fotos privadas bloqueadas',
      '🔔 Notificación instant cuando te hacen match',
      '💌 Mensajes leídos (ver si leyeron tu mensaje)'
    ],
    cta: 'Acceso ELITE',
    link: 'https://buy.stripe.com/dRm6oI4snf6P9ss9kVdjO03',
    gradient: 'from-red-500 to-orange-500',
    borderColor: 'border-red-500',
    videoCalls: 5
  },
  {
    id: 'ruby',
    name: 'RUBY',
    price: '81.99',
    period: '/año',
    features: [
      '💎 Todo de ELITE +',
      '💰 Ahorra 40% (€588 → €81.99/año)',
      '📹 15 videollamadas HD al mes',
      '🏆 Badge exclusivo RUBY',
      '⚡ Prioridad absoluta en matching',
      '🎯 Aparecer primero en búsquedas',
      '📞 Soporte VIP 24/7 (respuesta <1h)',
      '🎁 Boost mensual gratis (valor €25)',
      '🔮 Acceso anticipado a nuevas features',
      '📊 Analytics avanzados (quién te ignora, cuándo conectar)',
      '🎪 Invitaciones exclusivas fiestas RUBY',
      '🛡️ Verificación prioritaria perfil'
    ],
    cta: 'Plan Anual RUBY',
    link: 'https://buy.stripe.com/aFaaEY3ojf6P5ccdBbdjO04',
    gradient: 'from-red-600 to-pink-600',
    borderColor: 'border-red-400',
    badge: 'AHORRA 40%',
    videoCalls: 15
  },
  {
    id: 'diamond',
    name: 'DIAMOND',
    price: '230',
    period: 'de por vida',
    features: [
      '♾️ ACCESO ILIMITADO DE POR VIDA',
      '📹 Videollamadas ILIMITADAS',
      '💎 Badge único DIAMOND (rarísimo)',
      '🎩 Concierge personal dedicado',
      '👔 Eventos exclusivos DIAMOND (solo 100 personas)',
      '🌍 Viajes y experiencias VIP organizadas',
      '🎯 Match forzado (garantizado con quien quieras 3x/mes)',
      '🔓 Desbloquear TODO el contenido privado',
      '📍 Aparecer en TOP 1 de cualquier ubicación',
      '🎁 Regalos sorpresa trimestrales',
      '🏰 Acceso a club privado DIAMOND',
      '🚫 Sin pagos recurrentes NUNCA MÁS',
      '📜 Garantía de por vida + herencia transferible'
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
