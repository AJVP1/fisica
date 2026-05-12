import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Un niño se encuentra jugando con un palo y un disco de hockey en un lago
        congelado de Canadá, cuando el niño golpea al disco con su bastón, al
        cual le proporciona una rapidez inicial de 20,0 m/s. El disco permanece
        en el hielo disminuyendo su velocidad constantemente hasta detenerse a
        una distancia de 120 metros
      </p>
      <ol>
        <li>¿Cuál es la aceleración con que el disco se detiene?</li>
        <li>Determine el coeficiente de fricción entre el disco y el hielo.</li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
