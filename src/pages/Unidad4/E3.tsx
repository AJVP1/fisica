import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Suponga que ahora el pintor se encuentra parado a 1,50 metros del
        extremo izquierdo de la tabla, pero que ahora la tabla no descansa sobre
        un andamio sino que está colgada y sostenidas de sus extremos por
        cuerdas verticales. ¿Cuáles serán las tensiones en las cuerdas?
      </p>

      <h3>Solución</h3>
      <p>
        Este es un caso de equilibrio traslacional y rotacional. Vamos a tomar
        como centro de momentos el extremo izquierdo de la tabla.
      </p>
      <p>Datos:</p>
      <ul>
        <li>{"$m_p = 75,0 \\, \\text{kg}$ (masa del pintor)"}</li>
        <li>{"$m_t = 15,0 \\, \\text{kg}$ (masa de la tabla)"}</li>
        <li>
          {
            "$d_t = 2,5 \\, \\text{m}$ (distancia del centro de masa de la tabla al extremo izquierdo)"
          }
        </li>
        <li>
          {
            "$d_p = 1,5 \\, \\text{m}$ (distancia del pintor al extremo izquierdo)"
          }
        </li>
        <li>{"$T_1$ (tensión en la cuerda del extremo izquierdo)"}</li>
        <li>
          {
            "$d_1 = 0 \\, \\text{m}$ (distancia de aplicación de T1 con respecto al centro de momentos)"
          }
        </li>
        <li>{"$T_2$ (tensión en la cuerda del extremo derecho)"}</li>
        <li>
          {
            "$d_2 = 5,0 \\, \\text{m}$ (distancia de aplicación de T2 con respecto al centro de momentos)"
          }
        </li>
      </ul>
      <p>Ecuación de equilibrio de momentos:</p>
      <p>
        {
          "$$ T_1 \\cdot d_1 + T_2 \\cdot d_2 = m_p \\cdot g \\cdot d_p+ m_t \\cdot g \\cdot d_t $$"
        }
      </p>
      <p>Calculando $T_2$:</p>
      <p>
        {
          "$$ T_1 \\cdot 0 \\, \\text{m} + T_2 \\cdot 5,0 \\, \\text{m} = 75,0 \\, \\text{kg} \\cdot g \\cdot 1,5 \\, \\text{m} + 15,0 \\, \\text{kg} \\cdot g \\cdot 2,5 \\, \\text{m} $$"
        }
      </p>
      <p>{"$$ T_2 = 30 \\, \\text{kg} \\cdot g $$"}</p>
      <p>La cantidad de fuerza que tendran que soportar las cuerdas es:</p>
      <p>{"$$ T_1 + T_2 = (m_p + m_t) \\cdot g $$"}</p>
      <p>
        {
          "$$ T_1 = (75,0 \\, \\text{kg} + 15,0 \\, \\text{kg}) \\cdot g - 30 \\, \\text{kg} \\cdot g $$"
        }
      </p>
      <p>{"$$ T_1 = 60 \\, \\text{kg} \\cdot g $$"}</p>
      <p>{"Tomando $g = 9,8 \\, \\text{m/s}^2$:"}</p>
      <p>{"$$ T_1 = 588 \\, \\text{N} $$"}</p>
      <p>{"$$ T_2 = 294 \\, \\text{N} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
