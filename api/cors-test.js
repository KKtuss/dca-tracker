export default async function handler(req, res) {
  // Simple CORS headers - Updated for better compatibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Max-Age', '86400');

  // Handle preflight OPTIONS request properly
  if (req.method === 'OPTIONS') {
    res.status(200).json({
      success: true,
      message: 'CORS preflight successful',
      timestamp: new Date().toISOString()
    });
    return;
  }

  // Simple response
  res.status(200).json({
    success: true,
    message: 'CORS test working!',
    timestamp: new Date().toISOString(),
    method: req.method,
    cors: 'enabled',
    origin: req.headers.origin || 'unknown'
  });
}
