import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Usted realiza un trabajo de medio tiempo, y un supervisorle pide traer
        del almacén una varilla cilíndrica de acero de 85,8 cm de longitud y
        2,85 cm de diámetro. ¿Necesita usted un carrito? (Para contestar,
        calcule el peso de la varilla){" "}
      </p>
      <p>{"Dato: $$\\rho = 7850 \\, \\text{kg/m}^3$$"}</p>

      <h3>Solución</h3>
      <p>Nos piden calcular el peso de la varilla, la cual es cilindrica.</p>
      <p>Datos:</p>
      <ul>
        <li>Longitud: 85,8 cm = 0,858 m</li>
        <li>Diámetro: 2,85 cm = 0,0285 m</li>
        <li>Densidad: 7850 kg/m³</li>
        <li>Volumen: $V = \pi r^2 h$</li>
      </ul>
      <p>Reemplazando</p>
      <p>
        {
          "$$V = \\pi (0,01425)^2 (0,858) = 5,48 \\times 10^{-4} \\, \\text{m}^3$$"
        }
      </p>
      <p>
        {
          "$$ P = \\rho \\cdot V \\cdot g = 7850 \\text{ kg/m}^3 \\cdot 5,48 \\times 10^{-4} \\text{ m}^3 \\cdot 9,8 \\text{ m/s}^2 = 42,8 \\, \\text{N} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
