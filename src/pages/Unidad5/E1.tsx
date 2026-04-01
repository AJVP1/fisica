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
    </ExerciseLayout>
  );
}

export default Ejercicio1;
