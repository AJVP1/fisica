import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>
        Un átomo típico mide 1 x 10<sup>-10</sup> metros.
      </p>
      <ul>
        <li>¿Cuánto es eso en pulgadas?</li>
        <li>¿Cuántos átomos hay en una línea de 1 centímetro de longitud?</li>
      </ul>
      <p>Algunos Datos</p>
      <ul>
        <li>1 pulgada = 2,54 cm</li>
        <li>1 pie = 30,48 cm</li>
        <li>1 milla = 1609 metros</li>
      </ul>

      <h3>Solución</h3>
      <p>Para el primer punto, primero pasamos el dato a centímetros:</p>
      <p>{"$$ 1 \\times 10^{-10} m = 1 \\times 10^{-8} cm $$"}</p>
      <p>Ahora lo convertimos a pulgadas:</p>
      <p>
        {
          "$$ 1 \\times 10^{-8} cm \\times \\frac{1 pulgada}{2,54 cm} = 3,94 \\times 10^{-9} pulgadas $$"
        }
      </p>
      <p>
        Para el segundo punto, dividimos la longitud de la línea entre la medida
        de un átomo:
      </p>
      <p>
        {"$$ \\frac{1 cm}{1 \\times 10^{-8} cm} = 1 \\times 10^{8} átomos $$"}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
