import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RealTimeChat = ({ conversation }) => {
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4">
        <p className="text-white">Chat en tiempo real</p>
      </div>
      <div className="p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="w-full px-4 py-3 rounded-lg"
          style={{
            background: 'rgba(20,20,20,0.9)',
            border: '2px solid rgba(255,8,68,0.4)',
            color: 'white'
          }}
        />
      </div>
    </div>
  );
};

export default RealTimeChat;
