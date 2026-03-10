import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3>Enunciado</h3>
      <p>
        Multiplique tomando en cuenta las cifras significativas al dar el
        resultado 2,079 x 10 <sup>2</sup> por 0,082 x 10 <sup>-1</sup>
      </p>

      <h3>Solución</h3>
      <p>
        Primero multiplicamos los números sin tener en cuenta las potencias de
        10: 2,079 x 0,082 = 0,170478. Luego multiplicamos las potencias de 10:
        10<sup>2</sup> x 10<sup>-1</sup> = 10<sup>1</sup>. Finalmente, juntamos
        ambos resultados: 0,170478 x 10<sup>1</sup>. El resultado final es 1,7 x
        10 <sup>1</sup>, teniendo en cuenta que el número con menos cifras
        significativas tiene dos cifras significativas.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
