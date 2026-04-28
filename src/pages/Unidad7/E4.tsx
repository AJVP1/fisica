import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Un río tiene una velocidad estable de 0,500 m/s. Un estudiante nada en
        contra de la corriente una distancia de 1,00 km y nada de regreso al
        punto de partida.
      </p>
      <ol>
        <li>
          Si el estudiante puede nadar con una velocidad de 1,20 m/s en aguas
          tranquilas, ¿cuánto tiempo le toma el viaje?
        </li>
        <li>
          ¿Cuánto tiempo se requiere en aguas tranquilas para la misma distancia
          de nado?
        </li>
      </ol>

      <h3>Solución</h3>
      <p>Durante el primer trayecto ira a 0,7 m/s, para recorrer 1000 m:</p>
      <p>
        {
          "$$ t_1 = \\frac{1000 \\text{ m}}{0,7 \\text{ m}/\\text{s}} = 1428,6 \\text{ s} $$"
        }
      </p>
      <p>Durante el segundo trayecto ira a 1,7 m/s, para recorrer 1000 m:</p>
      <p>
        {
          "$$ t_2 = \\frac{1000 \\text{ m}}{1,7 \\text{ m}/\\text{s}} = 588,2 \\text{ s} $$"
        }
      </p>
      <p>El tiempo total es:</p>
      <p>
        {
          "$$ t_{\\text{total}} = t_1 + t_2 = 1428,6 + 588,2 = 2016,8 \\text{ s} $$"
        }
      </p>
      <p>En aguas tranquilas, el tiempo sería:</p>
      <p>
        {
          "$$ t_{\\text{tranquila}} = \\frac{2000 \\text{ m}}{1,2 \\text{ m}/\\text{s}} = 1666,7 \\text{ s} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
