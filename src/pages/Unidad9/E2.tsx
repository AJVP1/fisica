import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica2-ej2.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        El coeficiente de fricción estática entre la caja de masa de 3,00 kg y
        el plano inclinado de 35,0° es de 0,300. ¿Cuál es la fuerza mínima 𝐹⃗
        perpendicular al plano que debe ser aplicada a la caja para evitar que
        ésta deslice por la pendiente?
      </p>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 2"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Descomponemos la fuerza peso en sus partes</p>
      <p>
        {
          "$$ P_x = m \\cdot g \\cdot \\sin(\\theta) = 3 \\cdot 9.8 \\cdot \\sin(35°) = 16.86 \\text{ N} $$"
        }
      </p>
      <p>
        {
          "$$ P_y = m \\cdot g \\cdot \\cos(\\theta) = 3 \\cdot 9.8 \\cdot \\cos(35°) = 24.08 \\text{ N} $$"
        }
      </p>
      <p>
        Como la caja está en equilibrio, la suma de las fuerzas es igual a cero.
        Haciendo equilibrio vertical:
      </p>
      <p>{"$$ \\sum F_y = 0 $$"}</p>
      <p>{"$$ N = F + P_y $$"}</p>
      <p>Haciendo equilibrio horizontal:</p>
      <p>{"$$ \\sum F_x = 0 $$"}</p>
      <p>{"$$ P_x = F_r =  \\mu_e \\cdot N $$"}</p>
      <p>Reemplazando:</p>
      <p>{"$$ \\mu_e \\cdot N  = P_x $$"}</p>
      <p>{"$$ \\mu_e \\cdot (F + P_y)  = P_x $$"}</p>
      <p>{"$$ F + P_y  = \\frac{P_x}{\\mu_e} $$"}</p>
      <p>{"$$ F = \\frac{P_x}{\\mu_e} - P_y $$"}</p>
      <p>{"$$ F = \\frac{16.86}{0.300} - 24.08 $$"}</p>
      <p>{"$$ F = 56.20 - 24.08 $$"}</p>
      <p>{"$$ F = 32.12 \\text{ N} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
