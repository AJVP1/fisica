import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica1-ej5.png";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        Los dos bloques están unidos por una cuerda gruesa uniforme de peso
        despreciable. Se aplica una fuerza de 200 N hacia arriba como se ilustra
        en la figura.
      </p>
      <ol>
        <li>
          Realice en proporción los diagramas de cuerpo libre para el bloque de
          6,00 kg y el de 5,00 kg.
        </li>
        <li>¿Que aceleración tiene el sistema?</li>
        <li>¿Cuánto es la magnitud de la Tensión en la cuerda?</li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 5"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
