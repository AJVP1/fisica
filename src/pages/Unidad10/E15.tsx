import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio15() {
  return (
    <ExerciseLayout number={15}>
      <h3>Enunciado</h3>
      <p>
        Subimos un carrito de 50 kg por una rampa de 30 m de longitud inclinada
        10°. Si no hay rozamiento, calcula:
      </p>
      <ol>
        <li>
          El trabajo que hay que hacer para subir el carrito hasta lo alto de la
          rampa.
        </li>
        <li>La energía potencial que tendrá el carrito cuando esté arriba</li>
        <li>
          La velocidad a la que llegará a la parte baja de la rampa el carrito
          si lo dejamos caer.
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        En este caso, tenemos que buscar el trabajo, y como no hay fricción, es
        un caso de fuerzas conservativas, la cúal se puede calcular:
      </p>
      <p>{`W = E_p_i - E_p_f`}</p>
      <p>Donde:</p>
      <ul>
        <li>{`E_p_i`}: Energía potencial inicial</li>
        <li>{`E_p_f`}: Energía potencial final</li>
      </ul>
      <p>
        Para la energía potencial inicial, como la altura es cero, la energía
        potencial es cero:
      </p>
      <p>{`E_p_i = 0`}</p>
      <p>
        Para la energía potencial final, como tenemos el largo de la rampa,
        tenemos que calcular la altura:
      </p>
      <p>{`h = 30 \\,\\text{m} \\cdot \\sin(10°) = 5.21 \\,\\text{m}`}</p>
      <p>Por lo tanto, la energía potencial final es:</p>
      <p>{`E_p_f = m \\cdot g \\cdot h = 50 \\,\\text{kg} \\cdot 9.8 \\,\\text{m/s}^2 \\cdot 5.21 \\,\\text{m} = 2552.9 \\,\\text{J}`}</p>
      <p>Por lo tanto, el trabajo realizado es:</p>
      <p>{`W = E_p_i - E_p_f = 0 - 2552.9 \\,\\text{J} = -2552.9 \\,\\text{J}`}</p>
      <p>La energía potencial que tendrá el carrito cuando esté arriba es:</p>
      <p>{`E_p_f = 2552.9 \\,\\text{J}`}</p>
      <p>
        Por último, para calcular la velocidad a la que llegará a la parte baja
        de la rampa, usamos la conservación de la energía:
      </p>
      <p>{`E_p_f = E_k`}</p>
      <p>{`2552.9 \\,\\text{J} = \\frac{1}{2} m v^2`}</p>
      <p>{`v = \\sqrt{\\frac{2 \\cdot 2552.9 \\,\\text{J}}{50 \\,\\text{kg}}} = 10.1 \\,\\text{m/s}`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio15;
