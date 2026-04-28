import ExerciseLayout from "../../components/Ejecicio";
import circularE6 from "../../assets/circular-ej6.png";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        Un esquiador que se desliza por una rampa con una inclinación de 30°
        llega al borde A con cierta velocidad. Luego de 1 segundo de vuelo
        libre, retoma la pista en B a 4,33 m por delante del punto A.
      </p>
      <ol>
        <li>Hallar la velocidad que tiene en el punto A.</li>
        <li>¿Cuál es la altura entre los puntos A y B?</li>
        <li>¿Qué velocidad final tendrá en B?</li>
      </ol>
      <img
        src={circularE6}
        alt="Diagrama ejercicio 6"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Usamos la ecuación de movimiento en el eje x:</p>
      <p>{"$$ x = v_{x0} t $$"}</p>
      <p>
        {
          "Donde $v_{x0}$ es la velocidad inicial en el eje x, que también se escribe como $v_x = V \\cos(330°)$, por lo tanto:"
        }
      </p>
      <p>{"$$ 4,33 = V \\cos(330°) \\cdot 1 $$"}</p>
      <p>{"$$ V = 5,00 \\text{ m}/\\text{s} $$"}</p>
      <p>
        Para encontrar la altura entre los dos puntos, necesitamos la velocidad
        inicial en el eje y:
      </p>
      <p>
        {
          "$$ v_{y0} = V \\sin(330°) = 5,00 \\cdot \\sin(330°) = - 2,50 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>Ahora podemos saber la altura inicial en 1 segundo:</p>
      <p>{"$$ y = h + v_{y0} t - \\frac{1}{2} g t^2 $$"}</p>
      <p>
        {"$$ 0 = h - 2,50 \\cdot 1 - \\frac{1}{2} \\cdot 9,8 \\cdot 1^2 $$"}
      </p>
      <p>{"$$ h = 7,40 \\text{ m} $$"}</p>
      <p>
        La velocidad final en B va a ser igual la longitud del vector velocidad.
        La velocidad en el eje x:
      </p>
      <p>
        {
          "$$ v_x = V \\cos(330°) = 5,00 \\cdot \\cos(330°) = 4,33 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>La velocidad en el eje y será:</p>
      <p>
        {
          "$$ v_y = v_{y0} + g t = -2,50 - 9,8 \\cdot 1 = -12,30 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>La velocidad final en B será:</p>
      <p>
        {
          "$$ v_B = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(4,33)^2 + (-12,30)^2} = 13,00 \\text{ m}/\\text{s} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
