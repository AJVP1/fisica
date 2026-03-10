import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3>Enunciado</h3>
      <p>
        ¿Cuál es el diámetro en centímetros de un caño de una pulgada y media de
        radio?
      </p>

      <h3>Solución</h3>
      <p>Primero pasamos el radio a centímetros:</p>
      <p>
        {
          "$$ 1,5 pulgadas \\times \\frac{2,54 cm}{1 pulgada} = 3,81 \\text{ cm} $$"
        }
      </p>
      <p>El diámetro es el doble del radio:</p>
      <p>{"$$ 2 \\times 3,81 cm = 7,62 cm $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
