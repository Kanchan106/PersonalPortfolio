# 🌐 Portfolio Website - Kalyani Krishnaraj Mahadik

👩‍💻 A modern, responsive portfolio website built with HTML, CSS, and JavaScript, connected to a Node.js + Express backend and MongoDB database.

---

## ✨ Features
- Sticky navigation bar for easy section access
- Light/Dark theme toggle 🌙
- Responsive cards for skills, projects, and certificates
- Contact form integrated with backend API
- Modern color palette and hover animations
- Secure credential management using `.env` and `.gitignore`

---

## 📂 Sections
- 👩‍💻 About Me  
- 📚 Education  
- 💻 Skills  
- 🏆 Certificates  
- 🚀 Projects  
- 🌐 Social Links  
- ✉️ Contact Form  

---

## 🚀 Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Tools:** Git, GitHub, Nodemon, dotenv  

---

## 🔒 Environment Setup
This project uses environment variables for sensitive credentials.  
Create a `.env` file in the project root:
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
MONGO_URI=your-mongodb-uri

⚠️ **Important:**  
- `.env` is listed in `.gitignore` → it will never be pushed to GitHub.  
- Use `.env.example` as a reference for variable names.  
- Set environment variables securely when deploying (Heroku, Render, Vercel, etc.).

---

## 📦 Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Kanchan106/PersonalPortfolio.git
cd portfolio-project
npm install
npm run dev
