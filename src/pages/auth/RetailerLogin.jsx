import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";

export default function RetailerLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token, res.data.role);
      navigate("/retailer/dashboard");
    } catch (err) {
      setError("Invalid retailer credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigate("/register/retailer");
  };

  return (
    <div className="m-5 mt-10 text-white flex items-center justify-center">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg backdrop-blur max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          AGORA – Retailer Login
        </h2>

        <p className="mb-6 text-gray-300">
          Manage your products & pricing
        </p>

        {error && (
          <p className="mb-4 text-red-400 text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Retailer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-green-600 py-3 rounded font-semibold hover:bg-green-700 transition disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        <p className="pt-4 text-sm">
          New retailer?{" "}
          <button
            onClick={handleRegister}
            className="text-cyan-400 hover:underline"
          >
            Register as a new retailer
          </button>
        </p>
      </div>
    </div>
  );
}
