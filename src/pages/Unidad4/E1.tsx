import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Un niño de 21,0 kg de peso se sienta en un subibaja a 2,00 metros del
        centro de giro. ¿Qué tan lejos del centro de giro deberá sentarse, del
        otro lado, su padre de 105 kg para que el balancín esté en equilibrio?
      </p>

      <h3>Solución</h3>
      <p>
        Este problema es de un equilibrio rotacional. Para este caso vamos a
        tomar el centro de momentos en el centro del subibaja. La fuerza peso de
        cada persona actúa hacia abajo, y la distancia desde el centro de
        momentos es la distancia desde el centro del subibaja hasta donde se
        sienta cada persona. Para que el subibaja esté en equilibrio, los
        momentos (torques) respecto al centro de giro deben ser iguales.
      </p>
      <p>$$ F_1 \cdot d_1 = F_2 \cdot d_2 $$</p>
      <p>
        Donde:
        <ul>
          <li>{"$F_1 = 21,0 \\, \\text{kg} \\cdot g$"}</li>
          <li>{"$d_1 = 2,00 \\, \\text{m}$"}</li>
          <li>{"$F_2 = 105 \\, \\text{kg} \\cdot g$"}</li>
          <li>{"$d_2$ es la distancia que se busca"}</li>
        </ul>
      </p>
      <p>Despejando $d_2$ de la ecuación:</p>
      <p>{"$$ d_2 = \\frac{F_1 \\cdot d_1}{F_2} $$"}</p>
      <p>Sustituyendo los valores:</p>
      <p>
        {
          "$$ d_2 = \\frac{(21,0 \\, \\text{kg} \\cdot g) \\cdot 2,00 \\, \\text{m}}{105 \\, \\text{kg} \\cdot g} = 0,4 \\, \\text{m} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
