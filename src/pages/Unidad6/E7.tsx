import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>
        El conductor de un automóvil desea rebasar un camión que viaja a una
        rapidez constante de 20,0 m/s. Inicialmente, el automóvil también viaja
        a 20,0 m/s y su paragolpe delantero está 24,0 m atrás del paragolpes
        trasero del camión. El automóvil adquiere una aceleración constante de
        0,600 m/s2 y regresa al carril del camión cuando su paragolpe trasero
        está a 26,0 m adelante del frente del camión. El automóvil tiene una
        longitud de 4,5 m, y el camión tiene una longitud de 21,0 m.
      </p>
      <ol>
        <li>¿Cuánto tiempo necesita el automóvil para rebasar al camión?</li>
        <li>
          ¿Qué distancia recorre el automóvil ese ese tiempo? ¿Qué rapidez final
          tiene el automóvil?
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        Para este ejercicio, debemos buscar cuando la parte de atrás del
        automóvil alcanza el frente del camión. Esto ocurre cuando el automóvil
        ha alcanzado al camión.
      </p>
      <p>
        {
          "$$ x_{auto} = 0 \\text{ m} + 20 \\text{ m/s} \\cdot t + \\frac{1}{2} \\cdot 0.600 \\text{ m/s}^2 \\cdot t^2 $$"
        }
      </p>
      <p>{"$$ x_{camion} = 75,5 \\text{ m} + 20 \\text{ m/s} \\cdot t  $$"}</p>
      <p>Uniendolas:</p>
      <p>
        {"$$ 0 + 20t + \\frac{1}{2} \\cdot 0.600 \\cdot t^2 = 75.5 + 20t $$"}
      </p>
      <p>{"$$ \\frac{1}{2} \\cdot 0.600 \\cdot t^2 = 75.5 $$"}</p>
      <p>{"$$ t = 15,86 \\text{ s} $$"}</p>

      <p>Ahora sacamos la distancia que recorre el automóvil en ese tiempo:</p>
      <p>
        {
          "$$ x_{auto} = 0 + 20 \\cdot 15,86 + \\frac{1}{2} \\cdot 0.600 \\cdot (15,86)^2 $$"
        }
      </p>
      <p>{"$$ x_{auto} = 317,2 + 75,9 = 393,1 \\text{ m} $$"}</p>
      <p>Y la rapidez final del automóvil:</p>
      <p>{"$$ v_{auto} = 20 + 0,600 \\cdot 15,86 $$"}</p>
      <p>{"$$ v_{auto} = 29,54 \\text{ m/s} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
