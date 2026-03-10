import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Escriba los siguientes números en potencias de 10 (notación científica)
      </p>
      <ul>
        <li>1,156</li>
        <li>21,8</li>
        <li>0,0068</li>
        <li>328,65</li>
        <li>0,219</li>
        <li>4,44</li>
      </ul>

      <h3>Solución</h3>
      <p>Respuesta</p>
      <ul>
        <li>
          1,156 = 1,156 x 10<sup>0</sup>
        </li>
        <li>
          21,8 = 2,18 x 10<sup>1</sup>
        </li>
        <li>
          0,0068 = 6,8 x 10<sup>-3</sup>
        </li>
        <li>
          328,65 = 3,2865 x 10<sup>2</sup>
        </li>
        <li>
          0,219 = 2,19 x 10<sup>-1</sup>
        </li>
        <li>
          4,44 = 4,44 x 10<sup>0</sup>
        </li>
      </ul>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
