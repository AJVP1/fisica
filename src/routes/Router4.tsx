import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const ejerciciosMap = {
  "ejercicio-1": lazy(() => import("../pages/Unidad4/E1.tsx")),
  "ejercicio-2": lazy(() => import("../pages/Unidad4/E2.tsx")),
  "ejercicio-3": lazy(() => import("../pages/Unidad4/E3.tsx")),
  "ejercicio-4": lazy(() => import("../pages/Unidad4/E4.tsx")),
  "ejercicio-5": lazy(() => import("../pages/Unidad4/E5.tsx")),
  "ejercicio-6": lazy(() => import("../pages/Unidad4/E6.tsx")),
  "ejercicio-7": lazy(() => import("../pages/Unidad4/E7.tsx")),
  "ejercicio-8": lazy(() => import("../pages/Unidad4/E8.tsx")),
};

function Router4() {
  const { slug } = useParams();

  const EjercicioComponent = ejerciciosMap[slug as keyof typeof ejerciciosMap];

  if (!EjercicioComponent) {
    return (
      <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mt-6">
          Ejercicio no encontrado
        </h2>
      </section>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="text-center p-6 text-[#1d2554]">Cargando...</div>
      }
    >
      <EjercicioComponent />
    </Suspense>
  );
}

export default Router4;
