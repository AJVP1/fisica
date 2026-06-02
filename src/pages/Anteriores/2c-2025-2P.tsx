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
        <p>
          Para el primer item, como solo actua la fuerza peso, descomponiendola,
          y sabiendo que solo actua en la dirección del movimiento:
        </p>
        <p>{`$$a = g \\sin(25°) = 9.8 \\frac{m}{s^2} * \\sin(25°) = 4.14 \\frac{m}{s^2}$$`}</p>
        <p>Para el segundo item, aplicamos la conservación de la energía:</p>
        <p>{`$$E_{p1} = E_{k2}$$`}</p>
        <p>{`$$mgh = \\frac{1}{2} mv^2$$`}</p>
        <p>{`$$v = \\sqrt{2gh}$$`}</p>
        <p>{`$$v = \\sqrt{2 * 9.8 \\frac{m}{s^2} * 2,31 m} = 6.73 \\frac{m}{s}$$`}</p>
        <p>
          Para el tercer item, calculamos la energía potencial gravitatoria:
        </p>
        <p>{`$$E_p = mgh = 400 kg * 9.8 \\frac{m}{s^2} * 3.00 m = 11760 J$$`}</p>
        <p>Para el cuarto item, aplicamos la conservación de la energía:</p>
        <p>{`$$E_{p1} = E_{k4}$$`}</p>
        <p>{`$$11760 J = \\frac{1}{2} mv^2$$`}</p>
        <p>{`$$v = \\sqrt{2gh}$$`}</p>
        <p>{`$$v = \\sqrt{2 * 9.8 \\frac{m}{s^2} * 5.31 m} = 10.18 \\frac{m}{s}$$`}</p>
        <p>
          Para el quinto item, como la energía se conserva, entonces la energía
          cinética es igual a la energía potencial gravitatoria:
        </p>
        <p>{`$$E_k = E_p = 11760 J$$`}</p>
        <p>
          Para el último item, descomponemos la velocidad con la que sale del
          techo en sus componentes:
        </p>
        <p>{`$$v_x = v \\cos(25°) = 6.73 \\frac{m}{s} * \\cos(25°) = 6.09 \\frac{m}{s}$$`}</p>
        <p>{`$$v_y = v \\sin(25°) = 6.73 \\frac{m}{s} * \\sin(25°) = 2.84 \\frac{m}{s}$$`}</p>
        <p>
          Con esta velocidad vertical, podemos calcular cuanto tardó en llegar
          al suelo:
        </p>
        <p>{`$$ 0 = 3.00 m - 2.84 \\frac{m}{s} * t - \\frac{1}{2} * 9.8 \\frac{m}{s^2} * t^2 $$`}</p>
        <p>{`$$ t = 0.544 s $$`}</p>
        <p>Ahora podemos calcular la distancia horizontal:</p>
        <p>{`$$x = v_x * t = 6.09 \\frac{m}{s} * 0.544 s = 3.32 m$$`}</p>

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
        <p>Para el primer item calculamos la fuerza de rozamiento:</p>
        <p>{`$$F_r = \\mu_d N = 0.55 * 1400 kg * 9.8 m/s² = 7546 N$$`}</p>
        <p>
          Luego, aplicamos la segunda ley de Newton para encontrar la
          aceleración:
        </p>
        <p>{`$$F = ma$$`}</p>
        <p>{`$$a = \\frac{F}{m} = \\frac{-7546 N}{1400 kg} = -5.39 \\frac{m}{s^2}$$`}</p>
        <p>Ahora, buscamos cuanto tiempo tardo en detenerse:</p>
        <p>{`$$v = v_0 + at$$`}</p>
        <p>{`$$0 = 22.22 \\frac{m}{s} + (-5.39 \\frac{m}{s^2}) * t$$`}</p>
        <p>{`$$t = \\frac{22.22 \\frac{m}{s}}{5.39 \\frac{m}{s^2}} = 4.12 s$$`}</p>
        <p>Finalmente, calculamos la distancia patinada:</p>
        <p>{`$$x = v_0 t + \\frac{1}{2} at^2$$`}</p>
        <p>{`$$x = 22.22 \\frac{m}{s} * 4.12 s + \\frac{1}{2} * (-5.39 \\frac{m}{s^2}) * (4.12 s)^2 = 45.8 m$$`}</p>
        <p>
          Para el tercer item, calculamos el trabajo realizado por la fuerza de
          rozamiento:
        </p>
        <p>{`$$W = F_r * x = -7546 N * 45.8 m = -345,000 J$$`}</p>
        <p>Para el cuarto item, calculamos la potencia media de frenado:</p>
        <p>{`$$P = \\frac{W}{t} = \\frac{345,000 J}{4.12 s} = 83,740 W$$`}</p>
      </MathJax>
    </DocsLayout>
  );
};

export default C220252P;
