import React, { useState } from 'react';
import { Camera, Video, Lock, User, Save } from 'lucide-react';

const EditarPerfilView = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [formData, setFormData] = useState({
    nombre: 'Laura & Carlos',
    orientacion: 'Heterosexual',
    raza: 'Caucásica',
    nacionalidad: 'Española',
    peso: '87',
    altura: '189',
    longitudPene: '23',
    tatuajes: 'Algunos',
    piercings: 'Ninguno',
    fuma: 'Nunca',
    bebeAlcohol: 'Socialmente',
    codigoPostal: '08004',
    pais: 'España',
    situacionSentimental: 'Casados',
    alojarGente: 'Sí podemos',
    desplazarse: 'Mismo país',
    swingersDesde: { mes: 'Enero', año: '2020' }
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert('Perfil guardado correctamente');
  };

  const tabStyle = (isActive) => ({
    padding: '12px 24px',
    cursor: 'pointer',
    borderBottom: isActive ? '3px solid var(--sexy-red)' : '3px solid transparent',
    color: isActive ? 'var(--sexy-red)' : 'white',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'all 0.3s'
  });

  const inputStyle = {
    background: 'rgba(26,26,26,0.8)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '8px',
    padding: '12px',
    color: 'white',
    width: '100%',
    outline: 'none'
  };

  const labelStyle = {
    color: 'var(--sexy-gold)',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    display: 'block'
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 fire-text">⚙️ Editar Perfil</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
          <div onClick={() => setActiveTab('perfil')} style={tabStyle(activeTab === 'perfil')}>
            <User className="inline mr-2" size={20} />
            Perfil
          </div>
          <div onClick={() => setActiveTab('fotos')} style={tabStyle(activeTab === 'fotos')}>
            <Camera className="inline mr-2" size={20} />
            Fotos
          </div>
          <div onClick={() => setActiveTab('videos')} style={tabStyle(activeTab === 'videos')}>
            <Video className="inline mr-2" size={20} />
            Videos
          </div>
          <div onClick={() => setActiveTab('password')} style={tabStyle(activeTab === 'password')}>
            <Lock className="inline mr-2" size={20} />
            Contraseña
          </div>
          <div onClick={() => setActiveTab('cuenta')} style={tabStyle(activeTab === 'cuenta')}>
            <User className="inline mr-2" size={20} />
            Cuenta
          </div>
        </div>

        {/* Contenido según tab activo */}
        <div className="rounded-xl p-8" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)'
        }}>
          {activeTab === 'perfil' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Sobre vosotros</h3>

              {/* Nombre */}
              <div>
                <label style={labelStyle}>Nombre:</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleChange('nombre', e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Orientación */}
              <div>
                <label style={labelStyle}>Orientación:</label>
                <div className="flex gap-4">
                  {['Heterosexual', 'Bisexual', 'Bicurioso'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="orientacion"
                        checked={formData.orientacion === opt}
                        onChange={() => handleChange('orientacion', opt)}
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Raza */}
              <div>
                <label style={labelStyle}>Raza:</label>
                <div className="flex gap-4">
                  {['Latina', 'Caucásica', 'Negra', 'Asiática', 'Árabe'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="raza"
                        checked={formData.raza === opt}
                        onChange={() => handleChange('raza', opt)}
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Nacionalidad */}
              <div>
                <label style={labelStyle}>Nacionalidad:</label>
                <select
                  value={formData.nacionalidad}
                  onChange={(e) => handleChange('nacionalidad', e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Elige uno...</option>
                  {['Albanesa', 'Alemana', 'Andorrana', 'Argentina', 'Australiana', 'Austríaca', 'Belga', 'Boliviana', 'Brasileña', 'Búlgara', 'Canadiense', 'Catarí', 'Chilena', 'China', 'Colombiana', 'Costarricense', 'Croata', 'Cubana', 'Danesa', 'Ecuatoriana', 'Egipcia', 'Emiratí', 'Escocesa', 'Eslovaca', 'Española', 'Americana', 'Filipina', 'Finlandesa', 'Francesa', 'Griega', 'Guatemalteca', 'Holandesa', 'Hondureña', 'Húngara', 'Indonesia', 'Inglesa', 'Irlandesa', 'Islandesa', 'Italiana', 'Jamaicana', 'Japonesa', 'Letona', 'Lituana', 'Maldiva', 'Maltesa', 'Marroquí', 'Mexicana', 'Nicaragüense', 'Noruega', 'Panameña', 'Paraguaya', 'Peruana', 'Polaca', 'Portuguesa', 'Puertorriqueña', 'Checa', 'Dominicana', 'Rumana', 'Rusa', 'Sueca', 'Suiza', 'Tailandesa', 'Turca', 'Ucraniana', 'Uruguaya', 'Venezolana'].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              {/* Peso */}
              <div>
                <label style={labelStyle}>Peso:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.peso}
                    onChange={(e) => handleChange('peso', e.target.value)}
                    style={{ ...inputStyle, width: '150px' }}
                  />
                  <span className="text-white">kg</span>
                </div>
              </div>

              {/* Altura */}
              <div>
                <label style={labelStyle}>Altura:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.altura}
                    onChange={(e) => handleChange('altura', e.target.value)}
                    style={{ ...inputStyle, width: '150px' }}
                  />
                  <span className="text-white">cm</span>
                </div>
              </div>

              {/* Longitud del pene */}
              <div>
                <label style={labelStyle}>Longitud del pene:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.longitudPene}
                    onChange={(e) => handleChange('longitudPene', e.target.value)}
                    style={{ ...inputStyle, width: '150px' }}
                  />
                  <span className="text-white">cm</span>
                </div>
              </div>

              {/* Tatuajes */}
              <div>
                <label style={labelStyle}>Tatuajes:</label>
                <div className="flex gap-4">
                  {['Ninguno', 'Alguno', 'Varios', 'Muchos'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="tatuajes"
                        checked={formData.tatuajes === opt}
                        onChange={() => handleChange('tatuajes', opt)}
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Piercings */}
              <div>
                <label style={labelStyle}>Piercings:</label>
                <div className="flex gap-4">
                  {['Ninguno', 'Alguno', 'Varios', 'Muchos'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="piercings"
                        checked={formData.piercings === opt}
                        onChange={() => handleChange('piercings', opt)}
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuma */}
              <div>
                <label style={labelStyle}>Fuma:</label>
                <select
                  value={formData.fuma}
                  onChange={(e) => handleChange('fuma', e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Elige uno...</option>
                  <option value="Nunca">Nunca</option>
                  <option value="Casi nunca">Casi nunca</option>
                  <option value="Socialmente">Socialmente</option>
                  <option value="Regularmente">Regularmente</option>
                </select>
              </div>

              {/* Bebe alcohol */}
              <div>
                <label style={labelStyle}>Bebe alcohol:</label>
                <select
                  value={formData.bebeAlcohol}
                  onChange={(e) => handleChange('bebeAlcohol', e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Elige uno...</option>
                  <option value="Nunca">Nunca</option>
                  <option value="Casi nunca">Casi nunca</option>
                  <option value="Socialmente">Socialmente</option>
                  <option value="Regularmente">Regularmente</option>
                </select>
              </div>

              <h3 className="text-2xl font-bold text-white mt-8 mb-6">Datos adicionales</h3>

              {/* Código Postal */}
              <div>
                <label style={labelStyle}>Código Postal:</label>
                <input
                  type="text"
                  value={formData.codigoPostal}
                  onChange={(e) => handleChange('codigoPostal', e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* País */}
              <div>
                <label style={labelStyle}>País:</label>
                <select
                  value={formData.pais}
                  onChange={(e) => handleChange('pais', e.target.value)}
                  style={inputStyle}
                >
                  <option value="España">España</option>
                  <option value="Francia">Francia</option>
                  <option value="Italia">Italia</option>
                  <option value="Portugal">Portugal</option>
                </select>
              </div>

              {/* Situación sentimental */}
              <div>
                <label style={labelStyle}>Situación sentimental:</label>
                <select
                  value={formData.situacionSentimental}
                  onChange={(e) => handleChange('situacionSentimental', e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Elige uno...</option>
                  <option value="Soltero">Soltero</option>
                  <option value="En una relación">En una relación</option>
                  <option value="En una relación abierta">En una relación abierta</option>
                  <option value="Divorciado">Divorciado</option>
                  <option value="Divorciada">Divorciada</option>
                  <option value="Es complicado">Es complicado</option>
                  <option value="Casados">Casados</option>
                </select>
              </div>

              {/* Capacidad para alojar gente */}
              <div>
                <label style={labelStyle}>Capacidad para alojar gente:</label>
                <div className="flex gap-4">
                  {['No podemos', 'Sí podemos'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="radio"
                        name="alojar"
                        checked={formData.alojarGente === opt}
                        onChange={() => handleChange('alojarGente', opt)}
                        style={{ accentColor: 'var(--sexy-red)' }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Capacidad para desplazarse */}
              <div>
                <label style={labelStyle}>Capacidad para desplazarse:</label>
                <select
                  value={formData.desplazarse}
                  onChange={(e) => handleChange('desplazarse', e.target.value)}
                  style={inputStyle}
                >
                  <option value="Misma ciudad">Misma ciudad</option>
                  <option value="Misma provincia">Misma provincia</option>
                  <option value="Misma región">Misma región</option>
                  <option value="Mismo país">Mismo país</option>
                  <option value="Todo el mundo">Todo el mundo</option>
                </select>
              </div>

              {/* Swingers desde */}
              <div>
                <label style={labelStyle}>Sois swingers desde:</label>
                <div className="flex gap-4">
                  <select
                    value={formData.swingersDesde.mes}
                    onChange={(e) => handleChange('swingersDesde', { ...formData.swingersDesde, mes: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="">Elige uno...</option>
                    {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <select
                    value={formData.swingersDesde.año}
                    onChange={(e) => handleChange('swingersDesde', { ...formData.swingersDesde, año: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="">Elige uno...</option>
                    {Array.from({ length: 49 }, (_, i) => 2026 - i).map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Botón guardar */}
              <button
                onClick={handleSave}
                className="w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 mt-8"
                style={{
                  background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                  color: 'white'
                }}
              >
                <Save size={24} />
                Guardar Cambios
              </button>
            </div>
          )}

          {activeTab === 'fotos' && (
            <div className="text-center py-12">
              <Camera size={64} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
              <h3 className="text-2xl font-bold text-white mb-4">Gestión de Fotos</h3>
              <p className="text-gray-400">Sube y gestiona tus fotos de perfil</p>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="text-center py-12">
              <Video size={64} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
              <h3 className="text-2xl font-bold text-white mb-4">Gestión de Videos</h3>
              <p className="text-gray-400">Sube y gestiona tus videos de perfil</p>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="text-center py-12">
              <Lock size={64} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
              <h3 className="text-2xl font-bold text-white mb-4">Cambiar Contraseña</h3>
              <p className="text-gray-400">Actualiza tu contraseña de forma segura</p>
            </div>
          )}

          {activeTab === 'cuenta' && (
            <div className="text-center py-12">
              <User size={64} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
              <h3 className="text-2xl font-bold text-white mb-4">Configuración de Cuenta</h3>
              <p className="text-gray-400">Gestiona tu membresía y preferencias</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditarPerfilView;
