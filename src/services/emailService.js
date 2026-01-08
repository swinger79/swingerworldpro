import emailjs from '@emailjs/browser';

class EmailService {
  static init() {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }

  static async sendWelcomeEmail(userEmail, userName) {
    try {
      await emailjs.send(
        'service_swingerworld',
        'template_welcome',
        {
          to_email: userEmail,
          to_name: userName,
          from_name: 'Swinger World',
          reply_to: 'support@swingerworld.com'
        }
      );
      console.log('✅ Email de bienvenida enviado');
    } catch (error) {
      console.error('❌ Error enviando email:', error);
    }
  }

  static async sendEventConfirmation(userEmail, eventDetails) {
    // Similar a sendWelcomeEmail
  }

  static async sendPasswordReset(userEmail, resetLink) {
    // Similar a sendWelcomeEmail
  }
}

export default EmailService;
