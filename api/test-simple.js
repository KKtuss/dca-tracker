// FORCE REDEPLOY - CORS FIX v3 - MINIMAL HEADERS
export default function handler(req, res) {
  console.log('Simple test endpoint called:', {
    method: req.method,
    origin: req.headers.origin,
    headers: req.headers
  });

  // MINIMAL CORS headers - just the essential ones
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    res.status(200).end();
    return;
  }

  // Simple response
  res.status(200).json({
    message: 'Simple test working!',
    method: req.method,
    timestamp: new Date().toISOString(),
    origin: req.headers.origin || 'unknown',
    cors: 'enabled'
  });
}
