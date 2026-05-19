import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Un vagón de juguete con masa de 7,00 kg se mueve en línea recta sobre
        una superficie horizontal sin fricción. Tiene una rapidez inicial de
        4,00 m/s y luego es empujado a lo largo de 3m, en la dirección de la
        velocidad inicial, por una fuerza cuya magnitud es de 10,0 N.
      </p>
      <ol>
        <li>
          Use el teorema de trabajo y energía para calcular la rapidez final del
          vagón
        </li>
        <li>
          Calcule la aceleración producida por la fuerza y úsela para calcular
          la rapidez final del vagón con la fórmula utilizada en cinemática.
          Compare este resultado con el del inciso a).
        </li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
