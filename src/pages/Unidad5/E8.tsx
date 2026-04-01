import ExerciseLayout from "../../components/Ejecicio";
import hidroestaticaE8 from "../../assets/hidroestatica-ej8.png";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3>Enunciado</h3>
      <p>
        Una pieza de metal de forma irregular tiene una masa de 90,0 g en el
        aire. Si se suspende de una balanza y la pieza está totalmente sumergida
        en agua, en la escala se lee 75,0 g. ¿Cuál es el volumen y la densidad
        de la pieza de metal?
      </p>
      <p>
        En ausencia de fricción, determine la fuerza F para sostener el peso de
        230 kg.
      </p>
      <img
        src={hidroestaticaE8}
        alt="Diagrama ejercicio 8"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
