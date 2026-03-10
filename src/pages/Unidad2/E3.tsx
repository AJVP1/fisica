import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Escriba completos los siguientes números con el número correcto de ceros
      </p>
      <ul>
        <li>
          8,69 x 10<sup>4</sup>
        </li>
        <li>
          9,1 x 10<sup>3</sup>
        </li>
        <li>
          8,8 x 10<sup>-1</sup>
        </li>
        <li>
          4,76 x 10<sup>2</sup>
        </li>
        <li>
          3,62 x 10<sup>-5</sup>
        </li>
      </ul>

      <h3>Solución</h3>
      <p>Respuesta</p>
      <ul>
        <li>86900</li>
        <li>9100</li>
        <li>0,88</li>
        <li>476</li>
        <li>0,0000362</li>
      </ul>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
