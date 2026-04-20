import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad5 = () => {
  const ejercicios = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[3].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Hidroestática
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          La hidroestática estudia los fluidos en reposo y las presiones,
          fuerzas y empujes que actúan sobre ellos.
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
          La hidroestática es la rama de la mecánica de fluidos que estudia los
          fluidos en reposo, principalmente líquidos, y las fuerzas y presiones
          que actúan sobre ellos.
        </p>

        <h3
          id="presion"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Presión
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La presión es la fuerza por unidad de área que un fluido ejerce sobre
          una superficie. Se denota comúnmente como $P$ y se calcula con la
          fórmula:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$P = \\frac{F}{A}$$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          donde $F$ es la fuerza aplicada y $A$ es el área sobre la cual actúa
          la fuerza.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La unidad de presión en el Sistema Internacional es el pascal (Pa).
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ Pa = \\frac{N}{m^2} $$"}
        </p>

        <h3
          id="densidad"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Densidad
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La densidad es la masa por unidad de volumen de un fluido. Se denota
          comúnmente como $\rho$ y se calcula con la fórmula:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$\\rho = \\frac{m}{V}$$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde $m$ es la masa del fluido y $V$ es el volumen que ocupa.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          En el Sistema Internacional, la unidad de densidad es el kilogramo por
          metro cúbico.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\rho = \\frac{Kg}{m^3} $$"}
        </p>

        <h3
          id="teorema-fundamental-hidroestatica"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Teorema Fundamental de la Hidrostática
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El teorema fundamental de la hidrostática establece que la presión en
          cualquier punto de un fluido en reposo es proporcional a la
          profundidad del punto y a la densidad del fluido.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$P = \\rho \\cdot g \\cdot h$$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          donde $P$ es la presión, $\rho$ es la densidad del fluido, $g$ es la
          aceleración de la gravedad y $h$ es la profundidad.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          También puede expresarse como la diferencia de presión entre dos
          puntos a distintas alturas:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$\\Delta P = \\rho \\cdot g \\cdot \\Delta h$$"}
        </p>

        <h3
          id="principio-de-pascal"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Principio de Pascal
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El principio de Pascal establece que cualquier cambio en la presión
          aplicada a un fluido confinado se transmite sin disminución a todas
          las partes del fluido y a las paredes del recipiente.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">$$P_1 = P_2$$</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          donde $P_1$ y $P_2$ son las presiones en dos puntos diferentes del
          fluido.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          De este principio se obtiene que:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          También los volúmenes desplazados pueden expresarse como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$V_1 = V_2$$"}
        </p>

        <h3
          id="principio-de-arquimedes"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Principio de Arquímedes
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El principio de Arquímedes establece que todo cuerpo sumergido en un
          fluido experimenta una fuerza ascendente igual al peso del fluido
          desplazado.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ F_B = \\rho \\cdot V \\cdot g $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          donde $F_B$ es la fuerza de empuje, $\rho$ es la densidad del fluido,
          $V$ es el volumen del fluido desplazado y $g$ es la aceleración de la
          gravedad.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          De aquí se concluye que un cuerpo puede hundirse o flotar, según la
          relación entre la fuerza de empuje y su peso.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          También puede escribirse:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\vec{E} = \\rho_{liq} \\cdot g \\cdot V_{sumergido} $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\vec{P} = \\rho_{cuerpo} \\cdot g \\cdot V_{cuerpo} $$"}
        </p>

        <h3
          id="presion-atmosferica"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Presión atmosférica
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La presión atmosférica es la presión ejercida por la columna de aire
          sobre la superficie terrestre. Se mide comúnmente en hectopascales
          (hPa) o milibares (mb).
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          A nivel del mar, la presión atmosférica promedio es aproximadamente
          101300 Pa, es decir, 1013 hPa o 1013 mb.
        </p>

        <h3
          id="cilindros"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Cilindros
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un cilindro es un sólido geométrico que tiene dos bases circulares
          paralelas y una superficie lateral curva.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La fórmula para el volumen de un cilindro es:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$V = \\pi r^2 h$$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          donde $r$ es el radio de la base y $h$ es la altura del cilindro.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Mientras que la fórmula para el área de la base del cilindro es:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$A = \\pi r^2 $$"}
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
              to={`/hidroestatica/ejercicio-${numero}`}
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

export default Unidad5;
