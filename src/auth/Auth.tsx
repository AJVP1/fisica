import { type ReactNode } from "react";
import { create } from "zustand";
import { Navigate } from "react-router-dom";

interface AuthState {
  user: { username: string } | null;
  setUser: (user: { username: string } | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

function useAuth() {
  const { user, setUser } = useAuthStore();

  const login = (username: string) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}

// Ruta protegida: redirige a /login si no hay sesión activa.
function AuthRoute({ children }: { children: ReactNode }) {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthRoute, useAuth };
