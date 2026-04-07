import ExerciseLayout from "../../components/Ejecicio";
import cinematicaE1 from "../../assets/MRUV-ej1.png";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Una pelota se mueve en línea recta (eje x). En la gráfica muestra la
        velocidad de la pelota en función del tiempo.
      </p>
      <ol>
        <li>
          ¿Cuáles son la rapidez media y la velocidad media de la pelota durante
          los primeros 3,00 s?
        </li>
        <li>
          Suponga que la pelota se mueve de tal manera que el segmento de la
          gráfica después de 2.00 s es de - 3,00 m/s en lugar de +3,00 m/s. En
          este caso calcule la rapidez y la velocidad media de la pelota.{" "}
        </li>
      </ol>
      <img
        src={cinematicaE1}
        alt="Diagrama ejercicio 1"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Para el primer punto, podemos obtener la velocidad media a través del
        cálculo del desplazamiento total dividido por el tiempo total.
      </p>
      <p>
        El desplazamiento total lo podemos obtener a partir del gráfico, donde
        se observa que el cuerpo se movió a 2 m/s por 2 s, y luego a 3 m/s por 1
        s. Por lo tanto
      </p>
      <p>
        {
          "$$ x = 2 \\text{ m/s} \\times 2 \\text{ s} + 3 \\text{ m/s} \\times 1 \\text{ s} = 7 \\text{ m} $$"
        }
      </p>
      <p>
        {
          "$$ v_{\\text{media}} = \\frac{\\Delta x}{\\Delta t} = \\frac{7 \\text{ m}}{3,00 \\text{ s}} = 2,33 \\text{ m/s} $$"
        }
      </p>
      <p>
        {
          "$$ r_{\\text{media}} = \\frac{\\Delta x}{\\Delta t} = \\frac{7 \\text{ m}}{3,00 \\text{ s}} = 2,33 \\text{ m/s} $$"
        }
      </p>
      <p>Para el segundo punto, el desplazamiento total es:</p>
      <p>
        {
          "$$ x = 2 \\text{ m/s} \\times 2 \\text{ s} - 3 \\text{ m/s} \\times 1 \\text{ s} = 1 \\text{ m} $$"
        }
      </p>
      <p>
        {
          "$$ v_{\\text{media}} = \\frac{\\Delta x}{\\Delta t} = \\frac{1 \\text{ m}}{3,00 \\text{ s}} = 0,33 \\text{ m/s} $$"
        }
      </p>
      <p>
        {
          "$$ r_{\\text{media}} = \\frac{\\Delta x}{\\Delta t} = \\frac{7 \\text{ m}}{3,00 \\text{ s}} = 2,33 \\text{ m/s} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
