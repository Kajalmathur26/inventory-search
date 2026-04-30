require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const products = [
  { id: 1, name: "iPhone 13", category: "Electronics", price: 70000 },
  { id: 2, name: "Samsung TV", category: "Electronics", price: 50000 },
  { id: 3, name: "Nike Shoes", category: "Fashion", price: 5000 },
  { id: 4, name: "T-Shirt", category: "Fashion", price: 800 },
  { id: 5, name: "Laptop", category: "Electronics", price: 80000 }
];

app.get("/search", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let result = [...products];

  if (q) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    result = result.filter(p => p.category === category);
  }

  if (minPrice) {
    result = result.filter(p => p.price >= Number(minPrice));
  }

  if (maxPrice) {
    result = result.filter(p => p.price <= Number(maxPrice));
  }

  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});