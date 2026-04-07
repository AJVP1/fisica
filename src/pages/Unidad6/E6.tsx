import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        Las cucarachas grandes pueden correr a 1,50 m/s en tramos cortos.
        Suponga que enciende la luz en la cocina de su casa y ve una cucaracha
        alejándose en línea recta a 1,50 m/s. Si usted estaba 0,90 m detrás del
        insecto y se acerca hacia este con una rapidez inicial de 0,80 m/s, ¿qué
        aceleración constante mínima necesitará para alcanzarlo cuando este haya
        recorrido 1,20 m, justo antes de escapar bajo un mueble?
      </p>

      <h3>Solución</h3>
      <p>Este es un ejercicio de encuentro, los datos para el hombre son:</p>
      <p>
        {
          "$$ \\begin{cases} x = 0 \\text{ m} + 0.80 \\frac{\\text{m}}{\\text{s}} t + \\frac{1}{2}a(t)^2 \\\\ v = 0.80 \\frac{\\text{m}}{\\text{s}} + at \\end{cases} $$"
        }
      </p>
      <p>Y para la cucaracha:</p>
      <p>
        {
          "$$ \\begin{cases} x = 0,90 \\text{ m} + 1,50 \\frac{\\text{m}}{\\text{s}} t + \\frac{1}{2}a(t)^2 \\\\ v = 1,50 \\frac{\\text{m}}{\\text{s}}\\end{cases} $$"
        }
      </p>
      <p>
        Con la ecuación de la cucaracha podemos encontrar el tiempo que se
        demora en llegar al final, es decir, a 2,10 m del hombre:
      </p>
      <p>{"$$ 2.10 = 0.90 + 1.50 t $$"}</p>
      <p>{"$$ t = \\frac{2.10 - 0.90}{1.50} = 0.80 \\text{ s} $$"}</p>
      <p>
        Con este tiempo, podemos encontrar la aceleración mínima necesaria para
        el hombre:
      </p>
      <p>{"$$ 2.10 = 0.80 \\cdot 0.80 + \\frac{1}{2}a(0.80)^2 $$"}</p>
      <p>{"$$ a = \\frac{2.10 - 0.64}{0,64} = 4,56 \\text{ m/s}^2 $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
