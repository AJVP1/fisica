import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Una esfera uniforme de plomo y una de aluminio tienen la misma masa.
        ¿Cuál es la relación entre los radios de la esfera de aluminio y el de
        la esfera de plomo?
      </p>
      <p>{"Dato: $$\\rho_{Pb} = 11340 \\, \\text{kg/m}^3$$"}</p>
      <p>{"$$\\rho_{Al} = 2700 \\, \\text{kg/m}^3$$"}</p>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
