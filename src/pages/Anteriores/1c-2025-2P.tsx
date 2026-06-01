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
        <p>Calculo la energía potencial gravitacional:</p>
        <p>{`$$E_p = mgh = 80 kg * 9.8 m/s² * 5 m = 3920 J$$`}</p>
        <p>La fuerza de rozamiento es:</p>
        <p>{`$$F_r = \\mu_d N = 0.3 * 80 kg * 9.8 m/s² = 235.2 N$$`}</p>
        <p>El trabajo realizado es:</p>
        <p>{`$$W = F_r * d = 235.2 N * 2.5 m = 588 J$$`}</p>
        <p>La energía en el momento de tocar el resorte es:</p>
        <p>{`$$E = E_p - W = 3920 J - 588 J = 3332 J$$`}</p>
        <p>Ahora reemplazamos en la ecuación de la energía elástica:</p>
        <p>{`$$E = \\frac{1}{2} k x^2$$`}</p>
        <p>Despejamos x:</p>
        <p>{`$$x = \\sqrt{\\frac{2E}{k}} = \\sqrt{\\frac{2 * 3332 J}{15000 \\frac{N}{m}}} = 0.667 m$$`}</p>
        <p>
          Por último, la velocidad del carro en el momento de tocar el resorte
          es:
        </p>
        <p>{`$$v = \\sqrt{\\frac{2E}{m}} = \\sqrt{\\frac{2 * 3332 J}{80 kg}} = 9.13 m/s$$`}</p>

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
        <p>Pasamo la velocidad a m/s:</p>
        <p>{`$$v = 85 \\frac{km}{h} = 23.61 \\frac{m}{s}$$`}</p>
        <p>Descomponemos la velocidad en sus componentes:</p>
        <p>{`$$v_x = v \\cos(40°) = 23.61 \\frac{m}{s} * \\cos(40°) = 18.08 \\frac{m}{s}$$`}</p>
        <p>{`$$v_y = v \\sin(40°) = 23.61 \\frac{m}{s} * \\sin(40°) = 15.16 \\frac{m}{s}$$`}</p>
        <p>Buscamos en que momento la velocidad vertical es cero:</p>
        <p>{`$$v_y = v_{y0} - g t = 15.16 \\frac{m}{s} - 9.8 \\frac{m}{s^2} t = 0$$`}</p>
        <p>{`$$t = \\frac{15.16 \\frac{m}{s}}{9.8 \\frac{m}{s^2}} = 1.55 s$$`}</p>
        <p>La máxima altura es:</p>
        <p>{`$$y = y_0 + v_{y} t - \\frac{1}{2} g t^2 $$`}</p>
        <p>{`$$y = 1.95 m + 15.16 \\frac{m}{s} * 1.55 s - \\frac{1}{2} * 9.8 \\frac{m}{s^2} * (1.55 s)^2 = 13.7 m$$`}</p>
        <p>
          Ahora calculamos que tan lejos llegará, para esto buscamos cuando y =
          0:
        </p>
        <p>{`$$0 = 1.95 m + 15.16 \\frac{m}{s} * t - \\frac{1}{2} * 9.8 \\frac{m}{s^2} * t^2 $$`}</p>
        <p>{`$$t = 3.22 s$$`}</p>
        <p>La distancia horizontal recorrida es:</p>
        <p>{`$$x = x_0 + v_x t = 0 + 18.08 \\frac{m}{s} * 3.22 s = 58.2 m$$`}</p>
        <p>La energía cinética en la máxima altura es:</p>
        <p>{`$$E_c = \\frac{1}{2} m v_x^2 = \\frac{1}{2} * 0.9 kg * (18.08 \\frac{m}{s})^2 = 147 J$$`}</p>

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
        <p>Descomponemos la fuerza peso en sus componentes:</p>
        <p>{`$$P_x = mg \\sin(30°) = 25 kg * 9.8 m/s^2 * \\sin(20°) = 83.78 N$$`}</p>
        <p>{`$$P_y = mg \\cos(30°) = 25 kg * 9.8 m/s^2 * \\cos(20°) = 230.22 N$$`}</p>
        <p>La fuerza de rozamiento es:</p>
        <p>{`$$F_r = \\mu_s N = 0.45 * 230.22 N = 103.6 N$$`}</p>
        <p>La fuerza mínima para elevar la caja es:</p>
        <p>{`$$F_{min} = P_x + F_r = 83.78 N + 103.6 N = 187.38 N$$`}</p>
        <p>
          Si se tirase de la cuerda con una fuerza F de 250 N, la aceleración de
          la caja sería:
        </p>
        <p>{`$$ F - F_r - P_x = ma $$`}</p>
        <p>Donde la nueva fuerza de rozamiento es:</p>
        <p>{`$$F_r = \\mu_d N = 0.25 * 230.22 N = 57.56 N$$`}</p>
        <p>{`$$ 250 N - 57.56 N - 83.78 N = 25 kg * a $$`}</p>
        <p>{`$$ a = \\frac{108.66 N}{25 kg} = 4.35 \\frac{m}{s^2} $$`}</p>
      </MathJax>
    </DocsLayout>
  );
};

export default C120252P;
