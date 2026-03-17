import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>Sean los vectores:</p>
      <ul>
        <li>{"$\\vec{a} = (0, -8)$"}</li>
        <li>{"$\\vec{b} = (7.5, 12.99)$"}</li>
        <li>{"$\\vec{c} = (-10.88, -5.07)$"}</li>
      </ul>
      <p>Obtenga los productos escalares de:</p>
      <ul>
        <li>{"$\\vec{a} \\cdot \\vec{b}$"}</li>
        <li>{"$\\vec{b} \\cdot \\vec{c}$"}</li>
        <li>{"$\\vec{a} \\cdot \\vec{c}$"}</li>
      </ul>
      <h3>Solución</h3>
      <p>Para el primer producto</p>
      <p>{`$$\\vec{a} \\cdot \\vec{b} = (0)(7.5) + (-8)(12.99) = -104$$`}</p>
      <p>Para el segundo producto</p>
      <p>{`$$\\vec{b} \\cdot \\vec{c} = (7.5)(-10.88) + (12.99)(-5.07) = -147$$`}</p>
      <p>Para el tercer producto</p>
      <p>{`$$\\vec{a} \\cdot \\vec{c} = (0)(-10.88) + (-8)(-5.07) = 40.6$$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
