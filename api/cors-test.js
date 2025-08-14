export default async function handler(req, res) {
  // Simple CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Simple response for all requests
  res.status(200).json({
    success: true,
    message: 'CORS test working!',
    timestamp: new Date().toISOString(),
    method: req.method
  });
}
