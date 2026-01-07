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

import aiMembersData from './data/aiMembers.json';
import { MEMBERSHIP_PLANS, TOKEN_PACKAGES } from './data/premiumPlans';

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
  
  const AI_MEMBERS = aiMembersData;
  const currentMember = AI_MEMBERS[currentProfileIndex] || AI_MEMBERS[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIncognitoMode = () => setIsIncognito(!isIncognito);

  const handleLike = () => {
    if (Math.random() > 0.7) {
      setNotifications(prev => prev + 1);
      setMatches(prev => [...prev, currentMember]);
    }
    setCurrentProfileIndex(prev => (prev + 1) % AI_MEMBERS.length);
  };

  const handlePass = () => setCurrentProfileIndex(prev => (prev + 1) % AI_MEMBERS.length);
  
  const handleSuperLike = () => {
    if (superLikes > 0) {
      setSuperLikes(prev => prev - 1);
      handleLike();
    }
  };

  // LANDING PAGE
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
              <Radio className="inline mr-2" /> Radar
            </motion.button>
          </div>
          
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">2.5M+</div>
              <div className="text-gray-400">Miembros</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">187K+</div>
              <div className="text-gray-400">Activos Hoy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">{AI_MEMBERS.length}</div>
              <div className="text-gray-400">AI Members</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // EXPLORE VIEW
  const ExploreView = () => (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
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
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Encuentra Tu Match Perfecto
          </h1>
          <p className="text-xl text-gray-300">
            Desliza a la derecha para dar like, izquierda para pasar
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <motion.div
            drag="x"
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

  // PREMIUM VIEW COMPLETE
  const PremiumView = () => (
    <div className="min-h-screen py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => setCurrentView('landing')}
          className="flex items-center space-x-2 text-gray-300 hover:text-white mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </motion.button>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-1 rounded-full mb-6 font-medium">
            💎 Asciende
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Desbloquea Tu Experiencia Elite
          </h2>
          <p className="text-xl text-gray-300">
            Acceso inmediato · Cancelable · Discreto
          </p>
        </motion.div>

        {/* TOKEN PACKAGES */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Paquetes de Tokens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TOKEN_PACKAGES.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl overflow-hidden border-2 ${pkg.borderColor} hover:scale-105 transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    MEJOR VALOR
                  </div>
                )}
                
                <div className={`p-8 bg-gradient-to-br ${pkg.gradient}`}>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-white mb-2">
                      {pkg.tokens}
                    </div>
                    <div className="text-xl text-white/80">Tokens</div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white">
                      €{pkg.price}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MEMBERSHIP PLANS */}
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
                        <div className="text-4xl font-bold text-white">
                          €{plan.price}
                        </div>
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

  // RADAR VIEW
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
                  src={member.media.photos[0]} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                  Online
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
                <p className="text-gray-300 text-sm">{member.sample_phrases[member.primary_language]?.[0]}</p>
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
    </>
  );
};

export default App;
