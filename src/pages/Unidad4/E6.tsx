import ExerciseLayout from "../../components/Ejecicio";
import estaticaE6 from "../../assets/estatica-ej6.png";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        Calcular que ángulo máximo puede formar con la vertical cada una de las
        cuatro cuerdas de la figura, para que la tensión que soporta cada una no
        exceda los 500 N. (Use consideraciones de simetria)
      </p>
      <img
        src={estaticaE6}
        alt="Diagrama ejercicio 5"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Por simetría, las 4 cuerdas soportan la misma tensión $T$, y sus
        componentes horizontales se anulan entre sí. Solo las componentes
        verticales sostienen el peso:
      </p>
      <p>{"$$ 4T \\cdot \\cos(\\theta) = mg $$"}</p>
      <p>
        {
          "Donde $mg$ es el peso de la masa, que es igual a $1.000 \\, \\text{N}$. Colocando cada cuerda al máximo de su tensión, $T = 500 \\, \\text{N}$, se tiene:"
        }
      </p>
      <p>
        {
          "$$ 4 \\cdot 500 \\, \\text{N} \\cdot \\cos(\\theta) = 1.000 \\, \\text{N} $$"
        }
      </p>
      <p>{"$$ \\cos(\\theta) = \\frac{1}{2} $$"}</p>
      <p>Aplicando la función arcocoseno:</p>
      <p>{"$$ \\theta = \\arccos\\left(\\frac{1}{2}\\right) = 60^\\circ $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
