// importaciones de librerias
import { HashRouter, Route, Routes } from "react-router-dom";

// importaciones de componentes
import Header from "./components/Header";

// importaciones de páginas
import Bienvenida from "./pages/Bienvenida";

// importaciones de auth
import LoginPage from "./auth/LoginPage";
import LogoutPage from "./auth/LogoutPage";
import { AuthRoute } from "./auth/Auth";

function App() {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Bienvenida />} />

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
      </HashRouter>
    </>
  );
}

export default App;
