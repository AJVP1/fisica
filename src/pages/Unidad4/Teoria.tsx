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
          Estática
        </h2>

        <h3 className="text-[#1d2554]">Teoría</h3>
        <hr />

        <h4>Definición</h4>
        <p>
          La estática es la rama de la física que estudia el equilibrio de los
          cuerpos sometidos a fuerzas. Surge de la raíz griega "statos" que
          significa "estar parado en equilibrio", lo cúal implica reposo.
          Podemos tener "equilibrio de fuerzas" o "equilibrio de momentos".
        </p>
        <p>
          Para el equilibrio de fuezas, decimos que cuando las fuerzas actúan
          sobre un mismo punto, las llamamos fuerzas concurrentes. Mientras que
          para el equilibrio de momentos, las fuerzas no actúan sobre un mismo
          punto.
        </p>
        <p>
          En los casos de equilibrio de fuerza concurrentes, siempre se van a
          representar fuerzas o vectores, creando tensiones sobre un cuerpo.
          Aquí van a ser importante las distancias, los ángulos y las
          direcciones.
        </p>
        <p>
          En los casos de equilibrio de momentos, siempre se van a representar
          momentos o torques. Esto implica un brazo de palanca, una fuerza
          aplicada en un extremo y un centro de giro.
        </p>

        <h4>Condiciones de equilibrio</h4>
        <p>
          Para que un cuerpo esté en equilibrio, deben cumplirse dos
          condiciones:
        </p>
        <p>
          {"1. La suma de las fuerzas debe ser cero: $\\sum \\vec{F} = 0$."}
        </p>
        <p>
          {
            "2. La suma de los momentos o torques debe ser cero: $\\sum \\vec{\\tau} = 0$."
          }
        </p>

        <h4>Fuerza</h4>
        <p>
          Una fuerza es una interacción que puede cambiar el estado de
          movimiento o deformar un cuerpo. Es una magnitud vectorial, por lo que
          tiene módulo, dirección y sentido.
        </p>
        <p>
          Hay un tipo de fuerza que siempre aparece en los problemas de
          estática. Es la fuerza PESO. La Tierra atrae a las cosas y quiere
          hacer que caigan. A esta fuerza se la llama peso.
        </p>

        <h4>Momento de una fuerza (Torque)</h4>
        <p>
          El momento de una fuerza respecto a un punto mide la capacidad de esa
          fuerza para producir rotación. Se define como:
        </p>
        <p>{`$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$`}</p>
        <p>
          {
            "Donde $\\vec{r}$ es el vector posición desde el punto de referencia hasta el punto de aplicación de la fuerza, y $\\vec{F}$ es la fuerza aplicada."
          }
        </p>

        <h4>Equilibrio traslacional</h4>
        <p>
          Un cuerpo está en equilibrio traslacional cuando la suma de todas las
          fuerzas que actúan sobre él es cero.
        </p>
        <p>{`$$\\sum F_x = 0 \\quad y \\quad \\sum F_y = 0$$`}</p>

        <h4>Equilibrio rotacional</h4>
        <p>
          Un cuerpo está en equilibrio rotacional cuando la suma de todos los
          momentos respecto a cualquier punto es cero.
        </p>
        <p>{`$$\\sum \\tau = 0$$`}</p>

        <h4>Centro de masa</h4>
        <p>
          El centro de masa es el punto donde se puede considerar concentrada
          toda la masa de un cuerpo para el análisis del movimiento.
        </p>

        <h4>Tipos de equilibrio</h4>
        <p>Existen tres tipos de equilibrio:</p>
        <ul>
          <li>
            Equilibrio estable: el cuerpo tiende a volver a su posición original
            tras una perturbación.
          </li>
          <li>
            Equilibrio inestable: el cuerpo se aleja de su posición original
            tras una perturbación.
          </li>
          <li>
            Equilibrio indiferente: el cuerpo permanece en su nueva posición
            tras una perturbación.
          </li>
        </ul>

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

export default Unidad4;
