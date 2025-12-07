# Pizoo V2 Deployment Guide

## Frontend Deployment (Vercel)

### Prerequisites
- GitHub account
- Vercel account

### Steps
1. Push code to GitHub repository: `Shatha-db/pizoo-v2`
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `.next`

6. Add Environment Variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
   ```

7. Click "Deploy"

### Post-Deployment
- Your frontend will be live at: `https://pizoo-v2.vercel.app`
- Update the backend CORS settings to include your Vercel URL

---

## Backend Deployment (Railway)

### Prerequisites
- Railway account
- MongoDB Atlas account (for production database)

### Steps

#### 1. Setup MongoDB Atlas
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist all IPs (0.0.0.0/0) for Railway
5. Get your connection string

#### 2. Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Create new project
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Select the `backend` folder as root
6. Railway will auto-detect the Dockerfile

#### 3. Configure Environment Variables
Add these variables in Railway dashboard:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=pizoo_v2
EMERGENT_LLM_KEY=your_actual_key_here
```

#### 4. Update CORS
After deployment, update `server.py` CORS origins:
```python
allow_origins=[
    "http://localhost:3002",
    "https://pizoo-v2.vercel.app",  # Add your Vercel URL
    "*"
]
```

#### 5. Deploy
- Railway will automatically deploy
- Your backend will be live at: `https://pizoo-v2-backend.railway.app`

---

## Alternative Backend Deployment (Render)

### Steps
1. Go to [render.com](https://render.com)
2. Create new "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Root Directory: `backend`
   - Environment: Python 3
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python server.py`

5. Add Environment Variables (same as Railway)

6. Deploy

---

## Environment Variables Summary

### Frontend
```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### Backend
```bash
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/
DB_NAME=pizoo_v2
EMERGENT_LLM_KEY=sk-emergent-xxxxx
```

---

## Post-Deployment Checklist

- [ ] Frontend deployed and accessible
- [ ] Backend deployed and accessible
- [ ] MongoDB connection working
- [ ] CORS configured correctly
- [ ] Environment variables set
- [ ] API endpoints responding
- [ ] Test all pages load correctly
- [ ] Test admin panel login
- [ ] Test image generation
- [ ] Mobile responsiveness check
- [ ] SSL certificates active (automatic on Vercel/Railway)

---

## Troubleshooting

### Frontend Issues
- **Build fails**: Check package.json dependencies
- **API calls fail**: Verify NEXT_PUBLIC_API_URL is correct
- **404 errors**: Check vercel.json rewrites configuration

### Backend Issues
- **Server won't start**: Check Python version (3.11+)
- **MongoDB connection fails**: Verify connection string and IP whitelist
- **CORS errors**: Add frontend URL to allowed origins
- **Image generation fails**: Verify EMERGENT_LLM_KEY is valid

---

## Monitoring

### Vercel
- View logs in Vercel dashboard
- Analytics available in Vercel dashboard

### Railway
- View logs in Railway dashboard
- Monitor resource usage
- Set up alerts for errors

---

## Custom Domain (Optional)

### Frontend (Vercel)
1. Go to Project Settings > Domains
2. Add your custom domain (e.g., www.pizoo.com)
3. Update DNS records as instructed
4. SSL certificate automatically provisioned

### Backend (Railway)
1. Go to Project Settings > Domains
2. Add custom domain (e.g., api.pizoo.com)
3. Update DNS records
4. Update frontend NEXT_PUBLIC_API_URL

---

## Scaling

- Vercel: Automatic scaling included
- Railway: Upgrade plan for more resources
- MongoDB Atlas: Scale cluster as needed

---

For support, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
