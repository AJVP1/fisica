import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Guillermo entrena arrastrando 20 metros una bigornia que está vinculada
        a su cintura por medio de una soga. El ángulo que forma la soga con el
        piso es de 35° y la fuerza que ejerce Guillermo es de 420 N. Si una
        fuerza de fricción de 320 N se opone al movimiento. Calcule el trabajo
        total realizado.
      </p>

      <h3>Solución</h3>
      <p>
        Cómo la fuerza que hace Guillermo tiene un ángulo de 35° con el piso, la
        fuerza que realiza es:
      </p>
      <p>{`$$ F_x = F \\cdot \\cos(35°) = 420 \\cdot \\cos(35°) = 344.1 \\, \\text{N} $$`}</p>
      <p>
        Y como la fuerza de rozamiento va a en la dirección opuesta, entonces la
        fuerza neta es:
      </p>
      <p>{`$$ F_{net} = F_x - f = 344.1 - 320 = 24.1 \\, \\text{N} $$`}</p>
      <p>Finalmente, el trabajo total realizado es:</p>
      <p>{`$$ W = F_{net} \\cdot d = 24.1 \\cdot 20 = 481 \\, \\text{J} $$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
