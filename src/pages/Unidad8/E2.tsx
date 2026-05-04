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
    </ExerciseLayout>
  );
}

export default Ejercicio2;
