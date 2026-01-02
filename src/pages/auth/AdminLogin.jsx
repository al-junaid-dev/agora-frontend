import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";

export default function AdminLogin() {
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
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Unauthorized admin access");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5 mt-10 text-white flex items-center justify-center">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg max-w-md w-full text-center backdrop-blur">
        <h2 className="text-2xl font-bold mb-4">
          AGORA – Admin Login
        </h2>

        <p className="mb-6 text-red-300">
          Restricted system control
        </p>

        {error && (
          <p className="mb-4 text-red-400 text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Admin Email"
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
          className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition disabled:opacity-60"
        >
          {loading ? "Authenticating..." : "Login"}
        </button>
      </div>
    </div>
  );
}
