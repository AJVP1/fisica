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
        Para este caso vamos a tomar el extremo izquierdo de la tabla como punto
        de referencia.
      </p>
      <p>Datos:</p>
      <ul>
        <li>{"$m_p = 75,0 \\, \\text{kg}$ (masa del pintor)"}</li>
        <li>{"$m_t = 15,0 \\, \\text{kg}$ (masa de la tabla)"}</li>
        <li>
          {
            "$d = 2,5 \\, \\text{m}$ (distancia del centro de masa de la tabla al extremo izquierdo)"
          }
        </li>
        <li>
          {
            "$x = 1,5 \\, \\text{m}$ (distancia del pintor al extremo izquierdo)"
          }
        </li>
        <li>{"$T_1$ (tensión en la cuerda del extremo izquierdo)"}</li>
        <li>{"$T_2$ (tensión en la cuerda del extremo derecho)"}</li>
        <li>{"$L = 5,0 \\, \\text{m}$ (distancia de un extremo a otro)"}</li>
      </ul>
      <p>Ecuación de equilibrio de momentos:</p>
      <p>{"$$ T_1  + T_2 = (m_p + m_t) \\cdot g $$"}</p>
      <p>Calculamos $T_2$:</p>
      <p>{"$$ T_2 (L) = m_p \\cdot g \\cdot x + m_t \\cdot g \\cdot d $$"}</p>
      <p>
        {
          "$$ T_2 (5 \\, \\text{m})= 75,0 \\, \\text{kg} \\cdot g \\cdot 1,5 \\, \\text{m} + 15,0 \\, \\text{kg} \\cdot g \\cdot 2,5 \\, \\text{m} $$"
        }
      </p>
      <p>{"$$ T_2 = 30 \\, \\text{kg} \\cdot g $$"}</p>
      <p>Reemplazando en la ecuación de equilibrio:</p>
      <p>{"$$ T_1 = (m_p + m_t) \\cdot g - T_2 $$"}</p>
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
