import React from "react";
import { create } from "zustand";
import { useNavigate, Navigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const login = (username: string) => {
    setUser({ username });
    navigate("/");
  };
  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}

function AuthRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

// eslint-disable-next-line
export { AuthRoute, useAuth };
