import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad8 = () => {
  const ejercicios = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[1].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Dinámica (primera parte)
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          En esta unidad, nos adentraremos en el fascinante mundo de la
          dinámica, explorando las leyes fundamentales que rigen el movimiento
          de los objetos. A través de ejemplos prácticos y ejercicios,
          comprenderemos cómo las fuerzas afectan el comportamiento de los
          cuerpos en movimiento, sentando las bases para un estudio más profundo
          de la física.
        </p>

        <h2
          id="teoria"
          className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        >
          Teoría
        </h2>
        <hr />

        <h3
          id="leyes-de-newton"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Las leyes de Newton
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Las leyes de Newton son tres principios fundamentales que describen la
          relación entre las fuerzas que actúan sobre un cuerpo y el movimiento
          de ese cuerpo. La primera ley establece que un objeto en reposo o en
          movimiento rectilíneo uniforme permanece en ese estado a menos que una
          fuerza externa actúe sobre él. La segunda ley relaciona la fuerza neta
          aplicada a un objeto con su aceleración y masa, mientras que la
          tercera ley afirma que para cada acción hay una reacción igual y
          opuesta.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          En estos ejercicios, ya los cuerpos no estarán en reposo, es decir,
          ahora las sumatoria de las fuerzas no será igual a cero, por lo tanto,
          los cuerpos tendrán aceleración.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\sum \\vec{F} = m \\cdot a $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          En otros casos, podemos tener tensiones en cuerdas que conectan los
          cuerpos, y en los casos donde el dezplazmiento es vertical, tendremos
          presenta la fuerza peso, que usa a la aceleración de la gravedad.
          Teniendo el siguiente sistema
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$  T - m \\cdot g = m \\cdot a $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          En muchos casos, la tensión que une a los cuerpos es la misma, por lo
          tanto, podemos armar un sistema de ecuaciones con las fuerzas que
          actúan sobre cada cuerpo, y luego resolverlo para encontrar la
          aceleración y la tensión.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Nota: el signo de positivo o negativo de las fuerzas depende del
          sentido que estas tengan.
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
              to={`/dinamica-primera-parte/ejercicio-${numero}`}
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
