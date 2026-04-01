import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        Un cubo de 8,50 cm de lado tiene una masa de 0,650 kg. ¿Flotará en agua?
      </p>
      <p>{"Dato: $ \\rho_{\\text{agua}} = 1000 \\, \\text{kg/m}^3 $"}</p>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
