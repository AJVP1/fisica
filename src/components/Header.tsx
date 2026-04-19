import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/Auth.tsx";

export const Header = () => {
  const auth = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1d2554] text-white mx-auto flex justify-between px-6 py-4">
      <Link className="flex items-center gap-4" to="/">
        <img src={logo} alt="Logo" className="brightness-0 invert w-16 h-16" />
        <div>
          <p className="mt-0 text-2xl font-bold">Universidad de Buenos Aires</p>
          <p className="text-base text-gray-400 font-medium mt-0 ml-1">
            Facultad de Ciencias Exactas y Naturales
          </p>
        </div>
      </Link>
      {auth.user && (
        <button
          onClick={auth.logout}
          className="self-center border-2 border-white/30 font-semibold text-white px-4 py-2 rounded-lg hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer"
        >
          Cerrar sesión
        </button>
      )}
    </header>
  );
};
