import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Sume 9,2 x 10<sup>3</sup> + 8,3 x 10<sup>4</sup> + 0,008 x 10
        <sup>6</sup>
      </p>

      <h3>Solución</h3>
      <p>
        Primero reescribimos las cantidaddes en forma decimal: 9200 + 83000 +
        8000 = 100200
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
