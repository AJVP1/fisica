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
      <p>
        Este problema es parecido que al caso de empuje horizontal, la
        diferencia es que ahora está presente la fuerza peso, entonces para el
        primer bloque:
      </p>
      <p>{"$$ F - T - P = m \\cdot a $$"}</p>
      <p>{"$$ 200 - T - 6 \\cdot 9,8 = 6 \\cdot a $$"}</p>
      <p>Para el segundo bloque:</p>
      <p>{"$$ T - P = m \\cdot a $$"}</p>
      <p>{"$$ T - 5 \\cdot 9,8 = 5 \\cdot a $$"}</p>
      <p>{"$$ T = 5 \\cdot a + 49 $$"}</p>
      <p>Reemplazando en la primera ecuación:</p>
      <p>{"$$ 200 - (5 \\cdot a + 49) - 58,8 = 6 \\cdot a $$"}</p>
      <p>{"$$ 200 - 5 \\cdot a - 49 - 58,8 = 6 \\cdot a $$"}</p>
      <p>{"$$ 92,2 = 11 \\cdot a $$"}</p>
      <p>{"$$ a = 8,38 \\text{ m/s}^2 $$"}</p>
      <p>La tensión en la cuerda es:</p>
      <p>{"$$ T = 5 \\cdot 8,38 + 49 = 90,9 \\text{ N} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
