import { createHashRouter, Navigate } from "react-router-dom";
import { DocsLayout } from "../layout/Docs";
import AuthLayout from "../layout/AuthLayout";
import Router2 from "../routes/Router2";
import Router3 from "../routes/Router3";
import Router4 from "../routes/Router4";
import Router5 from "../routes/Router5";
import Router6 from "../routes/Router6";

export const router = createHashRouter([
  {
    element: <DocsLayout />,
    children: [
      { path: "/", element: <Navigate to="/introduccion" replace /> },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/introduccion",
            lazy: async () => ({
              Component: (await import("../pages/Introduccion")).Introduccion,
            }),
          },
          {
            path: "/la-medicion",
            lazy: async () => ({
              Component: (await import("../pages/Unidad2/Teoria")).Unidad2,
            }),
            children: [{ path: ":slug", element: <Router2 /> }],
          },
          {
            path: "/magnitudes-fisica",
            lazy: async () => ({
              Component: (await import("../pages/Unidad3/Teoria")).default,
            }),
            children: [{ path: ":slug", element: <Router3 /> }],
          },
          {
            path: "/estatica",
            lazy: async () => ({
              Component: (await import("../pages/Unidad4/Teoria")).default,
            }),
            children: [{ path: ":slug", element: <Router4 /> }],
          },
          {
            path: "/hidrostatica",
            lazy: async () => ({
              Component: (await import("../pages/Unidad5/Teoria")).default,
            }),
            children: [{ path: ":slug", element: <Router5 /> }],
          },
          {
            path: "/cinematica-una-dimension",
            lazy: async () => ({
              Component: (await import("../pages/Unidad6/Teoria")).default,
            }),
            children: [{ path: ":slug", element: <Router6 /> }],
          },
          {
            path: "/logout",
            lazy: async () => ({
              Component: (await import("../auth/LogoutPage")).default,
            }),
          },
        ],
      },
      {
        path: "/login",
        lazy: async () => ({
          Component: (await import("../auth/LoginPage")).default,
        }),
      },
      { path: "*", element: <p>Página no encontrada</p> },
    ],
  },
]);
