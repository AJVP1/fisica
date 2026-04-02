import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>
        Una pieza de metal de forma irregular tiene una masa de 90,0 g en el
        aire. Si se suspende de una balanza y la pieza está totalmente sumergida
        en agua, en la escala se lee 75,0 g. ¿Cuál es el volumen y la densidad
        de la pieza de metal?
      </p>
      <p>{"Dato: $ \\rho_{\\text{agua}} = 1000 \\, \\text{kg/m}^3 $"}</p>

      <h3>Solución</h3>
      <p>
        Como me dicen que la pieza está totalmente sumergida y en reposo,
        entonces el peso de la pieza es igual al empuje que recibe. El peso de
        la pieza es:
      </p>
      <p>
        {
          "$$ P = m_{\\text{aire}} g = 0,090 \\cdot 9,8 = 0,882 \\, \\text{N} $$"
        }
      </p>
      <p>
        {
          "$$ P = m_{\\text{agua}} g = 0,075 \\cdot 9,8 = 0,735 \\, \\text{N} $$"
        }
      </p>
      <p>El empuje que recibe la pieza es:</p>
      <p>
        {
          "$$ E = P_{\\text{aire}} - P_{\\text{agua}} = 0,882 - 0,735 = 0,147 \\, \\text{N} $$"
        }
      </p>
      <p>Dada esta fuerza de empuje puedo calcular el volumen sumergido:</p>
      <p>
        {
          "$$ V = \\frac{E}{\\rho_{\\text{agua}} g} = \\frac{0,147}{1000 \\cdot 9,8} = 1,5 \\times 10^{-5} \\, \\text{m}^3 = 15 \\, \\text{cm}^3 $$"
        }
      </p>
      <p>La densidad de la pieza es:</p>
      <p>
        {
          "$$ \\rho_{\\text{pieza}} = \\frac{m_{\\text{aire}}}{V} = \\frac{0,090}{1,5 \\times 10^{-5}} = 6000 \\, \\text{kg/m}^3 = 6 \\, \\text{g/cm}^3 $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
