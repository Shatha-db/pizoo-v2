# ⚡ دليل البدء السريع - Pizoo V2

## 🚀 5 دقائق للتشغيل

### المتطلبات
- Node.js >= 18
- Python >= 3.11
- MongoDB (محلي أو Atlas)

---

## 1️⃣ استنساخ المشروع
```bash
git clone https://github.com/Shatha-db/pizoo-v2.git
cd pizoo-v2
```

## 2️⃣ Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```
✅ يعمل على: http://localhost:3000

## 3️⃣ Backend (terminal جديد)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python server.py
```
✅ يعمل على: http://localhost:8000

## 4️⃣ اختبار
```bash
# اختبار Backend
curl http://localhost:8000/api/health

# افتح Frontend
open http://localhost:3000
```

---

## 📝 ملفات البيئة

### frontend/.env.local
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### backend/.env
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=pizoo_v2
EMERGENT_LLM_KEY=your_key_here
```

---

## 🔧 أوامر سريعة

### إيقاف Port مشغول
```bash
lsof -ti:3000 | xargs kill -9  # Frontend
lsof -ti:8000 | xargs kill -9  # Backend
```

### تشغيل MongoDB محلي
```bash
brew services start mongodb-community@7.0
```

---

## 📚 المزيد من التفاصيل
- [LOCAL_SETUP_MAC.md](LOCAL_SETUP_MAC.md) - دليل كامل
- [DEPLOYMENT.md](DEPLOYMENT.md) - دليل النشر
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - نظرة شاملة

---

**جاهز للتطوير! 🎉**
