import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad6 = () => {
  const ejercicios = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[4].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Cinemática en una dimensión
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          La cinemática estudia el movimiento de los cuerpos sin analizar las
          fuerzas que lo producen, describiendo posición, velocidad y
          aceleración.
        </p>

        <h2
          id="teoria"
          className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        >
          Teoría
        </h2>
        <hr />

        <h3
          id="definicion"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Definición
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La cinemática es la rama de la mecánica que estudia el movimiento de
          los objetos sin considerar las fuerzas que lo causan. Se enfoca en
          describir cómo se mueven los objetos, sus trayectorias, velocidades y
          aceleraciones.
        </p>

        <h3
          id="sistema-de-referencia"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Sistema de referencia
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un sistema de referencia es un marco de coordenadas fijo en el que se
          mide el movimiento de un objeto. Es fundamental para desarrollar las
          ecuaciones de movimiento y describir la posición, velocidad y
          aceleración de un objeto en el espacio.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Elegir este sistema es fundamental al inicio de cada ejercicio, ya que
          se debe establecer un marco de coordenadas y un instante de tiempo.
        </p>

        <h3
          id="tipos-de-movimiento"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Tipos de movimiento
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Existen varios tipos de movimiento que se estudian en cinemática,
          entre ellos:
        </p>
        <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
          <li className="text-base leading-7 text-[#141414] my-2">
            <strong>Movimiento Rectilíneo Uniforme (MRU):</strong> es el
            movimiento en línea recta con velocidad constante. Se describe por:
            <p className="mt-2">
              {
                "$$ \\begin{cases} x(t) = x_0 + v(t - t_0) \\\\ v(t) = v \\end{cases} $$"
              }
            </p>
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            <strong>Movimiento Rectilíneo Uniformemente Variado (MRUV):</strong>{" "}
            es el movimiento en línea recta con aceleración constante. Se
            describe por:
            <p className="mt-2">
              {
                "$$ \\begin{cases} x(t) = x_0 + v_0(t - t_0) + \\frac{1}{2}a(t - t_0)^2 \\\\ v(t) = v_0 + a(t - t_0) \\\\ a(t) = a \\end{cases} $$"
              }
            </p>
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            <strong>Movimiento Circular:</strong> es el movimiento de un objeto
            a lo largo de una trayectoria circular. Se describe por la fórmula:
            <p className="mt-2">
              {"$$\\theta = \\theta_0 + \\omega t + \\frac{1}{2}\\alpha t^2$$"}
            </p>
          </li>
        </ul>

        <h3
          id="velocidad-y-aceleracion"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Velocidad y aceleración
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "La velocidad es la tasa de cambio de la posición con respecto al tiempo, mientras que la aceleración es la tasa de cambio de la velocidad con respecto al tiempo. Se describen por las fórmulas: $v = \\frac{dx}{dt}$ y $a = \\frac{dv}{dt}$, respectivamente."
          }
        </p>

        <h3
          id="velocidad-media-e-instantanea"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Velocidad media y velocidad instantánea
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "La velocidad media se calcula como el cambio total de posición dividido por el tiempo total, mientras que la velocidad instantánea es la velocidad en un instante específico. Se describen por las fórmulas: $v_{media} = \\frac{\\Delta x}{\\Delta t}$ y $v_{instantánea} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t}$, respectivamente."
          }
        </p>

        <h3
          id="aceleracion-media-e-instantanea"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Aceleración media y aceleración instantánea
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "La aceleración media se calcula como el cambio total de velocidad dividido por el tiempo total, mientras que la aceleración instantánea es la aceleración en un instante específico. Se describen por las fórmulas: $a_{media} = \\frac{\\Delta v}{\\Delta t}$ y $a_{instantánea} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v}{\\Delta t}$, respectivamente."
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

export default Unidad6;
