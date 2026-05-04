import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica1-ej4.png";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Dos carretones, A y B, cuyas masas son 80 kg y 120 kg respectivamente,
        se encuentran uno junto al otro, como muestra la figura, apoyados sobre
        un piso horizontal que no presenta rozamiento. Sobre el carretón A se
        aplica una fuerza horizontal de 300 N.
      </p>
      <ol>
        <li>
          Calcular la magnitud de la fuerza aplicada entre ambos carretones
        </li>
        <li>
          Calcular ahora la magnitud de la fuerza aplicada entre ambos
          carretones si la fuerza horizontal de 300 N se hubiese aplicado de
          derecha a izquierda sobre el carretón B?
        </li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 4"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
