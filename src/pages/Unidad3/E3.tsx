import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>Sean los vectores:</p>
      <ul>
        <li>{"$\\vec{a} = (0, -8)$"}</li>
        <li>{"$\\vec{d} = (7.99, -6.02)$"}</li>
      </ul>
      <p>Obtenga</p>
      <ul>
        <li>
          {
            "La magnitud y dirección del producto vectorial de  $\\vec{a} \\times \\vec{d}$"
          }
        </li>
        <li>
          {"Calcule la dirección y magnitud de  $\\vec{d} \\times \\vec{a}$"}
        </li>
      </ul>
      <h3>Solución</h3>
      <p>Para el primer producto vectorial</p>
      <p>{`$$\\vec{a} \\times \\vec{d} = (0, 0, (0)(7.99)) - (-8)(-6.02) = (0, 0, -48.16)$$`}</p>
      <p>{`$$|\\vec{a \\times d}| = \\sqrt{0^2 + 0^2 + 48.16^2} = 48.16$$`}</p>
      <p>Para el segundo producto vectorial</p>
      <p>{`$$\\vec{d} \\times \\vec{a} = (0, 0, (-8)(-6.02) - (0)(7.99)) = (0, 0, 48.16)$$`}</p>
      <p>{`$$|\\vec{a \\times d}| = \\sqrt{0^2 + 0^2 + 48.16^2} = 48.16$$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
