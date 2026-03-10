import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        Sume tomando en cuenta las cifras significativas al dar el resultado
        1,80 metros + 142,5 centímetros + 5,34 x 10<sup>5</sup> micrómetros
      </p>

      <h3>Solución</h3>
      <p>Primero convertimos todos los valores a la misma unidad (metros):</p>
      <ul>
        <li>1,80 m</li>
        <li>142,5 cm = 1,425 m</li>
        <li>
          5,34 x 10<sup>5</sup> μm = 5,34 x 10<sup>-1</sup> m
        </li>
      </ul>
      <p>Luego sumamos los valores:</p>
      <p>1,80 m + 1,425 m + 0,534 m = 3,759 m</p>
      <p>
        El resultado final es 3,76 m, teniendo en cuenta que el número con menos
        cifras significativas tiene tres cifras significativas.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
