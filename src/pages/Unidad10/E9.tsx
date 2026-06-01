import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3>Enunciado</h3>
      <p>
        Un avión vuela con una velocidad de 720 km/h a una altura de 3 km sobre
        el suelo. Si la masa del avión es de 2500 kg, ¿cuánto vale su energía
        mecánica total?
      </p>

      <h3>Solución</h3>
      <p>
        La energía mecánica total del avión es la suma de su energía cinética y
        su energía potencial gravitatoria.
      </p>
      <p>Primero, convertimos la velocidad a m/s: 720 km/h = 200 m/s.</p>
      <p>
        La energía cinética es:
        {`$$ E_c = \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot 2500 \\cdot (200)^2 = 50000000 \\text{ J} $$`}
      </p>
      <p>
        La energía potencial gravitatoria es:
        {`$$ E_{pg} = m \\cdot g \\cdot h = 2500 \\cdot 9.8 \\cdot 3000 = 73500000 \\text{ J} $$`}
      </p>
      <p>
        Por lo tanto, la energía mecánica total es:
        {`$$ E_m = E_c + E_{pg} = 50000000 + 73500000 = 123500000 \\text{ J} $$`}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio9;
