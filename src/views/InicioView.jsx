import React from 'react';
import { Heart, UserPlus, CheckCircle, MessageCircle } from 'lucide-react';

const InicioView = () => {
  const activities = [
    { user: 'Carlos & Ana', action: 'son ahora amigos de', target: 'Maria', time: 'Hace 5 min', icon: UserPlus, color: 'from-blue-500 to-indigo-600' },
    { user: 'Laura', action: 'le gusta la foto de', target: 'Roberto', time: 'Hace 15 min', icon: Heart, color: 'from-pink-500 to-rose-600' },
    { user: 'David', action: 'verificó su perfil', time: 'Hace 1 hora', icon: CheckCircle, color: 'from-green-500 to-emerald-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-white/10">
        <h3 className="text-white font-bold mb-4">¿En qué estás pensando?</h3>
        <textarea placeholder="Comparte algo..." className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500" rows={3} />
        <div className="flex justify-end mt-3">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium">Publicar</button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Última actividad</h2>
        <div className="space-y-4">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white"><span className="font-bold">{activity.user}</span> {activity.action} {activity.target && <span className="font-bold">{activity.target}</span>}</p>
                    <p className="text-gray-400 text-sm mt-1">{activity.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InicioView;
