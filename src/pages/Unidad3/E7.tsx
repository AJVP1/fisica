import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>Calcule el ángulo entre estos pares de vectores:</p>
      <ul>
        <li>Vector A: (-2, 6) y B: (2, 3)</li>
        <li>Vector A: (3, 5) y B: (10, 6)</li>
        <li>Vector A: (-4, 2) y B: (7, 14)</li>
      </ul>
      <h3>Solución</h3>
      <p>
        Para calcular el ángulo entre dos vectores, usamos la fórmula del
        producto punto:
      </p>
      <p>{"$$ \\cos(\\theta) = \\frac{A \\cdot B}{|A||B|} $$"}</p>

      <h4>Par 1: A = (-2, 6) y B = (2, 3)</h4>
      <p>{"$$ A \\cdot B = (-2)(2) + (6)(3) = -4 + 18 = 14 $$"}</p>
      <p>{"$$ |A| = \\sqrt{(-2)^2 + 6^2} = \\sqrt{4 + 36} = \\sqrt{40} $$"}</p>
      <p>{"$$ |B| = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13} $$"}</p>
      <p>
        {
          "$$ \\cos(\\theta) = \\frac{14}{\\sqrt{40} \\cdot \\sqrt{13}} = \\frac{14}{\\sqrt{520}} \\approx 0{,}6139 $$"
        }
      </p>
      <p>{"$$ \\theta = \\arccos(0{,}6139) \\approx 52{,}1° $$"}</p>

      <h4>Par 2: A = (3, 5) y B = (10, 6)</h4>
      <p>{"$$ A \\cdot B = (3)(10) + (5)(6) = 30 + 30 = 60 $$"}</p>
      <p>{"$$ |A| = \\sqrt{3^2 + 5^2} = \\sqrt{9 + 25} = \\sqrt{34} $$"}</p>
      <p>
        {"$$ |B| = \\sqrt{10^2 + 6^2} = \\sqrt{100 + 36} = \\sqrt{136} $$"}
      </p>
      <p>
        {
          "$$ \\cos(\\theta) = \\frac{60}{\\sqrt{34} \\cdot \\sqrt{136}} = \\frac{60}{\\sqrt{4624}} = \\frac{60}{68} = \\frac{15}{17} \\approx 0{,}8824 $$"
        }
      </p>
      <p>{"$$ \\theta = \\arccos\\left(\\frac{15}{17}\\right) \\approx 28{,}1° $$"}</p>

      <h4>Par 3: A = (-4, 2) y B = (7, 14)</h4>
      <p>{"$$ A \\cdot B = (-4)(7) + (2)(14) = -28 + 28 = 0 $$"}</p>
      <p>
        Como el producto punto es cero, los vectores son{" "}
        <strong>perpendiculares</strong>:
      </p>
      <p>{"$$ \\theta = 90° $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
