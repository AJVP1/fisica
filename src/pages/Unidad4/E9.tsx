import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3>Enunciado</h3>
      <p>
        Una grúa torre como muestra la figura, debe siempre estar cuidadosamente
        balanceada de manera que no haya un torque (o momento) neto que tienda a
        voltearla. Una grúa está a punto de levantar una carga de $2,80 \times
        10^3$ kg. Las dimensiones de la grúa se muestran en la figura. Ignore la
        masa de la viga horizontal.
      </p>
      <ol>
        <li>
          ¿Dónde debe colocarsse el contrapeso de $9,50 \times 10^3$ kg cuando
          la carga se levanta desde el suelo?
        </li>
        <li>
          Determine la carga máxima que puede ser levantada cuando el contrapeso
          se coloca en el punto extremo de la grúa.
        </li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio9;
