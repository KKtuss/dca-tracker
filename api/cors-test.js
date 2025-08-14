// FORCE REDEPLOY - CORS FIX v3 - MINIMAL HEADERS
export default async function handler(req, res) {
  console.log('CORS test endpoint called:', {
    method: req.method,
    origin: req.headers.origin,
    headers: req.headers
  });

  // MINIMAL CORS headers - just the essential ones
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    res.status(200).end();
    return;
  }

  // Handle actual request
  console.log('Handling', req.method, 'request');

  try {
    res.status(200).json({
      success: true,
      message: 'CORS test working!',
      timestamp: new Date().toISOString(),
      method: req.method,
      origin: req.headers.origin || 'unknown',
      cors: 'enabled'
    });
  } catch (error) {
    console.error('Error in cors-test:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
