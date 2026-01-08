export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Mixpanel
  if (window.mixpanel) {
    window.mixpanel.track(eventName, properties);
  }

  // Log para desarrollo
  console.log(`📊 Analytics: ${eventName}`, properties);
};

// Eventos comunes
export const AnalyticsEvents = {
  USER_SIGNUP: 'user_signup',
  USER_LOGIN: 'user_login',
  PROFILE_VIEW: 'profile_view',
  MESSAGE_SENT: 'message_sent',
  EVENT_RSVP: 'event_rsvp',
  PAYMENT_COMPLETE: 'payment_complete',
  REPORT_SUBMITTED: 'report_submitted'
};

// Hook para trackear vistas
export const useAnalytics = () => {
  const trackPageView = (pageName) => {
    trackEvent('page_view', { page: pageName });
  };

  return { trackPageView };
};
