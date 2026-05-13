import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica2-ej4.png";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        La caja A de la figura tiene una masa de 4,00 kg y el bloque B, de 12,0
        kg. El coeficiente de fricción cinética entre el bloque B y la mesa es
        de 0,25.
      </p>
      <ol>
        <li>
          ¿Qué masa tiene el bloque C si el bloque B se mueve de izquierda a
          derecha con una aceleración de 2 m/s2?
        </li>
        <li>
          ¿Qué tensión hay en cada cuerda cuando el bloque B tiene esa
          aceleración?
        </li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 4"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Como el sistema no está en equilibrio, aplicamos la segunda ley de
        Newton a cada bloque. Para el bloque A:
      </p>
      <p>{"$$ T_1 - m_A \\cdot g = m_A \\cdot a $$"}</p>
      <p>{"$$ T_1 - 4 \\cdot 9,8 = 4 \\cdot 2 $$"}</p>
      <p>{"$$ T_1 = 47,2 \\text{ N} $$"}</p>
      <p>Para el bloque B:</p>
      <p>{"$$ T_2 - T_1 - F_e = m_B \\cdot a $$"}</p>
      <p>{"$$ T_2 - T_1 - \\mu_e \\cdot m_B \\cdot g = m_B \\cdot a $$"}</p>
      <p>{"$$ T_2 - T_1 - \\mu_e \\cdot m_B \\cdot g = m_B \\cdot a $$"}</p>
      <p>{"$$ T_2 - 47,2 - 0,25 \\cdot 12 \\cdot 9,8 = 12 \\cdot 2 $$"}</p>
      <p>{"$$ T_2 - 47,2 - 29,4 = 24 $$"}</p>
      <p>{"$$ T_2 = 100,6 \\text{ N} $$"}</p>
      <p>Para el bloque C:</p>
      <p>{"$$ m_C \\cdot g - T_2 = m_C \\cdot a $$"}</p>
      <p>{"$$ m_C \\cdot 9,8 - 100,6 = m_C \\cdot 2 $$"}</p>
      <p>{"$$ m_C \\cdot 9,8 - m_C \\cdot 2 = 100,6 $$"}</p>
      <p>{"$$ m_C \\cdot 7,8 = 100,6 $$"}</p>
      <p>{"$$ m_C = 12,9 \\text{ kg} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
