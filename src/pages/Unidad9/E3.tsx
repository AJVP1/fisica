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
    </ExerciseLayout>
  );
}

export default Ejercicio3;
