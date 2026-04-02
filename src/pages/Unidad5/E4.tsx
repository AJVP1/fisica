import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        {
          "Un cortocircuito deja sin electricidad a un submarino que está a 30,0 m por debajo de la superficie del mar. Para escapar, la tripulación debe empujar hacia fuera una escotilla ubicada en el fondo, la cual tiene un área de 0,750 $m^2$ y pesa 300 N. Si la presión interior es de 1,00 atm, ¿qué fuerza hacia abajo se debe hacer sobre la escotilla para abrirla?"
        }
      </p>
      <p>{"Dato: $ \\rho_{\\text{agua}} = 1030 \\, \\text{kg/m}^3 $"}</p>

      <h3>Solución</h3>
      <p>
        Necesito calcular la presión ejercida sobre la puerta a esa profundidad,
        la diferencia de presión entre el interior y el exterior multiplicado
        por el área de la escotilla me va a dar la fuerza necesaria para
        abrirla. Y además, debo considerar el peso de la escotilla que como la
        escotilla está para abajo, entonces este peso también ayuda para
        abrirla.
      </p>
      <p>Datos:</p>
      <ul>
        <li>{"$ h = 30,0 \\, \\text{m} $"}</li>
        <li>{"$ A = 0,750 \\, \\text{m}^2 $"}</li>
        <li>{"$ P_{int} = 1,00 \\, \\text{atm} = 101300 \\, \\text{Pa} $"}</li>
        <li>{"$ P_{ext} = ? $"}</li>
        <li>{"$ F_{escotilla} = 300 \\, \\text{N} $"}</li>
      </ul>
      <p>Calculo la presión exterior:</p>
      <p>{"$$ P_{ext} = P_0 + \\rho g h $$"}</p>
      <p>
        {
          "$$ P_{ext} = 101300 + 1030 \\cdot 9,8 \\cdot 30 = 404120 \\, \\text{Pa} $$"
        }
      </p>
      <p>La diferencia de presiones es:</p>
      <p>
        {
          "$$ \\Delta P = P_{ext} - P_{int} = 404120 - 101300 = 302820 \\, \\text{Pa} $$"
        }
      </p>
      <p>La fuerza necesaria para abrirla es:</p>
      <p>{"$$ 300 \\text{N} + F = 302820 \\cdot 0,750 $$"}</p>
      <p>
        {
          "$$ F = 227115 - 300 = 226815 \\, \\text{N} = 2,27 \\times 10^5 \\, \\text{N} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
