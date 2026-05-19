import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Considere una situación igual a la del problema anterior, pero suponga
        ahora que no hay fuerza de rozamiento sobre el bloque A de 20,0 N que
        descansa sobre la mesa. La polea es ligera y sin fricción.
      </p>
      <ol>
        <li>Calcule la tensión T en la cuerda ligera que une los bloques</li>
        <li>
          Para un desplazamiento en el cual el bloque de 12,0 N desciende 1,20
          m, calcule el trabajo total realizado sobre: el bloque A y el bloque
          B.
        </li>
        <li>
          Para el desplazamiento del inciso b), calcule el trabajo total
          realizado sobre el sistema de dos bloques. ¿Cómo se compara su
          respuesta con el trabajo realizado sobre el bloque de 12,0 N por la
          gravedad?
        </li>
        <li>
          Si el sistema se libera del reposo, ¿cuál es la rapidez del bloque de
          12,0 N cuando ha descendido 1,20 m?
        </li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
