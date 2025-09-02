# 🔗 React URL Shortener

A modern, interactive **URL Shortener** web app built with **React** and **Material-UI (MUI)**.  
Allows users to shorten URLs, set expiry times, add custom shortcodes, and view click statistics.

---

## 📖 Overview

This project enables users to:

- Shorten up to 5 URLs at a time
- Customize shortcodes for URLs
- Set URL expiry in minutes
- View all shortened URLs in a structured list
- Track URL click statistics with details like timestamp, referrer, and geolocation

It’s designed to **demonstrate React skills, component design, state management, and UI/UX best practices**.

---

## 🛠️ Tech Stack

- **React.js** → Frontend framework  
- **Material-UI (MUI)** → UI components and responsive design  
- **JavaScript (ES6+)** → Logic and interactivity  
- **Node.js / Express** → Backend API (for statistics fetching)  
- **Optional:** LocalStorage for temporary URL storage  

---

## ⚡ Features

1. **URL Shortening Form**
   - Enter up to 5 URLs at once
   - Add expiry times (default: 30 min)
   - Generate random or custom shortcodes  

2. **Shortened URLs List**
   - View all shortened URLs
   - Clickable links to open in a new tab
   - Shows original URL and expiry time  

3. **Statistics Page**
   - Tracks number of clicks per short URL
   - Displays click details: timestamp, referrer, geolocation  
   - Fetches data from backend API  

4. **Reusable Components**
   - `ShortenerForm.js` → Handles URL input and shortening  
   - `URLList.js` → Displays list of shortened URLs  
   - `StatisticsPage.js` → Displays URL click statistics  

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/Niharika-Sreekakulapu/22481A05H1/

cd 22481A05H1

### 2. Install Dependencies
npm install

### 3. Start the App
npm start

---

## 🎨 Screenshots
![input_form](https://github.com/user-attachments/assets/b96220d0-48e5-41f1-be71-23d085a7ea4b)
![output](https://github.com/user-attachments/assets/80be1c1a-4a51-45ce-9338-a2d2df366948)

## 🔮 Future Enhancements

Add authentication to track user-specific URLs

Add database storage (MongoDB/PostgreSQL) for URLs and analytics

Enable QR code generation for shortened URLs

Implement custom themes for better UI/UX

Add clipboard copy buttons for easy link sharing

## 👩‍💻 Author

Niharika Sreekakulapu

📧 Email : neeharikasreekakulapu@gmail.com


