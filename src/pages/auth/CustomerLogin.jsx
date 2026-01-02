import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";

export default function CustomerLogin() {
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

      // Store token & role from backend
      login(res.data.token, res.data.role);

      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="m-5 mt-10 text-white flex items-center justify-center">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg max-w-md w-full text-center backdrop-blur">
        <h2 className="text-2xl font-bold mb-4">
          AGORA – Customer Login
        </h2>

        <p className="mb-6 text-gray-300">
          Find the cheapest nearby products
        </p>

        {error && (
          <p className="mb-4 text-red-400 text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
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
          className="w-full bg-indigo-600 py-3 rounded font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        <p className="pt-4 text-sm">
          New user?{" "}
          <button
            onClick={handleRegister}
            className="text-cyan-400 hover:underline"
          >
            Register as a new customer
          </button>
        </p>
      </div>
    </div>
  );
}
