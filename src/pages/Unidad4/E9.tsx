import ExerciseLayout from "../../components/Ejecicio";
import estaticaE9 from "../../assets/estatica-ej9.png";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3>Enunciado</h3>
      <p>
        Una grúa torre como muestra la figura, debe siempre estar cuidadosamente
        balanceada de manera que no haya un torque (o momento) neto que tienda a
        voltearla. Una grúa está a punto de levantar una carga de $2,80 \times
        10^3$ kg. Las dimensiones de la grúa se muestran en la figura. Ignore la
        masa de la viga horizontal.
      </p>
      <ol>
        <li>
          ¿Dónde debe colocarse el contrapeso de $9,50 \times 10^3$ kg cuando la
          carga se levanta desde el suelo?
        </li>
        <li>
          Determine la carga máxima que puede ser levantada cuando el contrapeso
          se coloca en el punto extremo de la grúa.
        </li>
      </ol>
      <img
        src={estaticaE9}
        alt="Diagrama ejercicio 9"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Vamos a tomar como centro de momentos el punto donde se juntan las
        vigas.
      </p>
      <p>Datos:</p>
      <ul>
        <li>$m_1 = 9500$ kg</li>
        <li>$m_2 = 2800$ kg</li>
        <li>$d_1$</li>
        <li>$d_2 = 7,70$ m</li>
      </ul>
      <p>Para que este en equilibrio se debe cumplir:</p>
      <p>$$ m_1 \cdot g \cdot d_1 = m_2 \cdot g \cdot d_2 $$</p>
      <p>Reemplazando:</p>
      <p>
        {
          "$$ 9500 \\text{ kg} \\cdot x = 2800 \\text{ kg} \\cdot 7,70 \\text{ m} $$"
        }
      </p>
      <p>{"$$ x = 2,27 \\text{ m} $$"}</p>
      <p>
        Para el segundo inciso, la carga máxima se alcanza cuando el contrapeso
        está en el extremo más alejado del eje de rotación.
      </p>
      <p>
        {
          "$$ 9500 \\text{ kg} \\cdot 3,40 \\text{ m} = x \\cdot 7,70 \\text{ m} $$"
        }
      </p>
      <p>{"$$ x = 4192 \\text{ kg} = 4,2 \\times 10^3 \\text{ kg} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio9;
