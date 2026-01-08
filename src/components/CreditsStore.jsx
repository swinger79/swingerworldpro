import React, { useState } from 'react';
import { Coins, Zap, Star, TrendingUp, X } from 'lucide-react';
import { motion } from 'framer-motion';

const CreditsStore = ({ onClose, currentCredits = 0, onPurchase }) => {
  const paquetes = [
    { id: 'pack1', creditos: 50, precio: 4.99, icono: Coins },
    { id: 'pack2', creditos: 150, precio: 12.99, bonus: 10, icono: Star, popular: true, ahorro: '15%' },
    { id: 'pack3', creditos: 350, precio: 24.99, bonus: 50, icono: Zap, ahorro: '30%' },
    { id: 'pack4', creditos: 1000, precio: 59.99, bonus: 200, icono: TrendingUp, ahorro: '45%', vip: true }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.95)' }}>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-6xl w-full rounded-3xl p-8 relative" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1010 100%)', border: '2px solid rgba(255,184,0,0.5)' }}>
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.8)', border: '2px solid rgba(255,184,0,0.5)' }}>
          <X size={24} color="white" />
        </button>
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>💰 Tienda de Créditos</h2>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(255,184,0,0.2) 0%, rgba(255,8,68,0.2) 100%)', border: '2px solid var(--sexy-gold)' }}>
            <Coins size={32} style={{ color: 'var(--sexy-gold)' }} />
            <p className="text-2xl font-bold" style={{ color: 'var(--sexy-gold)' }}>{currentCredits} créditos</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {paquetes.map(pack => {
            const Icon = pack.icono;
            return (
              <motion.div key={pack.id} whileHover={{ scale: 1.05 }} className="rounded-2xl p-6 text-center" style={{ background: pack.popular || pack.vip ? 'linear-gradient(135deg, rgba(255,184,0,0.2) 0%, rgba(255,8,68,0.2) 100%)' : 'rgba(30,30,30,0.8)', border: '3px solid var(--sexy-gold)' }}>
                <Icon size={48} style={{ color: 'var(--sexy-gold)' }} className="mx-auto mb-4" />
                <p className="text-4xl font-bold mb-2" style={{ color: 'var(--sexy-gold)' }}>{pack.creditos}</p>
                {pack.bonus && <p className="text-sm font-bold" style={{ color: '#00ff00' }}>+ {pack.bonus} BONUS</p>}
                <p className="text-3xl font-bold text-white my-4">€{pack.precio}</p>
                <button onClick={() => onPurchase && onPurchase(pack)} className="w-full py-3 rounded-lg font-bold" style={{ background: 'linear-gradient(135deg, #FFB800 0%, #FF0844 100%)', color: 'white' }}>Comprar</button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CreditsStore;
