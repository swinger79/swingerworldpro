import React, { useState } from 'react';
import { Zap, Shield, Users, Calendar, Heart, Star, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = ({ onLogin, onRegister }) => {
  const testimonios = [
    { nombre: "Ana & Carlos", ciudad: "Madrid", texto: "Llevamos 2 años en la plataforma. ¡Increíble comunidad!", rating: 5 },
    { nombre: "Laura M.", ciudad: "Barcelona", texto: "Eventos exclusivos y gente respetuosa. Lo recomiendo 100%", rating: 5 },
    { nombre: "Miguel & Sofia", ciudad: "Valencia", texto: "La mejor app para parejas liberales en España", rating: 5 }
  ];

  const eventos = [
    { titulo: "Fiesta VIP Barcelona", fecha: "Sáb 11 Ene", asistentes: 45, img: "blur" },
    { titulo: "Pool Party Marbella", fecha: "Vie 17 Ene", asistentes: 32, img: "blur" },
    { titulo: "Cena Exclusiva Madrid", fecha: "Sáb 18 Ene", asistentes: 28, img: "blur" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,8,68,0.3) 0%, rgba(0,0,0,1) 70%)'
        }} />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-8xl">🔥</span>
            </div>
            <h1 className="text-7xl font-bold mb-6 fire-text">
              Swinger World
            </h1>
            <p className="text-3xl text-gray-300 mb-8">
              La Comunidad Premium #1 para Parejas Liberales
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Conecta con miles de parejas y personas de mente abierta. 
              Eventos exclusivos, chat seguro y una comunidad verificada.
            </p>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={onRegister}
                className="px-8 py-4 rounded-xl font-bold text-xl flex items-center gap-3 hover:scale-105 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(255,8,68,0.4)'
                }}
              >
                Únete Gratis
                <ChevronRight size={24} />
              </button>
              <button
                onClick={onLogin}
                className="px-8 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '2px solid rgba(255,8,68,0.5)'
                }}
              >
                Iniciar Sesión
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Users, number: "50,000+", label: "Miembros Activos" },
            { icon: Calendar, number: "500+", label: "Eventos Mensuales" },
            { icon: Shield, number: "98%", label: "Perfiles Verificados" },
            { icon: Heart, number: "4.9/5", label: "Valoración Media" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,8,68,0.1) 0%, rgba(255,184,0,0.1) 100%)',
                border: '2px solid rgba(255,8,68,0.3)'
              }}
            >
              <stat.icon size={48} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
              <p className="text-5xl font-bold mb-2" style={{ color: 'var(--sexy-red)' }}>
                {stat.number}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Eventos Próximos (Difuminados) */}
      <div className="py-20 px-4" style={{ background: 'rgba(255,8,68,0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 fire-text">
            Próximos Eventos Exclusivos
          </h2>
          <p className="text-center text-gray-400 mb-12 text-xl">
            Regístrate para ver todos los detalles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventos.map((evento, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1010 100%)',
                  border: '2px solid rgba(255,8,68,0.3)'
                }}
              >
                <div className="h-48 relative" style={{ filter: 'blur(8px)' }}>
                  <img
                    src={`https://picsum.photos/400/300?random=${idx}`}
                    alt="Evento"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Shield size={48} className="mx-auto mb-2" style={{ color: 'var(--sexy-gold)' }} />
                    <p className="text-white font-bold">Solo para Miembros</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{evento.titulo}</h3>
                  <p className="text-gray-400 mb-2">{evento.fecha}</p>
                  <p className="text-sm" style={{ color: 'var(--sexy-gold)' }}>
                    {evento.asistentes} asistentes confirmados
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onRegister}
              className="px-8 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all"
              style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                color: 'white'
              }}
            >
              Ver Todos los Eventos
            </button>
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 fire-text">
            Lo que dicen nuestros miembros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1010 100%)',
                  border: '2px solid rgba(255,8,68,0.3)'
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonio.rating }).map((_, i) => (
                    <Star key={i} size={20} fill="var(--sexy-gold)" style={{ color: 'var(--sexy-gold)' }} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonio.texto}"</p>
                <div>
                  <p className="text-white font-bold">{testimonio.nombre}</p>
                  <p className="text-sm text-gray-400">{testimonio.ciudad}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 fire-text">
            ¿Listo para empezar?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Únete a miles de parejas y personas que ya disfrutan de la comunidad
          </p>
          <button
            onClick={onRegister}
            className="px-12 py-6 rounded-xl font-bold text-2xl hover:scale-105 transition-all fire-pulse"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              color: 'white',
              boxShadow: '0 8px 32px rgba(255,8,68,0.6)'
            }}
          >
            Crear Cuenta Gratis
          </button>
          <p className="text-gray-500 mt-6">
            ✓ Sin tarjeta de crédito  ✓ Registro en 2 minutos  ✓ 100% Seguro
          </p>
        </div>
      </div>

      {/* Footer Simple */}
      <div className="py-8 px-4 border-t" style={{ borderColor: 'rgba(255,8,68,0.3)' }}>
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Swinger World. Todos los derechos reservados.</p>
          <p className="mt-2">Solo para mayores de 18 años. Uso responsable y consentido.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
