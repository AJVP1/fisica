import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio14() {
  return (
    <ExerciseLayout number={14}>
      <h3>Enunciado</h3>
      <p>
        Desde una ventana que está a 15 m de altura, lanzamos hacia arriba una
        pelota de 500 g con una velocidad de 20 m/s. Calcular:
      </p>
      <ol>
        <li>Su energía mecánica respecto del suelo.</li>
        <li>Hasta qué altura subirá.</li>
        <li>A qué velocidad pasará por delante de la ventana cuando baje.</li>
        <li>A qué velocidad llegará al suelo.</li>
      </ol>

      <h3>Solución</h3>
      <p>
        La energía mecánica respecto del suelo es la suma de la energía cinética
        y la energía potencial:
      </p>
      <p>{`$$ E_m = E_c + E_{pg} $$`}</p>
      <p>{`$$ E_m = \\frac{1}{2} \\cdot m \\cdot v^2 + m \\cdot g \\cdot h $$`}</p>
      <p>{`$$ E_m = \\frac{1}{2} \\cdot 0.500 \\cdot (20)^2 + 0.500 \\cdot 9.8 \\cdot 15 $$`}</p>
      <p>{`$$ E_m = 100 + 73.5 = 173.5 \\text{ J} $$`}</p>
      <p>
        Para calcular hasta qué altura subirá, utilizamos la conservación de la
        energía mecánica. La energía mecánica en el punto más alto es igual a la
        energía mecánica en el punto de lanzamiento:
      </p>
      <p>{`$$ E_m = m \\cdot g \\cdot h_{max} $$`}</p>
      <p>{`$$ h_{max} = \\frac{E_m}{m \\cdot g} $$`}</p>
      <p>{`$$ h_{max} = \\frac{173.5}{0.500 \\cdot 9.8} = 35.4 \\text{ m} $$`}</p>
      <p>
        La velocidad al pasar por delante de la ventana va a ser igual a la
        velocidad de lanzamiento:
      </p>
      <p>{`$$ v = 20 \\text{ m/s} $$`}</p>

      <p>
        Para calcular a qué velocidad llegará al suelo, utilizamos nuevamente la
        conservación de la energía mecánica. La energía mecánica en el punto de
        lanzamiento es igual a la energía mecánica en el punto del suelo:
      </p>
      <p>{`$$ E_m = \\frac{1}{2} \\cdot m \\cdot v^2 $$`}</p>
      <p>{`$$ 173.5 = \\frac{1}{2} \\cdot 0.500 \\cdot v^2 $$`}</p>
      <p>{`$$ v = \\sqrt{\\frac{2 \\cdot 173.5}{0.500}} = 26.3 \\text{ m/s} $$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio14;
