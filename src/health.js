// Health check para monitoreo
export default function handler(req, res) {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    env: process.env.NODE_ENV,
    version: process.env.npm_package_version
  };
  
  try {
    res.status(200).json(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).json(healthcheck);
  }
}
