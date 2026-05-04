import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica1-ej6.png";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        El gráfico muestra la fuerza resultante aplicada a un móvil que,
        partiendo del reposo, se mueve en la dirección x sin rozamiento. ¿Cuál
        de las siguientes afirmaciones es verdadera? Argumente porqué las demás
        son erróneas.
      </p>
      <ol>
        <li>La velocidad es máxima en la posición A</li>
        <li>Desde 0 hasta B la aceleración es constante</li>
        <li>Entre A y B la velocidad disminuye.</li>
        <li>En A la aceleración es máxima</li>
        <li>En A el móvil cambia el sentido de movimiento</li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 6"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
