// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";
// importamos componente de contacto
import ContactSection from "../../components/Contacto";

const Unidad6 = () => {
  const ejercicios = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-3 sm:p-4 md:p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1d2554] mt-6">
          Cinemática en una dimensión
        </h2>

        <h3 className="text-[#1d2554]">Teoría</h3>
        <hr />

        <h4>Definición</h4>
        <p>
          La cinemática es la rama de la mecánica que estudia el movimiento de
          los objetos sin considerar las fuerzas que lo causan. Se enfoca en
          describir cómo se mueven los objetos, sus trayectorias, velocidades y
          aceleraciones.
        </p>

        <h4>Sistema de Referencia</h4>
        <p>
          Un sistema de referencia es un marco de coordenadas fijo en el que se
          mide el movimiento de un objeto. Es fundamental para poder desarrollar
          las ecuaciones de movimiento y describir la posición, velocidad y
          aceleración de un objeto en el espacio.
        </p>
        <p>
          Elegir este sistema va a ser fundamental al inicio de cada ejercicio
          ya que tendremos que establecer un marco de coordenadas y un instante
          de tiempo.
        </p>

        <h4>Tipos de Movimiento</h4>
        <p>
          Existen varios tipos de movimiento que se estudian en cinemática,
          entre ellos:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Movimiento Rectilíneo Uniforme (MRU):</strong> Es el
            movimiento en línea recta con velocidad constante. La posición se
            describe por las fórmulas:
            <p>
              {
                "$$ \\begin{cases} x(t) = x_0 + v(t - t_0) \\\\ v(t) = v \\end{cases} $$"
              }
            </p>
          </li>
          <li>
            <strong>Movimiento Rectilíneo Uniformemente Variado (MRUV):</strong>{" "}
            Es el movimiento en línea recta con aceleración constante. La
            posición se describe por las fórmulas:
            <p>
              {
                "$$ \\begin{cases} x(t) = x_0 + v_0(t - t_0) + \\frac{1}{2}a(t - t_0)^2 \\\\ v(t) = v_0 + a(t - t_0) \\\\ a(t) = a \\end{cases} $$"
              }
            </p>
          </li>
          <li>
            <strong>Movimiento Circular:</strong> Es el movimiento de un objeto
            a lo largo de una trayectoria circular. Se describe por la fórmula:
            $\theta = \theta_0 + \omega t + \frac{1}
            {2}\alpha t^2$.
          </li>
        </ul>

        <h4>Velocidad y Aceleración</h4>
        <p>
          {
            "La velocidad es la tasa de cambio de la posición con respecto al tiempo, mientras que la aceleración es la tasa de cambio de la velocidad con respecto al tiempo. Se describen por las fórmulas: $v = \\frac{dx}{dt}$ y $a = \\frac{dv}{dt}$ respectivamente."
          }
        </p>

        <h4>Velocidad media y Velocidad instantánea</h4>
        <p>
          {
            "La velocidad media se calcula como el cambio total de posición dividido por el tiempo total, mientras que la velocidad instantánea es la velocidad en un instante específico. Se describen por las fórmulas: $v_{media} = \\frac{\\Delta x}{\\Delta t}$ y $v_{instantánea} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t}$ respectivamente."
          }
        </p>

        <h4>Aceleración media y Aceleración instantánea</h4>
        <p>
          {
            "La aceleración media se calcula como el cambio total de velocidad dividido por el tiempo total, mientras que la aceleración instantánea es la aceleración en un instante específico. Se describen por las fórmulas: $a_{media} = \\frac{\\Delta v}{\\Delta t}$ y $a_{instantánea} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v}{\\Delta t}$ respectivamente."
          }
        </p>

        {/* Practica */}
        <h3 className="text-[#1d2554]">Práctica</h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          {ejercicios.map((numero) => (
            <Link
              key={numero}
              to={`/cinematica-una-dimension/ejercicio-${numero}`}
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

export default Unidad6;
