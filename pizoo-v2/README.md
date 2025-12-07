# Pizoo V2 - Modern Dating Platform

A complete redesign of Pizoo inspired by Tinder's modern UI/UX with custom branding and design language.

## 🚀 Project Structure

```
pizoo-v2/
├── frontend/          # Next.js frontend application
│   ├── app/            # Next.js 14 App Router pages
│   ├── components/     # React components
│   ├── i18n/           # Internationalization
│   └── public/         # Static assets
└── backend/           # FastAPI backend
    ├── models/         # Database models
    ├── routes/         # API routes
    └── utils/          # Utility functions
```

## ✨ Features

### Frontend
- ✅ Modern Next.js 14 with App Router
- ✅ Tinder-inspired UI/UX design
- ✅ Pink/Purple gradient branding (Pizoo colors)
- ✅ Responsive mobile-first design
- ✅ Smooth animations with Framer Motion
- ✅ Multi-language support (10 languages)
- ✅ All required pages implemented
- ✅ Admin panel for content management

### Backend
- ✅ FastAPI REST API
- ✅ MongoDB integration
- ✅ OpenAI image generation (gpt-image-1)
- ✅ CRUD endpoints for all content types
- ✅ Admin authentication

## 📄 Pages Implemented

1. **Home** - Hero section with features and stories preview
2. **Swipe Stories** - User success stories grid
3. **About Us** - Company information and values
4. **Team** - Team member profiles
5. **Blog** - Blog listing and individual posts
6. **FAQ** - Frequently asked questions with accordion
7. **Contact** - Contact form and information
8. **Safety Center** - Safety tips and guidelines
9. **Download** - App download page with store links
10. **Privacy Policy** - Privacy policy content
11. **Terms & Conditions** - Terms of service
12. **Cookie Policy** - Cookie usage information
13. **Admin Panel** - Content management system

## 🌍 Supported Languages

- English (en)
- Arabic (ar) - RTL support
- German (de)
- French (fr)
- Spanish (es)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Turkish (tr)
- Chinese (zh)
- Japanese (jp)

## 🛠️ Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl (i18n)
- Lucide React (icons)

### Backend
- FastAPI
- MongoDB
- PyMongo
- Pydantic
- OpenAI Integration (emergentintegrations)

## 👨‍💻 Development

### Frontend Setup

```bash
cd frontend
yarn install
yarn dev
```

Frontend runs on: http://localhost:3002

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python server.py
```

Backend runs on: http://localhost:8002

### Environment Variables

**Frontend (.env.local)**
```
NEXT_PUBLIC_API_URL=http://localhost:8002
```

**Backend (.env)**
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=pizoo_v2
EMERGENT_LLM_KEY=sk-emergent-56aC2Be75A5440a22D
```

## 📦 MongoDB Collections

- `blog_posts` - Blog articles
- `swipe_stories` - User success stories
- `team_members` - Team profiles
- `faq_items` - FAQ questions and answers
- `uploaded_images` - AI-generated images

## 🔑 Admin Panel

Access: http://localhost:3002/admin

Demo Password: `admin123`

### Admin Features
- Create/Edit/Delete blog posts
- Manage swipe stories
- Update team members
- Edit FAQ items
- Generate AI images

## 🎨 Design System

### Colors
- **Primary Pink**: #FF6B9D
- **Primary Purple**: #C471ED
- **Light Pink**: #FFB4D6
- **Dark Purple**: #9B4DC4

### Fonts
- **Display**: Manrope (headings)
- **Body**: Inter (text)

### Gradients
- Main gradient: Pink to Purple (135deg)
- Light gradient: Light Pink to Light Purple

## 🛡️ API Endpoints

### Public Endpoints
- `GET /api/health` - Health check
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/{id}` - Get single blog post
- `GET /api/stories` - Get all stories
- `GET /api/stories/{id}` - Get single story
- `GET /api/team` - Get team members
- `GET /api/faq` - Get FAQ items

### Admin Endpoints
- `POST /api/admin/blog` - Create blog post
- `PUT /api/admin/blog/{id}` - Update blog post
- `DELETE /api/admin/blog/{id}` - Delete blog post
- `POST /api/admin/stories` - Create story
- `POST /api/admin/generate-image` - Generate AI image

## 🚀 Deployment

### Vercel Deployment (Frontend)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

### Backend Deployment

Deploy FastAPI backend to:
- Railway
- Render
- AWS EC2
- DigitalOcean

## 📝 Notes

- All AI image generation uses OpenAI's gpt-image-1 model
- Uses Emergent LLM key for API access
- Mobile-responsive design optimized for all screen sizes
- RTL support for Arabic language
- Lighthouse performance score optimized

## 👥 Team

Built with ❤️ for Pizoo V2

## 📝 License

All rights reserved © 2024 Pizoo
