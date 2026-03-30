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
      <p>
        Este es un ejercicio de fuerzas concurrentes, dado que todas las fuerzas
        actúan sobre un mismo punto.
      </p>
      <p>Según el dibujo tenemos 3 fuerzas actuando sobre la masa:</p>
      <ul>
        <li>
          Tensión de la cuarda 1, $T_1$, que está sobre el centro de masa.
        </li>
        <li>Tensión de la cuarda 2, $T_2$, que está a 45 grados.</li>
        <li>Tensión de la cuarda 3, $T_3$, que está a 30 grados.</li>
      </ul>

      <p>
        Vamos a descomponer las fuerzas en sus componentes horizontal y
        vertical:
      </p>
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

      <p>Es decir, $$T_1 = (14.7, 0) N$$</p>
      <p>
        Para la segunda cuerda, no nos dan la tensión, pero sí el ángulo,
        entonces vamos a escribir el vector de la siguiente manera: $T_2 = (T_2
        \cos(45^\circ), T_2 \sin(45^\circ))$
      </p>
      <p>
        Y para la tercera cuerda, de la misma manera, $T_3 = (T_3
        \cos(30^\circ), T_3 \sin(30^\circ))$
      </p>

      <p>Entonces tenemos los vectores:</p>
      <p>{"$$ T_1 = (0, 14.7) \\, \\text{N} $$"}</p>
      <p>
        {
          "$$ T_2 = (T_2 \\cos(45^\\circ), T_2 \\sin(45^\\circ)) \\, \\text{N} $$"
        }
      </p>
      <p>
        {
          "$$ T_3 = (T_3 \\cos(30^\\circ), T_3 \\sin(30^\\circ)) \\, \\text{N} $$"
        }
      </p>

      <p>
        Ahora colocamos las condiciones de equilibrio con fuerzas concurrentes:
      </p>

      <p>
        {"$$ \\begin{cases} \\sum F_x = 0 \\\\[8pt] \\sum F_y = 0 \\end{cases} $$"}
      </p>

      <p>Reemplazando:</p>

      <p>
        {
          "$$ \\begin{cases} T_3 \\cos(30^\\circ) - T_2 \\cos(45^\\circ) = 0 \\\\[8pt] T_2 \\sin(45^\\circ) - T_3 \\sin(30^\\circ) - 14.7 N = 0 \\end{cases} $$"
        }
      </p>

      <p>De la primera ecuación tenemos:</p>
      <p>{"$$ T_2  = T_3 \\frac{\\sqrt{6}}{2} $$"}</p>

      <p>Reemplazando en la segunda ecuación:</p>
      <p>
        {
          "$$  T_3 \\frac{\\sqrt{6}}{2} \\sin(45^\\circ) - T_3 \\sin(30^\\circ) - 14.7 N = 0 $$"
        }
      </p>
      <p>
        {
          "$$ T_3 (\\frac{\\sqrt{6}}{2} \\sin(45^\\circ) - \\sin(30^\\circ)) = 14.7 N $$"
        }
      </p>
      <p>{"$$ T_3 (0,37) = 14.7 N $$"}</p>
      <p>{"$$ T_3 = 40,2 \\, \\text{N} $$"}</p>

      <p>Reemplazando en la ecuación anterior:</p>
      <p>
        {
          "$$ T_2  = (40,2 \\, \\text{N}) \\frac{\\sqrt{6}}{2} = 49,2 \\, \\text{N} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
