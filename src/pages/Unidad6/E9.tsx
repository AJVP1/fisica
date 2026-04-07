import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3>Enunciado</h3>
      <p>
        En la Tierra, una roca de 15,0 kg se suelta desde el reposo y llega al
        suelo en 1,75 s. Cuando se suelta de la misma altura en Encélado, una
        luna de Saturno, llega al suelo en 18,6 s. ¿Cuál es la aceleración
        debida a la gravedad en Encélado?
      </p>

      <h3>Solución</h3>
      <p>
        Para resolver este ejercicio, primero debemos buscar a que altura fue
        lanzada la roca en la Tierra:
      </p>
      <p>{"$$ x = 0 + 0 \\cdot t + \\frac{1}{2} g t^2 $$"}</p>
      <p>{"$$ x = - \\frac{1}{2} \\cdot 9.8 \\cdot (1.75)^2 $$"}</p>
      <p>{"$$ x = - 15.0 \\text{ m} $$"}</p>
      <p>
        Ahora, usando esta altura, podemos calcular la aceleración debida a la
        gravedad en Encélado:
      </p>
      <p>
        {
          "$$ - 15.0 = 0 + 0 \\cdot t + \\frac{1}{2} g_{\\text{Encélado}} (18.6)^2 $$"
        }
      </p>
      <p>{"$$ g_{\\text{Encélado}} = - \\frac{2 \\cdot 15.0}{(18.6)^2} $$"}</p>
      <p>
        {"$$ g_{\\text{Encélado}} = - 0.086 \\frac{\\text{m}}{\\text{s}^2} $$"}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio9;
