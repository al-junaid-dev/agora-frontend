import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ROLES } from "../../utils/constants";
import { useEffect } from "react";

export default function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isAuthenticated) {
      if (user.role === ROLES.CUSTOMER) navigate("/home");
      if (user.role === ROLES.RETAILER) navigate("/retailer/dashboard");
      if (user.role === ROLES.ADMIN) navigate("/admin/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="mt-10 text-white flex flex-col items-center justify-center">
      <div className="backdrop-blur-lg bg-[wheat]/10 border-b border-white/20 p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold mb-6">AGORA</h1>
      <p className="mb-10 text-lg text-gray-300">
        AI-Powered Hyperlocal Marketplace
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-4 bg-indigo-600 rounded-lg"
        >
          I want to Buy Products
        </button>

        <button
          onClick={() => navigate("/login/retailer")}
          className="px-6 py-4 bg-green-600 rounded-lg"
        >
          I want to Sell Products
        </button>

        <button
          onClick={() => navigate("/login/admin")}
          className="px-6 py-4 bg-red-600 rounded-lg"
        >
          Admin Access
        </button>
      </div>
     </div>
    </div>
  );
}
