import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad4 = () => {
  const ejercicios = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[2].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Estática
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          La estática es la rama de la física que estudia el equilibrio de los
          cuerpos sometidos a fuerzas y momentos.
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
          La estática es la rama de la física que estudia el equilibrio de los
          cuerpos sometidos a fuerzas. Surge de la raíz griega "statos", que
          significa "estar parado en equilibrio", lo cual implica reposo.
          Podemos tener equilibrio de fuerzas o equilibrio de momentos.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para el equilibrio de fuerzas, cuando las fuerzas actúan sobre un
          mismo punto, se las llama fuerzas concurrentes. Para el equilibrio de
          momentos, las fuerzas no actúan sobre un mismo punto.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          En los casos de equilibrio con fuerzas concurrentes, se representan
          fuerzas o vectores que generan tensiones sobre un cuerpo. Aquí son
          importantes las distancias, los ángulos y las direcciones.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          En los casos de equilibrio de momentos, se representan momentos o
          torques. Esto implica un brazo de palanca, una fuerza aplicada en un
          extremo y un centro de giro.
        </p>

        <h3
          id="condiciones-de-equilibrio"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Condiciones de equilibrio
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para que un cuerpo esté en equilibrio, deben cumplirse dos
          condiciones:
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            {"La suma de las fuerzas debe ser cero: $\\sum \\vec{F} = 0$."}
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            {
              "La suma de los momentos o torques debe ser cero: $\\sum \\vec{\\tau} = 0$."
            }
          </li>
        </ol>

        <h3
          id="fuerza"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Fuerza
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Una fuerza es una interacción que puede cambiar el estado de
          movimiento o deformar un cuerpo. Es una magnitud vectorial, por lo que
          tiene módulo, dirección y sentido.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Hay un tipo de fuerza que siempre aparece en los problemas de
          estática: el peso. La Tierra atrae a los cuerpos y esa fuerza se llama
          peso.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">$$ P = mg $$</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Esta ecuación indica que el peso es igual a la masa del cuerpo
          multiplicada por la aceleración de la gravedad.
        </p>

        <h3
          id="momento-de-una-fuerza"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Momento de una fuerza (Torque)
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El momento de una fuerza respecto a un punto mide la capacidad de esa
          fuerza para producir rotación. Se define como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$ M_0 = \\vec{F} \\times d$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Donde $\\vec{F}$ es la fuerza aplicada y $d$ es la distancia desde el punto de referencia hasta el punto de aplicación de la fuerza."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para que el momento de una fuerza sea cero, la fuerza debe ser cero o
          la distancia debe ser cero; es decir, la línea de acción de la fuerza
          pasa por el centro de momentos.
        </p>

        <h3
          id="equilibrio-traslacional"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Equilibrio traslacional (Fuerzas concurrentes)
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un cuerpo está en equilibrio traslacional cuando la suma de todas las
          fuerzas que actúan sobre él es cero.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\sum F_x = 0 \\quad y \\quad \\sum F_y = 0$$`}
        </p>

        <h3
          id="equilibrio-rotacional"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Equilibrio rotacional (Fuerzas no concurrentes)
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para el equilibrio rotacional, además del equilibrio traslacional, la
          suma de los momentos o torques debe ser cero.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\sum M_0 = 0$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Esta es la ecuación de momentos: la sumatoria de momentos respecto a
          un punto es igual a cero.
        </p>

        <h3
          id="centro-de-masa"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Centro de masa
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El centro de masa es el punto donde se puede considerar concentrada
          toda la masa de un cuerpo para el análisis de su movimiento.
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
              to={`/estatica/ejercicio-${numero}`}
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

export default Unidad4;
