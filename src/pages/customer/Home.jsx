import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Home = () => {

    const [query, setQuery] = useState("");
    const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
    const navigate = useNavigate();

    const handleSearch = async () => {
  try {
    if (query.trim()) {
      navigate(`/search?q=${query}&minPrice=${minPrice}&maxPrice=${maxPrice}&maxDistance=${maxDistance}`);
    }
  } catch (err) {
    console.error("Navigation error:", err);
  }
};


  return <div className="
    flex items-center bg-white/20 flex-col backdrop-blur-lg
  border border-white/30
  rounded-2xl m-2 p-6
  shadow-xl text-white">
    <div className="p-5 pt-10">
      <h2 className="text-3xl font-bold mb-4">
        Find the Cheapest Nearby Products
      </h2>
      
      
      <div className="grid  gap-4 grids-cols-3 grids-rows-2">
        <input
          type="text"
          placeholder="Search product (eg: iPhone 13)"
          className="border p-3 col-span-3 row-span-1 flex items-center rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min Price"
          className="border p-2 rounded"
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          className="border p-2 rounded"
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Distance (km)"
          className="border p-2 rounded"
          onChange={(e) => setMaxDistance(e.target.value)}
        />

        <button
        type="search"
          onClick={handleSearch}
          className="row-span-2 col-span-3 justify-center  bg-[black]/30 text-white px-6 py-2 rounded hover:scale-109"
        >
          Search
        </button>
      </div>
    </div> 
  </div>
}

export default Home
