import React, { lazy, Suspense } from 'react';

export const lazyLoad = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={fallback || <div>Cargando...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Ejemplo de uso:
// const EventosView = lazyLoad(() => import('./views/EventosView'));
