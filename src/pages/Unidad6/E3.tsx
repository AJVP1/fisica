import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Un antílope que viene corriendo con aceleración constante tarda 7,00 s
        en pasar por dos puntos que se encuentran separados entre sí 70,0 m. Su
        rapidez al pasar por el segundo punto es 15,0 m/s
      </p>
      <ol>
        <li>¿Qué rapidez tenía al pasar por el primer punto?</li>
        <li>¿Qué aceleración lleva?</li>
      </ol>

      <h3>Solución</h3>
      <p>
        Para resolver este problema, utilizaremos las ecuaciones del movimiento
        con aceleración constante. Es decir, vamos a usar las siguientes
        fórmulas:
      </p>
      <p>
        {
          "$$ \\begin{cases} x(t) = x_0 + v_0(t - t_0) + \\frac{1}{2}a(t - t_0)^2 \\\\ v(t) = v_0 + a(t - t_0) \\\\ a(t) = a \\end{cases} $$"
        }
      </p>
      <p>
        Y como todo ocurre en un mismo periodo de tiempo diremos que $t_0 = 0$,
        $ x_0 = 0 $ y quitaremos la tercera ecuación ya que solo nos dice que la
        aceleración es constante.
      </p>
      <p>
        {
          "$$ \\begin{cases} x(t) = v_0(t) + \\frac{1}{2}a(t)^2 \\\\ v(t) = v_0 + a(t) \\end{cases} $$"
        }
      </p>
      <p>
        El enunciado nos da información sobre la posición y velocidad en el
        segundo punto, reemplazando los valores conocidos:
      </p>
      <p>
        {
          "$$ \\begin{cases} 70 \\text{ m} = v_0 (7.00 \\text{ s}) + \\frac{1}{2}a(7.00 \\text{ s})^2 \\\\ 15.0 \\text{ m/s} = v_0 + a(7.00 \\text{ s}) \\end{cases} $$"
        }
      </p>
      <p>
        {
          "De la segunda ecuación obtenemos $ v_0 = 15.0 \\text{ m/s} - a(7.00 \\text{ s}) $."
        }
      </p>
      <p>Reemplazando en la primera ecuación:</p>
      <p>
        {
          "$$ 70 \\text{ m} = (15.0 \\text{ m/s} - a(7.00 \\text{ s}))(7.00 \\text{ s}) + \\frac{1}{2}a(7.00 \\text{ s})^2 $$"
        }
      </p>
      <p>
        {
          "$$ 70 \\text{ m} = 105 \\text{ m} - a49 \\text{ s}^2 + a 24,5 \\text{ s}^2 $$"
        }
      </p>
      <p>{"$$ -35 \\text{ m} =  - a 24,5 \\text{ s}^2 $$"}</p>
      <p>{"$$ a = 1,43 \\text{ m/s}^2 $$"}</p>
      <p>Reemplazando en la ecuación de la velocidad:</p>
      <p>
        {
          "$$ v_0 = 15.0 \\text{ m/s} - (1,43 \\text{ m/s}^2)(7.00 \\text{ s}) = 5 \\text{ m/s} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
