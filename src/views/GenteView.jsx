import React, { useState } from 'react';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import { PAISES_LIBERALES, EDADES_OPCIONES, QUE_BUSCAN, PARA_QUE } from '../data/locations';
import { Search, MapPin, Filter, X } from 'lucide-react';
import TrustBadge from '../components/TrustBadge';

const GenteView = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    ubicacion: 'misma-ciudad',
    pais: 'ES',
    ciudad: '',
    edadEl: '',
    edadElla: '',
    amistad: 'no-amigos',
    online: false,
    enChat: false,
    compatibles: false,
    activos: false,
    premium: false,
    verificados: false,
    queBuscan: [],
    paraQue: [],
    ordenar: 'registro'
  });

  const [filteredMembers, setFilteredMembers] = useState(AI_MEMBERS_ENHANCED);

  const paisSeleccionado = PAISES_LIBERALES.find(p => p.code === filters.pais);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const toggleCheckbox = (key) => {
    const newFilters = { ...filters, [key]: !filters[key] };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const toggleArray = (key, value) => {
    const current = filters[key];
    const newArray = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    const newFilters = { ...filters, [key]: newArray };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let result = [...AI_MEMBERS_ENHANCED];

    // Filtrar por verificados
    if (currentFilters.verificados) {
      result = result.filter(m => m.trustLevel !== 'BASIC');
    }

    // Filtrar por premium
    if (currentFilters.premium) {
      result = result.filter(m => m.premium);
    }

    // Filtrar por online
    if (currentFilters.online) {
      result = result.filter(m => m.status === 'online');
    }

    setFilteredMembers(result);
  };

  const cardStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '16px'
  };

  const inputStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '8px',
    padding: '8px 12px',
    color: 'white',
    width: '100%'
  };

  const labelStyle = {
    color: 'var(--sexy-gold)',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    display: 'block'
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white fire-text">Encuentra Swingers</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'white'
          }}
        >
          <Filter size={20} />
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filtros */}
        {showFilters && (
          <div className="lg:col-span-1 space-y-4">
            <div style={cardStyle}>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Search size={18} style={{ color: 'var(--sexy-red)' }} />
                Criterios de búsqueda
              </h3>

              {/* Ubicación */}
              <div className="mb-4">
                <label style={labelStyle}>Perfiles situados en:</label>
                <select
                  value={filters.ubicacion}
                  onChange={(e) => handleFilterChange('ubicacion', e.target.value)}
                  style={inputStyle}
                >
                  <option value="misma-ciudad">Misma ciudad que yo</option>
                  <option value="misma-provincia">Misma provincia que yo</option>
                  <option value="misma-region">Misma región que yo</option>
                  <option value="mismo-pais">Mismo país que yo</option>
                  <option value="todo-mundo">Todo el mundo</option>
                </select>
              </div>

              {/* País */}
              <div className="mb-4">
                <label style={labelStyle}>O escoge otro lugar:</label>
                <select
                  value={filters.pais}
                  onChange={(e) => {
                    handleFilterChange('pais', e.target.value);
                    handleFilterChange('ciudad', '');
                  }}
                  style={inputStyle}
                >
                  {PAISES_LIBERALES.map(pais => (
                    <option key={pais.code} value={pais.code}>{pais.name}</option>
                  ))}
                </select>
              </div>

              {/* Ciudad */}
              {paisSeleccionado && (
                <div className="mb-4">
                  <label style={labelStyle}>Ciudad:</label>
                  <select
                    value={filters.ciudad}
                    onChange={(e) => handleFilterChange('ciudad', e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">Todas las ciudades</option>
                    {paisSeleccionado.ciudades.map(ciudad => (
                      <option key={ciudad} value={ciudad}>{ciudad}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Edad de él */}
              <div className="mb-4">
                <label style={labelStyle}>Edad de él:</label>
                <select
                  value={filters.edadEl}
                  onChange={(e) => handleFilterChange('edadEl', e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Cualquier edad</option>
                  {EDADES_OPCIONES.map(edad => (
                    <option key={edad.value} value={edad.value}>{edad.label}</option>
                  ))}
                </select>
              </div>

              {/* Edad de ella */}
              <div className="mb-4">
                <label style={labelStyle}>Edad de ella:</label>
                <select
                  value={filters.edadElla}
                  onChange={(e) => handleFilterChange('edadElla', e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Cualquier edad</option>
                  {EDADES_OPCIONES.map(edad => (
                    <option key={edad.value} value={edad.value}>{edad.label}</option>
                  ))}
                </select>
              </div>

              {/* Estado de amistad */}
              <div className="mb-4">
                <label style={labelStyle}>Estado de amistad:</label>
                <select
                  value={filters.amistad}
                  onChange={(e) => handleFilterChange('amistad', e.target.value)}
                  style={inputStyle}
                >
                  <option value="no-amigos">Que no sean ya amigos</option>
                  <option value="solo-amigos">Mostrar solo amigos</option>
                </select>
              </div>

              {/* Mostrar solo usuarios */}
              <div className="mb-4">
                <label style={labelStyle}>Mostrar sólo usuarios:</label>
                <div className="space-y-2">
                  {[
                    { key: 'online', label: 'Navegando por la web' },
                    { key: 'enChat', label: 'Conectados al chat' },
                    { key: 'compatibles', label: 'Compatibles conmigo' },
                    { key: 'activos', label: 'Activos el último mes' },
                    { key: 'premium', label: 'Premium' },
                    { key: 'verificados', label: 'Verificados' }
                  ].map(item => (
                    <label key={item.key} className="flex items-center gap-2 text-white text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters[item.key]}
                        onChange={() => toggleCheckbox(item.key)}
                        className="w-4 h-4 cursor-pointer"
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Qué buscáis */}
              <div className="mb-4">
                <label style={labelStyle}>¿Qué buscáis?</label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {QUE_BUSCAN.map(item => (
                    <label key={item} className="flex items-center gap-2 text-white text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.queBuscan.includes(item)}
                        onChange={() => toggleArray('queBuscan', item)}
                        className="w-4 h-4 cursor-pointer"
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Para qué */}
              <div className="mb-4">
                <label style={labelStyle}>¿Para qué?</label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {PARA_QUE.map(item => (
                    <label key={item} className="flex items-center gap-2 text-white text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.paraQue.includes(item)}
                        onChange={() => toggleArray('paraQue', item)}
                        className="w-4 h-4 cursor-pointer"
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Ordenar por */}
              <div className="mb-4">
                <label style={labelStyle}>Ordenar por:</label>
                <select
                  value={filters.ordenar}
                  onChange={(e) => handleFilterChange('ordenar', e.target.value)}
                  style={inputStyle}
                >
                  <option value="registro">Fecha de registro</option>
                  <option value="actividad">Última actividad</option>
                  <option value="distancia">Distancia</option>
                  <option value="popularidad">Popularidad</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Resultados */}
        <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
          <div className="mb-4 text-gray-400">
            {filteredMembers.length} resultados encontrados
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div key={member.id} className="rounded-xl overflow-hidden transition-all hover:scale-105 cursor-pointer" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-red)'
              }}>
                <div className="relative h-64">
                  <img 
                    src={member.media?.photos?.[0]} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-2 right-2">
                    <TrustBadge 
                      trustScore={member.trustScore} 
                      trustLevel={member.trustLevel} 
                      size="sm" 
                    />
                  </div>
                  {member.status === 'online' && (
                    <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold" style={{
                      background: 'rgba(0,255,0,0.2)',
                      color: '#00ff00',
                      border: '1px solid rgba(0,255,0,0.3)'
                    }}>
                      <div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1 animate-pulse" />
                      Online
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}, {member.age}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <MapPin size={14} className="mr-1" />
                    {member.location}
                  </div>

                  {member.personalityTraits && member.personalityTraits.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {member.personalityTraits.slice(0, 3).map((trait, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-full" style={{
                          background: 'rgba(255,8,68,0.2)',
                          color: 'var(--sexy-red)',
                          border: '1px solid var(--border-subtle)'
                        }}>
                          {trait}
                        </span>
                      ))}
                    </div>
                  )}

                  <button className="w-full py-2 rounded-lg font-bold transition-all" style={{
                    background: 'var(--gradient-primary)',
                    color: 'white'
                  }}>
                    Ver Perfil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenteView;
