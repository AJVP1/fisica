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
      <p>
        En este caso hay que calcular el área bajo la curva para calcular el
        trabajo, para el primer punto:
      </p>
      <p>{`$$ W = \\frac{2 \\cdot 2}{2} + 2 N \\cdot 1m = 4 \\, \\text{J} $$`}</p>
      <p>Para el segundo punto:</p>
      <p>{`$$ W = 0 N \\cdot 1m = 0 \\, \\text{J} $$`}</p>
      <p>Para el tercer punto:</p>
      <p>{`$$ W = \\frac{-1 \\cdot 2}{2} = -1 \\, \\text{J} $$`}</p>
      <p>Para el cuarto punto:</p>
      <p>{`$$ W = 4 - 1 = 3 \\, \\text{J} $$`}</p>
      <p>Para el quinto punto:</p>
      <p>{`$$ W = \\frac{-1 \\cdot 5}{2} = -2.5 \\, \\text{J} $$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
