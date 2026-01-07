import React, { useState } from 'react';
import { AI_MEMBERS_ENHANCED } from './data/membersAIEnhanced';
import TopNavBar from './components/navigation/TopNavBar';
import MainMenu from './components/navigation/MainMenu';
import Sidebar from './components/navigation/Sidebar';
import Footer from './components/navigation/Footer';
import InicioView from './views/InicioView';
import AmigosView from './views/AmigosView';
import RadarView from './views/RadarView';
import MatchView from './views/MatchView';

const App = () => {
  const [currentView, setCurrentView] = useState('inicio');
  const currentUser = { name: 'Usuario', notifications: 3, messages: 5 };

  const handleNavigation = (view) => {
    console.log('Navegando a:', view);
    setCurrentView(view);
  };

  const GenteView = () => (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6 fire-text">Descubre Personas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AI_MEMBERS_ENHANCED.slice(0, 12).map((member) => (
          <div key={member.id} className="rounded-xl p-4 transition-all hover:scale-105 cursor-pointer" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-red)'
          }}>
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
      { name: 'Fantasías', topics: 1234, icon: '💭', color: '#FF0844' },
      { name: 'Salidas', topics: 856, icon: '🚗', color: '#FFB800' },
      { name: 'Presentaciones', topics: 2341, icon: '👋', color: '#FF0844' },
      { name: 'Locales', topics: 567, icon: '📍', color: '#FFB800' },
      { name: 'Lifestyle', topics: 1890, icon: '🌟', color: '#FF0844' },
      { name: 'Relatos', topics: 3456, icon: '📖', color: '#FFB800' },
      { name: 'Offtopic', topics: 789, icon: '💬', color: '#FF0844' },
      { name: 'Sexualidad', topics: 2109, icon: '❤️', color: '#FFB800' }
    ];

    return (
      <div>
        <h2 className="text-3xl font-bold text-white mb-6 fire-text">Foros de Discusión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="rounded-xl p-6 cursor-pointer transition-all hover:scale-105" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-red)'
            }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{cat.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold" style={{ color: cat.color }}>{cat.topics}</div>
                  <div className="text-xs text-gray-400">temas</div>
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
      <h2 className="text-4xl font-bold text-white mb-4 fire-text">{title}</h2>
      <p className="text-gray-400">Próximamente...</p>
    </div>
  );

  const showSidebar = ['inicio', 'amigos', 'gente', 'todos-amigos'].includes(currentView);

  return (
    <div className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <TopNavBar currentUser={currentUser} onNavigate={handleNavigation} />
      <MainMenu currentView={currentView} onNavigate={handleNavigation} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {showSidebar && (
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          )}

          <div className={showSidebar ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {currentView === 'inicio' && <InicioView />}
            {currentView === 'amigos' && <AmigosView />}
            {currentView === 'todos-amigos' && <AmigosView />}
            {currentView === 'favoritos' && <PlaceholderView title="Mis Favoritos" />}
            {currentView === 'solicitudes' && <PlaceholderView title="Solicitudes de Amistad" />}
            {currentView === 'gente' && <GenteView />}
            {currentView === 'radar' && <RadarView />}
            {currentView === 'match' && <MatchView />}
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
