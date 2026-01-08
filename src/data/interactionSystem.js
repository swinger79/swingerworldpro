// Sistema de interacciones automáticas para dar vida a la plataforma

import TODOS_MIEMBROS from './memberGenerator';

// Mensajes de ejemplo para chats
const MENSAJES_INICIALES = [
  '¡Hola! Me encanta tu perfil 😊',
  'Hola! ¿Qué tal? Me gustaría conocerte mejor',
  'Hey! Tu perfil me llamó mucho la atención',
  '¡Hola! ¿Te apetece charlar un rato?',
  'Hola! Vi que estamos cerca, ¿nos tomamos algo?',
  '¡Buenas! Me gusta lo que buscan, podríamos encajar',
  'Hey! ¿Cómo va todo? Me interesa conocerte',
  'Hola! Creo que tenemos gustos similares 🔥'
];

const RESPUESTAS = [
  '¡Hola! Sí, me encantaría conocerte también',
  'Hey! Claro, cuéntame más sobre ti',
  '¡Hola! Gracias, el tuyo también me gusta mucho',
  'Hey! Por supuesto, ¿qué te gustaría saber?',
  'Hola! Me parece bien, ¿cuándo te viene bien?',
  '¡Genial! Mándame tu Telegram',
  'Claro! Pareces muy interesante',
  'Por supuesto! Hablamos por privado'
];

// Generar actividad reciente
export function generarActividadReciente(cantidad = 20) {
  const actividades = [];
  const ahora = Date.now();
  
  for (let i = 0; i < cantidad; i++) {
    const miembro = TODOS_MIEMBROS[Math.floor(Math.random() * TODOS_MIEMBROS.length)];
    const tipoActividad = Math.random();
    
    if (tipoActividad < 0.3) {
      // Nuevo like
      actividades.push({
        id: `act_${i}`,
        tipo: 'like',
        usuario: miembro,
        tiempo: `hace ${Math.floor(Math.random() * 60)} minutos`,
        timestamp: ahora - Math.random() * 3600000
      });
    } else if (tipoActividad < 0.6) {
      // Nuevo match
      const otroMiembro = TODOS_MIEMBROS[Math.floor(Math.random() * TODOS_MIEMBROS.length)];
      actividades.push({
        id: `act_${i}`,
        tipo: 'match',
        usuario: miembro,
        conQuien: otroMiembro,
        tiempo: `hace ${Math.floor(Math.random() * 120)} minutos`,
        timestamp: ahora - Math.random() * 7200000
      });
    } else {
      // Mensaje nuevo
      actividades.push({
        id: `act_${i}`,
        tipo: 'mensaje',
        usuario: miembro,
        mensaje: MENSAJES_INICIALES[Math.floor(Math.random() * MENSAJES_INICIALES.length)],
        tiempo: `hace ${Math.floor(Math.random() * 30)} minutos`,
        timestamp: ahora - Math.random() * 1800000
      });
    }
  }
  
  return actividades.sort((a, b) => b.timestamp - a.timestamp);
}

// Generar conversaciones activas
export function generarConversacionesActivas(cantidad = 10) {
  const conversaciones = [];
  
  for (let i = 0; i < cantidad; i++) {
    const miembro = TODOS_MIEMBROS[Math.floor(Math.random() * TODOS_MIEMBROS.length)];
    const mensajesCount = Math.floor(Math.random() * 20) + 5;
    
    conversaciones.push({
      id: `conv_${i}`,
      usuario: miembro,
      ultimoMensaje: RESPUESTAS[Math.floor(Math.random() * RESPUESTAS.length)],
      tiempo: `hace ${Math.floor(Math.random() * 60)} min`,
      noLeidos: Math.floor(Math.random() * 5),
      mensajes: mensajesCount
    });
  }
  
  return conversaciones;
}

// Generar usuarios online ahora mismo
export function obtenerUsuariosOnline(cantidad = 30) {
  return TODOS_MIEMBROS
    .filter(m => m.status === 'online')
    .slice(0, cantidad)
    .map(m => ({
      ...m,
      estadoActual: Math.random() > 0.5 ? 'Navegando' : 'En chat'
    }));
}

// Simular notificaciones en tiempo real
export function simularNotificacionesVivo() {
  const tipos = ['like', 'match', 'mensaje', 'visita'];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];
  const miembro = TODOS_MIEMBROS[Math.floor(Math.random() * TODOS_MIEMBROS.length)];
  
  return {
    tipo,
    usuario: miembro,
    tiempo: 'Ahora mismo'
  };
}

export default {
  generarActividadReciente,
  generarConversacionesActivas,
  obtenerUsuariosOnline,
  simularNotificacionesVivo
};
