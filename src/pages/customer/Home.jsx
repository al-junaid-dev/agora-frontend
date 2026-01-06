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


  return <div
  className="
    bg-white/20 backdrop-blur-lg
    border border-white/30
    rounded-2xl
    p-6 m-2
    shadow-xl
    text-white
    max-w-6xl mx-auto
  "
>
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
    Find the Cheapest Nearby Products
  </h2>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-4
      md:grid-rows-2
      gap-4
    "
  >
    {/* SEARCH INPUT */}
    <input
      type="text"
      placeholder="Search product (eg: iPhone 13)"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="
        order-1
        md:order-none
        md:col-span-3
        md:row-start-1
        p-3 rounded-xl
        bg-white/20 border border-white/30
        text-white placeholder-white/70
        focus:outline-none focus:ring-2 focus:ring-indigo-400
      "
    />

    {/* MIN PRICE */}
    <input
      type="number"
      placeholder="Min Price"
      onChange={(e) => setMinPrice(e.target.value)}
      className="
        order-2
        md:order-none
        md:col-start-1 md:row-start-2
        p-3 rounded-xl
        bg-white/20 border border-white/30
        text-white placeholder-white/70
        focus:outline-none focus:ring-2 focus:ring-indigo-400
      "
    />

    {/* MAX PRICE */}
    <input
      type="number"
      placeholder="Max Price"
      onChange={(e) => setMaxPrice(e.target.value)}
      className="
        order-3
        md:order-none
        md:col-start-2 md:row-start-2
        p-3 rounded-xl
        bg-white/20 border border-white/30
        text-white placeholder-white/70
        focus:outline-none focus:ring-2 focus:ring-indigo-400
      "
    />

    {/* DISTANCE */}
    <input
      type="number"
      placeholder="Max Distance (km)"
      onChange={(e) => setMaxDistance(e.target.value)}
      className="
        order-4
        md:order-none
        md:col-start-3 md:row-start-2
        p-3 rounded-xl
        bg-white/20 border border-white/30
        text-white placeholder-white/70
        focus:outline-none focus:ring-2 focus:ring-indigo-400
      "
    />

    {/* SEARCH BUTTON */}
    <button
      type="button"
      onClick={handleSearch}
      className="
        order-5               /* ✅ LAST on mobile */
        md:order-none
        md:col-start-4
        md:row-span-2         /* ✅ BOTH ROWS on desktop */
        flex items-center justify-center
        bg-black/40 backdrop-blur-md
        rounded-xl
        font-semibold
        px-6 py-3
        transition-all duration-300
        hover:scale-105 hover:bg-black/60
        focus:outline-none focus:ring-2 focus:ring-indigo-400
      "
    >
      Search
    </button>
  </div>
</div>

}

export default Home
