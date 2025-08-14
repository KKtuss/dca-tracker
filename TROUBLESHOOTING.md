# DCA TRACKER - Troubleshooting Guide

## Current Issues & Solutions

### 1. CORS Errors (Most Common)

**Problem**: `Access to fetch at '...' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present`

**Causes**:
- Opening HTML file directly from filesystem (`file:///`)
- Backend not sending proper CORS headers
- Preflight OPTIONS request failing

**Solutions**:

#### A. Use Local Web Server (Recommended)
```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server -p 8000

# Option 3: VS Code Live Server extension
```

#### B. Check Backend CORS Headers
The backend should send these headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With
Access-Control-Max-Age: 86400
```

### 2. Body Parsing Issues

**Problem**: `Cannot destructure property 'scanType' of 'req.body' as it is undefined`

**Causes**:
- Vercel serverless functions sometimes don't parse JSON automatically
- Missing Content-Type header
- Request body not being sent properly

**Solutions**:

#### A. Enhanced Body Parsing (Already Implemented)
The backend now includes:
- Raw body parsing fallback
- Better error handling
- Debugging logs

#### B. Frontend Request Format
Ensure requests include:
```javascript
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(data)
```

### 3. Backend Deployment Issues

**Problem**: Changes not reflected after deployment

**Solutions**:

#### A. Force Redeploy
1. Go to Vercel Dashboard
2. Find your project "dcatracker"
3. Go to Deployments tab
4. Click "Redeploy" on latest deployment

#### B. Check Vercel Logs
1. In deployment details, check "Functions" tab
2. Look for build errors or runtime errors
3. Verify all API files are included

### 4. Testing & Debugging

#### A. Test CORS Locally
```bash
# Install dependencies
npm install

# Start local server
npm run start:local

# Test endpoints
npm run test:local
```

#### B. Test Frontend
1. Start local web server (port 8000)
2. Open `insider-tracker-web.html`
3. Go to Settings tab
4. Click "🔍 Test CORS" button
5. Click "🧪 Test Backend" button

#### C. Check Browser Console
Look for:
- CORS errors
- Network request failures
- JavaScript errors

### 5. Common Error Messages & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `npm: command not found` | Node.js not installed | Install Node.js from nodejs.org |
| `vercel: command not found` | Vercel CLI not installed | Use Vercel Dashboard instead |
| `localhost refused to connect` | Local server not running | Start local server (see above) |
| `404: NOT_FOUND` | Endpoint not deployed | Redeploy backend |
| `req.body undefined` | Body parsing issue | Backend fix already implemented |

### 6. Step-by-Step Resolution

#### Immediate Fix (Recommended)
1. **Redeploy Backend**: Go to Vercel Dashboard → Redeploy
2. **Start Local Server**: `python -m http.server 8000`
3. **Test Frontend**: Open `insider-tracker-web.html` via `http://localhost:8000`
4. **Test Endpoints**: Use the test buttons in Settings tab

#### If Issues Persist
1. **Check Backend Logs**: Vercel Dashboard → Functions → Logs
2. **Verify CORS Headers**: Check response headers in browser dev tools
3. **Test Endpoints Directly**: Try `curl` or Postman
4. **Clear Browser Cache**: Hard refresh (Ctrl+F5)

### 7. Verification Checklist

- [ ] Backend redeployed successfully
- [ ] Local web server running on port 8000
- [ ] Frontend opened via `http://localhost:8000`
- [ ] CORS test button works
- [ ] Backend test button works
- [ ] No console errors
- [ ] Network requests succeed

### 8. Getting Help

If you're still experiencing issues:

1. **Check Vercel Logs**: Look for specific error messages
2. **Browser Console**: Check for JavaScript errors
3. **Network Tab**: Verify request/response details
4. **Test Endpoints**: Use the test buttons to isolate issues

### 9. Alternative Solutions

#### A. Use Different Port
If port 8000 is busy:
```bash
python -m http.server 8080
# Then open http://localhost:8080
```

#### B. Different Local Server
```bash
# PHP (if available)
php -S localhost:8000

# Ruby (if available)
ruby -run -e httpd . -p 8000
```

#### C. Browser Extensions
- **CORS Unblock**: Temporarily disable CORS (for testing only)
- **Live Server**: VS Code extension for automatic reloading

## Quick Commands Reference

```bash
# Start local web server
python -m http.server 8000

# Test backend locally (if you have Node.js)
npm install
npm run start:local

# Check if ports are in use
netstat -an | findstr :8000
netstat -an | findstr :3000
```

## Success Indicators

✅ **CORS Test**: Shows "CORS test successful!"  
✅ **Backend Test**: Shows "Backend API is reachable!"  
✅ **No Console Errors**: Clean browser console  
✅ **Network Success**: 200 status codes in Network tab  
✅ **Real Data**: Actual Solana wallet addresses returned
