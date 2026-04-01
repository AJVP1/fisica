import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        {
          " Un disco cilíndrico de madera que pesa 45,0 N y tiene un diámetro de 30,0 cm flota sobre un cilíndro de aceite cuya densidad es de $0,850 \\frac{g}{cm^3}$."
        }
      </p>
      <p>
        El cilíndro de aceite mide 75,0 cm de alto y tiene un diámetro igual al
        cilíndro de madera.
      </p>
      <ol>
        <li>
          Calcule la presión manométrica en la parte superior de la columna de
          aceite.
        </li>
        <li>
          Ahora suponga que alguien coloca un peso de 83,0 N en la parte
          superior del disco de madera, pero el aceite no se escurre alrededor
          del borde de la madera. ¿Cuál es el cambio de presión i: en la base
          del aceite y ii: a la mitad de la columna de aceite?
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        Para el punto a nos piden calcular la presión justo debajo de la madera,
        por lo que vamos a necesitar conocer la altura del cuerpo que está
        sumergido. Por otro lado, nos dice que la madera está flotanto, lo que
        quiere decir que la fuerza peso es igual al empuje. Igualando estas
        fuerzas vamos a obtener el volumen sumergido.
      </p>
      <p>Datos:</p>
      <ul>
        <li>{"$ P = 45,0 \\, \\text{N} $"}</li>
        <li>{"$ r_c = 0,15 \\, \\text{m} $"}</li>
        <li>{"$ \\rho_{a} = 850 \\, \\text{kg/m}^3 $"}</li>
        <li>{"$ h_a = 0,75 \\, \\text{m} $"}</li>
        <li>{"$ r_a = 0,15 \\, \\text{m} $"}</li>
      </ul>
      <p>Igualo las fuerzas:</p>
      <p>{"$$ P = E $$"}</p>
      <p>{"$$ P = \\rho_{a} \\cdot g \\cdot V_{s} $$"}</p>
      <p>
        {
          "$$ 45,0 \\, \\text{N} = 850 \\, \\text{kg/m}^3 \\cdot 9,8 \\, \\text{m/s}^2 \\cdot V_{s} $$"
        }
      </p>
      <p>{"$$ V_{s} = 5,40 \\times 10^{-4} \\, \\text{m}^3 $$"}</p>
      <p>
        Ahora que sabemos el volumen sumergido, podemos calcular la altura del
        cuerpo sumergido:
      </p>
      <p>{"$$ V_{s} = \\pi r^2 h_s $$"}</p>
      <p>{"$$ 5,40 \\times 10^{-4} \\, \\text{m}^3 = \\pi (0,15)^2 h_s $$"}</p>
      <p>{"$$ h_s = 0,076 \\, \\text{m} $$"}</p>
      <p>
        Ahora que tenemos la altura del cuerpo sumergido, podemos calcular la
        presión justo debajo de la madera:
      </p>
      <p>{"$$ P = \\rho_{a} \\cdot g \\cdot h_s $$"}</p>
      <p>
        {
          "$$ P = 850 \\, \\text{kg/m}^3 \\cdot 9,8 \\, \\text{m/s}^2 \\cdot 0,076 \\, \\text{m} = 637 \\, \\text{Pa} $$"
        }
      </p>

      <p>Igualo las fuerzas:</p>
      <p>
        {
          "$$ 45,0 \\, \\text{N} + 83,0 \\, \\text{N} = 850 \\, \\text{kg/m}^3 \\cdot 9,8 \\, \\text{m/s}^2 \\cdot V_{s} $$"
        }
      </p>
      <p>{"$$ V_{s} = 0,015 \\, \\text{m}^3 $$"}</p>
      <p>
        Ahora que sabemos el volumen sumergido, podemos calcular la altura del
        cuerpo sumergido:
      </p>
      <p>{"$$ V_{s} = \\pi r^2 h_s $$"}</p>
      <p>{"$$ 0,015 \\, \\text{m}^3 = \\pi (0,15)^2 h_s $$"}</p>
      <p>{"$$ h_s = 0,212 \\, \\text{m} $$"}</p>
      <p>
        Ahora que tenemos la altura del cuerpo sumergido, podemos calcular la
        presión justo debajo de la madera:
      </p>
      <p>{"$$ P = \\rho_{a} \\cdot g \\cdot h_s $$"}</p>
      <p>
        {
          "$$ P = 850 \\, \\text{kg/m}^3 \\cdot 9,8 \\, \\text{m/s}^2 \\cdot 0,212 \\, \\text{m} = 1765 \\, \\text{Pa} $$"
        }
      </p>
      <p>Ahora, la presión en la mitad del cilindro será:</p>
      <p>{"$$\\Delta P = \\rho \\cdot g \\cdot \\Delta h$$"}</p>
      <p>
        {
          "$$\\Delta P = 850 \\, \\text{kg/m}^3 \\cdot 9,8 \\, \\text{m/s}^2 \\cdot (0,35 - 0,212) \\, \\text{m} = 1166 \\, \\text{Pa} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
