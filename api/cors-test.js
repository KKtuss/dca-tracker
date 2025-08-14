export default async function handler(req, res) {
  // Enhanced CORS headers for all methods
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Origin, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Access-Control-Allow-Credentials', 'false');

  // Handle preflight OPTIONS request explicitly
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS preflight request received');
    res.status(200).json({
      success: true,
      message: 'CORS preflight successful',
      timestamp: new Date().toISOString(),
      method: 'OPTIONS',
      cors: 'enabled',
      origin: req.headers.origin || 'unknown'
    });
    return;
  }

  // Handle actual request
  console.log(`${req.method} request received from ${req.headers.origin || 'unknown'}`);
  
  res.status(200).json({
    success: true,
    message: 'CORS test working!',
    timestamp: new Date().toISOString(),
    method: req.method,
    cors: 'enabled',
    origin: req.headers.origin || 'unknown',
    headers: req.headers
  });
}
