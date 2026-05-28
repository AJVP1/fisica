import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio11() {
  return (
    <ExerciseLayout number={11}>
      <h3>Enunciado</h3>
      <p>
        Se desea subir una caja de 24 kg por una rampa de 2,5 m de longitud que
        se encuentra inclinada 30° respecto al piso.
      </p>
      <ol>
        <li>
          Si se considera que no hay fuerza de fricción entre la caja y el piso:
          ¿cuál es la mínima velocidad inicial que debe imprimirse a la caja
          para poder llegar al final de la rampa (2,5 m)? ¿Cuánto es el valor
          que posee la energía mecánica inicialmente? ¿Y al llegar al final de
          la rampa?
        </li>
        <li>
          Si ahora desea subir otra caja de 24 kg pero cuyo material posee un
          coeficiente de fricción dinámico con la rampa de 0,29 y la arroja con
          la misma velocidad que calculó en el ítem a), ¿a qué altura se
          detendrá la caja? ¿Cuánta distancia deslizó sobre la rampa? ¿Cuánto
          vale la energía mecánica, la energía cinética y la energía potencial
          en la situación inicial? ¿Y en la situación final?
        </li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio11;
