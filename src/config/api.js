export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
  SOCKET_URL: process.env.REACT_APP_SOCKET_SERVER || 'ws://localhost:3001',
  
  ENDPOINTS: {
    USERS: '/api/users',
    AUTH: '/api/auth',
    EVENTS: '/api/events',
    MESSAGES: '/api/messages',
    PAYMENTS: '/api/payments',
    REPORTS: '/api/reports',
    VALIDATIONS: '/api/validations'
  }
};
