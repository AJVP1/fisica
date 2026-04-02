import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3>Enunciado</h3>
      <p>
        Un cubo de 8,50 cm de lado tiene una masa de 0,650 kg. ¿Flotará en agua?
      </p>
      <p>{"Dato: $ \\rho_{\\text{agua}} = 1000 \\, \\text{kg/m}^3 $"}</p>

      <h3>Solución</h3>
      <p>
        Para determinar si el cubo flotará en agua, debo comparar su densidad
        con la densidad del agua.
      </p>
      <p>
        {
          "$$ \\rho_{\\text{cubo}} = \\frac{m}{V} = \\frac{0,650}{(0,085)^3} = 1100 \\, \\text{kg/m}^3 $$"
        }
      </p>
      <p>
        {
          "Dado que $ \\rho_{\\text{cubo}} > \\rho_{\\text{agua}} $, el cubo no flotará en agua."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
