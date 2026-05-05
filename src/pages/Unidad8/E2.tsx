import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3>Enunciado</h3>
      <p>
        Un hombre sale de comprar del supermercado y se dirige a guardar la
        mercadería comprada en su auto, para llegar al estacionamiento empuja el
        carrito cargado de mercadería con una fuerza resultante de 600 N, como
        consecuencia adquiere una aceleración de 1,50 $m/s^2$ .
      </p>
      <ol>
        <li>Calcular la masa del carrito con la mercadería</li>
        <li>
          Si se descargó la tercera parte de la mercadería del carrito y se
          vuelve a aplicar la misma fuerza resultante ¿Cuál es ahora la
          aceleración del carrito?
        </li>
      </ol>

      <h3>Solución</h3>
      <p>Recordando:</p>
      <p>$$ \sum F = m \cdot a $$</p>
      <p>$$ 600 = m \cdot 1,50 $$</p>
      <p>{"$$ m = \\frac{600}{1,50} = 400 \\text{ kg} $$"}</p>
      <p>Si descarga la dos tercios de la parte de la mercadería:</p>
      <p>
        $$ 600 = 400 \frac{2}
        {3} \cdot a $$
      </p>
      <p>
        {"$$ a = \\frac{600}{400 \\cdot \\frac{2}{3}} = 2,25 \\text{ m/s}^2 $$"}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
