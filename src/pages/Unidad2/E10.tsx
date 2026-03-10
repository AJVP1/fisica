import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio10() {
  return (
    <ExerciseLayout number={10}>
      <h3>Enunciado</h3>
      <p>
        Para calcular el volumen de un cilindro de radio $r$ y altura $h$ un
        compañero le sugiere aplicar la siguiente ecuación: $Vol = \pi r^3 h$.
        Explique por qué esta ecuación es incorrecta.
      </p>

      <h3>Solución</h3>
      <p>
        Analizando la ecuación propuesta se nota que la dimensión del resultado
        será (L) <sup>4</sup> y el volumen tiene dimensión de (L) <sup>3</sup>.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio10;
