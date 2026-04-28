import ExerciseLayout from "../../components/Ejecicio";
import circularE5 from "../../assets/circular-ej5.png";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        Un bombero que está a una distancia de 50 metros de un edificio en
        llamas dirige un chorro de agua desde el nivel del pavimento con un
        ángulo de 30º respecto de la horizontal. Si la rapidez con que el chorro
        sale de la manguera es 40,0 m/s.
      </p>
      <ol>
        <li>¿a qué altura el chorro golpeará al edificio?</li>
        <li>
          ¿Refleja el dibujo el modo en que el chorro alcanza al edificio?
        </li>
      </ol>
      <img
        src={circularE5}
        alt="Diagrama ejercicio 5"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Descomponemos la velocidad en velocidad en x y en y:</p>
      <p>
        {
          "$$ v_{x0} = v_0 \\cos(30,0°) = 40,0 \\cdot \\cos(30,0°) = 34,6 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>
        {
          "$$ v_{y0} = v_0 \\sin(30,0°) = 40,0 \\cdot \\sin(30,0°) = 20,0 \\text{ m}/\\text{s} $$"
        }
      </p>
      <p>Buscamos cuanto tarda en el llegar el agua al edificio:</p>
      <p>
        {
          "$$ t = \\frac{50 \\text{ m}}{34,6 \\text{ m}/\\text{s}} = 1,44 \\text{ s} $$"
        }
      </p>
      <p>Ahora buscamos a que altura el chorro golpeará al edificio:</p>
      <p>
        {
          "$$ y(1,44) = 20 \\text{ m}/\\text{s} \\cdot 1,44 \\text{ s} - \\frac{1}{2}(9,8 \\text{ m}/\\text{s}^2)(1,44 \\text{ s})^2 $$"
        }
      </p>
      <p>{"$$ y(1,44) = 28,9 - 10,2 = 18,7 \\text{ m} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
