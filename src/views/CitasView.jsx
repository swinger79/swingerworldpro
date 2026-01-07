import React, { useState } from 'react';
import { Calendar, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react';

const CitasView = () => {
  const [region, setRegion] = useState('Cataluña');
  const [provincia, setProvincia] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [expandedDays, setExpandedDays] = useState({});

  const regiones = [
    'Andalucía', 'Aragón', 'Asturias', 'Baleares', 'Canarias', 'Cantabria',
    "Cap d'Agde (Francia)", 'Castilla y León', 'Castilla-La Mancha', 'Cataluña',
    'Ceuta y Melilla', 'Comunidad Valenciana', 'Extremadura', 'Galicia',
    'La Rioja', 'Madrid', 'Murcia', 'Navarra', 'País Vasco'
  ];

  const provinciasPorRegion = {
    'Cataluña': ['Barcelona', 'Girona', 'Lleida', 'Tarragona'],
    'Andalucía': ['Almería', 'Cádiz', 'Córdoba', 'Granada', 'Huelva', 'Jaén', 'Málaga', 'Sevilla'],
    'Madrid': ['Madrid'],
    'País Vasco': ['Araba', 'Gipuzkoa', 'Bizkaia']
  };

  const diasSemana = [
    { id: 'hoy', label: 'Hoy, Jueves 8', count: 20 },
    { id: 'manana', label: 'Mañana, Viernes 9', count: 15 },
    { id: 'sabado', label: 'Sábado 10', count: 25 },
    { id: 'domingo', label: 'Domingo 11', count: 18 },
    { id: 'lunes', label: 'Lunes 12', count: 8 },
    { id: 'martes', label: 'Martes 13', count: 12 },
    { id: 'miercoles', label: 'Miércoles 14', count: 10 }
  ];

  const anuncios = [
    {
      id: 1,
      usuario: 'Nuevosmundos69',
      edades: '44 hetero y 40 bi',
      busca: 'parejas',
      ciudad: 'Barcelona, Barcelona',
      texto: 'Hola!! Somos pareja sobre los 40. Este sábado estaremos libres ( sin niños ) por Barcelona. Alguna chica...',
      tiempo: 'hace 3 horas',
      verificado: true
    },
    {
      id: 2,
      usuario: 'Alejandro36',
      edades: '37 bi',
      busca: 'gente',
      ciudad: 'Barcelona, Barcelona',
      texto: 'Hola buenas noches. Del 25 al 28 de Enero estaré por Barcelona y molaría poder conocer gente para tomar...',
      tiempo: 'hace 3 horas',
      verificado: true
    },
    {
      id: 3,
      usuario: 'chicoliberal29',
      edades: '43 bi',
      busca: 'parejas',
      ciudad: 'Barcelona',
      texto: 'Libre desde jueves a domingo a partir de las 17, tomamos algo y si hay feeling seguimos disfrutando juntos?',
      tiempo: 'hace 4 horas',
      verificado: true
    }
  ];

  const toggleDay = (dayId) => {
    setExpandedDays(prev => ({ ...prev, [dayId]: !prev[dayId] }));
  };

  const inputStyle = {
    background: 'rgba(26,26,26,0.8)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '8px',
    padding: '10px 12px',
    color: 'white',
    width: '100%'
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 fire-text">📅 Citas</h2>

        {/* Filtros */}
        <div className="rounded-xl p-6 mb-6" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)'
        }}>
          <h3 className="text-xl font-bold text-white mb-4">Encuentra a alguien para quedar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Región */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sexy-gold)' }}>
                En:
              </label>
              <select
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                  setProvincia('');
                }}
                style={inputStyle}
              >
                {regiones.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Provincia */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sexy-gold)' }}>
                Provincia:
              </label>
              <select
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                style={inputStyle}
              >
                <option value="">-- Todas las provincias --</option>
                {provinciasPorRegion[region]?.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Ciudad */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sexy-gold)' }}>
                Ciudad (opcional):
              </label>
              <input
                type="text"
                placeholder="Escribe ciudad..."
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* Botón Publicar Anuncio */}
        <div className="mb-6">
          <button
            className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              color: 'white'
            }}
          >
            <Calendar size={24} />
            Publicar tu anuncio para quedar
          </button>
        </div>

        {/* Título de anuncios */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Anuncios para quedar en {region}
          </h3>
          <p className="text-gray-400 text-sm">
            Como hay muchos anuncios, te hemos colapsado los días. Haz click en el día que te interese.
          </p>
        </div>

        {/* Lista de días */}
        <div className="space-y-4">
          {diasSemana.map(dia => (
            <div key={dia.id}>
              {/* Header del día */}
              <button
                onClick={() => toggleDay(dia.id)}
                className="w-full rounded-xl p-4 flex items-center justify-between transition-all"
                style={{
                  background: expandedDays[dia.id] ? 'rgba(255,8,68,0.1)' : 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div className="flex items-center gap-3">
                  <Calendar size={24} style={{ color: 'var(--sexy-gold)' }} />
                  <span className="text-xl font-bold text-white">{dia.label}</span>
                  <span className="text-sm px-3 py-1 rounded-full" style={{
                    background: 'rgba(255,184,0,0.2)',
                    color: 'var(--sexy-gold)'
                  }}>
                    {dia.count} anuncios
                  </span>
                </div>
                {expandedDays[dia.id] ? (
                  <ChevronUp size={24} style={{ color: 'var(--sexy-red)' }} />
                ) : (
                  <ChevronDown size={24} style={{ color: 'var(--sexy-red)' }} />
                )}
              </button>

              {/* Anuncios del día */}
              {expandedDays[dia.id] && (
                <div className="mt-4 space-y-4">
                  {anuncios.map(anuncio => (
                    <div
                      key={anuncio.id}
                      className="rounded-xl p-6"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {anuncio.verificado && (
                            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                              background: 'rgba(0,255,0,0.2)',
                              border: '2px solid #00ff00'
                            }}>
                              ✓
                            </div>
                          )}
                          <div>
                            <h4 className="text-lg font-bold text-white">
                              {anuncio.usuario} ({anuncio.edades})
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Users size={14} />
                              <span>busca {anuncio.busca}</span>
                              <MapPin size={14} className="ml-2" />
                              <span>{anuncio.ciudad}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">{anuncio.tiempo}</span>
                      </div>

                      <p className="text-gray-300 mb-4">"{anuncio.texto}"</p>

                      <div className="flex gap-2">
                        <button
                          className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                          style={{
                            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                            color: 'white'
                          }}
                        >
                          Ver perfil
                        </button>
                        <button
                          className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                          style={{
                            background: 'rgba(255,184,0,0.2)',
                            color: 'var(--sexy-gold)',
                            border: '1px solid rgba(255,184,0,0.3)'
                          }}
                        >
                          Enviar mensaje
                        </button>
                        <button className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white transition-colors">
                          Ocultar anuncio
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Consejos */}
        <div className="mt-8 rounded-xl p-6" style={{
          background: 'rgba(255,184,0,0.1)',
          border: '1px solid rgba(255,184,0,0.3)'
        }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>
            💡 Consejos
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Cambia la opción de "solo este día" para que tu anuncio sea visible durante varios días.</li>
            <li>• Utiliza el campo "Detalles" para dar más información sobre el tipo de gente y plan que buscáis.</li>
            <li>• Si vais a salir fuera del país, podéis usar el sistema de vacaciones.</li>
            <li>• Utiliza las fechas como es debido o borraremos tu anuncio.</li>
            <li>• <strong>IMPORTANTE:</strong> Las menciones a otras redes sociales están totalmente prohibidas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CitasView;
