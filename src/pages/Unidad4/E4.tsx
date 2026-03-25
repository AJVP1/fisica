import ExerciseLayout from "../../components/Ejecicio";
import estaticaE4 from "../../assets/estatica-ej4.png";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Despreciando las masas de las varillas horizontales y de las cuerdas y
        sabiendo que la abeja de la izquierda tiene una masa de 0,100 kg. ¿Cuál
        debe ser la masa de cada una de las otras figuras para que el móvil
        permanezca “equilibrado”?
      </p>
      <img
        src={estaticaE4}
        alt="Diagrama ejercicio 4"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Empezando por las abejas de abajo, para que estén en equilibrio se debe
        cumplir que:
      </p>
      <p>
        {
          "$$ 0,100 \\, \\text{kg} \\dot 40,0 \\, \\text{cm} = F_2 \\dot 20,0 \\, \\text{cm} $$"
        }
      </p>
      <p>{"$$ F_2 = 0,200 \\, \\text{kg} $$"}</p>
      <p>
        Luego, para que el nivel de arriba este en equilibrio, se debe cumplir
        que:
      </p>
      <p>
        {
          "$$ (0,200 + 0,100) \\, \\text{kg} \\dot 25,0 \\, \\text{cm} = F_3 \\dot 15,0 \\, \\text{cm} $$"
        }
      </p>
      <p>{"$$ F_3 = 0,500 \\, \\text{kg} $$"}</p>
      <p>
        Por ultimo, para que el último nivel esté en equilibrio, se debe cumplir
        que:
      </p>
      <p>
        {
          "$$ F_4 \\dot 30,0 \\, \\text{cm} = (0,500 + 0,300) \\, \\text{kg} \\dot 15,0 \\, \\text{cm} $$"
        }
      </p>
      <p>{"$$ F_4 = 0,400 \\, \\text{kg} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
