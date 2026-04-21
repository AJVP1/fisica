import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";
import c2ej1 from "../../assets/2c-2025-ej1.png";
import c2ej3 from "../../assets/2c-2025-ej3.png";
import c2ej4 from "../../assets/2c-2025-ej4.png";
import c2ej6 from "../../assets/2c-2025-ej6.png";

const C22025 = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[3].items[0].toc} />}
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
          Dentro de un recipiente que contiene agua, una esfera de material
          plástico de 10 cm de diámetro es mantenida por debajo de la superficie
          del líquido mediante una cuerda que la sujeta al fondo del recipiente.
          La densidad del agua es de 1 gr/cm³ y la densidad del plástico es de
          0,85 gr/cm³.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Dato: $V = \frac{4}
          {3} \pi r^3$
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">Calcular:</p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            La masa de la esfera.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La tensión en la cuerda que sujeta la esfera.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La diferencia de presión entre los puntos a y b de la imagen
          </li>
        </ol>
        <img
          src={c2ej1}
          alt="Diagrama ejercicio 2"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />

        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Por la definición de densidad, la densidad:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$\\rho = \\frac{m}{V} \\implies m = \\rho V$$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">Donde</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ V = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\pi (5)^3 = \\frac{500}{3} \\pi \\, \\text{cm}^3 \\approx 524 \\, \\text{cm}^3 $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Reemplazando en la función de la masa:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ m = \\rho V \\implies m = 0,85 \\cdot 524 = 445.4 \\, \\text{gr} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular la tensión en la cuerda, debemos considerar las fuerzas
          que están actuando sobre la esfera. Estas fuerzas son el peso de la
          esfera (hacia abajo) y la fuerza de flotación (hacia arriba). La
          tensión en la cuerda será igual a la diferencia entre estas dos
          fuerzas.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ P + T = E  \\implies T = E - P \\implies T = (\\rho_{agua} - \\rho_{plástico}) \\cdot V \\cdot g$$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Reemplezando los valores:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ T = (1 \\frac{\\text{gr}}{\\text{cm}^3} - 0,85 \\frac{\\text{gr}}{\\text{cm}^3}) \\cdot 524 \\text{cm}^3 \\cdot 9.8 \\frac{\\text{m}}{\\text{s}^2} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ T = 0,15 \\frac{\\text{gr}}{\\text{cm}^3} \\cdot 524 \\text{cm}^3 \\cdot 9.8 \\frac{\\text{m}}{\\text{s}^2} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ T = 78,6 \\text{gr} \\cdot 9.8 \\frac{\\text{m}}{\\text{s}^2} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ T = 0,08 \\text{kg} \\cdot 9.8 \\frac{\\text{m}}{\\text{s}^2} \\approx 0,77 \\text{N} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular la diferencia de presión entre los puntos a y b podemos
          usar el teorema de fundamental de la hidrostática:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ \\Delta P = \\rho \\cdot g \\cdot \\Delta h = 1000 \\frac{\\text{kg}}{\\text{m}^3} \\cdot 9.8 \\frac{\\text{m}}{\\text{s}^2} \\cdot 0,1 \\text{m} = 980 \\text{Pa} $$"
          }
        </p>

        <h2
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
          id="ejercicio-2"
        >
          Ejercicio 2
        </h2>
        <hr />
        <p className="text-base leading-7 text-[#141414] my-2">
          Una persona deja caer libremente una piedra desde cierta altura H y,
          transcurridos 3 segundos, la piedra se encuentra a 22 metros sobre el
          suelo. Calcular:
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            La altura H.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            La rapidez con la que la piedra llega al suelo.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Tiempo transcurrido desde que se suelta la piedra hasta que llega al
            suelo.
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
          Los extremos de un bate de béisbol de 110 centímetros de longitud y
          950 gramos de masa cuelgan de un par de balanzas, tal como lo describe
          la figura. Si la balanza de la izquierda arroja un lectura de 630
          gramos, calcule:
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            La lectura en gramos en la otra balanza.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿A qué distancia del extremo izquierdo se sitúa el centro de masa
            del bate?
          </li>
        </ol>
        <img
          src={c2ej3}
          alt="Diagrama ejercicio 3"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
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
          Una caña de pescar rígida, de masa despreciable y 2,80 metros de
          longitud se encuentra articulada en el extremo $o$ tal como lo muestra
          la figura. Del extremo derecho de la caña cuelga un pez de 2,7 kg de
          masa.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un pescador mantiene a la caña en posición horizontal sosteniendola en
          el punto $p$ ubicado a 70 centímetros del punto $o$ aplicando la
          fuerza $F$.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Si la fuerza $F$ forma un ángulo de 30° respecto a la dirección
          vertical, calcule el valor de dicha fuerza.
        </p>
        <img
          src={c2ej4}
          alt="Diagrama ejercicio 4"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
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
          Cuando un avión comercial Boeing 747 "jumbo" se encuentra totalmente
          cargado y se apronta a despegar, tiene una masa de 400 toneladas. En
          estas condiciones, y partiendo del reposo, la aeronave acelera de
          manera constante a lo largo de 3 kilómetros de pista hasta alcanzar
          una velocidad de 290 km/h, momento en que despega.
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            Calcule el tiempo que media entre que el avión comienza a moverse
            hasta el momento en que despega.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Calcule la aceleración del avión.
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
          Un alpinista se encuentra colgado por dos cuerdas, tal como lo muestra
          la figura. La masa del alpinista con todo su equipo es de 90 kg.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Calcular la tensión a la cual se encuentra sometida cada cuerda.
        </p>
        <img
          src={c2ej6}
          alt="Diagrama ejercicio 6"
          className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
        />
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
          Buscando un modo de lograr un descanso con relajación profunda se han
          desarrollado los llamados "tanques de flotación" en los cuales se
          puede flotar cómodamente sin moverse e incluso dormir ya que el
          líquido que contienen es una solución salina de elevada densidad.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Si un tanque de flotación contiene una solución salina de densidad
          1,32 gramos por centímetro cúbico y en él se introduce una persona de
          80 kg de masa, considerando que la densidad del cuerpo humano es de 1
          gramo por centímetro cúbico, responda:
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuál es el volumen (en litros) de la porción del cuerpo que
            permanecerá por fuera del líquido?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Si la altura del líquido dentro del tanque respecto del fondo es de
            50 cm, ¿en cuánto supera la presión en el fondo del tanque a la
            presión en la superficie del líquido?
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            ¿Cuál es el valor de la fuerza de empuje que ejerce el líquido sobre
            el cuerpo?
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20">
          Solución
        </h3>
      </MathJax>
    </DocsLayout>
  );
};

export default C22025;
