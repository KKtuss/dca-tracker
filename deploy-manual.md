# Manual Vercel Deployment Guide

## Step 1: Push Changes to GitHub (if using git)

If you have your project connected to GitHub:

```bash
git add .
git commit -m "Fix CORS and body parsing issues"
git push origin main
```

## Step 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Find your project "dcatracker" 
3. Click on it to open the dashboard
4. Go to the "Deployments" tab
5. Click "Redeploy" on your latest deployment

## Step 3: Force Redeploy (Alternative)

If the above doesn't work:

1. In your Vercel dashboard, go to "Settings" → "General"
2. Scroll down to "Build & Development Settings"
3. Click "Override" next to "Build Command"
4. Set it to: `echo "Forcing redeploy"`
5. Save changes
6. Go back to "Deployments" and click "Redeploy"

## Step 4: Verify Deployment

After redeployment, test these endpoints:

- **CORS Test**: `https://your-project.vercel.app/api/cors-test`
- **Main API**: `https://your-project.vercel.app/api/solana-scan`

## What Was Fixed

1. **CORS Issues**: 
   - Proper OPTIONS preflight handling
   - Consistent CORS headers across all endpoints
   - Added `X-Requested-With` to allowed headers

2. **Body Parsing Issues**:
   - Enhanced body parsing in `solana-scan.js`
   - Better error handling for missing request bodies
   - Raw body parsing fallback for Vercel

3. **Configuration**:
   - Updated `vercel.json` with proper function settings
   - Added global CORS headers
   - Configured both API endpoints

## Testing After Deployment

1. Open your `insider-tracker-web.html` in a local server
2. Go to Settings tab
3. Click "🔍 Test CORS" button
4. Click "🧪 Test Backend" button
5. Both should now work without CORS errors

## If Issues Persist

1. Check Vercel deployment logs for errors
2. Ensure all files are properly committed
3. Try clearing browser cache and cookies
4. Verify the backend URL is correct in your frontend
