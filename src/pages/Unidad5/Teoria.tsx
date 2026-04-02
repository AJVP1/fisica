// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";
// importamos componente de contacto
import ContactSection from "../../components/Contacto";

const Unidad4 = () => {
  const ejercicios = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-3 sm:p-4 md:p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1d2554] mt-6">
          Hidroestática
        </h2>

        <h3 className="text-[#1d2554]">Teoría</h3>
        <hr />

        <h4>Definición</h4>
        <p>
          Hidroestática es la rama de la mecánica de fluidos que estudia los
          fluidos en reposo (principalmente líquidos) y las fuerzas y presiones
          que actúan sobre ellos.
        </p>

        <h4>Presión</h4>
        <p>
          La presión es la fuerza por unidad de área que un fluido ejerce sobre
          una superficie. Se denota comúnmente como $P$ y se calcula con la
          fórmula:
        </p>
        <p>{"$$P = \\frac{F}{A}$$"}</p>
        <p>
          donde $F$ es la fuerza aplicada y $A$ es el área sobre la cual actúa
          la fuerza.
        </p>
        <p>
          La unidad de presión en el sistema internacional es el pascal (Pa)
        </p>
        <p>{"$$ Pa = \\frac{N}{m^2} $$"}</p>

        <h4>Densidad</h4>
        <p>
          La densidad es la masa por unidad de volumen de un fluido. Se denota
          comúnmente como $\rho$ y se calcula con la fórmula:
        </p>
        <p>{"$$\\rho = \\frac{m}{V}$$"}</p>
        <p>Donde $m$ es la masa del fluido y $V$ es el volumen que ocupa.</p>
        <p>
          En el sistema internacional, la unidad de densidad es el kilogramo por
          metro cúbico.
        </p>
        <p>{"$$ \\rho = \\frac{Kg}{m^3} $$"}</p>

        <h4>Teorema Fundamental de la Hidrostática</h4>
        <p>
          El teorema fundamental de la hidrostática establece que la presión en
          cualquier punto de un fluido en reposo es proporcional a la
          profundidad del punto y a la densidad del fluido.
        </p>
        <p>{"$$P = \\rho \\cdot g \\cdot h$$"}</p>
        <p>
          donde $P$ es la presión, $\rho$ es la densidad del fluido, $g$ es la
          aceleración debida a la gravedad y $h$ es la profundidad.
        </p>
        <p>
          También se puede interpretar como la diferencia de presión entre dos
          puntos a diferentes alturas en un fluido en reposo es:
        </p>
        <p>{"$$\\Delta P = \\rho \\cdot g \\cdot \\Delta h$$"}</p>

        <h4>Principio de Pascal</h4>
        <p>
          El principio de Pascal establece que cualquier cambio en la presión
          aplicada a un fluido confinado se transmite sin disminución a todas
          las partes del fluido y a las paredes del recipiente. Esto se puede
          expresar matemáticamente como:
        </p>
        <p>$P_1 = P_2$</p>
        <p>
          donde $P_1$ y $P_2$ son las presiones en dos puntos diferentes del
          fluido.
        </p>
        <p>
          De esta forma se deriva que, si se aplica una fuerza en una superficie
          del fluido, esta se transmite en igual cantidad a todos los puntos del
          fluido, es decir:
        </p>
        <p>{"$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$"}</p>
        <p>Como también los volumenes desplazados van a ser iguales:</p>
        <p>{"$$V_1 = V_2$$"}</p>

        <h4>Principio de Arquímedes</h4>
        <p>
          El principio de Arquímedes establece que todo cuerpo sumergido en un
          fluido experimenta una fuerza ascendente igual al peso del fluido
          desplazado. Esto se puede expresar matemáticamente como:
        </p>
        <p>$$ F_B = \rho \cdot V \cdot g $$</p>
        <p>
          donde $F_B$ es la fuerza de empuje, $\rho$ es la densidad del fluido,
          $V$ es el volumen del fluido desplazado y $g$ es la aceleración debida
          a la gravedad.
        </p>
        <p>
          De aquí se desprende una conclusión sobre los cuerpos, o se hunden o
          flotan. Si flota, entonces la fuerza de empuje no logra compensar a la
          fuerza peso.
        </p>
        <p>También vamos a incluir una variable de la formula de la Fuerza:</p>
        <p>{"$$ \\vec{E} = \\rho_{liq} \\cdot g \\cdot V_{sumergido} $$"}</p>
        <p>{"$$ \\vec{P} = \\rho_{cuerpo} \\cdot g \\cdot V_{cuerpo} $$"}</p>

        <h4>Presión atmosférica</h4>
        <p>
          La presión atmosférica es la presión ejercida por la columna de aire
          que se encuentra sobre la superficie de la Tierra. Se mide comúnmente
          en hectopascales (hPa) o en milibares (mb). A nivel del mar, la
          presión atmosférica promedio es de aproximadamente 101300 Pa o 1013
          hPa o 1013 mb.
        </p>

        <h4>Cilindros</h4>
        <p>
          Un cilindro es un sólido geométrico que tiene dos bases circulares
          paralelas y una superficie lateral curva. La fórmula para el volumen
          de un cilindro es:
        </p>
        <p>{"$$V = \\pi r^2 h$$"}</p>
        <p>donde $r$ es el radio de la base y $h$ es la altura del cilindro.</p>
        <p>Mientras que la fórmula para el área de un cilindro es:</p>
        <p>{"$$A = \\pi r^2 $$"}</p>

        {/* Practica */}
        <h3 className="text-[#1d2554]">Práctica</h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          {ejercicios.map((numero) => (
            <Link
              key={numero}
              to={`/hidrostatica/ejercicio-${numero}`}
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

export default Unidad4;
