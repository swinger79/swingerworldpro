import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const EventosView = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  
  return (
    <div className="space-y-6">
      <div className="card-sexy p-6">
        <h1 className="text-4xl font-bold text-white mb-4">
          Eventos y Fiestas
        </h1>
      </div>
    </div>
  );
};

export default EventosView;
