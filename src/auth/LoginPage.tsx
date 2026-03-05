import { useState } from "react";
import { useAuth } from "./Auth.tsx";
import { Navigate, useNavigate } from "react-router-dom";

const VALID_PASSWORD = "fisica";

function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password === VALID_PASSWORD) {
      auth.login(password);
      navigate("/");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  if (auth.user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="flex justify-center items-center h-[calc(100vh-300px)] p-4">
      <form
        className="bg-gray-200 p-4 md:p-6 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-xs md:max-w-sm"
        onSubmit={login}
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm md:text-base font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="bg-white rounded-lg p-2 md:p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1d2554] text-sm md:text-base"
          />
          {/* Muestra el error solo si existe */}
          {error && (
            <p className="text-red-600 text-xs md:text-sm font-medium">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#1d2554] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium hover:bg-[#374785] transition-colors text-sm md:text-base"
        >
          Iniciar sesión
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
