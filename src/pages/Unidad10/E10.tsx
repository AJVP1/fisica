import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio10() {
  return (
    <ExerciseLayout number={10}>
      <h3>Enunciado</h3>
      <p>
        A qué altura debe de estar elevado un costal de peso 840 kg para que su
        energía potencial sea de 34354 J.
      </p>

      <h3>Solución</h3>
      <p>
        Para encontrar la altura a la que debe estar elevado el costal,
        utilizamos la fórmula de la energía potencial gravitatoria:
        {`$$ E_{pg} = m \\cdot g \\cdot h $$`}
      </p>
      <p>
        Despejando la altura $h$:
        {`$$ h = \\frac{E_{pg}}{m \\cdot g} $$`}
      </p>
      <p>
        Sustituyendo los valores:
        {`$$ h = \\frac{34354}{840 \\cdot 9.8} = 4.17 \\text{ m} $$`}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio10;
