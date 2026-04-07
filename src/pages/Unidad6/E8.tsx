import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3>Enunciado</h3>
      <p>
        Se lanza un cohete a escala directamente hacia arriba con una velocidad
        inicial de 50,0 m/s, y acelera a 2,00 m/s2 de manera constante hacia
        arriba hasta que los motores se apagan a una altitud de 150 m.
      </p>
      <ol>
        <li>¿Cuál es la altura máxima que alcanza el cohete?</li>
        <li>
          ¿Cuánto tarda el cohete después de despegue vertical en alcanzar su
          altura máxima?
        </li>
        <li>¿Cuánto permanece el cohete en el aire?</li>
      </ol>

      <h3>Solución</h3>
      <p>
        Este ejercicio se debe dividir en dos partes, primero la parte cuando
        tiene los motores encendidos y luego la parte cuando los motores están
        apagados.
      </p>
      <p>Para la primera parte, las ecuaciones de movimiento son:</p>
      <p>
        {
          "$$ \\begin{cases} x = 0 \\text{ m} + 50 \\frac{\\text{m}}{\\text{s}} t + \\frac{1}{2}(2.00 \\frac{\\text{m}}{\\text{s}^2})(t)^2 \\\\ v = 50 \\frac{\\text{m}}{\\text{s}} + (2.00 \\frac{\\text{m}}{\\text{s}^2})t \\end{cases} $$"
        }
      </p>
      <p>
        Sabemos que los motores se apagan cuando llega a una altura de 150 m.
        Calculemos con que velocidad y a que tiempo ocurre esto.
      </p>
      <p>{"$$ 150 = 0 + 50t + \\frac{1}{2} \\cdot 2.00 \\cdot t^2 $$"}</p>
      <p>{"$$ t = 2.84 \\text{ s} $$"}</p>
      <p>{"$$ v = 50 + 2.00 \\cdot 2.84 = 55.7 \\text{ m/s} $$"}</p>
      <p>
        Perfecto, llegó a una altura de 150 m con una velocidad de 55.7 m/s en
        un tiempo de 2.84 s.
      </p>
      <p>
        Ahora con esta velocidad podemos continuar la segunda parte del
        ejercicio, cuando los motores están apagados. Las ecuaciones de
        movimiento son:
      </p>
      <p>
        {
          "$$ \\begin{cases} x = 150 \\text{ m} + 55.7 \\frac{\\text{m}}{\\text{s}} (t - 2.84) - \\frac{1}{2}(9.8 \\frac{\\text{m}}{\\text{s}^2})(t - 2.84)^2 \\\\ v = 55.7 \\frac{\\text{m}}{\\text{s}} - (9.8 \\frac{\\text{m}}{\\text{s}^2}) (t - 2.84) \\end{cases} $$"
        }
      </p>
      <p>
        Sabemos que alcanzará la altura máxima cuando su velocidad sea cero:
      </p>
      <p>{"$$ 0 = 55.7 - 9.8 (t - 2.84) $$"}</p>
      <p>{"$$ t = 8.52 \\text{ s} $$"}</p>
      <p>Reemplazando en la primera ecuación:</p>
      <p>
        {
          "$$ x = 150 + 55.7 (8.52 - 2.84) - \\frac{1}{2} \\cdot 9.8 \\cdot (8.52 - 2.84)^2 $$"
        }
      </p>
      <p>{"$$ x = 308 \\text{ m} $$"}</p>
      <p>
        Por último, para calcular el tiempo total que permanece el cohete en el
        aire, debemos calcular el tiempo que tarda en caer desde la altura
        máxima hasta el suelo:
      </p>
      <p>{"$$ 0 = 308 + 0 \\cdot t - \\frac{1}{2} \\cdot 9.8 \\cdot t^2 $$"}</p>
      <p>{"$$ t = 7,93 \\text{ s} $$"}</p>
      <p>
        El tiempo total que estuvo en el aire es la suma de los tiempos de las
        dos partes:
      </p>
      <p>{"$$ t_{\\text{total}} = 8.52 + 7.93 = 16.45 \\text{ s} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
