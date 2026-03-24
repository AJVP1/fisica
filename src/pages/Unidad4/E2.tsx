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
        El total de la tabla es: $1,5 + 2 + 1,5 = 5,0$ m. Como la misma es
        homogénea, su peso se distribuye uniformemente a lo largo de su longitud
        y su centro de masa se encuentra en el punto medio de la tabla, es
        decir, a $2,5$ m del extremo izquierdo.
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
        <li>{"$pg = 1,5 \\, \\text{m}$ (punto de giro)"}</li>
        <li>{"$x$ (distancia del pintor al extremo izquierdo)"}</li>
      </ul>
      <p>Ecuación de equilibrio de momentos:</p>
      <p>
        {"$$ m_p \\cdot g \\cdot (pg - x) = m_t \\cdot g \\cdot (d - pg) $$"}
      </p>
      <p>Sustituyendo:</p>
      <p>
        {
          "$$ 75,0 \\, \\text{kg} \\cdot g \\cdot (1,5 \\, \\text{m} - x) = 15,0 \\, \\text{kg} \\cdot g \\cdot (2,5 \\, \\text{m} - 1,5 \\, \\text{m}) $$"
        }
      </p>
      <p>{"$$1,5 \\, \\text{m} - x = 0,2 \\, \\text{m}$$"}</p>
      <p>{"$$x = 1,3 \\, \\text{m}$$"}</p>
      <p>
        Por lo tanto, el pintor puede pararse a 1,3 metros del extremo izquierdo
        de la tabla sin que esta se incline.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
