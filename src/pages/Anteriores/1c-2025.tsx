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
        <p className="text-base leading-7 text-[#141414] my-2">
          Primero pasemos la velocidad de kilómetros por hora a metros por
          segundo:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 30 \\frac{\\text{km}}{\\text{h}} \\cdot \\frac{1\\text{h}}{60\\text{min}} \\cdot \\frac{1\\text{min}}{60\\text{s}} \\cdot \\frac{1000\\text{m}}{1\\text{km}} = 8.34 \\frac{\\text{m}}{\\text{s}} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Recordando la siguiente ecuación
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ v = v_0 + a (t- t_0) $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Reemplazando, vamos a calcular cuanto tuvo que ser la acelaración para
          que el ciclista tuviera una velocidad de 0 m/s en un tiempo de 4,3
          segundos
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 0 \\frac{\\text{m}}{\\text{s}} = 8.34 \\frac{\\text{m}}{\\text{s}} + a (4.30 \\text{s}) $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ a = -1,94 \\frac{\\text{m}}{\\text{s}^2} $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular distancia total recorrida, primero calculamos la
          distancia cuando no iba frenando y después la distancia cuando iba
          frenando. Para la primera parte
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ x = 8,34 \\frac{\\text{m}}{\\text{s}} \\cdot 1,50 \\text{s} = 12,51 \\text{m} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para la segunda parte
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ x = 8,34 \\frac{\\text{m}}{\\text{s}} \\cdot 4,30 \\text{s} + \\frac{1}{2} (-1,94 \\frac{\\text{m}}{\\text{s}^2}) (4,30 \\text{s})^2 = 17,93 \\text{m} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          En total fueron
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ x = 12,51 \\text{m} + 17,93 \\text{m} = 30,43 \\text{m} $$"}
        </p>

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
        <p className="text-base leading-7 text-[#141414] my-2">
          El vector A tiene coordenadas (5 ; 4) y el vector B tiene coordenadas
          (-4 ; 1)
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Sea el vector C = (x ; y) entonces
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ A + B + C = (5-4+x; 4+1+y) $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para que la suma de los tres vectores resulte nula, entonces
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ 5-4+x = 0 \\implies x = -1 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ 4+1+y = 0 \\implies y = -5 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">Por lo tanto,</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ C = (-1; -5) $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Por último, el módulo del vector C se calcula con la siguiente fórmula
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ |C| = \\sqrt{(-1)^2 + (-5)^2} = \\sqrt{26} $$"}
        </p>

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
        <p className="text-base leading-7 text-[#141414] my-2">
          Supondremos que la tensión del cable es 500 N donde
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ T = (500 N \\cos(\\theta); 500 N \\sin(\\theta)) \\quad \\text{donde } \\theta = 180° - 30° = 150° $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Escogiendo el extremo izquierdo como centro de momentos, y haciendo
          equilibrio de momentos
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\sum r = 0 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 4,5 \\frac{\\text{kg}}{\\text{m}} \\cdot 9,8 \\frac{\\text{m}}{\\text{s}^2} \\cdot 1,5 \\text{ m} + 33 \\text{ kg} \\cdot 9,8 \\frac{\\text{m}}{\\text{s}^2} \\cdot d = 500 \\text{ N} \\cdot \\sin(30°) \\cdot 3 \\text{ m}$$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 44,1 \\text{ N} \\cdot 1,5 \\text{m} + 323,4 \\text{ N} \\cdot d = 750 \\text{ N} \\cdot \\text{m} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ d = 2,11 \\text{ m} $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Pero esta es la distancia al extremo izquierdo, por lo tanto, la
          distancia al extremo derecho es
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ 3 \\text{ m} - 2,11 \\text{ m} = 0,89 \\text{ m} $$"}
        </p>

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
        <p className="text-base leading-7 text-[#141414] my-2">
          El enunciado nos dice que la presión externa es de un 28% de la
          presión a nivel del mar, entonces
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ P_{ext} = 0,28 \\cdot 101300 \\text{ Pa} = 28364 \\text{ Pa} $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          También nos dice que el área de la puerta es 0,8 metros por 1,9
          metros, entonces
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ A = 0,8 \\text{ m} \\cdot 1,9 \\text{ m} = 1,52 \\text{ m}^2 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Por último, tenemos que recordar que un Pascal es igual a un Newton
          por metro cuadrado, entonces
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ Pa = \\frac{N}{m^2} \\implies N = Pa \\cdot m^2 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La fuerza va a ser igual a la diferencia de presión por el área,
          entonces
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ F = (P_{int} - P_{ext}) \\cdot A = (75000 \\text{ Pa} - 28364 \\text{ Pa}) \\cdot 1,52 \\text{ m}^2 = 70886 \\text{ N} $$"
          }
        </p>

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
        <p className="text-base leading-7 text-[#141414] my-2">
          Recordando la siguiente ecuación
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ x = x_ 0 + v_0 (t- t_0) + \\frac{1}{2} a (t- t_0)^2 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">Reemplazando</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ 0 = 1,25 \\text{ m} + \\frac{1}{2} a (1,242 \\text{ s})^2 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ a = -1,62 \\frac{\\text{m}}{\\text{s}^2} $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular la rápidez con la que llegó la pluma al suelo lunar, se
          puede usar la siguiente ecuación
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ v = v_0 + a (t- t_0) $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Reemplazando, tenemos que
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ v = (-1,62 \\frac{\\text{m}}{\\text{s}^2}) (1,242 \\text{ s}) = -2,01 \\frac{\\text{m}}{\\text{s}} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Por último, para calcular la fuerza con la que el astronauta se
          apoyaba en el suelo lunar, se puede usar la siguiente fórmula
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ F = m \\cdot a $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Reemplazando, tenemos que
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ F = 129 \\text{ kg} \\cdot 1,62 \\frac{\\text{m}}{\\text{s}^2} = 209 \\text{ N} $$"
          }
        </p>

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
        <p className="text-base leading-7 text-[#141414] my-2">
          Hacemos el producto punto
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ A \\cdot B = (7,25)(0,00) + (3,50)(-5,45) = -19,1 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular el ángulo entre los vectores, se puede usar la siguiente
          fórmula
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ A \\cdot B = |A| \\cdot |B| \\cdot \\cos(\\theta) \\implies \\theta = \\arccos\\left(\\frac{A \\cdot B}{|A| \\cdot |B|}\\right) $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Calculando el módulo de cada vector
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ |A| = \\sqrt{(7,25)^2 + (3,50)^2} = 8,05 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ |B| = \\sqrt{(0,00)^2 + (-5,45)^2} = 5,45 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">Reemplazando</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ \\theta = \\arccos\\left(\\frac{-19,1}{8,05 \\cdot 5,45}\\right) = 116° $$"
          }
        </p>

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
        <p className="text-base leading-7 text-[#141414] my-2">
          Elijo el extremo derecho como el centro de momentos, entonces,
          haciendo equilibrio de momentos
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\sum r = 0 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 85 \\text{ kg} \\cdot 9,8 \\frac{\\text{m}}{\\text{s}^2} \\cdot d + 25 \\text{ kg} \\cdot 9,8 \\frac{\\text{m}}{\\text{s}^2} \\cdot 2 \\text{ m} = 650 \\text{ N} \\cdot 4 \\text{ m} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 833 \\text{ Nm} \\cdot d + 490 \\text{ Nm} = 2600 \\text{ Nm} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ d = 2,53 \\text{ m} $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Pero esta distancia es al extremo derecho, por lo tanto, la distancia
          al extremo izquierdo es
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ 4 \\text{ m} - 2,53 \\text{ m} = 1,47 \\text{ m} $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular la fuerza de vínculo en el punto b, se elije el centro
          de momentos en el extremo izquierdo, entonces, haciendo equilibrio de
          momentos
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\sum r = 0 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 25 \\text{ kg} \\cdot 9,8 \\frac{\\text{m}}{\\text{s}^2} \\cdot 2 \\text{ m} = F \\cdot 4 \\text{ m} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ F = 123 \\text{ N} $$"}
        </p>

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
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular la presión del agua bajo la tapa del barril, se puede
          usar la siguiente fórmula
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ P = P_{atm} + \\rho g h $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Reemplazando, tenemos que
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ P = 101325 \\text{ Pa} + (1000 \\text{ kg/m}^3)(9.8 \\text{ m/s}^2)(9.5 \\text{ m}) = 194325 \\text{ Pa} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para calcular la fuerza neta que hizo saltar la tapa, se puede usar la
          siguiente fórmula
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ N = Pa \\cdot \\text{m}^2 $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La fuerza aplicada será igual a la diferencia de presión por el área,
          entonces
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ \\Delta P = 194325 \\text{ Pa} - 101300 \\text{ Pa} = 93025 \\text{ Pa} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ N = 93025 \\text{ Pa} \\cdot 0,450 \\text{ m}^2 = 41861 \\text{ N} $$"
          }
        </p>
      </MathJax>
    </DocsLayout>
  );
};

export default C22025;
