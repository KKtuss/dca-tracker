#!/bin/bash

echo "🚀 Deploying DCA TRACKER Backend to Vercel..."
echo "================================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel..."
    vercel login
fi

# Deploy to production
echo "📦 Deploying backend..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🔧 Next steps:"
echo "1. Copy your API URL from above"
echo "2. Open insider-tracker-web.html"
echo "3. Update the API URL in the fetch call"
echo "4. Start scanning real blockchain data!"
echo ""
echo "🎯 Your DCA TRACKER will now show REAL Solana data!"
