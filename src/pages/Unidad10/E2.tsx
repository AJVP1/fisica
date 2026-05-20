import ExerciseLayout from "../../components/Ejecicio";
import trabajo from "../../assets/trabajo-ej2.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Dos bloques están unidos por una cuerda muy ligera que pasa por una
        polea sin masa y sin fricción, como muestra la figura. Los bloques se
        están desplazando a rapidez constante, el bloque A de 20 N se mueve 75,0
        cm hacia la derecha y el bloque B de 12,0 N se mueve 75 cm hacia abajo.
        Durante el proceso,
      </p>
      <ol>
        <li>
          ¿Cuánto trabajo efectúan sobre el bloque B: la gravedad y la tensión
          de la cuerda?
        </li>
        <li>
          ¿Cuánto trabajo efectúan sobre el bloque A: la gravedad, la tensión de
          la cuerda, la fricción y la fuerza normal?
        </li>
        <li>Obtenga el trabajo total efectuado sobre cada bloque.</li>
      </ol>
      <img
        src={trabajo}
        alt="Diagrama ejercicio 2"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        El tema con este ejercicio es que nos dice que los bloques se están
        desplazando a rapidez constante, lo que implica que la aceleración es
        cero. Esto quiere decir que si aplicamos la segunda ley de Newton:
      </p>
      <p>{`$$ \\sum F = m \\cdot a $$`}</p>
      <p>Como la aceleración es cero:</p>
      <p>{`$$ \\sum F = 0 $$`}</p>
      <p>Aplicando esto al bloque B</p>
      <p>{"$$ P - T = 0 \\rightarrow T = P $$"}</p>
      <p>Calculando el trabajo realizado por cada fuerza:</p>
      <p>{`$$ W_{P} = P \\cdot d = 12.0 \\cdot 0.75 = 9.0 \\, \\text{J} $$`}</p>
      <p>{`$$ W_{T} = T \\cdot d = 12.0 \\cdot 0.75 = -9.0 \\, \\text{J} $$`}</p>
      <p>
        Aplicando esto al bloque A, podemos ver que las fuerzas que actúan son
        la tensión de la cuerda y la fuerza de fricción y como el sistema no
        está acelerado entonces estas fuerzas serán iguales y opuestas:
      </p>
      <p>{`$$ W_{T} = T \\cdot d = 20.0 \\cdot 0.75 = -15.0 \\, \\text{J} $$`}</p>
      <p>{`$$ W_{f} = f \\cdot d = 20.0 \\cdot 0.75 = 15.0 \\, \\text{J} $$`}</p>
      <p>Por último, el trabajo total efectuado sobre cada bloque es:</p>
      <p>{`$$ W_{B} = W_{P} + W_{T} = 9.0 - 9.0 = 0 \\, \\text{J} $$`}</p>
      <p>{`$$ W_{A} = W_{T} + W_{f} = -15.0 + 15.0 = 0 \\, \\text{J} $$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
