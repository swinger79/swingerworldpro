import React, { useState } from 'react';
import { Check, Star, Crown, Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumPlans = ({ onClose, onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const planes = [
    {
      id: 'basic',
      nombre: 'Basic',
      icono: Star,
      color: '#FFB800',
      precios: {
        monthly: 9.99,
        quarterly: 24.99,
        yearly: 89.99
      },
      ahorros: {
        quarterly: '17%',
        yearly: '25%'
      },
      caracteristicas: [
        'Ver perfiles completos',
        '50 mensajes al mes',
        'Búsqueda avanzada',
        'Ver quién visitó tu perfil',
        'Subir hasta 10 fotos',
        'Badge Basic en perfil'
      ]
    },
    {
      id: 'gold',
      nombre: 'Gold',
      icono: Crown,
      color: '#FFB800',
      destacado: true,
      precios: {
        monthly: 19.99,
        quarterly: 49.99,
        yearly: 179.99
      },
      ahorros: {
        quarterly: '17%',
        yearly: '25%'
      },
      caracteristicas: [
        'Todo lo de Basic +',
        'Mensajes ILIMITADOS',
        'Videollamadas HD',
        'Ver quién te dio like',
        'Subir hasta 50 fotos',
        'Destacar perfil en búsquedas',
        'Badge Gold premium',
        'Sin anuncios',
        'Acceso a eventos exclusivos'
      ]
    },
    {
      id: 'platinum',
      nombre: 'Platinum',
      icono: Zap,
      color: '#FF0844',
      precios: {
        monthly: 29.99,
        quarterly: 74.99,
        yearly: 269.99
      },
      ahorros: {
        quarterly: '17%',
        yearly: '25%'
      },
      caracteristicas: [
        'Todo lo de Gold +',
        'Perfil DESTACADO siempre',
        'Fotos y videos ILIMITADOS',
        'Verificación prioritaria',
        'Soporte VIP 24/7',
        'Acceso a fiestas VIP',
        'Badge Platinum elite',
        'Aparece primero en búsquedas',
        'Ver mensajes antes de match',
        'Invitaciones a clubes exclusivos'
      ]
    }
  ];

  const getPrecio = (plan) => {
    return plan.precios[billingCycle];
  };

  const getAhorro = (plan) => {
    return plan.ahorros?.[billingCycle] || null;
  };

  const handleSelectPlan = (plan) => {
    const precio = getPrecio(plan);
    const ciclo = billingCycle === 'monthly' ? 'mensual' : billingCycle === 'quarterly' ? 'trimestral' : 'anual';
    
    if (onSelectPlan) {
      onSelectPlan({
        planId: plan.id,
        planNombre: plan.nombre,
        precio: precio,
        ciclo: ciclo,
        billingCycle: billingCycle
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{
      background: 'rgba(0,0,0,0.95)'
    }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-7xl w-full rounded-3xl p-8 relative overflow-y-auto max-h-[90vh]"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1010 100%)',
          border: '2px solid rgba(255,8,68,0.5)',
          boxShadow: '0 20px 60px rgba(255,8,68,0.6)'
        }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.8)',
            border: '2px solid rgba(255,8,68,0.5)'
          }}
        >
          <X size={24} color="white" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4 fire-text">
            💎 Hazte Premium
          </h2>
          <p className="text-xl text-gray-300">
            Desbloquea todas las funciones y disfruta al máximo
          </p>
        </div>

        {/* Selector de ciclo de facturación */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setBillingCycle('monthly')}
            className="px-6 py-3 rounded-lg font-bold transition-all"
            style={{
              background: billingCycle === 'monthly' ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)' : 'rgba(255,255,255,0.1)',
              color: 'white'
            }}
          >
            Mensual
          </button>
          <button
            onClick={() => setBillingCycle('quarterly')}
            className="px-6 py-3 rounded-lg font-bold transition-all relative"
            style={{
              background: billingCycle === 'quarterly' ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)' : 'rgba(255,255,255,0.1)',
              color: 'white'
            }}
          >
            Trimestral
            <span className="absolute -top-2 -right-2 px-2 py-1 text-xs rounded-full" style={{
              background: '#00ff00',
              color: '#000'
            }}>
              -17%
            </span>
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className="px-6 py-3 rounded-lg font-bold transition-all relative"
            style={{
              background: billingCycle === 'yearly' ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)' : 'rgba(255,255,255,0.1)',
              color: 'white'
            }}
          >
            Anual
            <span className="absolute -top-2 -right-2 px-2 py-1 text-xs rounded-full" style={{
              background: '#00ff00',
              color: '#000'
            }}>
              -25%
            </span>
          </button>
        </div>

        {/* Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planes.map((plan) => {
            const Icon = plan.icono;
            const ahorro = getAhorro(plan);
            
            return (
              <motion.div
                key={plan.id}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-2xl p-6 relative"
                style={{
                  background: plan.destacado 
                    ? 'linear-gradient(135deg, rgba(255,8,68,0.2) 0%, rgba(255,184,0,0.2) 100%)'
                    : 'rgba(30,30,30,0.8)',
                  border: plan.destacado 
                    ? '3px solid var(--sexy-gold)'
                    : '2px solid rgba(255,8,68,0.3)',
                  boxShadow: plan.destacado 
                    ? '0 20px 60px rgba(255,184,0,0.4)'
                    : '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                {plan.destacado && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                      color: 'white'
                    }}
                  >
                    MÁS POPULAR
                  </div>
                )}

                {ahorro && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: '#00ff00',
                      color: '#000'
                    }}
                  >
                    AHORRA {ahorro}
                  </div>
                )}

                <div className="text-center mb-6">
                  <Icon size={48} style={{ color: plan.color }} className="mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.nombre}</h3>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold" style={{ color: plan.color }}>
                      €{getPrecio(plan)}
                    </span>
                    <span className="text-gray-400 mb-2">
                      /{billingCycle === 'monthly' ? 'mes' : billingCycle === 'quarterly' ? '3 meses' : 'año'}
                    </span>
                  </div>
                  {billingCycle !== 'monthly' && (
                    <p className="text-sm text-gray-400">
                      €{(getPrecio(plan) / (billingCycle === 'quarterly' ? 3 : 12)).toFixed(2)}/mes
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {plan.caracteristicas.map((caracteristica, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={20} style={{ color: plan.color }} className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-200">{caracteristica}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSelectPlan(plan)}
                  className="w-full py-3 rounded-lg font-bold text-lg transition-all hover:scale-105"
                  style={{
                    background: plan.destacado 
                      ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)'
                      : 'rgba(255,8,68,0.2)',
                    color: 'white',
                    border: `2px solid ${plan.color}`
                  }}
                >
                  Seleccionar Plan
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Beneficios adicionales */}
        <div className="mt-8 p-6 rounded-2xl" style={{
          background: 'rgba(255,8,68,0.1)',
          border: '1px solid rgba(255,8,68,0.3)'
        }}>
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            ✨ Todos los planes incluyen:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl mb-2">🔒</p>
              <p className="text-sm text-gray-300">Pago seguro</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🔄</p>
              <p className="text-sm text-gray-300">Cancela cuando quieras</p>
            </div>
            <div>
              <p className="text-3xl mb-2">💯</p>
              <p className="text-sm text-gray-300">Garantía de satisfacción</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PremiumPlans;
