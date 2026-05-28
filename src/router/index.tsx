import { createHashRouter, Outlet } from "react-router-dom";
import { type ComponentType } from "react";
import { AuthRoute } from "../auth/Auth.tsx";
import LoginPage from "../auth/LoginPage.tsx";

const lazyRoute = (importer: () => Promise<{ default: ComponentType }>) => ({
  lazy: () => importer().then((m) => ({ Component: m.default })),
});

const ejercicioNoEncontrado = {
  path: "*",
  element: (
    <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mt-6">
        Ejercicio no encontrado
      </h2>
    </section>
  ),
};

export const router = createHashRouter([
  {
    element: (
      <AuthRoute>
        <Outlet />
      </AuthRoute>
    ),
    children: [
      {
        path: "/",
        lazy: () =>
          import("../pages/Introduccion.tsx").then((m) => ({
            Component: m.Introduccion,
          })),
      },
      {
        path: "/la-medicion",
        ...lazyRoute(() => import("../pages/Unidad2/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad2/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad2/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad2/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad2/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad2/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad2/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad2/E7")),
          },
          {
            path: "ejercicio-8",
            ...lazyRoute(() => import("../pages/Unidad2/E8")),
          },
          {
            path: "ejercicio-9",
            ...lazyRoute(() => import("../pages/Unidad2/E9")),
          },
          {
            path: "ejercicio-10",
            ...lazyRoute(() => import("../pages/Unidad2/E10")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/magnitudes-fisicas",
        ...lazyRoute(() => import("../pages/Unidad3/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad3/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad3/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad3/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad3/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad3/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad3/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad3/E7")),
          },
          {
            path: "ejercicio-8",
            ...lazyRoute(() => import("../pages/Unidad3/E8")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/estatica",
        ...lazyRoute(() => import("../pages/Unidad4/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad4/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad4/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad4/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad4/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad4/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad4/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad4/E7")),
          },
          {
            path: "ejercicio-8",
            ...lazyRoute(() => import("../pages/Unidad4/E8")),
          },
          {
            path: "ejercicio-9",
            ...lazyRoute(() => import("../pages/Unidad4/E9")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/hidroestatica",
        ...lazyRoute(() => import("../pages/Unidad5/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad5/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad5/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad5/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad5/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad5/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad5/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad5/E7")),
          },
          {
            path: "ejercicio-8",
            ...lazyRoute(() => import("../pages/Unidad5/E8")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/cinematica-una-dimension",
        ...lazyRoute(() => import("../pages/Unidad6/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad6/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad6/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad6/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad6/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad6/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad6/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad6/E7")),
          },
          {
            path: "ejercicio-8",
            ...lazyRoute(() => import("../pages/Unidad6/E8")),
          },
          {
            path: "ejercicio-9",
            ...lazyRoute(() => import("../pages/Unidad6/E9")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/cinematica-dos-dimensiones",
        ...lazyRoute(() => import("../pages/Unidad7/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad7/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad7/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad7/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad7/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad7/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad7/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad7/E7")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/dinamica-primera-parte",
        ...lazyRoute(() => import("../pages/Unidad8/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad8/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad8/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad8/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad8/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad8/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad8/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad8/E7")),
          },
          {
            path: "ejercicio-8",
            ...lazyRoute(() => import("../pages/Unidad8/E8")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/trabajo-y-energia",
        ...lazyRoute(() => import("../pages/Unidad10/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad10/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad10/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad10/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad10/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad10/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad10/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad10/E7")),
          },
          {
            path: "ejercicio-8",
            ...lazyRoute(() => import("../pages/Unidad10/E8")),
          },
          {
            path: "ejercicio-9",
            ...lazyRoute(() => import("../pages/Unidad10/E9")),
          },
          {
            path: "ejercicio-10",
            ...lazyRoute(() => import("../pages/Unidad10/E10")),
          },
          {
            path: "ejercicio-11",
            ...lazyRoute(() => import("../pages/Unidad10/E11")),
          },
          {
            path: "ejercicio-12",
            ...lazyRoute(() => import("../pages/Unidad10/E12")),
          },
          {
            path: "ejercicio-13",
            ...lazyRoute(() => import("../pages/Unidad10/E13")),
          },
          {
            path: "ejercicio-14",
            ...lazyRoute(() => import("../pages/Unidad10/E14")),
          },
          {
            path: "ejercicio-15",
            ...lazyRoute(() => import("../pages/Unidad10/E15")),
          },
          {
            path: "ejercicio-16",
            ...lazyRoute(() => import("../pages/Unidad10/E16")),
          },
          {
            path: "ejercicio-17",
            ...lazyRoute(() => import("../pages/Unidad10/E17")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/dinamica-segunda-parte",
        ...lazyRoute(() => import("../pages/Unidad9/Teoria")),
        children: [
          {
            path: "ejercicio-1",
            ...lazyRoute(() => import("../pages/Unidad9/E1")),
          },
          {
            path: "ejercicio-2",
            ...lazyRoute(() => import("../pages/Unidad9/E2")),
          },
          {
            path: "ejercicio-3",
            ...lazyRoute(() => import("../pages/Unidad9/E3")),
          },
          {
            path: "ejercicio-4",
            ...lazyRoute(() => import("../pages/Unidad9/E4")),
          },
          {
            path: "ejercicio-5",
            ...lazyRoute(() => import("../pages/Unidad9/E5")),
          },
          {
            path: "ejercicio-6",
            ...lazyRoute(() => import("../pages/Unidad9/E6")),
          },
          {
            path: "ejercicio-7",
            ...lazyRoute(() => import("../pages/Unidad9/E7")),
          },
          ejercicioNoEncontrado,
        ],
      },
      {
        path: "/2c-2025",
        ...lazyRoute(() => import("../pages/Anteriores/2c-2025")),
      },
      {
        path: "/1c-2025",
        ...lazyRoute(() => import("../pages/Anteriores/1c-2025")),
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <p>Página no encontrada</p>,
  },
]);
