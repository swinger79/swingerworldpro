import React, { useState } from 'react';
import { AI_MEMBERS_ENHANCED } from './data/membersAIEnhanced';
import TopNavBar from './components/navigation/TopNavBar';
import MainMenu from './components/navigation/MainMenu';
import Sidebar from './components/navigation/Sidebar';
import Footer from './components/navigation/Footer';
import InicioView from './views/InicioView';
import AmigosView from './views/AmigosView';

const App = () => {
  const [currentView, setCurrentView] = useState('inicio');
  const currentUser = { name: 'Usuario', notifications: 3, messages: 5 };

  const handleNavigation = (view) => {
    console.log('Navegando a:', view);
    setCurrentView(view);
  };

  const GenteView = () => (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Descubre Personas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AI_MEMBERS_ENHANCED.slice(0, 12).map((member) => (
          <div key={member.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <img src={member.media?.photos?.[0]} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-3" />
            <h3 className="text-white font-bold">{member.name}, {member.age}</h3>
            <p className="text-gray-400 text-sm">{member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ForoView = () => {
    const categories = [
      { name: 'Fantasías', topics: 1234, icon: '💭', color: 'from-pink-500 to-rose-600' },
      { name: 'Salidas', topics: 856, icon: '🚗', color: 'from-blue-500 to-indigo-600' },
      { name: 'Presentaciones', topics: 2341, icon: '👋', color: 'from-green-500 to-emerald-600' },
      { name: 'Locales', topics: 567, icon: '📍', color: 'from-yellow-500 to-amber-600' },
      { name: 'Lifestyle', topics: 1890, icon: '🌟', color: 'from-purple-500 to-violet-600' },
      { name: 'Relatos', topics: 3456, icon: '📖', color: 'from-red-500 to-pink-600' },
      { name: 'Offtopic', topics: 789, icon: '💬', color: 'from-gray-500 to-slate-600' },
      { name: 'Sexualidad', topics: 2109, icon: '❤️', color: 'from-rose-500 to-red-600' }
    ];

    return (
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Foros de Discusión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${cat.color} bg-opacity-20 rounded-xl p-6 border border-white/10 hover:border-white/30 cursor-pointer`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{cat.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{cat.topics}</div>
                  <div className="text-xs text-white/60">temas</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PlaceholderView = ({ title }) => (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400">Próximamente...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/50 to-black">
      <TopNavBar currentUser={currentUser} onNavigate={handleNavigation} />
      <MainMenu currentView={currentView} onNavigate={handleNavigation} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {['inicio', 'amigos', 'gente'].includes(currentView) && (
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          )}

          <div className={['inicio', 'amigos', 'gente'].includes(currentView) ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {currentView === 'inicio' && <InicioView />}
            {currentView === 'amigos' && <AmigosView />}
            {currentView === 'todos-amigos' && <AmigosView />}
            {currentView === 'favoritos' && <PlaceholderView title="Mis Favoritos" />}
            {currentView === 'solicitudes' && <PlaceholderView title="Solicitudes de Amistad" />}
            {currentView === 'gente' && <GenteView />}
            {currentView === 'citas' && <PlaceholderView title="Citas" />}
            {currentView === 'vacaciones' && <PlaceholderView title="Vacaciones" />}
            {currentView === 'fiestas' && <PlaceholderView title="Fiestas" />}
            {currentView === 'clubes' && <PlaceholderView title="Clubes" />}
            {currentView === 'foro' && <ForoView />}
            {currentView === 'blog' && <PlaceholderView title="Blog" />}
            {currentView === 'mensajes' && <PlaceholderView title="Mensajes" />}
            {currentView === 'avisos' && <PlaceholderView title="Avisos" />}
            {currentView === 'perfil' && <PlaceholderView title="Tu Perfil" />}
            {currentView === 'editar-perfil' && <PlaceholderView title="Editar Perfil" />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
