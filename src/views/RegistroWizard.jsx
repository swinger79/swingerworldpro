import React, { useState } from 'react';
import { Users, User, UserCheck, Lock, Mail, Camera, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistroWizard = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    age: '',
    location: '',
    photos: []
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onComplete(formData);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onCancel();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: 'radial-gradient(circle at 50% 50%, rgba(255,8,68,0.2) 0%, #0A0A0A 70%)'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="card-sexy p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-1/3 h-2 rounded-full mx-1 transition-all`}
                  style={{
                    background: step >= s ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)' : 'rgba(255,255,255,0.1)'
                  }}
                />
              ))}
            </div>
            <p className="text-center text-gray-400">Paso {step} de 3</p>
          </div>

          <AnimatePresence mode="wait">
            {/* PASO 1: Tipo de Cuenta */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  ¿Cómo te registras?
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  Selecciona el tipo de cuenta que mejor te represente
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { value: 'pareja', icon: Users, label: 'Pareja', desc: 'Perfil conjunto' },
                    { value: 'mujer', icon: User, label: 'Mujer', desc: 'Perfil individual' },
                    { value: 'hombre', icon: UserCheck, label: 'Hombre', desc: 'Perfil individual' }
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => setFormData({ ...formData, accountType: type.value })}
                        className="p-6 rounded-xl text-center transition-all hover:scale-105"
                        style={{
                          background: formData.accountType === type.value
                            ? 'linear-gradient(135deg, rgba(255,8,68,0.3) 0%, rgba(255,184,0,0.3) 100%)'
                            : 'rgba(255,255,255,0.05)',
                          border: formData.accountType === type.value
                            ? '3px solid var(--sexy-gold)'
                            : '2px solid rgba(255,8,68,0.3)'
                        }}
                      >
                        <Icon size={48} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
                        <p className="text-xl font-bold text-white mb-2">{type.label}</p>
                        <p className="text-sm text-gray-400">{type.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* PASO 2: Credenciales */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  Crea tu cuenta
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  Ingresa tus datos de acceso
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg"
                      style={{
                        background: 'rgba(20,20,20,0.9)',
                        border: '2px solid rgba(255,8,68,0.4)',
                        color: 'white'
                      }}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      <Lock size={16} className="inline mr-2" />
                      Contraseña
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg"
                      style={{
                        background: 'rgba(20,20,20,0.9)',
                        border: '2px solid rgba(255,8,68,0.4)',
                        color: 'white'
                      }}
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Confirmar Contraseña
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg"
                      style={{
                        background: 'rgba(20,20,20,0.9)',
                        border: '2px solid rgba(255,8,68,0.4)',
                        color: 'white'
                      }}
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* PASO 3: Perfil Básico */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  Completa tu perfil
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  Añade información básica y tu primera foto
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg"
                      style={{
                        background: 'rgba(20,20,20,0.9)',
                        border: '2px solid rgba(255,8,68,0.4)',
                        color: 'white'
                      }}
                      placeholder="TuNombre"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">Edad</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          background: 'rgba(20,20,20,0.9)',
                          border: '2px solid rgba(255,8,68,0.4)',
                          color: 'white'
                        }}
                        placeholder="25"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">Ciudad</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          background: 'rgba(20,20,20,0.9)',
                          border: '2px solid rgba(255,8,68,0.4)',
                          color: 'white'
                        }}
                        placeholder="Madrid"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      <Camera size={16} className="inline mr-2" />
                      Foto de Perfil
                    </label>
                    <div
                      className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-solid transition-all"
                      style={{ borderColor: 'rgba(255,8,68,0.4)' }}
                    >
                      <Camera size={48} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
                      <p className="text-gray-400">Click para subir una foto</p>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG o GIF (max. 10MB)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botones de navegación */}
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid rgba(255,8,68,0.3)'
              }}
            >
              <ChevronLeft size={20} />
              {step === 1 ? 'Cancelar' : 'Atrás'}
            </button>
            <button
              onClick={handleNext}
              disabled={step === 1 && !formData.accountType}
              className="flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
              style={{
                background: (step === 1 && !formData.accountType)
                  ? 'rgba(100,100,100,0.3)'
                  : 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                color: 'white',
                cursor: (step === 1 && !formData.accountType) ? 'not-allowed' : 'pointer'
              }}
            >
              {step === 3 ? 'Finalizar' : 'Siguiente'}
              <ChevronRight size={20} />
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            Al registrarte aceptas nuestros Términos de Servicio y Política de Privacidad
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistroWizard;
