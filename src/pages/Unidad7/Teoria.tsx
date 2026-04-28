import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad7 = () => {
  const ejercicios = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[0].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Cinemática en dos dimensiones
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          La cinemática en dos dimensiones estudia el movimiento de los objetos
          en un plano, describiendo su posición, velocidad y aceleración en dos
          ejes perpendiculares.
        </p>

        <h2
          id="teoria"
          className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        >
          Teoría
        </h2>
        <hr />

        <h3
          id="tiro-oblicuo"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Tiro oblicuo
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El tiro oblicuo es un tipo de movimiento en el que un objeto se lanza
          con una velocidad inicial que forma un ángulo con la horizontal. Este
          movimiento se puede descomponer en dos movimientos independientes: uno
          horizontal con velocidad constante y otro vertical con aceleración
          debido a la gravedad. Por lo tanto, las fórmulas para el tiro oblicuo
          son:
        </p>
        <p className="mt-2">
          {
            "$$ \\begin{cases} y(t) = y_0 + v_{y_0}(t - t_0) + \\frac{1}{2}a(t - t_0)^2 \\\\ v_{y}(t) = v_{y_0} + a(t - t_0) \\\\ x(t) = x_0 + v_{x_0}(t - t_0) \\\\  \\end{cases} $$"
          }
        </p>

        <h3
          id="tiro-circular"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Tiro circular
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El tiro circular es un tipo de movimiento en el que un objeto se mueve
          en una trayectoria circular. En este caso, la velocidad del objeto es
          tangencial a la trayectoria y la aceleración es centrípeta, dirigida
          hacia el centro de la circunferencia. Las fórmulas para el tiro
          circular son:
        </p>
        <p className="mt-2">
          {
            "$$ \\begin{cases} \\theta(t) = \\theta_0 + \\omega_0(t - t_0) + \\frac{1}{2}\\gamma(t - t_0)^2 \\\\ \\omega(t) = \\omega_0 + \\gamma(t - t_0) \\\\ |v| = \\omega \\cdot r \\\\ |a| = \\omega^2 \\cdot r \\\\  \\end{cases} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde $\theta$ es el ángulo de posición, $\omega$ es la velocidad
          angular, $\gamma$ es la aceleración angular, $v$ es la velocidad
          tangencial, $r$ es el radio de la trayectoria circular y $a$ es la
          aceleración centrípeta.
        </p>

        <h3
          id="movimiento-relativo"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Movimiento relativo
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El movimiento relativo es un tipo de movimiento en el que se estudia
          el movimiento de un objeto desde diferentes marcos de referencia. En
          este caso, la velocidad del objeto es la suma de la velocidad del
          objeto en un marco de referencia y la velocidad del marco de
          referencia en relación con otro marco de referencia. Las fórmulas para
          el movimiento relativo son:
        </p>
        <p className="mt-2">{"$$ v_{1,3} = v_{1,2} + v_{2,3} $$"}</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Donde $v_{1,3}$ es la velocidad del objeto en el marco de referencia 3, $v_{1,2}$ es la velocidad del objeto en el marco de referencia 2, $v_{2,3}$ es la velocidad del marco de referencia 2 en relación con el marco de referencia 3."
          }
        </p>

        <h2
          id="practica"
          className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        >
          Práctica
        </h2>
        <hr />

        <ul className="flex gap-2 flex-wrap mt-4">
          {ejercicios.map((numero) => (
            <Link
              key={numero}
              to={`/cinematica-una-dimension/ejercicio-${numero}`}
              className="bg-[#1d2554] text-white px-3 py-2 text-sm sm:text-base rounded hover:bg-[#374785] transition-colors"
            >
              {`Ejercicio ${numero}`}
            </Link>
          ))}
        </ul>

        <div className="mt-8">
          <Outlet />
        </div>
      </MathJax>
    </DocsLayout>
  );
};

export default Unidad7;
