import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica1-ej4.png";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Dos carretones, A y B, cuyas masas son 80 kg y 120 kg respectivamente,
        se encuentran uno junto al otro, como muestra la figura, apoyados sobre
        un piso horizontal que no presenta rozamiento. Sobre el carretón A se
        aplica una fuerza horizontal de 300 N.
      </p>
      <ol>
        <li>
          Calcular la magnitud de la fuerza aplicada entre ambos carretones
        </li>
        <li>
          Calcular ahora la magnitud de la fuerza aplicada entre ambos
          carretones si la fuerza horizontal de 300 N se hubiese aplicado de
          derecha a izquierda sobre el carretón B?
        </li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 4"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Recordando:</p>
      <p>$$ \sum F = m \cdot a $$</p>
      <p>
        Para la caja de 80 kg, como las fuerzas son de empuje y no de tiro (son
        hacia el objeto y no desde el objeto), entonces la fuerza reacción va en
        sentido contrario, es decir, $F_2$ es negativa para esta caja:
      </p>
      <p>{"$$ F_1 - F_2 = m \\cdot a $$"}</p>
      <p>Como nos dicen que $ F_1 = 300 $:</p>
      <p>{"$$ 300 - F_2 = 80 \\cdot a $$"}</p>
      <p>Para la caja de 120 kg:</p>
      <p>{"$$ F_2 = 120 \\cdot a $$"}</p>
      <p>Reemplazando</p>
      <p>{"$$ 300 - 120 \\cdot a = 80 \\cdot a $$"}</p>
      <p>{"$$ 300 = 200 \\cdot a $$"}</p>
      <p>{"$$ a = 1,5 \\text{ m/s}^2 $$"}</p>
      <p>
        Reemplazando el valor de la aceleración en la ecuación de la caja de 120
        kg:
      </p>
      <p>{"$$ F_2 = 120 \\cdot 1,5 = 180 \\text{ N} $$"}</p>
      <p>
        Para el segundo item, la fuerza horizontal de 300 N se aplica de derecha
        a izquierda sobre el carretón B, para la caja de 120 kg:
      </p>
      <p>{"$$ - F_1 +  F_2 = m \\cdot a $$"}</p>
      <p>{"$$ -300 + F_2 = 120 \\cdot a $$"}</p>
      <p>Para la caja de 80 kg:</p>
      <p>{"$$ -F_2 = 80 \\cdot a $$"}</p>
      <p>Reemplazando</p>
      <p>{"$$ -300 - 80 \\cdot a = 120 \\cdot a $$"}</p>
      <p>{"$$ a = 1,5 \\text{ m/s}^2 $$"}</p>
      <p>La fuerza aplicada es de:</p>
      <p>{"$$ F_2 = 80 \\cdot 1,5 = 120 \\text{ N} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
