import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica1-ej8.png";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3>Enunciado</h3>
      <p>
        En los tres sistemas representados pueden despreciarse tanto los
        rozamientos como las masas de la polea y la soga. La intensidad de la
        fuerza F es igual al peso del cuerpo 2.
      </p>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 8"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />
      <ol>
        <li>
          Comparando los sistemas A y B analice cualitativamente (sin cálculos
          !) cuál se mueve con mayor aceleración.
        </li>
        <li>Ahora repita el análisis comparando los sistemas B y C.</li>
        <li>
          Suponiendo que F es 50 N y que la masa del cuerpo 1 es 20 kg, calcular
          las aceleraciones y verificar las predicciones anteriores.
        </li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
