import React, { memo, useMemo, useCallback } from 'react';

// Componente memoizado
export const MemoizedCard = memo(function Card({ perfil, onFavorite }) {
  return (
    <div className="card">
      {/* ... */}
    </div>
  );
});

// Hook para datos memoizados
export const useMemoizedData = (data) => {
  return useMemo(() => {
    return data.map(item => ({
      ...item,
      isFavorite: false
    }));
  }, [data]);
};

// Hook para funciones memoizadas
export const useMemoizedCallback = (callback) => {
  return useCallback(callback, []);
};
