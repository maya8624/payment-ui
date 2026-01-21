import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function LoginPage() {
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();

  // const from = (location.state as any)?.from?.pathname || "/";

  const handleLogin = async () => {
    try {
      setError("");
      await login(email, password);
      navigate("/products");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow">
        <h1 className="mb-4 text-xl font-semibold">Login</h1>

        {error && <p className="mb-2 text-sm text-red-500">{error}</p>}

        <input
          className="mb-2 w-full rounded border p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mb-4 w-full rounded border p-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-3 text-xs text-gray-500">
          Test: test@domain.dev / 1234
        </p>
      </div>
    </div>
  );
}
