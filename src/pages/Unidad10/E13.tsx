import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio13() {
  return (
    <ExerciseLayout number={13}>
      <h3>Enunciado</h3>
      <p>
        En una feria nos subimos a una “Barca Vikinga” que oscila como un
        péndulo. Si en el punto más alto estamos 12,0 m por encima del punto más
        bajo y no hay pérdidas de energía por rozamiento. Calcula:
      </p>
      <ol>
        <li>¿A qué velocidad (en km/h) pasaremos por el punto más bajo?</li>
        <li>
          ¿A qué velocidad pasaremos por el punto que está a 6 m por encima del
          punto más bajo?
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        Para calcular la velocidad en el punto más bajo, utilizamos la
        conservación de la energía mecánica. La energía potencial en el punto
        más alto se convierte en energía cinética en el punto más bajo.
      </p>
      <p>{`$$ E_{pg} = E_c $$`}</p>
      <p>{`$$ m \\cdot g \\cdot h = \\frac{1}{2} \\cdot m \\cdot v^2 $$`}</p>
      <p>{`$$ v = \\sqrt{2 \\cdot g \\cdot h} $$`}</p>
      <p>
        Sustituyendo los valores:
        {`$$ v = \\sqrt{2 \\cdot 9.8 \\cdot 12.0} = 15.34 \\text{ m/s} $$`}
      </p>
      <p>
        Convertimos a km/h:
        {`$$ v = 15.34 \\cdot 3.6 = 55.22 \\text{ km/h} $$`}
      </p>
      <p>
        Para calcular la velocidad en el punto que está a 6 m por encima del
        punto más bajo, utilizamos nuevamente la conservación de la energía
        mecánica. La energía potencial en el punto más alto se convierte en
        energía cinética en el punto que está a 6 m por encima del punto más
        bajo.
      </p>
      <p>{`$$ E_{pg} = E_c $$`}</p>
      <p>{`$$ m \\cdot g \\cdot h = \\frac{1}{2} \\cdot m \\cdot v^2 $$`}</p>
      <p>{`$$ v = \\sqrt{2 \\cdot g \\cdot h} $$`}</p>
      <p>
        Sustituyendo los valores:
        {`$$ v = \\sqrt{2 \\cdot 9.8 \\cdot 6.0} = 10.84 \\text{ m/s} $$`}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio13;
