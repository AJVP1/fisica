import ExerciseLayout from "../../components/Ejecicio";
import hidroestaticaE8 from "../../assets/hidroestatica-ej8.png";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3>Enunciado</h3>
      <p>
        El émbolo (1) de la figura tiene un diámetro de 0.250 pulgadas; el
        émbolo (2) tiene un diámetro de 1,50 pulgadas.
      </p>
      <p>
        En ausencia de fricción, determine la fuerza F para sostener el peso de
        230 kg.
      </p>
      <img
        src={hidroestaticaE8}
        alt="Diagrama ejercicio 8"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        llamaremos a la fuerza en el embole (1) $ F_1 $, a la fuerza en el
        embole (2) $ F_2 $ y la fuerza al final $ F_3 $
      </p>
      <p>Por principio de Pascal, la presión en ambos émbolos es igual:</p>
      <p>{"$$ P_1 = P_2 $$"}</p>
      <p>{"$$ \\frac{F_2}{A_2} = \\frac{F_1}{A_1} $$"}</p>
      <p>{"$$ F_2 = \\frac{A_2}{A_1} F_1 $$"}</p>
      <p>{"$$ F_2 = \\frac{1,50^2}{(0,250)^2} F_1 $$"}</p>
      <p>{"$$ F_2 = 36 F_1 $$"}</p>

      <p>Ahora tomando centro de momentos en el émbolo (2):</p>
      <p>{"$$ F_1 \\cdot 0,25 = F3 \\cdot 1,50 $$"}</p>
      <p>{"$$ F_1 = 6 F_3 $$"}</p>

      <p>
        Ahora con averiguar $ F_2 $ ya podemos calcular $ F_3 $, por lo tanto:
      </p>
      <p>{"$$ F_2 = m \\cdot g = 230 \\cdot 9,8 = 2254 \\, \\text{N} $$"}</p>
      <p>
        {
          "$$ F_2 = 36 F_1 = 36 \\cdot 6 F_3 = 216 F_3 \\implies F_3 = \\frac{2254}{216} = 10,44 \\, \\text{N} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
