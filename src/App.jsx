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
import OrganizarFotosView from './views/OrganizarFotosView';
import OrganizarVideosView from './views/OrganizarVideosView';
import PerfilPublicoView from './views/PerfilPublicoView';
import PremiumPlans from './components/PremiumPlans';
import CheckoutView from './views/CheckoutView';

const App = () => {
  const [currentView, setCurrentView] = useState('inicio');
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userSubscription, setUserSubscription] = useState(null);
  
  const currentUser = { 
    name: 'Usuario', 
    notifications: 3, 
    messages: 5,
    isPremium: !!userSubscription
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const handleSelectPlan = (planInfo) => {
    setSelectedPlan(planInfo);
    setShowPremiumModal(false);
    setCurrentView('checkout');
  };

  const handlePaymentComplete = (paymentInfo) => {
    setUserSubscription(paymentInfo);
    setCurrentView('inicio');
    
    // Mostrar notificación de éxito
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 32px;">🎉</span>
        <div>
          <p style="font-weight: bold; margin: 0;">¡Bienvenido a Premium!</p>
          <p style="margin: 0; font-size: 14px;">Ya puedes disfrutar de todas las funciones</p>
        </div>
      </div>
    `;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #FF0844 0%, #FFB800 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      z-index: 9999;
      box-shadow: 0 4px 20px rgba(255,8,68,0.4);
      max-width: 400px;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
  };

  const PlaceholderView = ({ title }) => (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold text-white mb-4 fire-text">{title}</h2>
      <p className="text-gray-400">Próximamente...</p>
    </div>
  );

  const showSidebar = !['perfil', 'organizar-fotos', 'organizar-videos', 'perfil-publico', 'checkout'].includes(currentView);

  return (
    <div className="min-h-screen" style={{ 
      background: 'radial-gradient(circle at 20% 20%, rgba(255,8,68,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,184,0,0.1) 0%, transparent 50%), #0A0A0A'
    }}>
      <TopNavBar 
        currentUser={currentUser} 
        onNavigate={handleNavigation}
        onShowPremium={() => setShowPremiumModal(true)}
      />
      <MainMenu currentView={currentView} onNavigate={handleNavigation} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'checkout' ? (
          <CheckoutView
            planInfo={selectedPlan}
            onBack={() => {
              setCurrentView('inicio');
              setShowPremiumModal(true);
            }}
            onComplete={handlePaymentComplete}
          />
        ) : ['perfil', 'organizar-fotos', 'organizar-videos', 'perfil-publico'].includes(currentView) ? (
          <>
            {currentView === 'perfil' && <PerfilView onNavigate={handleNavigation} />}
            {currentView === 'organizar-fotos' && <OrganizarFotosView />}
            {currentView === 'organizar-videos' && <OrganizarVideosView />}
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {showSidebar && (
              <div className="lg:col-span-1">
                <Sidebar onNavigate={handleNavigation} />
              </div>
            )}

            <div className={showSidebar ? 'lg:col-span-3' : 'lg:col-span-4'}>
              {currentView === 'inicio' && <InicioView onNavigate={handleNavigation} />}
              {currentView === 'amigos' && <AmigosView onNavigate={handleNavigation} />}
              {currentView === 'todos-amigos' && <AmigosView onNavigate={handleNavigation} />}
              {currentView === 'favoritos' && <PlaceholderView title="Mis Favoritos" />}
              {currentView === 'solicitudes' && <PlaceholderView title="Solicitudes de Amistad" />}
              {currentView === 'gente' && <GenteView onNavigate={handleNavigation} />}
              {currentView === 'radar' && <RadarView />}
              {currentView === 'match' && <MatchView onNavigate={handleNavigation} />}
              {currentView === 'mensajes' && <MensajesView isPremium={userSubscription?.planId !== 'basic'} />}
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

      {showPremiumModal && (
        <PremiumPlans
          onClose={() => setShowPremiumModal(false)}
          onSelectPlan={handleSelectPlan}
        />
      )}
    </div>
  );
};

export default App;
