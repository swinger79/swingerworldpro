import React, { useState } from 'react';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CitasView = () => {
  const [region, setRegion] = useState('Cataluña');
  const [provincia, setProvincia] = useState('');
  const [expandedDays, setExpandedDays] = useState({ hoy: true });

  const regiones = [
    'Andalucía', 'Aragón', 'Asturias', 'Baleares', 'Canarias', 'Cantabria',
    "Cap d'Agde (Francia)", 'Castilla y León', 'Castilla-La Mancha', 'Cataluña',
    'Ceuta y Melilla', 'Comunidad Valenciana', 'Extremadura', 'Galicia',
    'La Rioja', 'Madrid', 'Murcia', 'Navarra', 'País Vasco'
  ];

  const provinciasPorRegion = {
    'Cataluña': ['Barcelona', 'Girona', 'Lleida', 'Tarragona'],
  };

  const diasSemana = [
    { id: 'hoy', label: 'Hoy, Jueves 8', count: 20 },
    { id: 'manana', label: 'Mañana, Viernes 9', count: 15 },
    { id: 'sabado', label: 'Sábado 10', count: 25 },
    { id: 'domingo', label: 'Domingo 11', count: 18 }
  ];

  const anuncios = [
    {
      id: 1,
      usuario: 'Laura & Carlos',
      foto: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=100',
      edades: '32 años',
      busca: 'parejas',
      ciudad: 'Barcelona',
      texto: '¡Hola! Somos pareja liberal de Madrid. Este fin de semana estaremos por Barcelona y nos encantaría conocer gente con buena vibra 🔥',
      tiempo: 'hace 2 horas',
      verificado: true
    },
    {
      id: 2,
      usuario: 'Ana & Miguel',
      foto: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=100',
      edades: '28 años',
      busca: 'parejas',
      ciudad: 'Barcelona',
      texto: 'Pareja joven y divertida busca plan para este sábado. ¿Alguna pareja se anima a tomar algo y ver qué surge? 💃🕺',
      tiempo: 'hace 3 horas',
      verificado: true
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header con degradado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold mb-3 fire-text">📅 Citas</h2>
          <p className="text-gray-400 text-lg">Encuentra el plan perfecto para hoy</p>
        </motion.div>

        {/* Filtros con glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-6 mb-6 hover-lift"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin size={24} style={{ color: 'var(--sexy-gold)' }} />
            Encuentra a alguien para quedar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sexy-gold)' }}>
                Región:
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-all"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '2px solid rgba(255,8,68,0.3)',
                  outline: 'none'
                }}
              >
                {regiones.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sexy-gold)' }}>
                Provincia:
              </label>
              <select
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white transition-all"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '2px solid rgba(255,8,68,0.3)',
                  outline: 'none'
                }}
              >
                <option value="">Todas las provincias</option>
                {provinciasPorRegion[region]?.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Botón publicar - MUY atractivo */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-5 rounded-2xl font-bold text-xl mb-8 flex items-center justify-center gap-3 fire-pulse"
          style={{
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            color: 'white',
            boxShadow: '0 10px 40px rgba(255,8,68,0.4)'
          }}
        >
          <Star size={28} />
          Publicar tu anuncio para quedar
          <Star size={28} />
        </motion.button>

        {/* Días desplegables */}
        <div className="space-y-4">
          {diasSemana.map((dia, index) => (
            <motion.div
              key={dia.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setExpandedDays(prev => ({ ...prev, [dia.id]: !prev[dia.id] }))}
                className="w-full glass rounded-2xl p-5 flex items-center justify-between transition-all hover-lift"
              >
                <div className="flex items-center gap-4">
                  <Calendar size={28} style={{ color: 'var(--sexy-gold)' }} />
                  <span className="text-2xl font-bold text-white">{dia.label}</span>
                  <span className="px-4 py-2 rounded-full font-bold" style={{
                    background: 'linear-gradient(135deg, rgba(255,8,68,0.3) 0%, rgba(255,184,0,0.3) 100%)',
                    color: 'var(--sexy-gold)'
                  }}>
                    {dia.count} anuncios
                  </span>
                </div>
                {expandedDays[dia.id] ? <ChevronUp size={28} color="#FF0844" /> : <ChevronDown size={28} color="#FF0844" />}
              </button>

              <AnimatePresence>
                {expandedDays[dia.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-4"
                  >
                    {anuncios.map(anuncio => (
                      <motion.div
                        key={anuncio.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="card-sexy overflow-hidden"
                      >
                        <div className="flex gap-4 mb-4">
                          <img
                            src={anuncio.foto}
                            alt={anuncio.usuario}
                            className="w-20 h-20 rounded-2xl object-cover"
                            style={{
                              border: '3px solid var(--sexy-gold)',
                              boxShadow: 'var(--glow-gold)'
                            }}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-xl font-bold text-white">{anuncio.usuario}</h4>
                              {anuncio.verificado && (
                                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
                                  background: 'linear-gradient(135deg, #00ff00 0%, #00cc00 100%)',
                                  boxShadow: '0 0 15px rgba(0,255,0,0.6)'
                                }}>
                                  ✓
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-sm mb-2">
                              <span style={{ color: 'var(--sexy-gold)' }}>👥 {anuncio.edades}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-400">Busca {anuncio.busca}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-400">{anuncio.ciudad}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{anuncio.texto}</p>
                          </div>
                          <span className="text-xs text-gray-500">{anuncio.tiempo}</span>
                        </div>

                        <div className="flex gap-3">
                          <button className="btn-primary flex-1">
                            Ver perfil
                          </button>
                          <button className="btn-secondary flex-1">
                            Enviar mensaje
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Consejos con diseño atractivo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--sexy-gold)' }}>
            💡 Consejos para tus anuncios
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span style={{ color: 'var(--sexy-red)' }}>•</span>
              <span>Cambia la opción de "solo este día" para que tu anuncio sea visible durante varios días</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: 'var(--sexy-red)' }}>•</span>
              <span>Da más información sobre el tipo de gente y plan que buscáis</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: 'var(--sexy-red)' }}>•</span>
              <span><strong>IMPORTANTE:</strong> Las menciones a otras redes sociales están prohibidas</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CitasView;
