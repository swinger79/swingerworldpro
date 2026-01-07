import React from 'react';
import { UserPlus, Users, Calendar, Cake, Image } from 'lucide-react';

const Sidebar = () => (
  <div className="space-y-4">
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-4 border border-white/10">
      <div className="flex items-center space-x-2 mb-3">
        <UserPlus size={18} className="text-pink-400" />
        <h3 className="font-bold text-white text-sm">Solicitudes pendientes</h3>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-white/80">
          <span>Amistad:</span>
          <span className="font-bold text-pink-400">3</span>
        </div>
        <div className="flex justify-between text-white/80">
          <span>Fiestas:</span>
          <span className="font-bold text-pink-400">2</span>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-4 border border-white/10">
      <div className="flex items-center space-x-2 mb-3">
        <Users size={18} className="text-green-400" />
        <h3 className="font-bold text-white text-sm">Usuarios online</h3>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-green-400">247</div>
        <div className="text-sm text-white/80">conectados ahora</div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-yellow-900/50 to-amber-900/50 rounded-xl p-4 border border-white/10">
      <div className="flex items-center space-x-2 mb-3">
        <Calendar size={18} className="text-yellow-400" />
        <h3 className="font-bold text-white text-sm">¿Buscas plan?</h3>
      </div>
      <div className="space-y-2">
        {['Fiesta Barcelona - Sáb 11', 'Cena Madrid - Vie 17', 'Pool Party - Sáb 18'].map((event, i) => (
          <div key={i} className="bg-black/30 rounded-lg p-2 hover:bg-black/40 cursor-pointer transition-colors">
            <div className="text-white text-xs">{event}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 rounded-xl p-4 border border-white/10">
      <div className="flex items-center space-x-2 mb-3">
        <Cake size={18} className="text-pink-400" />
        <h3 className="font-bold text-white text-sm">Hoy cumplen años</h3>
      </div>
      <div className="space-y-2">
        {[{ name: 'Carlos & Ana', age: '35' }, { name: 'Maria', age: '28' }].map((person, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-sm">
              🎂
            </div>
            <div className="text-xs">
              <div className="text-white font-medium">{person.name}</div>
              <div className="text-white/60">{person.age} años</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-4 border border-white/10">
      <div className="flex items-center space-x-2 mb-3">
        <Image size={18} className="text-blue-400" />
        <h3 className="font-bold text-white text-sm">Últimas fotos</h3>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg animate-pulse"></div>
        ))}
      </div>
    </div>
  </div>
);

export default Sidebar;
