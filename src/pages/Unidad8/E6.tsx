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
      <p>
        La correcta es la 4, ya que en la posición A no se sigue aplicando
        fuerza, por lo tanto, se alcanza la máxima aceleración.
      </p>
      <p>
        La primera opción es falsa, ya que se sigue aplicando fuerza lo que hace
        que la aceleración sea positiva y aumente la velocidad.
      </p>
      <p>
        La segunda opción es falsa, ya que la aceleración no es constante desde
        0 hasta B.
      </p>
      <p>
        La tercera opción es falsa, ya que la velocidad no disminuye entre A y
        B.
      </p>
      <p>
        La quinta opción es falsa, ya que el móvil no cambia el sentido de
        movimiento en A.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
