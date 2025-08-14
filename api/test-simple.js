export default function handler(req, res) {
  // Ultra-simple CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Simple response
  res.status(200).json({
    message: 'Simple test working!',
    method: req.method,
    timestamp: new Date().toISOString()
  });
}
