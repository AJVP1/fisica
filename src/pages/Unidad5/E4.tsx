import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        {
          "Un cortocircuito deja sin electricidad a un submarino que está a 30,0 m por debajo de la superficie del mar. Para escapar, la tripulación debe empujar hacia fuera una escotilla ubicada en el fondo, la cual tiene un área de 0,750 $m^2$ y pesa 300 N. Si la presión interior es de 1,00 atm, ¿qué fuerza hacia abajo se debe hacer sobre la escotilla para abrirla?"
        }
      </p>
      <p>{"Dato: $ \\rho_{\\text{agua}} = 1030 \\, \\text{kg/m}^3 $"}</p>

      <h3>Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
