import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        {
          " Un disco cilíndrico de madera que pesa 45,0 N y tiene un diámetro de 30,0 cm flota sobre un cilíndro de aceite cuya densidad es de $0,850 \\frac{g}{cm^3}$."
        }
      </p>
      <p>
        El cilíndro de aceite mide 75,0 cm de alto y tiene un diámetro igual al
        cilíndro de madera.
      </p>
      <ol>
        <li>
          Calcule la presión manométrica en la parte superior de la columna de
          aceite.
        </li>
        <li>
          Ahora suponga que alguin coloca un peso de 83,0 N en la parte superior
          del disco de madera, pero el aceite no se escurre alrededor del borde
          de la madera. ¿Cuál es el cambio de presión i: en la base del aceite y
          ii: a la mitad de la columna de aceite?
        </li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
