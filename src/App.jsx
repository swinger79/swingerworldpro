import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Map, MessageSquare, Crown, User, Bell, Star, Zap,
  Camera, Flame, X, Send, Heart, ShieldCheck, MapPin, Search,
  Settings, CheckCircle2, Gem, Activity, Fingerprint, Globe,
  ShoppingBag, BarChart3, Calendar, Ticket, CreditCard, LogOut,
  TrendingUp, Eye, Lock, Unlock, Package, PartyPopper, Sparkles,
  ChevronRight, ChevronLeft, ChevronDown, ChevronUp,
  MessageCircle, Radio, Compass, AlertCircle, Check, Loader,
  ArrowRight, ArrowLeft, PhoneCall, Link as LinkIcon, CheckCheck,
  HandCoins, Video, Music, Gift, Target, Radar as RadarIcon
} from 'lucide-react';

// Import AI Members
import aiMembersData from './data/aiMembers.json';

// Background variants
const backgroundVariants = {
  landing: 'from-purple-900/30 via-pink-900/20 to-black',
  explore: 'from-fuchsia-900/20 via-indigo-900/20 to-black',
  radar: 'from-emerald-900/20 via-black to-black',
  matches: 'from-black via-purple-900/10 to-black',
  events: 'from-amber-900/20 via-black to-black',
  store: 'from-rose-900/20 via-black to-black',
  premium: 'from-yellow-900/30 via-purple-900/20 to-black'
};

// Premium Plans - ACTUALIZADOS CON LINKS REALES DE STRIPE
const TOKEN_PACKAGES = [
  {
    id: 'tokens_50',
    name: '50 Tokens',
    price: '19',
    tokens: 50,
    description: 'Perfecto para empezar',
    link: 'https://buy.stripe.com/7sYdRaaQL0bVdIIcx7djO01',
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

const PREMIUM_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    period: '',
    features: ['Perfil básico', 'Ver perfiles limitados', 'Chat limitado', 'Acceso a comunidad'],
    cta: 'Comenzar Gratis',
    gradient: 'from-gray-700 to-gray-800',
    borderColor: 'border-gray-600'
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '29.99',
    period: '/mes',
    features: ['Likes ilimitados', 'Chat sin límites', 'Ver quién te visita', 'Radar avanzado', 'Sin anuncios'],
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
    features: ['Todo de PRO', 'Perfil destacado', 'Super Likes ilimitados', 'Videollamadas HD', 'AI Members exclusivas', 'Eventos VIP'],
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
    features: ['Todo de ELITE', 'Ahorra 40% anual', 'Badge exclusivo RUBY', 'Prioridad absoluta', 'Soporte premium 24/7', 'Acceso anticipado'],
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
    features: ['✨ Acceso ILIMITADO', 'Todas las funciones para siempre', 'Badge único DIAMOND', 'Concierge personal', 'Eventos exclusivos DIAMOND', 'Sin pagos recurrentes', 'Garantía de por vida'],
    cta: 'Acceso Vitalicio',
    link: 'https://buy.stripe.com/28E8wQ2kf9Mv8ooeFfdjO05',
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    borderColor: 'border-cyan-400',
    badge: 'EXCLUSIVO'
  }
];

// Animated Background Component
const AnimatedBackground = ({ currentView }) => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-black"></div>
    <motion.div 
      className={`absolute inset-0 bg-gradient-to-br ${backgroundVariants[currentView] || backgroundVariants.landing}`}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
    <motion.div 
      className="absolute inset-0 opacity-30"
      animate={{
        background: [
          'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
        ]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
        initial={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          opacity: 0
        }}
        animate={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </div>
);

// Main App Component
const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isIncognito, setIsIncognito] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProfileId, setHoveredProfileId] = useState(null);
  const [superLikes, setSuperLikes] = useState(5);
  const [superMatches, setSuperMatches] = useState(3);
  
  const messagesEndRef = useRef(null);
  const AI_MEMBERS = aiMembersData;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIncognitoMode = () => {
    setIsIncognito(!isIncognito);
    setNotifications(prev => prev + 1);
  };

  const handlePlanSelect = (plan) => {
    if (plan.link) window.open(plan.link, '_blank');
  };

  const handleLike = () => {
    if (Math.random() > 0.7) {
      setNotifications(prev => prev + 1);
      const currentMember = AI_MEMBERS[currentProfileIndex];
      setMatches(prev => [...prev, currentMember]);
    }
    setCurrentProfileIndex(prev => (prev + 1) % AI_MEMBERS.length);
  };

  const handlePass = () => {
    setCurrentProfileIndex(prev => (prev + 1) % AI_MEMBERS.length);
  };

  const handleSuperLike = () => {
    if (superLikes > 0) {
      setSuperLikes(prev => prev - 1);
      handleLike();
    }
  };

  const currentMember = AI_MEMBERS[currentProfileIndex] || AI_MEMBERS[0];

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isIncognito
            ? 'bg-black/80 backdrop-blur-md py-2 border-b border-white/10'
            : 'bg-transparent py-4'
        } ${isIncognito ? 'border-b-green-500/20' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentView('landing')}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30">
              SW
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                Swinger World
              </h1>
              <p className="text-xs text-purple-200">Elite Connections Worldwide</p>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            {['explore', 'radar', 'matches', 'events', 'store'].map((view) => (
              <motion.button
                key={view}
                whileHover={{ y: -2 }}
                onClick={() => setCurrentView(view)}
                className={`text-sm font-medium capitalize transition-all ${
                  currentView === view ? 'text-purple-300' : 'text-gray-300 hover:text-white'
                }`}
              >
                {view}
              </motion.button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleIncognitoMode}
              className={`p-2 rounded-full transition-all ${
                isIncognito 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-gray-800/50 text-gray-300 hover:text-white'
              }`}
            >
              {isIncognito ? <Lock size={20} /> : <Unlock size={20} />}
            </motion.button>
            
            {notifications > 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {notifications}
              </motion.div>
            )}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('premium')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              <Crown size={18} />
              <span>Premium</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full mb-6 font-medium"
          >
            🌍 Conectando 2.5M+ adultos en 150+ países
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
              No todo el mundo
            </span>
            <br />
            <span className="text-white">debería estar aquí.</span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-300">Pero tú sí.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Red privada para adultos verificados · +150 países
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('explore')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              Descubrir Ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('radar')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
            >
              <RadarIcon className="inline mr-2" /> Radar
            </motion.button>
          </div>
          
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient">2.5M+</div>
              <div className="text-gray-400">Miembros</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">187K+</div>
              <div className="text-gray-400">Activos Hoy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient">{AI_MEMBERS.length}</div>
              <div className="text-gray-400">AI Members</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // Explore View Component
  const ExploreView = () => (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => setCurrentView('landing')}
            className="flex items-center space-x-2 text-gray-300 hover:text-white"
          >
            <ArrowLeft size={20} />
            <span>Volver</span>
          </motion.button>
          
          <div className="flex items-center space-x-4">
            <span className="text-purple-300">Super Likes: {superLikes}</span>
            <span className="text-yellow-300">Super Matches: {superMatches}</span>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Encuentra Tu Match Perfecto
          </h1>
          <p className="text-xl text-gray-300">
            Desliza a la derecha para dar like, izquierda para pasar
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 100) handleLike();
              else if (offset.x < -100) handlePass();
            }}
            className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12 relative"
          >
            <div className="relative h-[500px]">
              <img 
                src={currentMember.media.photos[0]} 
                alt={currentMember.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-white">
                        {currentMember.name}, {currentMember.age}
                      </span>
                      {currentMember.verified && (
                        <ShieldCheck size={20} className="text-blue-400" />
                      )}
                      {currentMember.premium && (
                        <Crown size={20} className="text-yellow-400" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin size={16} className="text-purple-300" />
                      <span className="text-purple-200">{currentMember.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-200 mb-4">
                  {currentMember.sample_phrases[currentMember.primary_language]?.[0]}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                    {currentMember.psychology.primary}
                  </span>
                  <span className="text-sm px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full">
                    {currentMember.psychology.secondary}
                  </span>
                  <span className="text-sm px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                    {currentMember.status === 'online' ? '🟢 Online' : '⚫ Away'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePass}
              className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors"
            >
              <X size={32} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSuperLike}
              className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors"
            >
              <Star size={32} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLike}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/50"
            >
              <Heart size={36} fill="white" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );

  // Premium View Component
  const PremiumView = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-1 rounded-full mb-6 font-medium">
            💎 Desbloquea Tu Potencial
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Elige Tu Nivel de Acceso
          </h2>
          <p className="text-xl text-gray-300">
            Desde básico hasta exclusivo · Cancela cuando quieras
          </p>
        </motion.div>
        
        {/* Paquetes de Tokens */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">💰 Paquetes de Tokens</h3>
            <p className="text-gray-400">Usa tokens para Super Likes y Boosts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOKEN_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden border-2 ${pkg.borderColor} ${
                  pkg.popular ? 'ring-2 ring-purple-500' : ''
                } transition-all hover:scale-[1.02]`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    MEJOR VALOR
                  </div>
                )}
                
                <div className={`p-6 bg-gradient-to-br ${pkg.gradient}`}>
                  <div className="text-center">
                    <div className="text-5xl mb-2">🪙</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                    <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-white mb-4">
                      €{pkg.price}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePlanSelect(pkg)}
                      className="w-full py-3 bg-white text-purple-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
                    >
                      Comprar Ahora
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Los tokens se usan para: Super Likes (5 tokens), Boost 30min (10 tokens), Boost 24h (30 tokens)
            </p>
          </div>
        </div>
        
        {/* Planes de Membresía */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">🎯 Planes de Membresía</h3>
          <p className="text-gray-400">Acceso completo a todas las funciones premium</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PREMIUM_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden border-2 ${plan.borderColor} ${
                plan.popular ? 'scale-105 ring-2 ring-purple-500' : ''
              } transition-all hover:scale-[1.02]`}
            >
              {(plan.popular || plan.badge) && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  {plan.badge || 'MÁS POPULAR'}
                </div>
              )}
              
              <div className={`p-8 bg-gradient-to-br ${plan.gradient}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  {plan.id !== 'free' && (
                    <div className="text-right">
                      <div className="text-4xl font-bold text-white">
                        €{plan.price}
                      </div>
                      {plan.period && (
                        <span className="text-sm text-white/80">{plan.period}</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="my-6 h-px bg-white/30"></div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 size={20} className="text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlanSelect(plan)}
                  disabled={!plan.link && plan.id !== 'free'}
                  className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
                    plan.id === 'free'
                      ? 'bg-white/20 hover:bg-white/30 text-white'
                      : plan.id === 'diamond'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90'
                      : 'bg-white text-purple-900 hover:bg-gray-100'
                  } ${(!plan.link && plan.id !== 'free') ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Información adicional */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              💡 ¿Por qué elegir Swinger World Premium?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🔒</div>
                <h4 className="font-bold text-white mb-2">100% Seguro</h4>
                <p className="text-gray-300 text-sm">Perfiles verificados y privacidad garantizada</p>
              </div>
              <div>
                <div className="text-4xl mb-2">⚡</div>
                <h4 className="font-bold text-white mb-2">Acceso Instantáneo</h4>
                <p className="text-gray-300 text-sm">Activación inmediata tras el pago</p>
              </div>
              <div>
                <div className="text-4xl mb-2">💳</div>
                <h4 className="font-bold text-white mb-2">Cancelación Fácil</h4>
                <p className="text-gray-300 text-sm">Sin compromisos, cancela cuando quieras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render
  return (
    <>
      <AnimatedBackground currentView={currentView} />
      
      <div className="relative z-10">
        {currentView === 'landing' && <LandingPage />}
        {currentView === 'explore' && <ExploreView />}
        {currentView === 'premium' && <PremiumView />}
        
        {/* Otras vistas se pueden agregar aquí */}
      </div>
      
      {/* Global Notification */}
      <AnimatePresence>
        {notifications > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 border border-purple-500/30 rounded-xl p-4 shadow-lg flex items-center space-x-4">
              <Bell size={24} className="text-purple-400" />
              <div>
                <p className="font-bold text-white">{notifications} nuevas notificaciones</p>
                <p className="text-sm text-gray-300">Tienes nuevos matches y mensajes</p>
              </div>
              <button 
                onClick={() => setNotifications(0)}
                className="text-purple-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
