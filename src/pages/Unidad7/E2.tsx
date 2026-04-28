import ExerciseLayout from "../../components/Ejecicio";
import circularE2 from "../../assets/circular-ej2.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Se lanza una piedra hacia arriba desde la parte superior de un edificio
        en un ángulo de 30,0° con la horizontal y con una velocidad inicial de
        20,0 m/s. El punto de liberación está a 45,0 m respecto de la superficie
        de la Tierra. Considere despreciable la resistencia del aire.
      </p>
      <ol>
        <li>
          ¿Cuánto tiempo le toma a la piedra golpear la superficie de la Tierra?
        </li>
        <li>Determine la velocidad de la piedra en el impacto.</li>
        <li>Encuentre el alcance horizontal de la piedra.</li>
      </ol>
      <img
        src={circularE2}
        alt="Diagrama ejercicio 2"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Primero buscamos las velocidades iniciales en x y en y a partir de la
        velocidad inicial y el ángulo:
      </p>
      <p>
        {
          "$$ v_{x0} = v_0 \\cos(30,0°) = 20,0 \\cdot \\cos(30,0°) = 17,3 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>
        {
          "$$ v_{y0} = v_0 \\sin(30,0°) = 20,0 \\cdot \\sin(30,0°) = 10,0 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>Ahora armamos las ecuaciones del movimiento en dos dimensiones:</p>
      <p className="mt-2">
        {
          "$$ \\begin{cases} y(t) = 45 \\text{ m} + 10 \\text{ m}/\\text{s} \\cdot t - \\frac{1}{2}(9,8 \\text{ m}/\\text{s}^2)t^2 \\\\ v_{y}(t) = 10 \\text{ m}/\\text{s} -9,8 \\text{ m}/\\text{s}^2 \\cdot t \\\\ x(t) = 17,3 \\text{ m}/\\text{s} \\cdot t \\\\  \\end{cases} $$"
        }
      </p>
      <p>Ahora buscamos cuanto tiempo toma la piedra para llegar al suelo:</p>
      <p>{"$$ 0 = 45 + 10t - 4,9t^2 $$"}</p>
      <p>{"$$ t = 4,22 \\text{ s} $$"}</p>
      <p>
        Para calcular la velocidad de impacto, debemos encontrar las componentes
        de la velocidad en el momento del impacto:
      </p>
      <p>
        {
          "$$ v_{y}(4,22) = 10 - 9,8 \\cdot 4,22 = -31,4 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>
        Si la componente de y es -31,4 m/s y la componente de x es 17,3 m/s,
        entonces la velocidad de impacto es:
      </p>
      <p>
        {
          "$$ v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(17,3)^2 + (-31,4)^2} = 35,9 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>El alcance horizontal de la piedra es:</p>
      <p>{"$$ x(4,22) = 17,3 \\cdot 4,22 = 73,0 \\text{ m} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
