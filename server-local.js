// Simple local server for testing backend endpoints
// Run with: node server-local.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: false
}));

app.use(express.json());

// CORS test endpoint
app.post('/api/cors-test', (req, res) => {
    console.log('CORS test request received:', {
        method: req.method,
        headers: req.headers,
        body: req.body
    });
    
    res.json({
        success: true,
        message: 'CORS test working locally!',
        timestamp: new Date().toISOString(),
        method: req.method,
        cors: 'enabled',
        origin: req.headers.origin || 'unknown',
        bodyReceived: !!req.body,
        bodyType: typeof req.body
    });
});

// Main endpoint
app.post('/api/solana-scan', (req, res) => {
    console.log('Solana scan request received:', {
        method: req.method,
        headers: req.headers,
        body: req.body
    });
    
    // Handle test request
    if (req.body && req.body.test) {
        return res.json({
            success: true,
            message: 'Backend API is working locally!',
            timestamp: new Date().toISOString(),
            cors: 'enabled',
            origin: req.headers.origin || 'unknown',
            bodyReceived: !!req.body,
            bodyType: typeof req.body
        });
    }
    
    // Handle real scan request
    res.json({
        success: true,
        message: 'Local scan endpoint working',
        timestamp: new Date().toISOString(),
        data: {
            wallets: [
                {
                    address: 'TestWallet123...',
                    score: 95,
                    patterns: ['Early Entry', 'Quick Exit'],
                    lastActivity: new Date().toISOString()
                }
            ]
        }
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        endpoints: ['/api/cors-test', '/api/solana-scan', '/health']
    });
});

app.listen(port, () => {
    console.log(`🚀 Local test server running on http://localhost:${port}`);
    console.log(`📋 Available endpoints:`);
    console.log(`   POST /api/cors-test - Test CORS functionality`);
    console.log(`   POST /api/solana-scan - Test main endpoint`);
    console.log(`   GET  /health - Server health check`);
    console.log(`\n💡 Test with: node test-backend-local.js`);
});
