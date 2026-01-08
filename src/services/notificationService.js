import { toast } from 'sonner';

class NotificationService {
  static showMessageNotification(message) {
    if (Notification.permission === 'granted') {
      new Notification('Nuevo mensaje', {
        body: message.text,
        icon: '/logo.png'
      });
    }
    
    toast.info('Nuevo mensaje', {
      description: message.text,
      action: {
        label: 'Ver',
        onClick: () => window.location.href = '/mensajes'
      }
    });
  }

  static showMatchNotification(user) {
    toast.success('¡Nuevo match! 🔥', {
      description: `Has hecho match con ${user.nombre}`,
      duration: 5000
    });
  }

  static showEventNotification(event) {
    toast.info('Recordatorio de evento', {
      description: `Hoy a las ${event.hora}: ${event.titulo}`,
      action: {
        label: 'Ver',
        onClick: () => window.location.href = '/eventos'
      }
    });
  }
}

export default NotificationService;
