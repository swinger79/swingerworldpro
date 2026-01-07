import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Map, MessageSquare, Crown, User, Bell, Star, Zap,
  Camera, Flame, X, Send, Heart, ShieldCheck, MapPin, Search,
  Settings, CheckCircle2, Gem, Activity, Fingerprint, Globe,
  ShoppingBag, BarChart3, Calendar, Ticket, CreditCard, LogOut,
  TrendingUp, Eye, Lock, Unlock, Package, PartyPopper, Sparkles,
  ChevronRight, MessageCircle, Radio, Compass, Check, ArrowRight,
  ArrowLeft, PhoneCall, Coins, Video, Music, Gift, Target
} from 'lucide-react';

import { AI_MEMBERS_ENHANCED } from './data/membersAIEnhanced';
import { MEMBERSHIP_PLANS, TOKEN_PACKAGES } from './data/premiumPlans';
import TrustBadge from './components/TrustBadge';

const backgroundVariants = {
  landing: 'from-purple-900/30 via-pink-900/20 to-black',
  explore: 'from-fuchsia-900/20 via-indigo-900/20 to-black',
  radar: 'from-emerald-900/20 via-black to-black',
  matches: 'from-black via-purple-900/10 to-black',
  events: 'from-amber-900/20 via-black to-black',
  store: 'from-rose-900/20 via-black to-black',
  premium: 'from-yellow-900/30 via-purple-900/20 to-black'
};

const AnimatedBackground = ({ currentView }) => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-black"></div>
    <motion.div 
      className={`absolute inset-0 bg-gradient-to-br ${backgroundVariants[currentView] || backgroundVariants.landing}`}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
  </div>
);

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
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
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);
  
  const AI_MEMBERS = AI_MEMBERS_ENHANCED;
  const currentMember = AI_MEMBERS[currentProfileIndex] || AI_MEMBERS[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIncognitoMode = () => setIsIncognito(!isIncognito);

  const handleLike = () => {
    const isMatch = Math.random() > 0.7;
    if (isMatch) {
      setShowMatchAnimation(true);
      setNotifications(prev => prev + 1);
      setMatches(prev => [...prev, currentMember]);
      setTimeout(() => setShowMatchAnimation(false), 2500);
    }
    setTimeout(() => {
      setCurrentProfileIndex(prev => (prev + 1) % AI_MEMBERS.length);
    }, isMatch ? 2500 : 300);
  };

  const handlePass = () => setCurrentProfileIndex(prev => (prev + 1) % AI_MEMBERS.length);
  
  const handleSuperLike = () => {
    if (superLikes > 0) {
      setSuperLikes(prev => prev - 1);
      handleLike();
    }
  };

  // LANDING PAGE (sin cambios)
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
              <p className="text-xs text-gray-400">Elite Connections Worldwide</p>
            </div>
          </motion.div>

          <div className="flex items-center space-x-6">
            {['explore', 'radar', 'matches', 'events', 'store'].map((view) => (
              <motion.button
                key={view}
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentView(view)}
                className="text-white/80 hover:text-white capitalize hidden md:block"
              >
                {view}
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('premium')}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-4 py-2 rounded-full font-bold shadow-lg"
            >
              Premium
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300"
          >
            🌍 Conectando {AI_MEMBERS.length}+ adultos en 150+ países
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-white/90 mb-4"
          >
            No todo el mundo debería estar aquí. Pero tú sí.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 mb-12"
          >
            Red privada para adultos verificados · +150 países
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('explore')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-lg shadow-2xl flex items-center space-x-2"
            >
              <Users size={24} />
              <span>Descubrir Ahora</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('radar')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold text-lg flex items-center space-x-2"
            >
              <Compass size={24} />
              <span>Radar</span>
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-3 gap-8">
          {[
            { label: 'Miembros', value: '2.5M+' },
            { label: 'Activos Hoy', value: '187K+' },
            { label: 'AI Members', value: AI_MEMBERS.length }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // EXPLORE VIEW - MEJORADO CON IA
  const ExploreView = () => (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-md mx-auto px-4">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => setCurrentView('landing')}
          className="flex items-center space-x-2 text-gray-300 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </motion.button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-400" />
            Descubre con IA
          </h1>
          <p className="text-gray-400">
            {AI_MEMBERS.length - currentProfileIndex} perfiles verificados disponibles
          </p>
        </div>

        {/* Profile Card con IA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProfileIndex}
            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-6"
          >
            <div className="relative h-[600px]">
              <img
                src={currentMember.media?.photos?.[0]}
                alt={currentMember.name}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Trust Badge - Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <TrustBadge
                  trustScore={currentMember.trustScore}
                  trustLevel={currentMember.trustLevel}
                  size="md"
                />
              </div>

              {/* Premium/Online Badge - Top Left */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {currentMember.premium && (
                  <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Crown size={14} className="text-white" />
                    <span className="text-white font-bold text-xs">Premium</span>
                  </div>
                )}
                {currentMember.status === 'online' && (
                  <div className="bg-green-500 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-xs">Online</span>
                  </div>
                )}
              </div>

              {/* Profile Info - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    {currentMember.name}, {currentMember.age}
                  </h2>
                  <div className="flex items-center text-purple-300">
                    <MapPin size={16} className="mr-1" />
                    <span>{currentMember.location}</span>
                  </div>
                </div>

                {/* Personality Traits */}
                {currentMember.personalityTraits && currentMember.personalityTraits.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {currentMember.personalityTraits.map((trait, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-500/30 backdrop-blur-sm text-purple-200 text-sm px-3 py-1 rounded-full border border-purple-400/30"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                )}

                {/* AI Insights */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">
                    💬 {currentMember.aiInsights?.communicationStyle}
                  </div>
                  {currentMember.responseRate > 0.7 && (
                    <div className="bg-green-500/30 backdrop-blur-sm text-green-200 text-xs px-2 py-1 rounded-full border border-green-400/30">
                      ⚡ {Math.round(currentMember.responseRate * 100)}% responde
                    </div>
                  )}
                  <div className="bg-blue-500/30 backdrop-blur-sm text-blue-200 text-xs px-2 py-1 rounded-full border border-blue-400/30">
                    📊 {currentMember.profileCompleteness}% completo
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Match Animation Overlay */}
        <AnimatePresence>
          {showMatchAnimation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
            >
              <div className="text-center p-8">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-8xl mb-4"
                >
                  🌟
                </motion.div>
                <div className="text-5xl font-bold text-green-400 mb-2">
                  {70 + Math.floor(Math.random() * 30)}%
                </div>
                <div className="text-2xl text-white mb-4">¡Match Perfecto!</div>
                <div className="text-gray-300 space-y-1 text-sm">
                  <div>🎯 Alta compatibilidad detectada</div>
                  <div>💬 Excelente química de personalidad</div>
                  <div>✨ Intereses muy alineados</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePass}
            className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center text-red-400 text-3xl hover:bg-red-500/30 transition-colors"
          >
            ✕
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSuperLike}
            disabled={superLikes === 0}
            className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-400 text-3xl hover:bg-blue-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ⭐
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-green-400 text-4xl hover:bg-green-500/30 transition-colors"
          >
            ♥
          </motion.button>
        </div>

        {/* Additional Info */}
        <div className="space-y-3">
          {/* Interests */}
          {currentMember.interests && currentMember.interests.length > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h3 className="font-bold mb-2 text-white text-sm">Intereses</h3>
              <div className="flex flex-wrap gap-2">
                {currentMember.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* AI Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h3 className="font-bold mb-3 text-white text-sm flex items-center gap-2">
              <Activity size={16} className="text-purple-400" />
              Estadísticas IA
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Autenticidad:</span>
                <span className="text-blue-400 font-semibold">{currentMember.authenticityScore}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Trust Level:</span>
                <span className="text-yellow-400 font-semibold">{currentMember.trustLevel}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Completitud:</span>
                <span className="text-green-400 font-semibold">{currentMember.profileCompleteness}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Actividad:</span>
                <span className="text-purple-400 font-semibold capitalize">{currentMember.aiInsights?.activityLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // PREMIUM VIEW (sin cambios, solo importación corregida)
  const PremiumView = () => (
    <div className="min-h-screen pt-24 pb-20">
      {/* Tu código de Premium View existente */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => setCurrentView('landing')}
          className="flex items-center space-x-2 text-gray-300 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </motion.button>

        {/* Resto del código Premium... */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400">
            Desbloquea Todo el Poder
          </h1>
          <p className="text-xl text-gray-300">
            Elige el plan perfecto para tu estilo de vida
          </p>
        </div>

        {/* TOKEN PACKAGES (sin cambios) */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Paquetes de Tokens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TOKEN_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative rounded-3xl overflow-hidden border-2 ${pkg.borderColor} bg-gradient-to-br ${pkg.gradient} p-8`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">€{pkg.price}</div>
                    <div className="text-sm text-white/80">{pkg.tokens} tokens</div>
                  </div>
                </div>
                
                <p className="text-white/90 text-center mb-6">{pkg.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(pkg.link, '_blank')}
                  className="w-full py-3 bg-white text-purple-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
                >
                  Comprar Ahora
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MEMBERSHIP PLANS (sin cambios) */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Planes de Membresía</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEMBERSHIP_PLANS.map((plan, index) => (
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
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    MÁS POPULAR
                  </div>
                )}
                
                {plan.badge && (
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
                    {plan.badge}
                  </div>
                )}
                
                <div className={`p-8 bg-gradient-to-br ${plan.gradient}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {plan.id !== 'free' && (
                      <div className="text-right">
                        <div className="text-4xl font-bold text-white">€{plan.price}</div>
                        <span className="text-sm text-white/80">{plan.period}</span>
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
                    onClick={() => plan.link && window.open(plan.link, '_blank')}
                    disabled={!plan.link && plan.id !== 'free'}
                    className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
                      plan.id === 'free'
                        ? 'bg-white/20 hover:bg-white/30 text-white'
                        : 'bg-white text-purple-900 hover:bg-gray-100'
                    } ${(!plan.link && plan.id !== 'free') ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // RADAR VIEW - MEJORADO CON AI
  const RadarView = () => (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => setCurrentView('landing')}
          className="flex items-center space-x-2 text-gray-300 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </motion.button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Radar de Miembros
          </h1>
          <p className="text-xl text-gray-300">
            {AI_MEMBERS.filter(m => m.status === 'online').length} miembros online cerca de ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_MEMBERS.filter(m => m.status === 'online').slice(0, 12).map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <div className="relative h-64">
                <img 
                  src={member.media?.photos?.[0]} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Online Badge */}
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                  Online
                </div>

                {/* Trust Badge */}
                <div className="absolute top-2 left-2">
                  <TrustBadge
                    trustScore={member.trustScore}
                    trustLevel={member.trustLevel}
                    size="xs"
                  />
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{member.name}, {member.age}</h3>
                  {member.premium && <Crown size={16} className="text-yellow-400" />}
                </div>
                <div className="flex items-center text-purple-300 text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  {member.location}
                </div>
                
                {/* Personality Traits */}
                {member.personalityTraits && member.personalityTraits.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.personalityTraits.slice(0, 2).map((trait, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-500/20 text-purple-300 text-xs px-2 py-0.5 rounded-full"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-gray-300 text-sm">
                  {member.sample_phrases?.[member.primary_language]?.[0] || 'Hola, encantado de conocerte'}
                </p>
              </div>
            </motion.div>
          ))}
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
        {currentView === 'radar' && <RadarView />}
        {currentView === 'matches' && <div className="min-h-screen pt-24 text-center text-white"><h1 className="text-4xl">Matches - Próximamente</h1></div>}
        {currentView === 'events' && <div className="min-h-screen pt-24 text-center text-white"><h1 className="text-4xl">Events - Próximamente</h1></div>}
        {currentView === 'store' && <div className="min-h-screen pt-24 text-center text-white"><h1 className="text-4xl">Store - Próximamente</h1></div>}
      </div>

      {/* Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            {[
              { icon: Flame, view: 'explore', label: 'Explorar' },
              { icon: Compass, view: 'radar', label: 'Radar' },
              { icon: Heart, view: 'matches', label: 'Matches' },
              { icon: Calendar, view: 'events', label: 'Eventos' },
              { icon: ShoppingBag, view: 'store', label: 'Tienda' }
            ].map(({ icon: Icon, view, label }) => (
              <motion.button
                key={view}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentView(view)}
                className={`flex flex-col items-center space-y-1 ${
                  currentView === view ? 'text-purple-400' : 'text-gray-400'
                }`}
              >
                <Icon size={24} />
                <span className="text-xs">{label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default App;
