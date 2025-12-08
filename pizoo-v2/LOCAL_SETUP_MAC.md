# 🍎 دليل الإعداد المحلي لـ Mac - Pizoo V2

## ✅ المتطلبات الأساسية

### 1. Node.js و npm
```bash
# تحقق من التثبيت
node --version  # يجب أن يكون >= 18.0.0
npm --version   # يجب أن يكون >= 9.0.0

# إذا لم يكن مثبتاً، ثبّت عبر Homebrew:
brew install node
```

### 2. Python
```bash
# تحقق من التثبيت
python3 --version  # يجب أن يكون >= 3.11
pip3 --version

# إذا لم يكن مثبتاً:
brew install python@3.11
```

### 3. MongoDB (اختياري للتطوير المحلي)
```bash
# الطريقة 1: MongoDB محلي
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# الطريقة 2: استخدام MongoDB Atlas (موصى به)
# اذهب إلى: https://www.mongodb.com/cloud/atlas
# أنشئ cluster مجاني واحصل على connection string
```

### 4. Git
```bash
# تحقق من التثبيت
git --version

# إذا لم يكن مثبتاً:
brew install git
```

---

## 📥 الخطوة 1: استنساخ المشروع من GitHub

```bash
# بعد رفع المشروع إلى GitHub، قم بـ:
git clone https://github.com/Shatha-db/pizoo-v2.git
cd pizoo-v2
```

---

## 🎨 الخطوة 2: إعداد Frontend

### 1. الانتقال إلى مجلد Frontend
```bash
cd frontend
```

### 2. تثبيت الحزم
```bash
# استخدم npm (مفضل) أو yarn
npm install

# أو
yarn install
```

### 3. إنشاء ملف البيئة
```bash
# انسخ ملف .env.example
cp .env.example .env.local

# ثم حرر الملف
nano .env.local
```

**محتوى .env.local:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. تشغيل Frontend
```bash
npm run dev

# أو
yarn dev
```

**Frontend سيعمل على:** http://localhost:3000

---

## ⚙️ الخطوة 3: إعداد Backend

### افتح terminal جديد

### 1. الانتقال إلى مجلد Backend
```bash
cd backend
```

### 2. إنشاء بيئة افتراضية (Virtual Environment)
```bash
# إنشاء البيئة
python3 -m venv venv

# تفعيل البيئة
source venv/bin/activate
```

### 3. تثبيت الحزم
```bash
pip install -r requirements.txt
```

### 4. إنشاء ملف البيئة
```bash
# انسخ ملف .env.example
cp .env.example .env

# ثم حرر الملف
nano .env
```

**محتوى .env:**
```env
# للتطوير المحلي مع MongoDB محلي
MONGO_URL=mongodb://localhost:27017
DB_NAME=pizoo_v2

# أو استخدم MongoDB Atlas
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
# DB_NAME=pizoo_v2

# مفتاح AI (احصل عليه من Emergent)
EMERGENT_LLM_KEY=your_api_key_here
```

### 5. تشغيل Backend
```bash
# تأكد من أن البيئة الافتراضية مفعلة
uvicorn server:app --reload --host 0.0.0.0 --port 8000

# أو
python server.py
```

**Backend سيعمل على:** http://localhost:8000

**API Docs:** http://localhost:8000/docs

---

## 🧪 الخطوة 4: التحقق من التشغيل

### 1. اختبار Backend
```bash
# في terminal جديد
curl http://localhost:8000/api/health

# يجب أن ترى:
# {"status":"healthy","service":"Pizoo V2 API"}
```

### 2. اختبار Frontend
- افتح المتصفح: http://localhost:3000
- يجب أن ترى صفحة Pizoo الرئيسية

### 3. اختبار الاتصال بين Frontend و Backend
- افتح Console في المتصفح (F12)
- تأكد من عدم وجود أخطاء CORS

---

## 📁 بنية المشروع

```
pizoo-v2/
├── frontend/              # Next.js Frontend
│   ├── app/              # صفحات Next.js
│   ├── components/       # مكونات React
│   ├── i18n/            # ملفات الترجمة
│   ├── package.json
│   └── .env.local       # متغيرات البيئة
│
├── backend/              # FastAPI Backend
│   ├── server.py        # الملف الرئيسي
│   ├── requirements.txt
│   └── .env            # متغيرات البيئة
│
├── README.md
├── PROJECT_SUMMARY.md
└── DEPLOYMENT.md
```

---

## 🔧 أوامر مفيدة

### Frontend
```bash
cd frontend

# التطوير
npm run dev

# البناء للإنتاج
npm run build

# تشغيل الإنتاج
npm start

# Linting
npm run lint
```

### Backend
```bash
cd backend

# تشغيل مع Hot Reload
uvicorn server:app --reload

# تشغيل بدون Reload
python server.py

# اختبار الاتصال بـ MongoDB
python -c "from pymongo import MongoClient; client = MongoClient('mongodb://localhost:27017'); print('Connected!')"
```

---

## 🐛 حل المشاكل الشائعة

### مشكلة: Port مشغول
```bash
# إيقاف عملية على Port 3000
lsof -ti:3000 | xargs kill -9

# إيقاف عملية على Port 8000
lsof -ti:8000 | xargs kill -9
```

### مشكلة: خطأ في تثبيت الحزم
```bash
# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# Backend
cd backend
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### مشكلة: MongoDB لا يعمل
```bash
# تشغيل MongoDB
brew services start mongodb-community@7.0

# التحقق من الحالة
brew services list

# الاتصال بـ MongoDB
mongosh
```

### مشكلة: خطأ CORS
- تأكد من أن Backend يعمل على Port 8000
- تأكد من أن NEXT_PUBLIC_API_URL في Frontend يشير إلى http://localhost:8000
- تحقق من إعدادات CORS في server.py

---

## 🔐 الأمان والمفاتيح

### مفاتيح مطلوبة:
1. **EMERGENT_LLM_KEY**: احصل عليه من لوحة تحكم Emergent
   - لتوليد الصور بالذكاء الاصطناعي

2. **MONGO_URL**: 
   - محلي: `mongodb://localhost:27017`
   - Atlas: احصل عليه من MongoDB Atlas

### ⚠️ تحذير
لا تشارك ملفات .env أو المفاتيح السرية!

---

## 📱 لوحة التحكم الإدارية

**URL:** http://localhost:3000/admin

**كلمة المرور الافتراضية:** `admin123`

⚠️ **غيّر كلمة المرور في الإنتاج!**

---

## 🚀 الخطوات التالية

1. ✅ تأكد من أن كل شيء يعمل محلياً
2. 📖 اقرأ PROJECT_SUMMARY.md للتفاصيل
3. 🌐 راجع DEPLOYMENT.md للنشر
4. 🔧 ابدأ في التطوير!

---

## 📞 الدعم

إذا واجهت مشاكل:
1. راجع قسم "حل المشاكل الشائعة" أعلاه
2. تحقق من Console للأخطاء
3. راجع ملفات التوثيق

---

## ✅ قائمة التحقق

- [ ] Node.js مثبت (>= 18.0.0)
- [ ] Python مثبت (>= 3.11)
- [ ] MongoDB مثبت أو Atlas جاهز
- [ ] Git مثبت
- [ ] تم استنساخ المشروع
- [ ] Frontend يعمل على port 3000
- [ ] Backend يعمل على port 8000
- [ ] لا توجد أخطاء CORS
- [ ] يمكنني الوصول للوحة الإدارية

---

**تم التجهيز بنجاح! 🎉**
