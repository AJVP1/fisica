import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica2-ej2.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        El coeficiente de fricción estática entre la caja de masa de 3,00 kg y
        el plano inclinado de 35,0° es de 0,300. ¿Cuál es la fuerza mínima 𝐹⃗
        perpendicular al plano que debe ser aplicada a la caja para evitar que
        ésta deslice por la pendiente?
      </p>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 2"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
