import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica2-ej4.png";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        La caja A de la figura tiene una masa de 4,00 kg y el bloque B, de 12,0
        kg. El coeficiente de fricción cinética entre el bloque B y la mesa es
        de 0,25.
      </p>
      <ol>
        <li>
          ¿Qué masa tiene el bloque C si el bloque B se mueve de izquierda a
          derecha con una aceleración de 2 m/s2?
        </li>
        <li>
          ¿Qué tensión hay en cada cuerda cuando el bloque B tiene esa
          aceleración?
        </li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 4"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
