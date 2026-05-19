import ExerciseLayout from "../../components/Ejecicio";
import trabajo from "../../assets/trabajo-ej5.png";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        un auto a radiocontrol de masa 2,00 kg que avanza por una pista recta,
        se le aplica una fuerza F en la dirección del movimiento. La componente
        x de la F varia con la coordenada x del automóvil, como se indica en la
        figura. Calcule el trabajo efectuado por la fuerza F cuando el auto se
        mueve de:
      </p>
      <ol>
        <li>x=0m a x=3m</li>
        <li>x=3m a x=4m</li>
        <li>x=4m a x=7m</li>
        <li>x=0m a x=7m</li>
        <li>x=7m a x=2m</li>
      </ol>
      <img
        src={trabajo}
        alt="Diagrama ejercicio 5"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
