import React, { useState } from 'react';
import { Search, Sliders, MapPin, Calendar, Heart, Users, Filter } from 'lucide-react';
import TODOS_MIEMBROS from '../data/memberGenerator';
import TrustBadge from '../components/TrustBadge';

const BusquedaAvanzada = ({ onNavigate }) => {
  const [filters, setFilters] = useState({
    distancia: 100,
    edadMin: 18,
    edadMax: 65,
    tipo: 'todos',
    verificados: false,
    premium: false,
    disponibilidad: 'todos',
    buscando: [],
    caracteristicas: []
  });

  const [showFilters, setShowFilters] = useState(true);
  const [resultados, setResultados] = useState(TODOS_MIEMBROS.slice(0, 20));

  const aplicarFiltros = () => {
    let filtered = [...TODOS_MIEMBROS];

    // Filtro por tipo
    if (filters.tipo !== 'todos') {
      filtered = filtered.filter(m => m.type === filters.tipo);
    }

    // Filtro por edad
    filtered = filtered.filter(m => 
      m.age >= filters.edadMin && m.age <= filters.edadMax
    );

    // Filtro verificados
    if (filters.verificados) {
      filtered = filtered.filter(m => m.verified);
    }

    // Filtro premium
    if (filters.premium) {
      filtered = filtered.filter(m => m.premium);
    }

    setResultados(filtered.slice(0, 50));
  };

  const opcionesBuscando = [
    'Parejas', 'Mujeres', 'Hombres', 'Tríos', 'Intercambio', 
    'Soft Swap', 'Full Swap', 'Same Room', 'Separate Room',
    'Voyeurismo', 'Exhibicionismo', 'Fiestas', 'Eventos'
  ];

  const caracteristicasFisicas = [
    'Atlético', 'Delgado', 'Normal', 'Corpulento', 'BBW',
    'Tatuajes', 'Piercings', 'Pelo Largo', 'Pelo Corto',
    'Rubio', 'Moreno', 'Pelirrojo', 'Calvo'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="card-sexy p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <Search size={36} style={{ color: 'var(--sexy-red)' }} />
                Búsqueda Avanzada
              </h1>
              <p className="text-gray-400">The Matrix - Encuentra exactamente lo que buscas</p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
              style={{
                background: showFilters ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)' : 'rgba(255,255,255,0.1)',
                color: 'white'
              }}
            >
              <Filter size={20} />
              {showFilters ? 'Ocultar' : 'Mostrar'} Filtros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Panel de Filtros */}
          {showFilters && (
            <div className="lg:col-span-1 space-y-6">
              {/* Distancia */}
              <div className="card-sexy">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin size={20} style={{ color: 'var(--sexy-gold)' }} />
                  Distancia
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm">Radio:</span>
                    <span className="text-white font-bold">{filters.distancia}km</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    value={filters.distancia}
                    onChange={(e) => setFilters({ ...filters, distancia: parseInt(e.target.value) })}
                    className="w-full"
                    style={{ accentColor: 'var(--sexy-red)' }}
                  />
                </div>
              </div>

              {/* Edad */}
              <div className="card-sexy">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar size={20} style={{ color: 'var(--sexy-gold)' }} />
                  Rango de Edad
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Mínima: {filters.edadMin}</label>
                    <input
                      type="range"
                      min="18"
                      max="70"
                      value={filters.edadMin}
                      onChange={(e) => setFilters({ ...filters, edadMin: parseInt(e.target.value) })}
                      className="w-full"
                      style={{ accentColor: 'var(--sexy-red)' }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Máxima: {filters.edadMax}</label>
                    <input
                      type="range"
                      min="18"
                      max="70"
                      value={filters.edadMax}
                      onChange={(e) => setFilters({ ...filters, edadMax: parseInt(e.target.value) })}
                      className="w-full"
                      style={{ accentColor: 'var(--sexy-red)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Tipo de Perfil */}
              <div className="card-sexy">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Users size={20} style={{ color: 'var(--sexy-gold)' }} />
                  Tipo de Perfil
                </h3>
                <select
                  value={filters.tipo}
                  onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{
                    background: 'rgba(20,20,20,0.9)',
                    border: '2px solid rgba(255,8,68,0.4)',
                    color: 'white'
                  }}
                >
                  <option value="todos">Todos</option>
                  <option value="pareja">Parejas</option>
                  <option value="mujer">Mujeres</option>
                  <option value="hombre">Hombres</option>
                </select>
              </div>

              {/* Verificación */}
              <div className="card-sexy">
                <h3 className="font-bold text-white mb-4">Verificación</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.verificados}
                      onChange={(e) => setFilters({ ...filters, verificados: e.target.checked })}
                      className="w-5 h-5"
                      style={{ accentColor: 'var(--sexy-red)' }}
                    />
                    <span className="text-white">Solo verificados</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.premium}
                      onChange={(e) => setFilters({ ...filters, premium: e.target.checked })}
                      className="w-5 h-5"
                      style={{ accentColor: 'var(--sexy-red)' }}
                    />
                    <span className="text-white">Solo premium</span>
                  </label>
                </div>
              </div>

              {/* Buscan */}
              <div className="card-sexy">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Heart size={20} style={{ color: 'var(--sexy-gold)' }} />
                  Buscan
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {opcionesBuscando.map((opcion, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      <span className="text-sm text-white">{opcion}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Características */}
              <div className="card-sexy">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Sliders size={20} style={{ color: 'var(--sexy-gold)' }} />
                  Características
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {caracteristicasFisicas.map((caracteristica, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      <span className="text-sm text-white">{caracteristica}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Botón Aplicar */}
              <button
                onClick={aplicarFiltros}
                className="w-full py-4 rounded-lg font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                  color: 'white'
                }}
              >
                Aplicar Filtros
              </button>
            </div>
          )}

          {/* Resultados */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="card-sexy p-6 mb-6">
              <p className="text-white font-bold text-lg">
                {resultados.length} resultados encontrados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultados.map((miembro) => (
                <div
                  key={miembro.id}
                  onClick={() => onNavigate('perfil-publico', miembro)}
                  className="card-sexy p-0 overflow-hidden cursor-pointer hover:scale-105 transition-all"
                >
                  <div className="relative h-64">
                    <img
                      src={miembro.media?.photos?.[0]}
                      alt={miembro.name}
                      className="w-full h-full object-cover"
                    />
                    {miembro.status === 'online' && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-2"
                        style={{
                          background: 'rgba(0,255,0,0.9)',
                          color: '#000'
                        }}
                      >
                        ● Online
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <TrustBadge
                        trustScore={miembro.trustScore}
                        trustLevel={miembro.trustLevel}
                        size="sm"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{miembro.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{miembro.location}</p>
                    {miembro.personalityTraits && (
                      <div className="flex flex-wrap gap-2">
                        {miembro.personalityTraits.slice(0, 2).map((trait, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                              background: 'rgba(255,8,68,0.2)',
                              color: 'var(--sexy-gold)'
                            }}
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusquedaAvanzada;
