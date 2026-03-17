import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        {
          "Con los vectores $\\vec{a} = (0, -8)$ y $\\vec{b} = (7.5, 12.99)$, calcular:"
        }
      </p>
      <ul>
        <li>
          {
            "la suma vectorial de $\\vec{a} + \\vec{b}$ y la diferencia $\\vec{a} - \\vec{b}$"
          }
        </li>
        <li>
          {
            "Con base a sus respuestas, determine la magnitud y la dirección de: $-\\vec{a} - \\vec{b}$ y $\\vec{b} - \\vec{a}$"
          }
        </li>
      </ul>

      <h3>Solución</h3>
      <p>Recordar</p>
      <p>
        {
          " Para calcular la magnitud de un vector $\\vec{v} = (v_x, v_y)$, se utiliza la fórmula $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$."
        }
      </p>
      <p>
        {
          " Para calcular la dirección de un vector, se utiliza la función tangente inversa: $\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right)$."
        }
      </p>
      <p>Para el primer vector</p>
      <p>{`$$\\vec{a} + \\vec{b} = (0, -8) + (7.5, 12.99) = (7.5, 4.99)$$`}</p>
      <p>{"$$|\\vec{a+b}| = \\sqrt{(7.5)^2 + (4.99)^2} = 9.01$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{4.99}{7.5}\\right) = 33.64^\\circ$$"
        }
      </p>
      <p>Para el segundo vector</p>
      <p>{`$$\\vec{a} - \\vec{b} = (0, -8) - (7.5, 12.99) = (-7.5, -20.99)$$`}</p>
      <p>{"$$|\\vec{a-b}| = \\sqrt{(-7.5)^2 + (-20.99)^2} = 22.29$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{-20.99}{-7.5}\\right) = 70.34^\\circ$$"
        }
      </p>
      <p>
        {
          "Como está en el tercer cuadrante, se suma 180°: $$\\theta = \\arctan\\left(\\frac{-20.99}{-7.5}\\right) + 180^\\circ = 250.6^\\circ$$"
        }
      </p>
      <p>Para el tercer vector</p>
      <p>{`$$-\\vec{a} - \\vec{b} = (0, 8) - (7.5, 12.99) = (-7.5, -4.99)$$`}</p>
      <p>{"$$|\\vec{-a-b}| = \\sqrt{(-7.5)^2 + (-4.99)^2} = 9.01$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{-4.99}{-7.5}\\right) = 33.64^\\circ$$"
        }
      </p>
      <p>
        {
          "Como está en el tercer cuadrante, se suma 180°: $$\\theta = \\arctan\\left(\\frac{-4.99}{-7.5}\\right) + 180^\\circ = 214^\\circ$$"
        }
      </p>
      <p>Para el cuarto vector</p>
      <p>{`$$\\vec{b} - \\vec{a} = (7.5, 12.99) - (0, -8) = (7.5, 20.99)$$`}</p>
      <p>{"$$|\\vec{b-a}| = \\sqrt{(7.5)^2 + (20.99)^2} = 22.29$$"}</p>
      <p>
        {
          "$$\\theta = \\arctan\\left(\\frac{20.99}{7.5}\\right) = 70.34^\\circ$$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
