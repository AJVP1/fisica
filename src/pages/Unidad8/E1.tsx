import ExerciseLayout from "../../components/Ejecicio";
import dinamica from "../../assets/dinamica1-ej1.png";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Un hombre arrastra hacia arriba un baúl por la rampa de un camión de
        mudanzas. La rampa está inclinada 20,0° y el hombre tira hacia arriba
        con una fuerza cuya dirección forma un ángulo de 30,0° con la rampa,
        como muestra la figura.
      </p>
      <ol>
        <li>
          ¿Qué fuerza se necesita para que la componente $F_x$ paralela a la
          rampa sea de 60,0 N?
        </li>
        <li>
          ¿Qué magnitud tendrá entonces la componente $F_y$ perpendicular a la
          rampa?
        </li>
      </ol>
      <img
        src={dinamica}
        alt="Diagrama ejercicio 1"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
