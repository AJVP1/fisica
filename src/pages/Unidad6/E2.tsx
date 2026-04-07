import ExerciseLayout from "../../components/Ejecicio";
import cinematicaE2 from "../../assets/MRUV-ej2.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Un automóvil de prueba viaja en línea recta a lo largo del eje x. La
        gráfica indica la posición x del automóvil en función del tiempo.
        Obtenga la velocidad instantánea en cada uno de los puntos A a F.
      </p>
      <img
        src={cinematicaE2}
        alt="Diagrama ejercicio 2"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Para los dos primeros puntos, podemos ver que la velocidad se mantiene
        constante, por lo tanto, podemos calcularla como la pendiente de la
        línea en ese intervalo.
      </p>
      <p>
        {
          "$$ v_{\\text{instantánea}} = \\frac{\\Delta x}{\\Delta t} = \\frac{40 \\text{ m} - 20 \\text{ m}}{3,00 \\text{ s} - 0 \\text{ s}} = 6,67 \\text{ m/s} $$"
        }
      </p>
      <p>
        En el punto C, la velocidad es cero, ya que el automóvil está en reposo.
      </p>
      <p>En los punto D y E, la velocidad es constante pero negativa.</p>
      <p>
        {
          "$$ v_{\\text{instantánea}} = \\frac{\\Delta x}{\\Delta t} = \\frac{0 \\text{ m} - 40 \\text{ m}}{6,00 \\text{ s} - 5,00 \\text{ s}} = -40 \\text{ m/s} $$"
        }
      </p>
      <p>
        Por ultimo, en el punto F, podemos observar que la pendiente en igual a
        cero, por lo tanto, la velocidad instantánea es cero.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
