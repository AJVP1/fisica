import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";
import c1ej1 from "../../assets/2c-2025-2p-ej1.png";

const C220252P = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[3].items[3].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Ejercicios del segundo parcial de 2025 - 2do cuatrimestre
        </h1>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-1"
        >
          Ejercicio 1
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Un 24 de diciembre a medianoche, un trineo con regalos que se
          encuentra en reposo en el punto a, comienza a deslizarse sin
          rozamiento por un techo cubierto de nieve, el cual presenta una
          inclinación de 25° respecto de la horizontal. Sabiendo que la masa
          total del trineo es 400 kg, responda:
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            La aceleración que experimenta el trineo a lo largo del techo.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La rapidez del trineo cuando pasa por el punto b
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La energía potencial gravitatoria -respecto del piso- que el trineo
            tiene en el punto b
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La rapidez del trineo al llegar al suelo.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La energía cinética del trineo al llegar al suelo.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La distancia horizontal entre el punto c y el sitio en donde el
            trineo llega al suelo.
          </li>
        </ol>
        <img
          src={c1ej1}
          alt="Diagrama ejercicio 1"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-2"
        >
          Ejercicio 2
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Un automóvil deportivo, de la década de los 70, se desplaza en línea
          recta sobre pavimento mojado con una rapidez de 80 kilómetros por
          hora. Para no chocar con un objeto que se encuentra delante de él debe
          frenar bruscamente, con lo cual las cuatro ruedas detienen su giro y
          el vehículo avanza patinando sobre sus neumáticos de caucho.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Si la masa del automóvil es 1400 kg, el coeficiente de rozamiento
          dinámico entre el caucho y el pavimento mojado tiene un valor de 0.55,
          responda:
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuánta distancia patinará el vehículo hasta detener su avance?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuál es el módulo de la aceleración del vehículo?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Calcular el trabajo realizado por las fuerzas de rozamiento para
            detener al vehículo.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Calcular la potencia media de frenado.
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>
      </MathJax>
    </DocsLayout>
  );
};

export default C220252P;
