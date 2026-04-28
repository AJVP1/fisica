import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Un libro de física que se desliza sobre una mesa horizontal a 1,10 m/s
        cae y llega al piso en 0,350 s. Ignore la resistencia del aire.
      </p>
      <ol>
        <li>Calcule la altura de la mesa con respecto al piso.</li>
        <li>
          Calcule la distancia horizontal del borde de la mesa al punto donde
          cae el libro.
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        El ejercicio solo nos da la velocidad en el eje x, por lo tanto, la
        velocidad inicial en el eje y es cero. Armando las ecuaciones del
        movimiento en dos dimensiones:
      </p>
      <p className="mt-2">
        {
          "$$ \\begin{cases} y(t) = h - \\frac{1}{2}(9,8 \\text{ m}/\\text{s}^2)t^2 \\\\ v_{y}(t) = -9,8 \\text{ m}/\\text{s}^2 t \\\\ x(t) = 1,10 \\text{ m}/\\text{s} t \\\\  \\end{cases} $$"
        }
      </p>
      <p>El ejercicio también nos dice que $y(0.350) = 0$, por lo tanto:</p>
      <p>{"$$ 0 = h - \\frac{1}{2}(9,8)(0.350)^2 $$"}</p>
      <p>{"$$ h = 0,60 \\text{ m} $$"}</p>
      <p>Por último, calculamos la distancia horizontal:</p>
      <p>{"$$ x(0.350) = 1,10 \\cdot 0.350 = 0,385 \\text{ m} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
