import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';

export const securityMiddleware = [
  // Helmet - Headers de seguridad
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  }),
  
  // CORS
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
    credentials: true,
  }),
  
  // Rate Limiting
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // 100 requests por IP
    message: 'Demasiadas peticiones, intenta más tarde',
  }),
];
