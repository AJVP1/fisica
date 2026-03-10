import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>¿Cuántas cifras significativas tienen los siguientes números?</p>
      <ul>
        <li>214</li>
        <li>81,60</li>
        <li>7,03</li>
        <li>0,03</li>
        <li>0.0086</li>
        <li>3236</li>
        <li>870</li>
      </ul>

      <h3>Solución</h3>
      <p>Recordar que los ceros a la izquierda no son significativos.</p>
      <ul>
        <li>214: 3 cifras significativas</li>
        <li>81,60: 4 cifras significativas</li>
        <li>7,03: 3 cifras significativas</li>
        <li>0,03: 1 cifra significativa</li>
        <li>0.0086: 2 cifras significativas</li>
        <li>3236: 4 cifras significativas</li>
        <li>870: 3 cifras significativas</li>
      </ul>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
