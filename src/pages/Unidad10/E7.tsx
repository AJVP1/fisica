import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>
        Un equipo de dos personas en una bicicleta tándem debe superar una
        fuerza de 66.6N para mantener una rapidez de 9,00 m/s. Calcule la
        potencia requerida por ciclista, suponiendo contribuciones iguales.
        Exprese su respuesta en W y en caballos de potencia (hp).
      </p>

      <h3>Solución</h3>
      <p>
        La potencia requerida se calcula con la fórmula:
        {`$$ P = F \\cdot v $$`}
      </p>
      <p>
        Donde {`$F = 66.6 \\, \\text{N}$`} y {`$v = 9.00 \\, \\text{m/s}$`}.
      </p>
      <p>{`$$ P = 66.6 \\cdot 9.00 = 599.4 \\, \\text{W} $$`}</p>
      <p>Por ciclista:</p>
      <p>{`$$ P_{\\text{ciclista}} = \\frac{599.4}{2} = 299.7 \\, \\text{W} $$`}</p>
      <p>
        Para convertir a caballos de potencia:
        {`$$ 1 \\, \\text{hp} = 746 \\, \\text{W} $$`}
        {`$$ P = \\frac{299.7}{746} = 0.402 \\, \\text{hp} $$`}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
