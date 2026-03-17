import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        El vector a mide 3.6 y está a 70 grados. El vector b mide 2.4 y está a
        210 grados.
      </p>
      <ul>
        <li>
          Escriba cada uno de los vectores en términos de vectores unitarios
        </li>
        <li>
          Utilice vectores unitarios para expresar el vector c como 3 veces el
          vector a menos 4 veces el vector b
        </li>
        <li>Determine la magnitud y dirección del vector c</li>
      </ul>
      <h3>Solución</h3>
      <p>Primero buscamos los componentes de los vectores</p>
      <p>{`$$\\vec{a} = (3.6 \\cos 70^\\circ, 3.6 \\sin 70^\\circ) = (1.23, 3.38) = 1.23\\hat{i} + 3.38\\hat{j}$$`}</p>
      <p>{`$$\\vec{b} = (2.4 \\cos 210^\\circ, 2.4 \\sin 210^\\circ) = (-2.08, -1.2) = -2.08\\hat{i} - 1.2\\hat{j}$$`}</p>
      <p>Luego, para el vector c</p>
      <p>{`$$\\vec{c} = 3\\vec{a} - 4\\vec{b} = 3(1.23, 3.38) - 4(-2.08, -1.2) = (3.69 + 8.32, 10.14 + 4.8) = (12.0, 14.9) = 12.0\\hat{i} + 14.9\\hat{j}$$`}</p>
      <p>{"$$|\\vec{c}| = \\sqrt{(12.0)^2 + (14.9)^2} = 19.2$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{14.9}{12.0}\\right) = 51.2^\\circ$$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
