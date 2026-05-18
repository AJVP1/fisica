import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad8 = () => {
  const ejercicios = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[2].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Trabajo y energía
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          En esta unidad, vamos a introducir los conceptos de trabajo y energía,
          y cómo se relacionan con el movimiento de los objetos. Vamos a ver
          cómo calcular el trabajo realizado por una fuerza, y cómo la energía
          se conserva en los sistemas físicos. Además, vamos a aplicar estos
          conceptos para resolver problemas relacionados con el movimiento de
          los cuerpos.
        </p>

        <h2
          id="teoria"
          className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        >
          Teoría
        </h2>
        <hr />

        <h3
          id="fuerza-de-rozamiento"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Trabajo
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El trabajo realizado por una fuerza es el producto de la fuerza y la
          distancia recorrida en la dirección de la fuerza.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ W = F_x \\cdot d = F \\cdot \\cos(\\theta) \\cdot d  $$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Las unidades de trabajo son el Newton metro (Nm) o el Joule (J), donde
          1 J = 1 Nm. El trabajo puede ser positivo, negativo o cero,
          dependiendo de la dirección de la fuerza y el movimiento del objeto;
          si la fuerza y el movimiento están en la misma dirección, el trabajo
          es positivo; si están en direcciones opuestas, el trabajo es negativo;
          y si no hay movimiento o la fuerza es perpendicular al movimiento, el
          trabajo es cero.
        </p>

        <h3
          id="fuerza-elastica"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Fuerza Elástica
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La fuerza elástica es la fuerza que ejerce un objeto elástico cuando
          se deforma. Se calcula utilizando la ley de Hooke, que establece que
          la fuerza es proporcional a la deformación del objeto.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ F_{e} = k \\cdot |l - l_0| $$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde $k$ es la constante elástica del objeto, $l$ es la longitud
          final y $l_0$ es la longitud natural.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La fuerza elástica se puede pensar como la fuerza que se ejerce para
          volver un objeto a su longitud natural.
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
              to={`/dinamica-segunda-parte/ejercicio-${numero}`}
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

export default Unidad8;
