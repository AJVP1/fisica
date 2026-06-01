import ExerciseLayout from "../../components/Ejecicio";
import energia from "../../assets/energia-ej17.png";

function Ejercicio17() {
  return (
    <ExerciseLayout number={17}>
      <h3>Enunciado</h3>
      <p>
        Una bola de 1,80 kg se libera desde el reposo en un sistema que cuenta
        con un resorte de ideal de constante elástica K. La bola alcanza al
        resorte, comprimiéndolo 9,00 centímetros
      </p>
      <ol>
        <li>
          Calcule la velocidad de la bola en el momento en que toca al resorte
        </li>
        <li>Calcule la constante de fuerza K del resorte</li>
      </ol>
      <img
        src={energia}
        alt="Diagrama ejercicio 17"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Como no hay rozamiento, la energía se conserva, por lo que podemos
        calculcar la velcidad con la que llega al suelo y esta será la misma que
        toca al resorte:
      </p>
      <p>{`E_p = m \\cdot g \\cdot h`}</p>
      <p>{`E_p = 1.80 \\,\\text{kg} \\cdot 9.8 \\,\\text{m/s}^2 \\cdot 0.65 \\,\\text{m} = 11.4 \\,\\text{J}`}</p>
      <p>{`E_k = \\frac{1}{2} m v^2`}</p>
      <p>{`11.4 \\,\\text{J} = \\frac{1}{2} \\cdot 1.80 \\,\\text{kg} \\cdot v^2`}</p>
      <p>{`v = \\sqrt{\\frac{2 \\cdot 11.4 \\,\\text{J}}{1.80 \\,\\text{kg}}} = 3.57 \\,\\text{m/s}`}</p>
      <p>
        Para calcular la constante de fuerza K del resorte, usamos la
        conservación de la energía:
      </p>
      <p>{`E_k = \\frac{1}{2} K x^2`}</p>
      <p>{`11.4 \\,\\text{J} = \\frac{1}{2} K (0.09 \\,\\text{m})^2`}</p>
      <p>{`K = \\frac{2 \\cdot 11.4 \\,\\text{J}}{(0.09 \\,\\text{m})^2} = 2831 \\,\\text{N/m}`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio17;
