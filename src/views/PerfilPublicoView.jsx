import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Heart, Eye, Flag, Ban, UserPlus, Share2, MapPin } from 'lucide-react';
import TrustBadge from '../components/TrustBadge';
import VerificationBadge from '../components/VerificationBadge';
import ReportModal from './ReportModal';
import BlockUserModal from './BlockUserModal';

const PerfilPublicoView = ({ miembro, onNavigate, onBack }) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [isFriend, setIsFriend] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!miembro) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Perfil no encontrado</p>
      </div>
    );
  }

  const handleSendMessage = () => {
    onNavigate('mensajes', miembro);
  };

  const handleAddFriend = async () => {
    try {
      const response = await fetch(`/api/friends/request/${miembro.id}`, {
        method: 'POST'
      });
      if (response.ok) {
        setIsFriend(true);
        alert('Solicitud de amistad enviada');
      }
    } catch (error) {
      alert('Error al enviar solicitud');
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Perfil de ${miembro.name}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Botón volver */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-white hover:scale-105 transition-all"
        >
          <ArrowLeft size={24} />
          <span className="font-bold">Volver</span>
        </button>

        {/* Header del perfil */}
        <div className="card-sexy p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Foto principal */}
            <div className="relative">
              <img
                src={miembro.media?.photos?.[0]}
                alt={miembro.name}
                className="w-64 h-64 object-cover rounded-2xl"
                style={{
                  border: '3px solid var(--sexy-gold)',
                  boxShadow: 'var(--glow-gold)'
                }}
              />
              {miembro.status === 'online' && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-2"
                  style={{ background: 'rgba(0,255,0,0.9)', color: '#000' }}
                >
                  ● Online
                </div>
              )}
              <div className="absolute top-4 right-4">
                <TrustBadge
                  trustScore={miembro.trustScore}
                  trustLevel={miembro.trustLevel}
                  size="md"
                />
              </div>
            </div>

            {/* Información principal */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">{miembro.name}</h1>
                  <div className="flex items-center gap-3 mb-3">
                    <VerificationBadge level={miembro.verified ? 'verified' : 'unverified'} />
                    {miembro.premium && <VerificationBadge level="premium" />}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <MapPin size={18} />
                    <span>{miembro.location}</span>
                  </div>
                </div>

                <button
                  onClick={handleToggleFavorite}
                  className="p-3 rounded-full hover:scale-110 transition-all"
                  style={{
                    background: isFavorite ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)' : 'rgba(255,255,255,0.1)'
                  }}
                >
                  <Heart size={24} fill={isFavorite ? 'white' : 'none'} color="white" />
                </button>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255,8,68,0.1)' }}>
                  <p className="text-2xl font-bold text-white">{miembro.age}</p>
                  <p className="text-sm text-gray-400">Años</p>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255,184,0,0.1)' }}>
                  <p className="text-2xl font-bold" style={{ color: 'var(--sexy-gold)' }}>
                    {miembro.trustScore}
                  </p>
                  <p className="text-sm text-gray-400">Trust Score</p>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255,8,68,0.1)' }}>
                  <p className="text-2xl font-bold text-white">246</p>
                  <p className="text-sm text-gray-400">Amigos</p>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255,184,0,0.1)' }}>
                  <p className="text-2xl font-bold" style={{ color: 'var(--sexy-gold)' }}>
                    {miembro.media?.photos?.length || 0}
                  </p>
                  <p className="text-sm text-gray-400">Fotos</p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleSendMessage}
                  className="py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                    color: 'white'
                  }}
                >
                  <MessageCircle size={20} />
                  Enviar Mensaje
                </button>

                <button
                  onClick={handleAddFriend}
                  disabled={isFriend}
                  className="py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                  style={{
                    background: isFriend ? 'rgba(100,100,100,0.3)' : 'rgba(255,8,68,0.2)',
                    color: 'white',
                    border: '2px solid rgba(255,8,68,0.5)',
                    cursor: isFriend ? 'not-allowed' : 'pointer'
                  }}
                >
                  <UserPlus size={20} />
                  {isFriend ? 'Solicitud Enviada' : 'Añadir Amigo'}
                </button>

                <button
                  onClick={() => alert('Guiño enviado!')}
                  className="py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                  style={{
                    background: 'rgba(255,184,0,0.2)',
                    color: 'var(--sexy-gold)',
                    border: '2px solid rgba(255,184,0,0.5)'
                  }}
                >
                  <Eye size={20} />
                  Guiñar
                </button>

                <button
                  onClick={handleShare}
                  className="py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white'
                  }}
                >
                  <Share2 size={20} />
                  Compartir
                </button>
              </div>

              {/* Botones adicionales */}
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setShowReportModal(true)}
                  className="flex-1 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
                  style={{
                    background: 'rgba(255,0,0,0.1)',
                    color: '#ff4444',
                    border: '1px solid rgba(255,0,0,0.3)'
                  }}
                >
                  <Flag size={16} />
                  Reportar
                </button>

                <button
                  onClick={() => setShowBlockModal(true)}
                  className="flex-1 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
                  style={{
                    background: 'rgba(255,0,0,0.1)',
                    color: '#ff4444',
                    border: '1px solid rgba(255,0,0,0.3)'
                  }}
                >
                  <Ban size={16} />
                  Bloquear
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="card-sexy mb-6">
          <div className="flex gap-4 border-b" style={{ borderColor: 'rgba(255,8,68,0.3)' }}>
            {[
              { id: 'about', label: 'Sobre mí' },
              { id: 'photos', label: 'Fotos' },
              { id: 'preferences', label: 'Preferencias' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-4 font-bold transition-all"
                style={{
                  color: activeTab === tab.id ? 'var(--sexy-red)' : '#999',
                  borderBottom: activeTab === tab.id ? '3px solid var(--sexy-red)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Descripción</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {miembro.bio || 'Este usuario no ha añadido una descripción todavía.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Intereses</h3>
                  <div className="flex flex-wrap gap-2">
                    {miembro.personalityTraits?.map((trait, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm font-bold"
                        style={{
                          background: 'rgba(255,8,68,0.2)',
                          color: 'var(--sexy-gold)'
                        }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="grid grid-cols-3 gap-4">
                {miembro.media?.photos?.map((foto, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all"
                    style={{
                      border: '2px solid rgba(255,8,68,0.3)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}
                  >
                    <img
                      src={foto}
                      alt={`Foto ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold mb-2">Busca:</h4>
                  <p className="text-gray-300">{miembro.lookingFor || 'No especificado'}</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Experiencia:</h4>
                  <p className="text-gray-300">{miembro.experience || 'No especificado'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modales */}
      <ReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        reportedUser={miembro}
        reportedType="user"
      />

      <BlockUserModal
        isOpen={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        user={miembro}
        onBlock={(userId) => {
          console.log('Usuario bloqueado:', userId);
          onBack();
        }}
      />
    </div>
  );
};

export default PerfilPublicoView;
