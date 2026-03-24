import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        Sea un vector que tiene el componente y de 13. Y el vector tiene 32
        grados a partir del eje y.
      </p>
      <ul>
        <li>Cúal es el componente x?</li>
        <li>Cúal es la magnitud del vector?</li>
      </ul>
      <h3>Solución</h3>
      <p>
        Para encontrar el componente x, podemos usar la función trigonométrica
        seno. El ángulo de 32 grados se encuentra a partir del eje y, por lo que
        el componente x se puede calcular como:
      </p>
      <p>
        {
          "$$ x = \\frac{y}{\\tan(122°)} = \\frac{13}{\\tan(32°)} \\approx -8.12 $$"
        }
      </p>
      <p>
        Para encontrar la magnitud del vector, podemos usar el teorema de
        Pitágoras.
      </p>
      <p>
        {
          "$$ m = \\sqrt{x^2 + y^2} = \\sqrt{(-8.12)^2 + 13^2} \\approx 15.33 $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
