import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Un CD gira desde el reposo hasta alcanzar una velocidad angular de 31,4
        rad/s en un tiempo de 0,892 s.
      </p>
      <ol>
        <li>
          ¿Cuál es la aceleración angular del CD suponiendo que ésta sea
          uniforme?
        </li>
        <li>
          ¿Qué ángulo ha recorrido el CD en su giro mientras alcanza su
          velocidad máxima?
        </li>
        <li>
          Si el radio del CD es 4,45 cm, encuentre la velocidad tangencial de un
          microbio que se mueve sobre el borde del CD cuando el tiempo es 0,892
          s.
        </li>
        <li>
          ¿Cuál es la magnitud de la aceleración tangencial del microbio en el
          tiempo dado?
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        El ejercicio nos dice que la velocidad angular inicial es cero y la
        velocidad angular final es 31,4 rad/s en un tiempo de 0,892 s. Por lo
        tanto, reemplazando en la ecuación de velocidad angular:
      </p>
      <p>{"$$ \\omega(t) = \\omega_0 + \\gamma (t-t_0) $$"}</p>
      <p>{"$$ 31,4 = 0 + \\gamma (0,892-0) $$"}</p>
      <p>
        {"$$ \\gamma = \\frac{31,4}{0,892} = 35,2 \\text{ rad}/\\text{s}^2 $$"}
      </p>
      <p>
        Para encontrar el ángulo recorrido, reemplazamos en la ecuación de
        posición angular:
      </p>
      <p>
        {
          "$$ \\theta(t) = \\theta_0 + \\omega_0 (t-t_0) + \\frac{1}{2} \\gamma (t-t_0)^2 $$"
        }
      </p>
      <p>
        {
          "$$ \\theta(0,892) = 0 + 0 + \\frac{1}{2} \\cdot 35,2 \\cdot (0,892)^2 $$"
        }
      </p>
      <p>{"$$ \\theta(0,892) = 14,1 \\text{ rad} $$"}</p>
      <p>
        Para encontrar la velocidad tangencial, reemplazamos en la ecuación de
        velocidad tangencial:
      </p>
      <p>{"$$ v(t) = \\omega(t) \\cdot r $$"}</p>
      <p>{"$$ v(0,892) = 31,4 \\cdot 0,0445 = 1,40 \\text{ m}/\\text{s} $$"}</p>
      <p>
        Para encontrar la aceleración tangencial, reemplazamos en la ecuación de
        aceleración tangencial:
      </p>
      <p>{"$$ a(t) = \\gamma \\cdot r $$"}</p>
      <p>
        {"$$ a(0,892) = 35,2 \\cdot 0,0445 = 1,57 \\text{ m}/\\text{s}^2 $$"}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
