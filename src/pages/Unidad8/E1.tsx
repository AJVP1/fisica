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
      <p>
        Podemos observar que hay dos fuerzas involucradas en este problema, la
        primera es la fuerza peso que actúa con ángulo de 295,0°, y la segunda
        es la fuerza aplicada por el hombre con ángulo de 30,0° con respecto a
        la rampa. Podemos descomponer estas fuerzas en sus componentes:
      </p>
      <p>$$ F = (F_x, F_y) = (F \cos (\theta), F \sin (\theta)) $$</p>
      <p>$$ P = (P_x, P_y) = (P \cos (\phi), P \sin (\phi)) $$</p>
      <p>
        La primera pregunta nos pregunta por la magnitud de la fuerza aplicada
        por el hombre dado que la componente $F_x$ paralela a la rampa es de
        60,0 N. Entonces sabiendo que:
      </p>
      <p>$$ F_x = F \cos (\theta) $$</p>
      <p>$$ 60,0 = F \cos (30,0°) $$</p>
      <p>{"$$ F = \\frac{60,0}{\\cos (30,0°)} = 69,3 \\text{ N} $$"}</p>
      <p>
        La segunda pregunta nos pregunta por la magnitud de la componente $F_y$
        perpendicular a la rampa. Entonces sabiendo que:
      </p>
      <p>$$ F_y = F \sin (\theta) $$</p>
      <p>$$ F_y = 69,3 \sin (30,0°) $$</p>
      <p>{"$$ F_y = 34,6 \\text{ N} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
