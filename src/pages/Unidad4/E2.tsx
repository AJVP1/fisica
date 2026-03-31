import ExerciseLayout from "../../components/Ejecicio";
import estaticaE2 from "../../assets/estatica-e2.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Un pintor de 75,0 kg pinta una pared estando de pie sobre una tabla
        larga que descansa apoyada en dos puntos sobre un andamio, tal como lo
        muestra la figura. Si la tabla es homogénea y tiene una masa de 15,0
        kilogramos, ¿cuán cerca del extremo izquierdo de la tabla podrá pararse
        sin que la tabla se incline?
      </p>
      <img
        src={estaticaE2}
        alt="Diagrama ejercicio 2"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Este es un problema de equilibrio rotacional. Para este caso, vamos a
        tomar como centro de momentos el punto donde la tabla apoya en el punto
        izquierdo del andamio. La fuerza peso del pintor y de la tabla actúan
        hacia abajo, y las fuerzas del andamio actúan hacia arriba.
      </p>
      <p>
        En el limite, la fuerza derecha del andamio no soporta más el peso de la
        tabla. Por lo que podemos pensar este ejercicio como un problema de
        subibaja donde el centro es el punto de apoyo izquierdo.
      </p>

      <p>Datos:</p>
      <ul>
        <li>{"$m_p = 75,0 \\, \\text{kg}$ (masa del pintor)"}</li>
        <li>{"$d_p$ (distancia del pintor al extremo izquierdo)"}</li>
        <li>{"$m_t = 15,0 \\, \\text{kg}$ (masa de la tabla)"}</li>
        <li>
          {
            "$d_t = 1 \\, \\text{m}$ (distancia del centro de momentos al centro de masa de la tabla)"
          }
        </li>
        <li>
          {
            "$d_M = 1,5 \\, \\text{m}$ (distancia del centro de momentos al extremo izquierdo)"
          }
        </li>
      </ul>

      <p>Ecuación de equilibrio de momentos:</p>
      <p>{"$$ m_p \\cdot g \\cdot d_p = m_t \\cdot g \\cdot d_t $$"}</p>
      <p>Sustituyendo:</p>
      <p>
        {
          "$$ 75,0 \\, \\text{kg} \\cdot g \\cdot d_p = 15,0 \\, \\text{kg} \\cdot g \\cdot 1 \\, \\text{m} $$"
        }
      </p>
      <p>{"$$d_p = 0,2 \\, \\text{m}$$"}</p>
      <p>
        El pintor entonces puede pararse a 0,2 metros del soporte izquierdo sin
        que la tabla se incline. Es decir, a 1,3 metros del extremo izquierdo.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
