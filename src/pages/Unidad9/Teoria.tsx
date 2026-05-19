import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad9 = () => {
  const ejercicios = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[2].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Dinámica (segunda parte)
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          En esta unidad, vamos a introducir la idea de rozamiento, vamos a
          trabajar con superficies que no son ideales, y vamos a ver cómo se
          comportan los objetos en esas condiciones. Además, vamos a aplicar las
          leyes de Newton para resolver problemas más complejos y entender mejor
          el movimiento de los cuerpos en la vida real.
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
          Fuerza de rozamiento estática, Fuerza de roamiento estática maxima y
          Fuerza de rozamiento dinámica
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La fuerza de rozamiento estática es la fuerza que se opone al inicio
          del movimiento entre dos superficies en contacto. Se calcula como el
          producto del coeficiente de rozamiento estático y la fuerza normal.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ F_{s} = \\mu_{e} \\cdot N $$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La fuerza de roamiento estática máxima es la fuerza máxima que puede
          ejercer el rozamiento estático antes de que el objeto comience a
          moverse. La fuerza de rozamiento dinámica, por otro lado, es la fuerza
          que se opone al movimiento una vez que el objeto ya está en
          movimiento, y se calcula como el producto del coeficiente de
          rozamiento dinámico y la fuerza normal.
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

export default Unidad9;
