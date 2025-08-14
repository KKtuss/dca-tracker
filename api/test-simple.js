export default function handler(req, res) {
  console.log('Simple test endpoint called:', {
    method: req.method,
    origin: req.headers.origin,
    headers: req.headers
  });

  // Set ALL CORS headers explicitly
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Origin, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Access-Control-Allow-Credentials', 'false');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    res.status(200).json({
      success: true,
      message: 'OPTIONS preflight successful',
      timestamp: new Date().toISOString(),
      method: 'OPTIONS',
      cors: 'enabled'
    });
    return;
  }

  // Simple response
  res.status(200).json({
    message: 'Simple test working!',
    method: req.method,
    timestamp: new Date().toISOString(),
    origin: req.headers.origin || 'unknown',
    cors: 'enabled',
    headers: Object.keys(req.headers)
  });
}
