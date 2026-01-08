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
import CitasView from './views/CitasView';
import PerfilView from './views/PerfilView';

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

  const showSidebar = currentView === 'perfil' ? false : true;

  return (
    <div className="min-h-screen" style={{ 
      background: 'radial-gradient(circle at 20% 20%, rgba(255,8,68,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,184,0,0.1) 0%, transparent 50%), #0A0A0A'
    }}>
      <TopNavBar currentUser={currentUser} onNavigate={handleNavigation} />
      <MainMenu currentView={currentView} onNavigate={handleNavigation} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'perfil' ? (
          <PerfilView onNavigate={handleNavigation} />
        ) : (
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
              {currentView === 'match' && <MatchView onNavigate={handleNavigation} />}
              {currentView === 'mensajes' && <MensajesView />}
              {currentView === 'citas' && <CitasView />}
              {currentView === 'fiestas' && <PlaceholderView title="Fiestas" />}
              {currentView === 'clubes' && <PlaceholderView title="Clubes" />}
              {currentView === 'foro' && <PlaceholderView title="Foro" />}
              {currentView === 'blog' && <PlaceholderView title="Blog" />}
              {currentView === 'avisos' && <PlaceholderView title="Avisos" />}
              {currentView === 'editar-perfil' && <EditarPerfilView />}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
