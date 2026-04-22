import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";
import c1ej2 from "../../assets/1c-2025-ej2.png";
import c1ej3 from "../../assets/1c-2025-ej3.png";
import c1ej7 from "../../assets/1c-2025-ej7.png";
import c1ej8 from "../../assets/1c-2025-ej8.png";

const C22025 = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[3].items[1].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Ejercicios del segundo parcial de 2025
        </h1>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-1"
        >
          Ejercicio 1
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Para evitar chocar contra un obstáculo, un ciclista distraído que se
          desplaza en línea recta a 30 kilómetros por hora debe aplicar los
          frenos de su bicicleta. Desde el momento en que ve el obstáculo y
          hasta el instante en que comienza a frenar, transcurren 1,50 segundos,
          y desde el instante en que comienza a frenar hasta el momento en que
          se detiene transcurren 4,30 segundos.
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            Calcule la aceleración del ciclista mientras está frenando
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Calcule la distancia recorrida por el ciclista desde que ve el
            obstáculo hasta el momento en que se detiene
          </li>
        </ol>
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
          Dados los vectores A y B representados
        </p>
        <img
          src={c1ej2}
          alt="Diagrama ejercicio 2"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            Indique las componentes (coordenadas) y represente en el sistema de
            ejes cartesianos a un vector C tal que la suma de los tres vectores
            resulte nula (cero)
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Calcule el módulo del vector C
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
          Se colgará una campana de bronce cuya masa es 33 kg, de una barra de
          aluminio que se encuentra articulada a una pared y es sostenida
          horizontalmente por un cable que forma un ángulo de 30° con respecto
          de la viga, tal como muestra la figura. La barra de aluminio es
          homogénea, tiene una longitud de 3 metros y una masa de 4,50 kg.
        </p>
        <img
          src={c1ej3}
          alt="Diagrama ejercicio 3"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
        <p className="text-base leading-7 text-[#141414] my-2">
          Si por seguridad el cable no debe soportar una tensión superior a 500
          N ¿cúan cerca del extremo derecho de la barra de aluminio se podrá
          colgar la campana?
        </p>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-4"
        >
          Ejercicio 4
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Los aviones comerciales de pasajeros realizan la mayor parte de sus
          vuelos a una altitud comprendida entre los 10000 y 12000 metros
          respecto del nivel del mar. Volando a dicha altitud (llamada "altitud
          de crucero") se optimiza el consumo de combustible, las turbulencias
          atmosféricas son escasas y no hay aves volando.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Como la presión atmosférica a una altura de 10 kilómetros es de tan
          solo el 28 de la presión a nivel del mar, es necesario presurizar
          (elevar la presión) del interior del avión para que las personas
          puedan respirar. Usualmente la presión interna de los aviones es
          mantenida a unos $7,50 \times 10^4$ Pascales, lo cual resulta un buen
          compromiso entre la respiración y la resistencia estructural de la
          nave.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Debido a las diferencias de presión antes mencionadas, las puertas y
          las salidas de emergencia deben mantenerse selladas y fuertemente
          aseguradas durante el vuelo. Si las dimensiones de la puerta
          rectangular de una aeronave son 80 centímetros de ancho y 190
          centímetros de alto, calcule el valor de la fuerza neta que trata de
          expulsar la puerta cuando el avión se encuentra a altitud de crucero.
        </p>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-5"
        >
          Ejercicio 5
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Una pluma de halcón ha quedado en la superficie lunar desde el mes de
          julio de 1971. Durante la misión Apolo 15, el astronauta David Scott
          dejó caer simultáneamente un martillo y una pluma de halcón desde una
          altura de 1,25 metros respecto del suelo lunar. Ambos objetos tardaron
          1,242 segundos en tocar el suelo.
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cúal es el valor de la aceleración de la gravedad en la Luna?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Con qué rápidez llegó la pluma al suelo lunar?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Si el astronauta y su traje tienen una masa total de 129 kg ¿con qué
            valor de fuerza el astronauta se apoyaba en el suelo lunar?
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-6"
        >
          Ejercicio 6
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Dados los vectores A = (7,25 ; 3,50) y B = (0,00 ; -5,45), cuyos
          orígenes se encuentran en el centro de coordenadas, responda:
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cúal es el resultado de la operación matemática A + B?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cúal es el valor del ángulo que forman los vectores entre sí?
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-7"
        >
          Ejercicio 7
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Una persona de 85 kg de masa se encuentra parada sobre una tabla
          homogénea de 4 metros de longitud y 25 kg de masa cuyos extremos se
          encuentran apoyados en los puntos a y b.
        </p>
        <img
          src={c1ej7}
          alt="Diagrama ejercicio 7"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿A qué distancia del punto a deberá ubicarse la persona para que la
            fuerza de vínculo en dicho punto tenga un valor de 650 N?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Qué valor tendrá la fuerza de vínculo en el punto b si la persona
            se ubica parada sobre el punto a?
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-8"
        >
          Ejercicio 8
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          En 1646, y experimentando en el campo de la física, Blaise Pascal hizo
          saltar la tapa de un barril de madera lleno de agua agregando
          suficiente agua a un tubo vertical conectado a la tapa del barril, tal
          como se muestra en el dibujo. La tapa saltó cuando el nivel de agua en
          el tubo vertical alcanzó los 9,5 metros de altura, por encima de la
          tapa del barril.
        </p>
        <img
          src={c1ej8}
          alt="Diagrama ejercicio 8"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿A qué presión se encontraba el agua bajo la tapa del barril cuando
            la tapa saltó?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Si la tapa del barril tenía una superficie de 0,450 metros cuadrados
            y masa despreciable, ¿cúal fue el valor de la fuerza neta que la
            hizo saltar?
          </li>
        </ol>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            " Datos: Densidad del agua es 1$\\text{ gr/cm}^3$, presión atmosférica es 101,325 Pa"
          }
        </p>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>
      </MathJax>
    </DocsLayout>
  );
};

export default C22025;
