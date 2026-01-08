import React, { useState } from 'react';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const CheckoutView = ({ planInfo, onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tarjeta: '',
    expiracion: '',
    cvv: '',
    pais: 'España'
  });

  const [procesando, setProcesando] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcesando(true);

    // Simular procesamiento de pago
    setTimeout(() => {
      setProcesando(false);
      if (onComplete) {
        onComplete({
          ...planInfo,
          ...formData,
          fechaPago: new Date().toISOString(),
          estado: 'activo'
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all"
          style={{
            background: 'rgba(255,8,68,0.2)',
            color: 'var(--sexy-red)',
            border: '1px solid rgba(255,8,68,0.5)'
          }}
        >
          <ArrowLeft size={20} />
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulario de pago */}
          <div className="lg:col-span-2">
            <div className="card-sexy">
              <h2 className="text-3xl font-bold text-white mb-6 fire-text">
                💳 Información de pago
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-white"
                    style={{
                      background: 'rgba(20,20,20,0.9)',
                      border: '2px solid rgba(255,8,68,0.4)'
                    }}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-white"
                    style={{
                      background: 'rgba(20,20,20,0.9)',
                      border: '2px solid rgba(255,8,68,0.4)'
                    }}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    name="tarjeta"
                    value={formData.tarjeta}
                    onChange={handleInputChange}
                    required
                    maxLength="19"
                    className="w-full px-4 py-3 rounded-lg text-white"
                    style={{
                      background: 'rgba(20,20,20,0.9)',
                      border: '2px solid rgba(255,8,68,0.4)'
                    }}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Fecha de expiración
                    </label>
                    <input
                      type="text"
                      name="expiracion"
                      value={formData.expiracion}
                      onChange={handleInputChange}
                      required
                      maxLength="5"
                      className="w-full px-4 py-3 rounded-lg text-white"
                      style={{
                        background: 'rgba(20,20,20,0.9)',
                        border: '2px solid rgba(255,8,68,0.4)'
                      }}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      maxLength="3"
                      className="w-full px-4 py-3 rounded-lg text-white"
                      style={{
                        background: 'rgba(20,20,20,0.9)',
                        border: '2px solid rgba(255,8,68,0.4)'
                      }}
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 p-4 rounded-lg" style={{
                  background: 'rgba(0,255,0,0.1)',
                  border: '1px solid rgba(0,255,0,0.3)'
                }}>
                  <Lock size={20} color="#00ff00" />
                  <p className="text-sm text-gray-300">
                    Tu pago está protegido con encriptación SSL de 256 bits
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={procesando}
                  className="w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: procesando ? 'rgba(100,100,100,0.5)' : 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                    color: 'white',
                    cursor: procesando ? 'not-allowed' : 'pointer'
                  }}
                >
                  {procesando ? (
                    <>Procesando pago...</>
                  ) : (
                    <>
                      <CreditCard size={24} />
                      Pagar €{planInfo?.precio}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="card-sexy sticky top-4">
              <h3 className="text-xl font-bold text-white mb-4">
                📋 Resumen del pedido
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Plan:</span>
                  <span className="text-white font-bold">{planInfo?.planNombre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Ciclo:</span>
                  <span className="text-white font-bold capitalize">{planInfo?.ciclo}</span>
                </div>
                <hr style={{ borderColor: 'rgba(255,8,68,0.3)' }} />
                <div className="flex justify-between text-xl">
                  <span className="text-white font-bold">Total:</span>
                  <span className="text-white font-bold" style={{ color: 'var(--sexy-gold)' }}>
                    €{planInfo?.precio}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg" style={{
                background: 'rgba(255,184,0,0.1)',
                border: '1px solid rgba(255,184,0,0.3)'
              }}>
                <p className="text-sm text-gray-300 mb-2">
                  ✨ <strong>Incluye:</strong>
                </p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Acceso inmediato</li>
                  <li>• Cancela cuando quieras</li>
                  <li>• Soporte 24/7</li>
                  <li>• Garantía de devolución</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
