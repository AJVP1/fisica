import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        El vector a mide 2.8 y está a 60 grados sobre el eje x en el primer
        cuadrante. El vector b mide 1.9 y está a 60 grados bajo el eje x en el
        cuarto cuadrante. Utilice los componentes para obtener la magnitud y
        dirección de:
      </p>
      <ul>
        <li>{"$\\vec{a} + \\vec{b}$"}</li>
        <li>{"$\\vec{a} - \\vec{b}$"}</li>
        <li>{"$\\vec{b} - \\vec{a}$"}</li>
      </ul>
      <h3>Solución</h3>
      <p>Primero buscamos los componentes de los vectores</p>
      <p>{`$$\\vec{a} = (2.8 \\cos 60^\\circ, 2.8 \\sin 60^\\circ) = (1.4, 2.42)$$`}</p>
      <p>{`$$\\vec{b} = (1.9 \\cos 300^\\circ, 1.9 \\sin 300^\\circ) = (0.95, -1.64)$$`}</p>
      <p>Luego, para el primer vector</p>
      <p>{`$$\\vec{a} + \\vec{b} = (1.4, 2.42) + (0.95, -1.64) = (2.35, 0.78)$$`}</p>
      <p>{"$$|\\vec{a+b}| = \\sqrt{(2.35)^2 + (0.78)^2} = 2.47$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{0.78}{2.35}\\right) = 18.3^\\circ$$"
        }
      </p>
      <p>Para el segundo vector</p>
      <p>{`$$\\vec{a} - \\vec{b} = (1.4, 2.42) - (0.95, -1.64) = (0.45, 4.06)$$`}</p>
      <p>{"$$|\\vec{a-b}| = \\sqrt{(0.45)^2 + (4.06)^2} = 4.08$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{4.06}{0.45}\\right) = 83.7^\\circ$$"
        }
      </p>
      <p>Para el tercer vector</p>
      <p>{`$$\\vec{b} - \\vec{a} = (0.95, -1.64) - (1.4, 2.42) = (-0.45, -4.06)$$`}</p>
      <p>{"$$|\\vec{b-a}| = \\sqrt{(-0.45)^2 + (-4.06)^2} = 4.08$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{-4.06}{-0.45}\\right) = 83.7^\\circ$$"
        }
      </p>
      <p>
        {
          "Como está en el tercer cuadrante, se suma 180°: $$\\theta = \\arctan\\left(\\frac{-4.06}{-0.45}\\right) + 180^\\circ = 264^\\circ$$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
