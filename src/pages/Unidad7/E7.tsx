import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>
        Un automóvil tiene ruedas cuyo diámetro es de 60 cm, el mismo circula a
        velocidad constante de 72 km/h.
      </p>
      <ol>
        <li>
          ¿Cuál es el tiempo que tarda una de las ruedas en dar un giro
          completo?
        </li>
        <li>¿Cuál es la velocidad angular de giro?</li>
      </ol>

      <h3>Solución</h3>
      <p>
        El ejercicio nos dice que la velocidad tangencial es de 20 m/s, para
        encontrar la velocidad angular usamos la relación:
      </p>
      <p>{"$$ v = \\omega r \\implies  \\omega = \\frac{v}{r} $$"}</p>
      <p>
        Donde $v$ es la velocidad tangencial y $r$ es el radio de la rueda. El
        radio es la mitad del diámetro, por lo tanto:
      </p>
      <p>
        {
          "$$ r = \\frac{60 \\text{ cm}}{2} = 30 \\text{ cm} = 0,30 \\text{ m} $$"
        }
      </p>
      <p>Sustituyendo en la fórmula, la velocidad angular es:</p>
      <p>
        {
          "$$ \\omega = \\frac{20 \\text{ m}/\\text{s}}{0,30 \\text{ m}} = 66,67 \\text{ rad}/\\text{s} $$"
        }
      </p>
      <p>
        Ahora que tenemos la velocidad angular, podemos encontrar el tiempo que
        tarda una rueda en dar un giro completo:
      </p>
      <p>
        {
          "$$ T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{66,67} = 0,094 \\text{ s} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
