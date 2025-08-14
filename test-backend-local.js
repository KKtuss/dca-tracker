// Simple local test script for backend endpoints
// Run with: node test-backend-local.js

const http = require('http');

// Test CORS endpoint
function testCorsEndpoint() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/api/cors-test',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:8000'
            }
        };

        const req = http.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                console.log('CORS Test Response:');
                console.log('Status:', res.statusCode);
                console.log('Headers:', res.headers);
                console.log('Body:', data);
                resolve({ status: res.statusCode, data });
            });
        });

        req.on('error', (error) => {
            console.error('CORS Test Error:', error);
            reject(error);
        });

        req.write(JSON.stringify({ test: true }));
        req.end();
    });
}

// Test main endpoint
function testMainEndpoint() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/api/solana-scan',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:8000'
            }
        };

        const req = http.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                console.log('\nMain Endpoint Test Response:');
                console.log('Status:', res.statusCode);
                console.log('Headers:', res.headers);
                console.log('Body:', data);
                resolve({ status: res.statusCode, data });
            });
        });

        req.on('error', (error) => {
            console.error('Main Endpoint Test Error:', error);
            reject(error);
        });

        req.write(JSON.stringify({ test: true }));
        req.end();
    });
}

// Run tests
async function runTests() {
    console.log('🧪 Testing Backend Endpoints Locally...\n');
    
    try {
        console.log('1. Testing CORS endpoint...');
        await testCorsEndpoint();
        
        console.log('\n2. Testing main endpoint...');
        await testMainEndpoint();
        
        console.log('\n✅ All tests completed!');
    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        console.log('\n💡 Make sure your local server is running on port 3000');
        console.log('   You can start it with: node server.js');
    }
}

runTests();
