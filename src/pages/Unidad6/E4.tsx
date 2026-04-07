import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Un malabarista arroja un cuchillo verticalmente hacia arriba con una
        velocidad inicial de 8,20 m/s. ¿Cuánto tiempo transcurre hasta que el
        cuchillo regresa a la mano del malabarista?
      </p>

      <h3>Solución</h3>
      <p>
        Para resolver este problema, utilizaremos las ecuaciones del movimiento
        con aceleración constante. Es decir, vamos a usar las siguientes
        fórmulas:
      </p>
      <p>
        {
          "$$ \\begin{cases} x(t) = x_0 + v_0(t - t_0) + \\frac{1}{2}a(t - t_0)^2 \\\\ v(t) = v_0 + a(t - t_0) \\\\ a(t) = a \\end{cases} $$"
        }
      </p>
      <p>
        {
          "Dado que el cuchillo regresa a la mano del malabarista, su posición final es igual a su posición inicial, es decir, $ x(t) = x_0 $. Además, la aceleración es la gravedad, $ a = -9.81 \\text{m / s}^2 $."
        }
      </p>
      <p>
        {
          "$$ 0 = 8.20 \\text{ m/s} \\cdot t - \\frac{1}{2} \\cdot 9.81 \\text{ m/s}^2 \\cdot t^2 $$"
        }
      </p>
      <p>{"$$ 0 = t(8.20 \\text{ m/s} - 4.905 \\text{ m/s}^2 \\cdot t) $$"}</p>
      <p>
        {
          "De esta ecuación obtenemos dos soluciones: $ t = 0 \\text{ s} $ y $ t = 1,67 \\text{ s} $. La primera solución corresponde al instante inicial, mientras que la segunda corresponde al instante en que el cuchillo regresa."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
