import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/Auth.tsx";

export const Header = () => {
  const auth = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1d2554] bg-[#1d2554] text-white backdrop-blur-lg mx-auto flex justify-between px-6 py-4">
      <Link className="flex items-center gap-4" to="/">
        <img src={logo} alt="Logo" className="brightness-0 invert w-16 h-16" />
        <div>
          <p className="mt-0 text-2xl font-bold">Universidad de Buenos Aires</p>
          <p className="text-base text-gray-400 font-medium mt-0 ml-1">
            Facultad de Ciencias Exactas y Naturales
          </p>
        </div>
      </Link>
      {!auth.user ? (
        <Link
          to="/login"
          className="self-center border-2 border-[#1d2554] font-semibold text-white px-4 py-2 rounded-lg hover:border-white"
        >
          Inicio
        </Link>
      ) : (
        <button
          onClick={auth.logout}
          className="self-center border-2 border-[#1d2554] font-semibold text-white px-4 py-2 rounded-lg hover:border-white"
        >
          Cerrar sesión
        </button>
      )}
    </header>
  );
};
