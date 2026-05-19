import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad10 = () => {
  const ejercicios = Array.from({ length: 8 }, (_, i) => i + 1);

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
          Energía cinética
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La energía cinética es la energía asociada al movimiento de un objeto
          y se calcula como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ E_k = \\frac{1}{2} \\cdot m \\cdot v^2 $$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde $m$ es la masa del objeto y $v$ es su velocidad.
        </p>

        <h3
          id="fuerza-elastica"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Energía potencial gravitatoria
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La energía potencial gravitatoria es la energía asociada a la posición
          de un objeto en un campo gravitatorio y se calcula como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ E_p = m \\cdot g \\cdot h $$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde $m$ es la masa del objeto, $g$ es la aceleración debida a la
          gravedad y $h$ es la altura del objeto respecto a un nivel de
          referencia.
        </p>

        <h3
          id="fuerza-elastica"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Energía potencial elástica
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La energía potencial elástica es la energía asociada a la deformación
          de un resorte y se calcula como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ E_{pe} = \\frac{1}{2} \\cdot k \\cdot x^2 $$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde $k$ es la constante elástica del resorte y $x$ es la deformación
          del resorte.
        </p>

        <h3
          id="fuerza-elastica"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Energía mecánica
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La energía mecánica es la suma de la energía cinética y la energía
          potencial de un objeto.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La energía mecánica se converva en sistemas donde solo actúan fuerzas
          conservativas, lo que significa que la energía total del sistema
          permanece constante a lo largo del tiempo. Esto implica que cualquier
          cambio en la energía cinética de un objeto se compensa con un cambio
          correspondiente en su energía potencial, y viceversa.
        </p>

        <h3
          id="fuerza-elastica"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Trabajo de fuerzas conservativas
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El trabajo realizado por fuerzas conservativas, como la gravedad o la
          fuerza elástica, depende únicamente de las posiciones inicial y final
          del objeto, y no del camino seguido. Esto implica que la energía
          mecánica se conserva en sistemas donde solo actúan fuerzas
          conservativas. Se puede expresar matemáticamente como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ W = -\\Delta E_p $$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde $W$ es el trabajo realizado por la fuerza conservativa y $\Delta
          E_p$ es el cambio en la energía potencial del objeto.
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
              to={`/trabajo-y-energia/ejercicio-${numero}`}
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

export default Unidad10;
