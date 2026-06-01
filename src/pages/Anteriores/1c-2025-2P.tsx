import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";
import c1ej1 from "../../assets/1c-2025-2p.png";
import c1ej3 from "../../assets/1c-2025-2p-ej3.png";

const C120252P = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[3].items[2].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Ejercicios del segundo parcial de 2025 - 1er cuatrimestre
        </h1>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-1"
        >
          Ejercicio 1
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Como muestra la figura, un carro de 80 kg que se encuentra en reposo,
          cae sin rozamiento y por su propio peso desde una altura de 5 m por
          una rampa curva que luego posee un tramo recto horizontal de 2.5 m el
          cual presenta un coeficiente de fricción dinámico de 0.3. En la parte
          final y ya sin rozamiento existe un resorte de masa despreciable de
          constante elástica de 15000 N/m
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Qué distancia se comprimirá el resorte cuando el carro interactúe
            con él y detenga su avance?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuál será la velocidad del carro en el momento en que toque al
            resorte?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Marque con (x) el punto del recorrido en donde el carro tendrá la
            mayor rapidez.
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
          Un atleta olímpico arroja una jabalina de 900 gramos de peso, desde
          una altura de 1.95 m respecto del suelo y con una velocidad de 85 km
          que forma un ángulo de 40° respecto de la horizontal.
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuál será la máxima altura, respecto del suelo, que alcanzará la
            jabalina?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuán lejos del atleta la jabalina llegará al suelo?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuál es el valor de la energía cinética de la jabalina cuando
            alcanza la máxima altura?
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-3"
        >
          Ejercicio 3
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Una caja de 25 kg de masa permanece apoyada sobre la superficie rugosa
          de un plano inclinado, tal como muestra el esquema. Los coeficientes
          de rozamiento estático y dinámico entre la caja y la rampa tienen
          valores de 0.45 y 0.25 respectivamente. (La cuerda y la polea tienen
          masas y rozamiento despreciables).
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            Si se tira del extremo de la derecha con una fuerza F para elevar la
            caja hasta la parte superior de la rampa, ¿cuál es el mínimo valor
            que dicha fuerza debe tener para lograrlo?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Si se tirase de la cuerda con una fuerza F de 250 N, ¿con qué valor
            de aceleración se movería la caja?
          </li>
        </ol>
        <img
          src={c1ej3}
          alt="Diagrama ejercicio 3"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>
      </MathJax>
    </DocsLayout>
  );
};

export default C120252P;
