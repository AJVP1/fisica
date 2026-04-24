import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/Auth.tsx";

type HeaderProps = {
  onMenuClick?: () => void;
};

export const Header = ({ onMenuClick }: HeaderProps) => {
  const auth = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1d2554] text-white mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-white">menu</span>
          </button>
        )}
        <Link className="flex items-center gap-4" to="/">
          <img src={logo} alt="Logo" className="brightness-0 invert w-16 h-16" />
          <div>
            <p className="mt-0 text-2xl font-bold hidden sm:block">Universidad de Buenos Aires</p>
            <p className="mt-0 text-lg font-bold sm:hidden">UBA</p>
            <p className="text-base text-gray-400 font-medium mt-0 ml-1 hidden sm:block">
              Facultad de Ciencias Exactas y Naturales
            </p>
          </div>
        </Link>
      </div>
      {auth.user && (
        <button
          onClick={auth.logout}
          className="border-2 border-white/30 font-semibold text-white px-4 py-2 rounded-lg hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer"
        >
          <span className="hidden md:inline">Cerrar sesión</span>
          <span className="material-symbols-outlined md:hidden!">logout</span>
        </button>
      )}
    </header>
  );
};
