# Pizoo V2 - Production Build

This is a production-ready build of Pizoo V2 Frontend.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Production Server
```bash
npm start
```

The application will run on: **http://localhost:3000**

---

## 📋 What's Included

- `.next/` - Optimized production build
- `package.json` - Dependencies configuration
- `next.config.js` - Next.js configuration
- `public/` - Static assets

---

## 🔧 Requirements

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0

---

## 📝 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Change `http://localhost:8000` to your backend API URL.

---

## 🌐 Production Deployment

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📊 Build Information

- **Next.js Version**: 14.2.5
- **Build Date**: December 12, 2024
- **Build Type**: Production Optimized
- **Total Pages**: 17

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issues
```bash
rm -rf node_modules
npm install
```

---

## 📞 Support

For issues or questions, refer to the main repository:
https://github.com/Shatha-db/pizoo-v2

---

**Built with ❤️ by Pizoo Team**
