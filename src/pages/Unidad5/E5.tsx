import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        Un tubo en forma de U abierto por ambos extremos contiene un poco de
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
      <p>
        Para encontrar la presión manométrica donde se unen el agua y el
        mercurio, solo debo buscar la presión manométrica en dicho punto:
      </p>
      <p>
        {
          "$$ P_{man} = \\rho_{\\text{agua}} g h = 1000 \\cdot 9,8 \\cdot 0,15 = 1470 \\, \\text{Pa} = 1,47 \\times 10^3 \\, \\text{Pa} $$"
        }
      </p>
      <p>
        Luego, para encontrar la distancia vertical h, que es donde se encuentra
        la superficie del mercurio, puedo usar la presión ya encontrada en el
        punto de intersección:
      </p>
      <p>{"$$ P_{man} = \\rho_{\\text{mercurio}} g h $$"}</p>
      <p>
        {
          "$$ h = \\frac{P_{man}}{\\rho_{\\text{mercurio}} g} = \\frac{1470}{13600 \\cdot 9,8} = 0,011 \\, \\text{m} $$"
        }
      </p>
      <p>Ahora, la diferencia de alturas entre superficies será:</p>
      <p>
        {
          "$$ \\Delta h = 0,15 - 0,011 = 0,139 \\, \\text{m} = 13,9 \\, \\text{cm} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
