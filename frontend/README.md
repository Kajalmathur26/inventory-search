# 🛒 Inventory Search Application

## 🚀 Overview

This is a full-stack Inventory Search application built using **React.js (Frontend)** and **Node.js + Express (Backend)**.
It allows users to search and filter products based on name, category, and price range.

---

## ✨ Features

### 🔍 Search & Filters

* Search products by **name (partial & case-insensitive)**
* Filter by **category**
* Filter using **price range (min & max)**
* Combine multiple filters together

### 🎨 UI Features

* Clean and responsive UI
* Real-time search (with debounce)
* Product cards layout
* “No results found” state
* Loading & error handling

---

## 🧠 Backend Details

### API Endpoint

`GET /search`

### Query Parameters

* `q` → product name (partial match)
* `category` → filter by category
* `minPrice` → minimum price
* `maxPrice` → maximum price

### Logic

* Case-insensitive search using `.toLowerCase()`
* Multiple filters applied together
* If no filters → returns all products

### Edge Cases Handled

* Empty query → returns all data
* Invalid price range → returns error
* No matching results → returns empty array

---

## 🗂 Data Source

* In-memory array (static product list)

---

## ⚡ Performance Optimization

For large datasets, the following improvements can be made:

* Add **debouncing** (already implemented) to reduce API calls
* Use **database indexing** (on name, category, price)
* Implement **pagination**
* Move filtering logic to database (MongoDB)

---

## 🛠 Tech Stack

* **Frontend:** React.js, Axios, CSS
* **Backend:** Node.js, Express.js
* **Deployment:** Render (Backend), Netlify (Frontend)

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/inventory-search.git
cd inventory-search
```

---

### 2️⃣ Run Backend

```bash
cd backend
npm install
node server.js
```

---

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🌐 Live Demo

* Frontend: https://your-netlify-url.netlify.app
* Backend: https://your-render-url.onrender.com/search

---

## 📌 Future Improvements

* Add authentication
* Add pagination & sorting
* Use MongoDB for persistent storage
* Add caching for faster responses

---

## ✅ Conclusion

This project demonstrates building a full-stack search feature with efficient filtering, clean UI, and optimized performance using modern web technologies.
