import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        ¿Cuántos Joules de energía consume una lamparita eléctrica de 100 W si
        permanece prendida durante 1 hora? ¿Con qué rapidez tendría que correr
        una persona de 70,0 kg para tener esa cantidad de energía como energía
        cinética?
      </p>

      <h3>Solución</h3>
      <p>
        Para calcular la energía consumida por la lamparita, usamos la fórmula:
        {`$$ E = P \\cdot t $$`}
      </p>
      <p>
        {
          "Donde $P = 100 \\, \\text{W}$ y $t = 1 \\, \\text{h} = 3600 \\, \\text{s}$."
        }
      </p>
      <p>{`$$ E = 100 \\cdot 3600 = 360000 \\, \\text{J} $$`}</p>
      <p>
        Para encontrar la rapidez de la persona, usamos la fórmula de la energía
        cinética:
        {`$$ E_c = \\frac{1}{2} m v^2 $$`}
        Despejando {`v`}, obtenemos:
        {`$$ v = \\sqrt{\\frac{2 E_c}{m}} $$`}
        Reemplazando los valores:
        {`$$ v = \\sqrt{\\frac{2 \\cdot 360000}{70.0}} = 103.92 \\, \\text{m/s} $$`}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
