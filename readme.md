📈 TradeWise – Stock Trading Dashboard (Hackathon Project)

TradeWise is a full-stack stock trading dashboard developed by our team to simulate buying and selling assets, managing orders, tracking portfolio performance, and verifying financial news. The platform combines a clean UI, RESTful backend, and an AI-powered Credibility Engine to provide trustworthy financial insights.

🚀 Features

🔐 User Authentication (Login / Signup)

📊 Interactive Dashboard with portfolio overview

📈 Watchlist displaying mock real-time stock prices

🟢 Buy / 🔴 Sell stocks with order tracking

🧾 Orders page (history of all Buy & Sell orders)

💼 Portfolio page

Holdings

Invested value

Current value

Total P&L

🧹 User-specific data handling (orders reset on logout)

🤖 TruthLens AI – AI-Powered News Verification (Special Feature)

Integrated AI-powered module called TruthLens AI to help users make informed trading decisions.

Allows searching any financial topic or company such as Bitcoin, Tesla, or interest rate changes.

Displays for each news article:

📰 Headline

🌐 Source

📅 Publication Date

📊 Sentiment Analysis (Bullish / Bearish / Neutral)

✅ Trust Score (reliability indicator)

Clearly labels sentiment, helping users quickly understand market impact without reading multiple articles.

Clicking a headline opens the full article in a new browser tab for smooth navigation.

Built using Python, World News API, and AI-based sentiment & credibility analysis.

Detects misinformation, pump-and-dump schemes, and fake news to reduce financial risk.

🛠️ Tech Stack
Frontend

HTML5, CSS3, JavaScript (DOM manipulation)

Fetch API

Backend

Node.js, Express.js

REST API

In-memory / JSON-based storage (hackathon MVP)

AI / News Detection Engine

Python for NLP and credibility analysis

Sentiment polarity detection

Rule-based + ML hybrid model

Real-time financial news from World News API

Tools

Kiro IDE (development & testing)

Git & GitHub

📂 Project Structure
TRADEWISE/
│
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── data/
│   └── package.json
│
├── frontend/
│   ├── dashboard/
│   │   ├── dashboard.html
│   │   ├── portfolio.html
│   │   ├── orders.html
│   │   └── markets.html
│   ├── landing_page/
│   │   ├── home.html
│   │   ├── signup/
│   │   │   └── signup.html
│   │   └── ...
│   └── public/
│       └── js/
│
├── .gitignore
└── README.md

⚙️ How to Run Locally
1️⃣ Backend
cd backend
npm install
npm start


Backend runs on: http://localhost:5000

2️⃣ Frontend

Open frontend files using Live Server

OR open HTML files directly in browser

🔁 Buy / Sell Flow

Users select Buy or Sell mode

Click an asset from the Watchlist

Orders are stored in the backend

Orders appear on the Orders page

Portfolio updates automatically

🔐 Logout Handling

User session is cleared

Orders data resets for new login

Prevents previous users’ data from leaking

☁️ Deployment

Backend: Render / Railway

Frontend: Netlify / Vercel

Fully deployment-ready with REST API and static frontend

🧪 Kiro IDE Usage

Kiro IDE was used for:

Project setup

Backend execution

Frontend testing

Overall development workflow

🎯 Hackathon Scope (MVP)

Focused on core functionality & UX

Mock market data used

Backend designed for easy extension

Authentication & order flow demonstrated clearly

📌 Future Improvements

Real-time stock prices (API integration)

Database integration (MongoDB)

Advanced authentication (JWT)

Charts & analytics

Mobile responsiveness

👥 Team Members

Gouri Biswas – Backend Dev
Ayushi Srivastava – Frontend Dev & UI/UX
Kanishkaa Patra – Frontend Dev, AI & UI/UX
Archak Banerjee – Frontend Dev & UI/UX
Ankan Dolui – Frontend Dev
Avijit Roy – Frontend Dev

⭐ Final Note

This project demonstrates:

Full-stack thinking

Clean UI/UX

Practical backend usage

Hackathon-ready deployment

AI-powered news verification for reliable trading insights
