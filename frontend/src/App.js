// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [filters, setFilters] = useState({
//     q: "",
//     category: "",
//     minPrice: "",
//     maxPrice: ""
//   });

//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const handleSearch = async () => {
//     setLoading(true);
//     setError("");
//     setHasSearched(true);

//     try {
//       const res = await axios.get(`${process.env.REACT_APP_API_URL}/search`, {
//         params: filters
//       });
//       setResults(res.data);
//     } catch (err) {
//       setError("Failed to fetch data");
//       setResults([]);
//     }

//     setLoading(false);
//   };

//   // Load all products on page load
//   useEffect(() => {
//     handleSearch();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Inventory Search</h1>

//       <div className="filters">
//         <input
//           name="q"
//           placeholder="Search products..."
//           value={filters.q}
//           onChange={handleChange}
//         />

//         <select
//           name="category"
//           value={filters.category}
//           onChange={handleChange}
//         >
//           <option value="">All Categories</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Fashion">Fashion</option>
//         </select>

//         <input
//           name="minPrice"
//           type="number"
//           placeholder="Min Price"
//           value={filters.minPrice}
//           onChange={handleChange}
//         />

//         <input
//           name="maxPrice"
//           type="number"
//           placeholder="Max Price"
//           value={filters.maxPrice}
//           onChange={handleChange}
//         />

//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}

//       {hasSearched && !loading && results.length === 0 && (
//         <p>No results found</p>
//       )}

//       <div className="grid">
//         {results.map((item) => (
//           <div key={item.id} className="card">
//             <h3>{item.name}</h3>
//             <p>{item.category}</p>
//             <span>₹{item.price}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    minPrice: "",
    maxPrice: ""
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/search`, {
        params: filters
      });
      setResults(res.data);
    } catch (err) {
      setError("Failed to fetch data");
      setResults([]);
    }

    setLoading(false);
  };

  // 🔥 Debounce (auto search after typing)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [filters]);

  return (
    <div className="container">
      <h1>🛒 Inventory Search</h1>

      <div className="filters">
        <input
          name="q"
          placeholder="Search products..."
          value={filters.q}
          onChange={handleChange}
        />

        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>

        <input
          name="minPrice"
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
        />

        <input
          name="maxPrice"
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {hasSearched && !loading && results.length === 0 && (
        <p className="status">No results found</p>
      )}

      <div className="grid">
        {results.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>

            <span className="badge">{item.category}</span>

            <p className="price">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;