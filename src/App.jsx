import React, { useState } from 'react';
import TopNavBar from './components/navigation/TopNavBar';
import MainMenu from './components/navigation/MainMenu';
import Sidebar from './components/navigation/Sidebar';
import Footer from './components/navigation/Footer';
import InicioView from './views/InicioView';
import AmigosView from './views/AmigosView';
import RadarView from './views/RadarView';
import MatchView from './views/MatchView';
import GenteView from './views/GenteView';
import MensajesView from './views/MensajesView';
import EditarPerfilView from './views/EditarPerfilView';

const App = () => {
  const [currentView, setCurrentView] = useState('inicio');
  const currentUser = { name: 'Usuario', notifications: 3, messages: 5 };

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const PlaceholderView = ({ title }) => (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold text-white mb-4 fire-text">{title}</h2>
      <p className="text-gray-400">Próximamente...</p>
    </div>
  );

  const showSidebar = ['inicio', 'amigos', 'todos-amigos'].includes(currentView);

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
            {currentView === 'mensajes' && <MensajesView />}
            {currentView === 'citas' && <PlaceholderView title="Citas" />}
            {currentView === 'vacaciones' && <PlaceholderView title="Vacaciones" />}
            {currentView === 'fiestas' && <PlaceholderView title="Fiestas" />}
            {currentView === 'clubes' && <PlaceholderView title="Clubes" />}
            {currentView === 'foro' && <PlaceholderView title="Foro" />}
            {currentView === 'blog' && <PlaceholderView title="Blog" />}
            {currentView === 'avisos' && <PlaceholderView title="Avisos" />}
            {currentView === 'perfil' && <PlaceholderView title="Tu Perfil" />}
            {currentView === 'editar-perfil' && <EditarPerfilView />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
