// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";
// importamos componente de contacto
import ContactSection from "../../components/Contacto";

const Unidad2 = () => {
  const ejercicios = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-3 sm:p-4 md:p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1d2554] mt-6">
          Magnitudes físicas
        </h2>

        <h3 className="text-[#1d2554]">Teoría</h3>
        <hr />

        <h4>Escalar</h4>
        <p>
          Escalar se define como un número real que sirve para describir un
          fenómeno físico con magnitud. Se representa por un único número (única
          coordenada) invariable en cualquier sistema de referencia, acompañado
          de sus unidades. Ejemplo: temperatura de un cuerpo, 19 °C.
        </p>
        <p>
          Un campo escalar es un campo que asigna un valor escalar a cada punto
          del espacio. Ejemplo: temperatura en una habitación, donde cada punto
          tiene un valor de temperatura diferente.
        </p>

        <h4>Vector</h4>
        <p>
          Un vector es una representación geométrica de una magnitud física que
          tiene módulo (longitud), dirección (orientación) y sentido (se
          distingue el origen del extremo). Ejemplo: velocidad, esta se
          representa como segmentos de recta dirigidos.
        </p>
        <p>
          Para representar vectores en el plano cartesiano es necesario definir
          vectores unitarios para las direcciones $x$, $y$ y $z$. Por ejemplo,
          podemos definir{" "}
        </p>
        <p>{"$$ \\vec{a} = (5, 3) $$"}</p>
        <p>
          Donde $5$ es la componente en la dirección $x$ y $3$ es la componente
          en la dirección $y$. Y este mismo vector se puede representar como
        </p>
        <p>{"$$ \\vec{a} = 5\\hat{i} + 3\\hat{j}$$"}</p>
        <p>
          {
            "Donde $\\hat{i}$ y $\\hat{j}$ son los vectores unitarios en las direcciones $x$ y $y$, respectivamente."
          }
        </p>
        <p>
          {
            "Para saber el ángulo que forma un vector con el eje $x$, se utiliza la función tangente: $\\theta = \\arctan\\left(\\frac{a_y}{a_x}\\right)$."
          }
        </p>
        <p>
          {
            "Para saber la longitud de un vector, se utiliza el teorema de Pitágoras: $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$."
          }
        </p>
        <p>
          Un campo vectorial es un campo que asigna un vector a cada punto del
          espacio. Ejemplo: flechas sobre un mapa que indiquen la dirección y
          magnitud del viento.
        </p>

        <h4>Suma de vectores</h4>
        <p>
          {
            "para sumar dos vectores, se suman sus componentes correspondientes. Por ejemplo: para sumar $\\vec{a} = (a_x, a_y)$ y $\\vec{b} = (b_x, b_y)$, se obtiene $\\vec{a} + \\vec{b} = (a_x + b_x, a_y + b_y)$."
          }
        </p>
        <p>
          {
            "Por ejemplo, sean los vectores $\\vec{a} = (2, 3)$ y $\\vec{b} = (1, 4)$."
          }
        </p>
        <p>{`$$\\vec{a} + \\vec{b} = (2+1, 3+4) = (3, 7)$$`}</p>
        <p>
          De forma gráfica, la suma de vectores se puede representar mediante la
          regla del paralelogramo o la regla del triángulo. Para la regla del
          triángulo, se coloca el origen de uno de los vectores en el extremo
          del otro y se traza un vector desde el origen del primero hasta el
          extremo del segundo.
        </p>

        <h4>Resta de vectores</h4>
        <p>
          {
            "para restar dos vectores, se resta su componentes correspondientes. Por ejemplo: para restar $\\vec{a} = (a_x, a_y)$ y $\\vec{b} = (b_x, b_y)$, se obtiene $\\vec{a} - \\vec{b} = (a_x - b_x, a_y - b_y)$."
          }
        </p>
        <p>
          {
            "Por ejemplo, sean los vectores $\\vec{a} = (2, 3)$ y $\\vec{b} = (1, 4)$."
          }
        </p>
        <p>{`$$\\vec{a} - \\vec{b} = (2-1, 3-4) = (1, -1)$$`}</p>

        <h4>Producto de un escalar por un vector</h4>
        <p>
          {
            "para multiplicar un escalar por un vector, se multiplica el escalar por cada componente del vector. Por ejemplo: para multiplicar $k$ por $\\vec{a} = (a_x, a_y)$, se obtiene $k\\vec{a} = (ka_x, ka_y)$."
          }
        </p>
        <p>
          Esta multiplicación da como resultado un vector con igual dirección,
          pero con módulo y un sentido determinados por el valor y el signo del
          escalar que se multiplica por él.
        </p>
        <p>
          {
            "Por ejemplo, sea $k = 2$ y $\\vec{a} = (2, 3)$, entonces $k\\vec{a} = (4, 6)$."
          }
        </p>
        <p>{`$$k\\vec{a} = 2(2, 3) = (2 \\cdot 2, 2 \\cdot 3) = (4, 6)$$`}</p>

        <h4>Producto escalar o producto punto</h4>
        <p>
          {
            "Es una operación definida sobre dos vectores. El resultado es un escalar. Para calcular el producto escalar de dos vectores, se multiplican sus componentes correspondientes y luego se suman los resultados. Por ejemplo: para calcular el producto escalar de $\\vec{a} = (a_x, a_y)$ y $\\vec{b} = (b_x, b_y)$, se obtiene $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y$."
          }
        </p>
        <p>
          {
            "Por ejemplo, sean los vectores $\\vec{a} = (2, 3)$ y $\\vec{b} = (1, 4)$, entonces $\\vec{a} \\cdot \\vec{b} = 2 \\cdot 1 + 3 \\cdot 4 = 14$."
          }
        </p>
        <p>{`$$\\vec{a} \\cdot \\vec{b} = (2, 3) \\cdot (1, 4) = 2 \\cdot 1 + 3 \\cdot 4 = 14$$`}</p>
        <p>
          {
            " El producto escalar es útil para determinar el ángulo entre dos vectores, ya que se puede usar la fórmula $\\cos(\\theta) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|}$."
          }
        </p>
        <p>
          Si el producto escalar entre dos vectores es cero, los vectores son
          perpendiculares.
        </p>

        <h4>Producto vectorial</h4>
        <p>
          Es una operación definida sobre dos vectores en el espacio
          tridimensional. Se define como
        </p>
        <p>{`$$\\vec{a} \\times \\vec{b} = (a_y b_z - a_z b_y, a_z b_x - a_x b_z, a_x b_y - a_y b_x)$$`}</p>
        <p>
          Este producto da como resultado un vector perpendicular a ambos
          vectores originales.
        </p>
        <p>
          Geométricamente, el producto vectorial es el área del paralelogramo
          formado por los dos vectores.
        </p>

        {/* Practica */}
        <h3 className="text-[#1d2554]">Práctica</h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          {ejercicios.map((numero) => (
            <Link
              key={numero}
              to={`/la-medicion/ejercicio-${numero}`}
              className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
            >
              {`Ejercicio ${numero}`}
            </Link>
          ))}
        </ul>

        <Outlet />

        <ContactSection />
      </section>
    </MathJax>
  );
};

export default Unidad2;
