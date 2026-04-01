// importaciones de librerias
import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MathJaxContext } from "better-react-mathjax";

// importaciones de componentes
import Header from "./components/Header";

// importaciones de rutas
import Router2 from "./routes/Router2";
import Router3 from "./routes/Router3";
import Router4 from "./routes/Router4";
import Router5 from "./routes/Router5";

// importaciones de páginas
import Bienvenida from "./pages/Bienvenida";
const Introduccion = lazy(() => import("./pages/Introduccion"));
const Unidad2 = lazy(() => import("./pages/Unidad2/Teoria"));
const Unidad3 = lazy(() => import("./pages/Unidad3/Teoria"));
const Unidad4 = lazy(() => import("./pages/Unidad4/Teoria"));
const Unidad5 = lazy(() => import("./pages/Unidad5/Teoria"));

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
    <MathJaxContext config={{ tex: { inlineMath: [["$", "$"]] } }}>
      <HashRouter>
        <Header />

        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/introduccion" element={<Introduccion />} />

            <Route
              path="/la-medicion"
              element={
                <AuthRoute>
                  <Unidad2 />
                </AuthRoute>
              }
            >
              <Route path=":slug" element={<Router2 />} />
            </Route>

            <Route
              path="/magnitudes-fisica"
              element={
                <AuthRoute>
                  <Unidad3 />
                </AuthRoute>
              }
            >
              <Route path=":slug" element={<Router3 />} />
            </Route>

            <Route
              path="/estatica"
              element={
                <AuthRoute>
                  <Unidad4 />
                </AuthRoute>
              }
            >
              <Route path=":slug" element={<Router4 />} />
            </Route>

            <Route
              path="/hidrostatica"
              element={
                <AuthRoute>
                  <Unidad5 />
                </AuthRoute>
              }
            >
              <Route path=":slug" element={<Router5 />} />
            </Route>

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
    </MathJaxContext>
  );
}

export default App;
