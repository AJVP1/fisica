import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio12() {
  return (
    <ExerciseLayout number={12}>
      <h3>Enunciado</h3>
      <p>
        Dejamos caer una pelota de 0,50 kg desde una ventana que está a 30,0 m
        de altura sobre la calle. Calcular:
      </p>
      <ol>
        <li>
          La energía potencial respecto al suelo de la calle en el momento de
          soltarla
        </li>
        <li>La energía cinética en el momento de llegar al suelo.</li>
        <li>La velocidad de llegada al suelo.</li>
      </ol>

      <h3>Solución</h3>
      <p>
        La energía potencial respecto al suelo de la calle en el momento de
        soltarla
      </p>
      <p>
        {`$$ E_{pg} = m \\cdot g \\cdot h = 0.50 \\cdot 9.8 \\cdot 30.0 = 147 \\text{ J} $$`}
      </p>
      <p>
        La energía cinética en el momento de llegar al suelo es igual a la
        energía potencial en el momento de soltarla, ya que la energía mecánica
        se conserva:
        {`$$ E_c = E_{pg} = 147 \\text{ J} $$`}
      </p>
      <p>
        La velocidad de llegada al suelo se puede calcular usando la fórmula de
        la energía cinética:
        {`$$ E_c = \\frac{1}{2} \\cdot m \\cdot v^2 $$`}
      </p>
      <p>
        Despejando la velocidad $v$:
        {`$$ v = \\sqrt{\\frac{2 \\cdot E_c}{m}} $$`}
      </p>
      <p>
        Sustituyendo los valores:
        {`$$ v = \\sqrt{\\frac{2 \\cdot 147}{0.50}} = 24.25 \\text{ m/s} $$`}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio12;
