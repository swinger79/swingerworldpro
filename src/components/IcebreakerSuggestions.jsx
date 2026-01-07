// src/components/IcebreakerSuggestions.jsx
import React, { useState } from 'react';

const IcebreakerSuggestions = ({ icebreakers = [], onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (icebreakers.length === 0) {
    return (
      <div className="bg-gray-800/50 rounded-xl p-6 text-center">
        <div className="text-4xl mb-2">💬</div>
        <div className="text-gray-400">No hay sugerencias disponibles</div>
      </div>
    );
  }

  const handleSelect = (icebreaker, index) => {
    setSelectedIndex(index);
    if (onSelect) {
      onSelect(icebreaker.question);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💡</span>
        <h3 className="text-xl font-bold text-white">
          Sugerencias para Romper el Hielo
        </h3>
      </div>

      <div className="space-y-3">
        {icebreakers.map((icebreaker, index) => (
          <button
            key={index}
            onClick={() => handleSelect(icebreaker, index)}
            className={`
              w-full text-left p-4 rounded-lg transition-all duration-200
              ${
                selectedIndex === index
                  ? 'bg-purple-500/30 border-2 border-purple-500'
                  : 'bg-gray-800/50 border-2 border-transparent hover:border-purple-500/50'
              }
            `}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">
                {index === 0 ? '🎯' : index === 1 ? '✨' : '💫'}
              </span>
              <div className="flex-1">
                <p className="text-white font-medium mb-1">
                  {icebreaker.question}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-purple-400">
                    {icebreaker.topic}
                  </span>
                  {icebreaker.relevance >= 0.8 && (
                    <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                      Alta relevancia
                    </span>
                  )}
                </div>
              </div>
              {selectedIndex === index && (
                <span className="text-green-400 text-xl">✓</span>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-400 text-center">
        Selecciona una pregunta o escribe tu propio mensaje
      </div>
    </div>
  );
};

export default IcebreakerSuggestions;
