import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad3 = () => {
  const ejercicios = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[1].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          Magnitudes físicas
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          Las magnitudes físicas permiten describir cuantitativamente los
          fenómenos naturales. Pueden clasificarse en escalares y vectoriales,
          según requieran o no dirección y sentido.
        </p>

        <h2
          id="teoria"
          className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        >
          Teoría
        </h2>
        <hr />

        <h3
          id="escalar"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Escalar
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un escalar es un número real que sirve para describir un fenómeno
          físico con magnitud. Se representa por un único valor numérico,
          acompañado de sus unidades. Por ejemplo: la temperatura de un cuerpo,
          19 °C.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un campo escalar es un campo que asigna un valor escalar a cada punto
          del espacio. Por ejemplo: la temperatura en una habitación, donde cada
          punto puede tener un valor distinto.
        </p>

        <h3
          id="vector"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Vector
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un vector es una representación geométrica de una magnitud física que
          tiene módulo, dirección y sentido. Ejemplo: la velocidad.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para representar vectores en el plano cartesiano es necesario definir
          vectores unitarios para las direcciones x, y y z.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\vec{a} = (5, 3) $$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Donde 5 es la componente en la dirección x y 3 es la componente en la
          dirección y.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ \\vec{a} = 5\\hat{i} + 3\\hat{j}$$"}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Donde $\\hat{i}$ y $\\hat{j}$ son los vectores unitarios en las direcciones $x$ y $y$, respectivamente."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Para hallar el ángulo que forma un vector con el eje $x$, se utiliza la función tangente:"
          }
        </p>
        <p>{"$$ \\theta = \\arctan\\left(\\frac{a_y}{a_x}\\right) $$"}</p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Para hallar la longitud de un vector, se utiliza el teorema de Pitágoras: $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un campo vectorial es un campo que asigna un vector a cada punto del
          espacio. Por ejemplo: las flechas que representan la dirección y la
          intensidad del viento sobre un mapa.
        </p>

        <h3
          id="suma-de-vectores"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Suma de vectores
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Para sumar dos vectores, se suman sus componentes correspondientes. Si $\\vec{a} = (a_x, a_y)$ y $\\vec{b} = (b_x, b_y)$, entonces $\\vec{a} + \\vec{b} = (a_x + b_x, a_y + b_y)$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Por ejemplo, sean los vectores $\\vec{a} = (2, 3)$ y $\\vec{b} = (1, 4)$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\vec{a} + \\vec{b} = (2+1, 3+4) = (3, 7)$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          De forma gráfica, la suma se puede representar mediante la regla del
          paralelogramo o la regla del triángulo.
        </p>

        <h3
          id="resta-de-vectores"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Resta de vectores
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Para restar dos vectores, se restan sus componentes correspondientes. Si $\\vec{a} = (a_x, a_y)$ y $\\vec{b} = (b_x, b_y)$, entonces $\\vec{a} - \\vec{b} = (a_x - b_x, a_y - b_y)$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Por ejemplo, sean los vectores $\\vec{a} = (2, 3)$ y $\\vec{b} = (1, 4)$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\vec{a} - \\vec{b} = (2-1, 3-4) = (1, -1)$$`}
        </p>

        <h3
          id="producto-escalar-por-vector"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Producto de un escalar por un vector
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Para multiplicar un escalar por un vector, se multiplica el escalar por cada componente del vector. Si $k$ es un escalar y $\\vec{a} = (a_x, a_y)$, entonces $k\\vec{a} = (ka_x, ka_y)$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Esta multiplicación da como resultado un vector con igual dirección,
          pero con módulo y sentido determinados por el valor y el signo del
          escalar.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Por ejemplo, si $k = 2$ y $\\vec{a} = (2, 3)$, entonces $k\\vec{a} = (4, 6)$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$k\\vec{a} = 2(2, 3) = (2 \\cdot 2, 2 \\cdot 3) = (4, 6)$$`}
        </p>

        <h3
          id="producto-escalar"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Producto escalar o producto punto
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Es una operación entre dos vectores cuyo resultado es un escalar. Si $\\vec{a} = (a_x, a_y)$ y $\\vec{b} = (b_x, b_y)$, entonces $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y$."
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "Por ejemplo, sean $\\vec{a} = (2, 3)$ y $\\vec{b} = (1, 4)$, entonces:"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\vec{a} \\cdot \\vec{b} = (2, 3) \\cdot (1, 4) = 2 \\cdot 1 + 3 \\cdot 4 = 14$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "También se puede usar para determinar el ángulo entre dos vectores mediante la fórmula:"
          }
        </p>
        <p>
          {
            "$$ \\cos(\\theta) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Si el producto escalar entre dos vectores es cero, entonces los
          vectores son perpendiculares.
        </p>

        <h3
          id="producto-vectorial"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Producto vectorial
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Es una operación definida sobre dos vectores en el espacio
          tridimensional.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\vec{a} \\times \\vec{b} = (a_y b_z - a_z b_y, a_z b_x - a_x b_z, a_x b_y - a_y b_x)$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          El resultado es un vector perpendicular a ambos vectores originales.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Geométricamente, su módulo representa el área del paralelogramo
          formado por los dos vectores.
        </p>

        <h3
          id="trigonometria"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Trigonometría
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Las funciones trigonométricas serán necesarias para el desarrollo de
          la materia.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Dado un triángulo rectángulo con ángulo $\theta$, cateto opuesto $y$,
          cateto adyacente $x$ e hipotenusa $h$, se definen como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\sin\\theta = \\frac{y}{h}, \\quad \\cos\\theta = \\frac{x}{h}, \\quad \\tan\\theta = \\frac{y}{x}$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Estas relaciones permiten descomponer un vector en sus componentes
          cartesianas.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$v_x = |\\vec{v}|\\cos\\theta, \\quad v_y = |\\vec{v}|\\sin\\theta$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Inversamente, dado un vector de componentes $(v_x, v_y)$, su módulo y
          su ángulo se obtienen como:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}, \\quad \\theta = \\arctan\\!\\left(\\frac{v_y}{v_x}\\right)$$`}
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Nota: en el segundo y tercer cuadrante se debe sumar 180° al ángulo
          obtenido.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          La identidad trigonométrica fundamental es:
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {`$$\\sin^2\\theta + \\cos^2\\theta = 1$$`}
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
              to={`/magnitudes-fisicas/ejercicio-${numero}`}
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

export default Unidad3;
