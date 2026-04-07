import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        Una pelota de tenis en Marte, donde la aceleración debida a la gravedad
        es de 3,71 m/s2 y la resistencia del aire es despreciable, es golpeada
        directamente hacia arriba y regresa al mismo nivel 8,50 s más tarde.
      </p>
      <ol>
        <li>¿A qué altura del punto original llega la pelota? </li>
        <li>¿Qué tan rápido se mueve exactamente después de ser golpeada? </li>
      </ol>

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
          "Dado que la pelota regresa al mismo nivel, su posición final es igual a su posición inicial, es decir, $ x(t) = x_0 $. Además, la aceleración es la gravedad en Marte, $ a = -3.71 \\text{m / s}^2 $."
        }
      </p>
      <p>
        {
          "$$ 0 = v_0 (8.50 \\text{ s}) + \\frac{1}{2}(-3.71 \\text{ m/s}^2)(8.50 \\text{ s})^2 $$"
        }
      </p>
      <p>{"$$ 0 = v_0 (8.50 \\text{ s}) - 134.02 \\text{ m} $$"}</p>
      <p>
        {
          "$$ v_0 = \\frac{134.02 \\text{ m}}{8.50 \\text{ s}} = 15.8 \\text{ m/s} $$"
        }
      </p>
      <p>
        {
          "Para encontrar la altura máxima, usamos la ecuación de la velocidad: $ v(t) = v_0 + a(t - t_0) $. En el punto más alto, la velocidad es cero."
        }
      </p>
      <p>{"$$ 0 = 15.8 \\text{ m/s} - 3.71 \\text{ m/s}^2 (t) $$"}</p>
      <p>
        {
          "$$ t = \\frac{15.8 \\text{ m/s}}{3.71 \\text{ m/s}^2} = 4.26 \\text{ s} $$"
        }
      </p>
      <p>{"Reemplazando en la ecuación de la posición:"}</p>
      <p>
        {
          "$$ x(4.26) = 15.8 \\text{ m/s} (4.26 \\text{ s}) + \\frac{1}{2}(-3.71 \\text{ m/s}^2)(4.26 \\text{ s})^2 $$"
        }
      </p>
      <p>
        {
          "$$ x(4.26) = 67.35 \\text{ m} - 33.67 \\text{ m} = 33.68 \\text{ m} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
