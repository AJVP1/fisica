import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica2-ej3.png";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Una mujer en el aeropuerto mueve su maleta de 20,0 kg a una velocidad
        constante tirando de la correa con una fuerza de 35,0 N con una
        dirección θ determinada como muestra la figura, la fuerza de fricción
        entre la maleta y el piso es de 20 N.
      </p>
      <ol>
        <li>
          ¿Qué ángulo forma la correa con respecto a la horizontal cuando la
          mujer jala de ella?
        </li>
        <li>¿Cuál es la fuerza normal que ejerce la tierra sobre la maleta?</li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 3"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Descomponiendo la fuerza aplicada en sus componentes:</p>
      <p>{"$$ F_x = F \\cdot \\cos(\\theta) $$"}</p>
      <p>{"$$ F_y = F \\cdot \\sin(\\theta) $$"}</p>
      <p>Equilibrio horizontal:</p>
      <p>{"$$ \\sum F_x = 0 $$"}</p>
      <p>{"$$ F_x = F_e $$"}</p>
      <p>{"$$ F \\cdot \\cos(\\theta) = F_e $$"}</p>
      <p>{"$$ 35 \\cdot \\cos(\\theta) = 20 $$"}</p>
      <p>{"$$ \\cos(\\theta) = \\frac{20}{35} $$"}</p>
      <p>{"$$ \\theta = 55.15° $$"}</p>
      <p>Para encontrar el valor de la normal hacemos equilibrio vertical:</p>
      <p>{"$$ \\sum F_y = 0 $$"}</p>
      <p>{"$$ N + F_y = P $$"}</p>
      <p>{"$$ N + F \\cdot \\sin(\\theta) = m \\cdot g $$"}</p>
      <p>{"$$ N = m \\cdot g - F \\cdot \\sin(\\theta) $$"}</p>
      <p>{"$$ N = 20 \\cdot 9.8 - 35 \\cdot \\sin(55.15°) $$"}</p>
      <p>{"$$ N = 196 - 28.57 $$"}</p>
      <p>{"$$ N = 167.43 \\text{ N} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
