import { useEffect, useState } from "react";
import { getPendingProducts, approveProduct } from "../../services/adminService";
import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await getPendingProducts(user.token);
      setProducts(res.data);
    }
    load();
  }, [user.token]);

  const handleApprove = async (id) => {
    await approveProduct(id, user.token);
    setProducts(products.filter(p => p.id !== id));
  };

  
  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Pending Products</h2>

      {products.length === 0 && <p>No pending approvals</p>}

      {products.map(p => (
        <div key={p.id} className="bg-white/10 p-4 rounded mb-4">
          <h3 className="font-semibold">{p.name}</h3>
          <button
            onClick={() => handleApprove(p.id)}
            className="mt-2 bg-green-600 px-4 py-1 rounded"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}
