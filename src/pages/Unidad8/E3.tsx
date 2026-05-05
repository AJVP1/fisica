import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica1-ej3.png";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Dos cajas, una de 4,00 kg de masa y la otra con una masa de 6,00 kg
        descansan en la superficie sin fricción de un estanque congelado, unidas
        por una cuerda delgada como muestra la figura.
      </p>
      <p>
        Una persona con zapatos de golf (los cuales le dan tracción sobre el
        hielo) aplica un tirón horizontal F a la caja de 6,00 kg y le imparte
        una aceleración de 2,50 $m/s^2$ .
      </p>
      <ol>
        <li>¿Qué aceleración tiene la caja de 4,00 kg?</li>
        <li>
          Dibujé un diagrama de cuerpo libre para la caja de 4,00 kg y calcule
          la Tensión en la cuerda que une a las dos cajas.
        </li>
        <li>Calcular la magnitud de la fuerza ejercida por la persona</li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 3"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Primero vemos las fuerzas ejercidas en cada caja, recordando</p>
      <p>$$ \sum F = m \cdot a $$</p>
      <p>Para la caja de 6,00 kg:</p>
      <p>{"$$ F - T = 6 \\cdot 2,50 $$"}</p>
      <p>Para la caja de 4,00 kg:</p>
      <p>{"$$ T = 4\\cdot a$$"}</p>
      <p>
        Como la soga es "ideal" entonces la aceleración es la misma para ambas
        cajas.
      </p>
      <p>{"$$ T = 4\\cdot 2,50 = 10,0 \\text{ N} $$"}</p>
      <p>
        Para calcular la fuerza ejercida por la persona, sustituimos el valor de
        la tensión en la primera ecuación:
      </p>
      <p>{"$$ F = 15 + 10 = 25,0 \\text{ N} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
