import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>
        Una caja de herramientas de 45,0 kg descansa sobre un piso horizontal.
        Usted le aplica una fuerza horizontal cada vez mayor, y observa que la
        caja empieza a moverse cuando la fuerza excede los 313 N. Después, debe
        reducir la fuerza a 208 N para mantener la caja de herramientas a una
        velocidad constante de 25,0 cm/s.
      </p>
      <ol>
        <li>
          ¿Cuáles son los coeficientes de fricción estático y cinético entre la
          caja y el piso?
        </li>
        <li>
          ¿Qué fuerza debe usted ejercer para que la caja de herramientas
          alcance una aceleración de 1,10 m/s2?
        </li>
      </ol>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
