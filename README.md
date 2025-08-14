# 🚀 DCA TRACKER - Solana Insider Wallet Detection

A powerful web application that detects insider trading patterns on the Solana blockchain using real-time data analysis.

## ✨ Features

- **🔍 Real Blockchain Scanning**: Connect to Solana blockchain via backend API
- **📊 Insider Pattern Detection**: Early Entry, Quick Exit, Volume Spike, Token Hopping
- **🎯 Multiple Scan Types**: Recent transactions, specific wallet, batch analysis
- **📈 Real-time Monitoring**: Track new insider activity
- **💾 Data Export**: CSV export for further analysis
- **🎨 Modern UI**: Black digital style with smooth animations

## 🏗️ Architecture

- **Frontend**: Single HTML file with embedded CSS/JS
- **Backend**: Vercel serverless API (FREE)
- **Blockchain**: Solana RPC integration
- **Data**: Real-time blockchain analysis

## 🚀 Quick Start

### Option 1: Use Frontend Only (Demo Mode)
1. Open `insider-tracker-web.html` in your browser
2. Start scanning - will use enhanced demo mode with realistic data

### Option 2: Full Backend Setup (Real Blockchain Data)

#### Step 1: Deploy Backend to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy Backend**:
   ```bash
   vercel --prod
   ```

4. **Copy your API URL** (e.g., `https://your-project.vercel.app`)

#### Step 2: Update Frontend

1. Open `insider-tracker-web.html`
2. Find the fetch call to `/api/solana-scan`
3. Replace with your Vercel URL: `https://your-project.vercel.app/api/solana-scan`

#### Step 3: Start Scanning Real Data!

- Select scan type and depth
- Click "Start Scan"
- Get real Solana blockchain data!

## 🔧 Configuration

### RPC Endpoints

The backend supports multiple RPC endpoints:

- **Helius**: `https://rpc.helius.xyz/?api-key=YOUR_KEY`
- **Public**: `https://api.mainnet-beta.solana.com`
- **QuickNode**: `https://your-cluster.solana-mainnet.quiknode.pro/YOUR_KEY/`
- **Alchemy**: `https://solana-mainnet.g.alchemy.com/v2/YOUR_KEY`

### Scan Parameters

- **Scan Depth**: 100 to 5000 transactions
- **Min Early Entry**: 1-60 minutes
- **Max Hold Time**: 0.1-24 hours
- **Min Profit**: 1-1000%
- **Min Volume**: 0.01+ SOL
- **Min Success Rate**: 1-100%

## 📁 Project Structure

```
DCA-TRACKER/
├── insider-tracker-web.html    # Frontend application
├── api/
│   └── solana-scan.js         # Backend API endpoint
├── package.json                # Dependencies
├── vercel.json                # Vercel configuration
└── README.md                  # This file
```

## 🎯 How It Works

### Frontend
- User selects scan parameters
- Sends request to backend API
- Displays results with insider scoring

### Backend
- Connects to Solana blockchain
- Analyzes transaction patterns
- Calculates insider scores
- Returns analyzed wallet data

### Insider Detection Algorithm
1. **Early Entry**: Wallets that enter before major pumps
2. **Quick Exit**: Short holding periods (under 1 hour)
3. **Volume Spike**: Large balance changes
4. **Token Hopping**: Rapid movement between tokens
5. **Success Rate**: High percentage of profitable trades

## 🚨 Insider Score Ranges

- **0-30**: Low Risk - Normal trading behavior
- **31-60**: Medium Risk - Some suspicious patterns
- **61-80**: High Risk - Multiple insider patterns
- **81-100**: Very High Risk - Strong insider indicators

## 💡 Tips for Best Results

1. **Use Helius RPC** for premium performance
2. **Start with Recent Transactions** scan type
3. **Set scan depth to 500-1000** for good coverage
4. **Monitor high-risk wallets** (score >70)
5. **Export results** for further analysis

## 🔒 Security Notes

- Backend API is public (no authentication required)
- Consider adding rate limiting for production use
- RPC endpoints may have usage limits
- Monitor API usage to avoid hitting limits

## 🆘 Troubleshooting

### Common Issues

**"Backend scan failed"**
- Check if Vercel deployment is active
- Verify API URL is correct
- Check browser console for errors

**"No wallets found"**
- Try different scan depths
- Check RPC endpoint connectivity
- Verify scan parameters aren't too restrictive

**"Rate limit exceeded"**
- Reduce scan depth
- Add delays between scans
- Use premium RPC service

### Debug Mode

Open browser console to see detailed logs:
- API requests and responses
- Blockchain connection status
- Scan progress and errors

## 🚀 Future Enhancements

- [ ] Real-time price data integration
- [ ] Advanced pattern recognition AI
- [ ] Portfolio tracking and alerts
- [ ] Multi-chain support
- [ ] Mobile app version

## 📞 Support

For issues or questions:
1. Check browser console for error messages
2. Verify Vercel deployment status
3. Test RPC endpoint connectivity
4. Review scan parameters

## 📄 License

This project is open source and available under the MIT License.

---

**🎉 Enjoy scanning for insider wallets on Solana!**
