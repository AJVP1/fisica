import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Una esfera uniforme de plomo y una de aluminio tienen la misma masa.
        ¿Cuál es la relación entre los radios de la esfera de aluminio y el de
        la esfera de plomo?
      </p>
      <p>{"Dato: $$\\rho_{Pb} = 11340 \\, \\text{kg/m}^3$$"}</p>
      <p>{"$$\\rho_{Al} = 2700 \\, \\text{kg/m}^3$$"}</p>

      <h3>Solución</h3>
      <p>Datos:</p>
      <ul>
        <li>Recordar que: $\rho = m / V \implies m = \rho V$</li>
        <li>
          Volume de una esfera: $V = \frac{4}
          {3} \pi r^3$
        </li>
        <li>{"$ \\rho_p = 11340 \\, \\text{kg/m}^3 $"}</li>
        <li>{"$ \\rho_a = 2700 \\, \\text{kg/m}^3 $"}</li>
      </ul>
      <p>Si el enunciado nos dice que tienen misma masa entonces:</p>
      <p>{"$$ m_p = m_a  $$"}</p>
      <p>{"$$\\rho_p V_p = \\rho_a V_a $$"}</p>
      <p>
        {
          "$$ 11340 \\frac{kg}{m^3} \\cdot \\frac{4}{3} \\pi r_p^3 = 2700 \\frac{kg}{m^3} \\cdot \\frac{4}{3} \\pi r_a^3 $$"
        }
      </p>
      <p>{"$$ 11340 \\cdot r_p^3 = 2700 \\cdot r_a^3 $$"}</p>
      <p>{"$$ r_a^3 = 4,2 \\cdot r_p^3$$"}</p>
      <p>{"$$ r_a = 1,61 \\cdot r_p$$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
