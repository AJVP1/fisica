// importaciones de librerias
import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// importaciones de componentes
import Header from "./components/Header";

// importaciones de páginas
import Bienvenida from "./pages/Bienvenida";
const Introduccion = lazy(() => import("./pages/Introduccion"));

// importaciones de auth
import LoginPage from "./auth/LoginPage";
import LogoutPage from "./auth/LogoutPage";
import { AuthRoute } from "./auth/Auth";

// Componente de carga
const LoadingComponent = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <p>Cargando...</p>
  </div>
);

function App() {
  return (
    <>
      <HashRouter>
        <Header />

        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/introduccion" element={<Introduccion />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Página no encontrada</p>} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
