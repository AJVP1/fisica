import ExerciseLayout from "../../components/Ejecicio";
import trabajo from "../../assets/trabajo-ej2.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Dos bloques están unidos por una cuerda muy ligera que pasa por una
        polea sin masa y sin fricción, como muestra la figura. Los bloques se
        están desplazando a rapidez constante, el bloque A de 20 N se mueve 75,0
        cm hacia la derecha y el bloque B de 12,0 N se mueve 75 cm hacia abajo.
        Durante el proceso,
      </p>
      <ol>
        <li>
          ¿Cuánto trabajo efectúan sobre el bloque B: la gravedad y la tensión
          de la cuerda?
        </li>
        <li>
          ¿Cuánto trabajo efectúan sobre el bloque A: la gravedad, la tensión de
          la cuerda, la fricción y la fuerza normal?
        </li>
        <li>Obtenga el trabajo total efectuado sobre cada bloque.</li>
      </ol>
      <img
        src={trabajo}
        alt="Diagrama ejercicio 2"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
