import ExerciseLayout from "../../components/Ejecicio";
import energia from "../../assets/energia-ej17.png";

function Ejercicio17() {
  return (
    <ExerciseLayout number={17}>
      <h3>Enunciado</h3>
      <p>
        Una bola de 1,80 kg se libera desde el reposo en un sistema que cuenta
        con un resorte de ideal de constante elástica K. La bola alcanza al
        resorte, comprimiéndolo 9,00 centímetros
      </p>
      <ol>
        <li>
          Calcule la velocidad de la bola en el momento en que toca al resorte
        </li>
        <li>Calcule la constante de fuerza K del resorte</li>
      </ol>
      <img
        src={energia}
        alt="Diagrama ejercicio 17"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio17;
