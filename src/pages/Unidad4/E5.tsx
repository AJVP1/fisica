import ExerciseLayout from "../../components/Ejecicio";
import estaticaE5 from "../../assets/estatica-ej5.png";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        Se suspende una masa de dos cuerdas tal como se muestra en la figura.
        ¿Cuáles son las tensiones en las cuerdas?
      </p>
      <img
        src={estaticaE5}
        alt="Diagrama ejercicio 5"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Según el dibujo tenemos 3 fuerzas actuando sobre la masa:</p>
      <ul>
        <li>
          Tensión de la cuarda 1, $T_1$, que está sobre el centro de masa.
        </li>
        <li>Tensión de la cuarda 2, $T_2$, que está a 45 grados.</li>
        <li>Tensión de la cuarda 3, $T_3$, que está a 30 grados.</li>
      </ul>

      <p>
        Empezamos con la tensión de la cuerda 1, ya que dado que está sobre el
        centro de masa, no tiene componente horizontal y su tensión es igual al
        peso de la masa:
      </p>
      <p>{"$$ T_1 = mg $$"}</p>
      <p>
        {
          "$$ T_1 = 1,5 \\, \\text{kg} \\cdot 9,8 \\frac{\\text{m}}{\\text{s}^2} = 14,7 \\, \\text{N} $$"
        }
      </p>

      <p>
        Luego, para encontrar el equilibrio en la dirreción horizontal solo
        necesitamos considerar las componentes horizontales de las tensiones:
      </p>
      <p>{"$$ T_2 \\cdot \\cos(45^\\circ) = T_3 \\cdot \\cos(30^\\circ) $$"}</p>
      <p>
        {
          "$$ T_2 \\cdot (\\frac{\\sqrt{2}}{2}) = T_3 \\cdot \\frac{\\sqrt{3}}{2} $$"
        }
      </p>
      <p>{"$$ T_2 = T_3 \\cdot \\frac{\\sqrt{6}}{2} $$"}</p>

      <p>
        Luego, para encontrar el equilibrio en la dirección vertical solo
        necesitamos considerar las componentes verticales de las tensiones:
      </p>
      <p>
        {
          "$$ T_2 \\cdot \\sin(45^\\circ) = T_1 + T_3 \\cdot \\sin(30^\\circ) $$"
        }
      </p>
      <p>
        {
          "$$ T_2 \\cdot \\frac{\\sqrt{2}}{2} = 14,7 \\, \\text{N} + T_3 \\cdot \\frac{1}{2} $$"
        }
      </p>
      <p>
        {
          "$$ T_2 \\cdot \\frac{\\sqrt{2}}{2} - T_3 \\cdot \\frac{1}{2} = 14,7 \\, \\text{N} $$"
        }
      </p>
      <p>
        {
          "$$ (T_3 \\cdot \\frac{\\sqrt{6}}{2}) \\cdot \\frac{\\sqrt{2}}{2} - T_3 \\cdot \\frac{1}{2} = 14,7 \\, \\text{N} $$"
        }
      </p>
      <p>
        {
          "$$ T_3 \\cdot (\\frac{\\sqrt{3}}{2} - \\frac{1}{2}) = 14,7 \\, \\text{N} $$"
        }
      </p>
      <p>{"$$ T_3 = 40,2 \\, \\text{N} $$"}</p>
      <p>Reemplazando queda</p>
      <p>
        {"$$ T_2 = T_3 \\cdot \\frac{\\sqrt{6}}{2} = 49,2 \\, \\text{N} $$"}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
