import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import MapView from "../../components/MapView";
import { api } from "../../services/api";
import Home from "./Home.jsx";

export default function SearchResults() {



  
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Read ALL query params safely
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";
  const minPrice = params.get("minPrice") || "";
  const maxPrice = params.get("maxPrice") || "";
  const maxDistance = params.get("maxDistance") || "";

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const loaderRef = useRef(null);

  // 🔁 Reset when search/filter changes
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [query, minPrice, maxPrice, maxDistance]);

  // 🔁 Fetch paginated data
  useEffect(() => {
    if (!query) {
      setLoading(false);
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        page === 1 ? setLoading(true) : setLoadingMore(true);
        setError(null);

        const res = await api.get("/products/search", {
          params: {
            q: query,
            minPrice,
            maxPrice,
            maxDistance,
            page,
            limit: 6,
          },
        });

        const newProducts = res.data?.data || [];
        const meta = res.data?.meta;

        setProducts((prev) =>
          page === 1 ? newProducts : [...prev, ...newProducts]
        );

        setHasMore(meta?.hasMore ?? false);
      } catch (err) {
        console.error("Error while fetching products:", err);
        setError("Unable to fetch search results. Please try again.");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchProducts();
  }, [query, minPrice, maxPrice, maxDistance, page]);

  // ♾️ Infinite scroll observer
  useEffect(() => {
    if (!hasMore || loadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadingMore]);

  // 🌀 Initial loading
  if (loading && page === 1) {
    return <div className="p-8">Loading search results...</div>;
  }

  // ❌ Error UI (UNCHANGED)
  if (error) {
    return (
      <div
        className="flex items-center bg-white/20 flex-col backdrop-blur-lg
        border border-white/30
        rounded-2xl m-2 p-6
        shadow-xl text-white
        transition-all duration-300"
      >
        <div className="p-8 text-red-500 font-mono text-xl bg-[white]/100 rounded-lg">
          {error}
        </div>

        <button
          className="p-5 mt-5 bg-[black]/30 text-white rounded hover:scale-109"
          onClick={() => navigate("/home")}
        >
          Return to Home screen
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-10" ><Home /></div>
      {/* ✅ HEADER – UNCHANGED */}
      <h2 className="text-2xl font-bold mb-6 text-[white] bg-[black]/30 backdrop-blur-lg p-4 rounded">
        Cheapest & Nearest Search Results for : “{query}”
      </h2>
      {products.length > 0 && <MapView products={products} />}
      {/* ✅ PRODUCT GRID – UNCHANGED */}
      <div className="grid md:grid-cols-2 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={`${product.id}-${product.store}`} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* ✅ MAP – UNCHANGED */}
      

      {/* ♾️ Infinite scroll loader */}
      <div ref={loaderRef} className="flex justify-center p-6">
        {loadingMore && <p className="text-white">Loading more results…</p>}
        {!hasMore && products.length > 0 && (
          <p className="text-gray-400">No more results</p>
        )}
      </div>
    </div>
  );
}
