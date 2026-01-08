import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import TODOS_MIEMBROS from '../data/memberGenerator';
import TrustBadge from '../components/TrustBadge';
import PerfilPublicoView from './PerfilPublicoView';

const GenteView = ({ onNavigate }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('todos');
  const [ordenamiento, setOrdenamiento] = useState('recientes');
  const [selectedMember, setSelectedMember] = useState(null);

  let miembrosFiltrados = [...TODOS_MIEMBROS];

  // Filtrar por tipo
  if (tipoFiltro !== 'todos') {
    miembrosFiltrados = miembrosFiltrados.filter(m => m.type === tipoFiltro);
  }

  // Filtrar por búsqueda
  if (searchTerm) {
    miembrosFiltrados = miembrosFiltrados.filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Ordenar
  switch(ordenamiento) {
    case 'recientes':
      // Ya están en orden
      break;
    case 'alfabetico':
      miembrosFiltrados.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'edad-asc':
      miembrosFiltrados.sort((a, b) => a.age - b.age);
      break;
    case 'edad-desc':
      miembrosFiltrados.sort((a, b) => b.age - a.age);
      break;
    case 'confianza':
      miembrosFiltrados.sort((a, b) => b.trustScore - a.trustScore);
      break;
    case 'online':
      miembrosFiltrados.sort((a, b) => {
        if (a.status === 'online' && b.status !== 'online') return -1;
        if (a.status !== 'online' && b.status === 'online') return 1;
        return 0;
      });
      break;
    default:
      break;
  }

  if (selectedMember) {
    return (
      <PerfilPublicoView
        miembro={selectedMember}
        onNavigate={onNavigate}
        onBack={() => setSelectedMember(null)}
      />
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 fire-text">👥 Gente</h2>

        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar por nombre o ciudad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl text-white"
                style={{
                  background: 'var(--bg-card)',
                  border: '2px solid var(--border-subtle)'
                }}
              />
            </div>
            <select
              value={ordenamiento}
              onChange={(e) => setOrdenamiento(e.target.value)}
              className="px-6 py-3 rounded-xl font-bold text-white"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border-subtle)'
              }}
            >
              <option value="recientes">Más recientes</option>
              <option value="alfabetico">Alfabético (A-Z)</option>
              <option value="edad-asc">Edad (menor a mayor)</option>
              <option value="edad-desc">Edad (mayor a menor)</option>
              <option value="confianza">Mayor confianza</option>
              <option value="online">Online primero</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 rounded-xl font-bold flex items-center gap-2"
              style={{
                background: showFilters ? 'var(--gradient-primary)' : 'var(--bg-card)',
                color: 'white',
                border: '2px solid var(--border-subtle)'
              }}
            >
              <SlidersHorizontal size={20} />
              Filtros
            </button>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setTipoFiltro('todos')}
              className="px-6 py-3 rounded-lg font-bold transition-all"
              style={{
                background: tipoFiltro === 'todos' ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: tipoFiltro === 'todos' ? '2px solid var(--sexy-gold)' : '2px solid transparent'
              }}
            >
              Todos ({TODOS_MIEMBROS.length})
            </button>
            <button
              onClick={() => setTipoFiltro('pareja')}
              className="px-6 py-3 rounded-lg font-bold transition-all"
              style={{
                background: tipoFiltro === 'pareja' ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: tipoFiltro === 'pareja' ? '2px solid var(--sexy-gold)' : '2px solid transparent'
              }}
            >
              Parejas ({TODOS_MIEMBROS.filter(m => m.type === 'pareja').length})
            </button>
            <button
              onClick={() => setTipoFiltro('mujer')}
              className="px-6 py-3 rounded-lg font-bold transition-all"
              style={{
                background: tipoFiltro === 'mujer' ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: tipoFiltro === 'mujer' ? '2px solid var(--sexy-gold)' : '2px solid transparent'
              }}
            >
              Mujeres ({TODOS_MIEMBROS.filter(m => m.type === 'mujer').length})
            </button>
            <button
              onClick={() => setTipoFiltro('hombre')}
              className="px-6 py-3 rounded-lg font-bold transition-all"
              style={{
                background: tipoFiltro === 'hombre' ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: tipoFiltro === 'hombre' ? '2px solid var(--sexy-gold)' : '2px solid transparent'
              }}
            >
              Hombres ({TODOS_MIEMBROS.filter(m => m.type === 'hombre').length})
            </button>
          </div>

          <div className="text-sm text-gray-400">
            Mostrando {miembrosFiltrados.length} resultados
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miembrosFiltrados.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="card-sexy overflow-hidden cursor-pointer hover-lift"
            >
              <div className="relative h-64">
                <img
                  src={member.media?.photos?.[0]}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <TrustBadge
                    trustScore={member.trustScore}
                    trustLevel={member.trustLevel}
                    size="sm"
                  />
                </div>
                {member.status === 'online' && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2"
                    style={{
                      background: 'rgba(0,0,0,0.8)',
                      color: '#00ff00',
                      border: '1px solid #00ff00'
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{member.age} años • {member.location}</p>

                {member.personalityTraits && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {member.personalityTraits.slice(0, 3).map((trait, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,184,0,0.2)',
                          color: 'var(--sexy-gold)',
                          border: '1px solid rgba(255,184,0,0.3)'
                        }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  className="w-full py-2 rounded-lg font-bold"
                  style={{
                    background: 'var(--gradient-primary)',
                    color: 'white'
                  }}
                >
                  Ver Perfil Completo
                </button>
              </div>
            </div>
          ))}
        </div>

        {miembrosFiltrados.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No se encontraron resultados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenteView;
