import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3>Enunciado</h3>
      <p>
        Si un automóvil viaja con una rapidez de 28,0 metros por segundo, ¿está
        superando el límite de velocidad de 55 millas por hora?
      </p>

      <h3>Solución</h3>
      <p>Primero pasamos la velocidad del automóvil a millas por hora:</p>
      <p>
        {
          "$$ 28,0 \\frac{m}{s} \\times \\frac{1 \\text{ km}}{1000 \\text{ m}} \\times \\frac{1 \\text{ milla}}{1,609 \\text{ km}} \\times \\frac{3600 \\text{ s}}{1 \\text{ h}} = 62,7 \\frac{\\text{millas}}{\\text{h}} $$"
        }
      </p>
      <p>
        Como 62,7 mph es mayor que 55 mph, el automóvil está superando el límite
        de velocidad.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio9;
