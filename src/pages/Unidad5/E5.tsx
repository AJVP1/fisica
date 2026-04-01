import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        Un tubo en forma de Uabierto por ambos extremos contiene un poco de
        mercurio. Se vierte un poco de agua en el brazo izquierdo del tubo hasta
        que la altura de la columna de agua es 15,0 cm.
      </p>
      <ol>
        <li>¿Cuál es la presión manométrica en la interfase aguamercurio?</li>
        <li>
          Calcule la distancia vertical h entre las superfices de mercurio en el
          brazo derecho del tubo y la superficie del agua en el frazo izquierdo
        </li>
      </ol>
      <p>
        {
          "Dato: $ \\rho_{\\text{agua}} = 1000 \\, \\text{kg/m}^3 $ y $ \\rho_{\\text{mercurio}} = 13600 \\, \\text{kg/m}^3 $"
        }
      </p>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
