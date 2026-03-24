import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3>Enunciado</h3>
      <p>
        Tres cuerdas horizontales tiran de una piedra grande enterrada en el
        suelo, produciendo los vectores de fuerza a, b y c.
      </p>
      <ul>
        <li>a: (100 N) a 30°</li>
        <li>b: (80 N) a 120°</li>
        <li>c: (40 N) a 233°</li>
      </ul>
      <p>
        Obtenga la magnitud y la dirección de una cuarta fuerza aplicada a la
        piedra que haga que la suma vectorial de las cuatro fuerzas sea cero.
      </p>
      <h3>Solución</h3>
      <p>
        Para que la suma vectorial sea cero, la cuarta fuerza d debe satisfacer:
      </p>
      <p>
        {
          "$$ \\vec{a} + \\vec{b} + \\vec{c} + \\vec{d} = \\vec{0} \\implies \\vec{d} = -(\\vec{a} + \\vec{b} + \\vec{c}) $$"
        }
      </p>
      <p>Descomponemos cada fuerza en sus componentes x e y:</p>

      <p>Vector a (100 N, 30°)</p>
      <p>
        {
          "$$ a_x = 100\\cos(30°) = 100 \\cdot \\frac{\\sqrt{3}}{2} \\approx 86{,}60 \\text{ N} $$"
        }
      </p>
      <p>
        {"$$ a_y = 100\\sin(30°) = 100 \\cdot 0{,}5 = 50{,}00 \\text{ N} $$"}
      </p>

      <p>Vector b (80 N, 120°)</p>
      <p>
        {"$$ b_x = 80\\cos(120°) = 80 \\cdot (-0{,}5) = -40{,}00 \\text{ N} $$"}
      </p>
      <p>
        {
          "$$ b_y = 80\\sin(120°) = 80 \\cdot \\frac{\\sqrt{3}}{2} \\approx 69{,}28 \\text{ N} $$"
        }
      </p>

      <p>Vector c (40 N, 233°)</p>
      <p>
        {
          "$$ c_x = 40\\cos(233°) \\approx 40 \\cdot (-0{,}6018) \\approx -24{,}07 \\text{ N} $$"
        }
      </p>
      <p>
        {
          "$$ c_y = 40\\sin(233°) \\approx 40 \\cdot (-0{,}7986) \\approx -31{,}95 \\text{ N} $$"
        }
      </p>

      <p>Suma de las tres fuerzas</p>
      <p>
        {"$$ R_x = 86{,}60 + (-40{,}00) + (-24{,}07) = 22{,}53 \\text{ N} $$"}
      </p>
      <p>{"$$ R_y = 50{,}00 + 69{,}28 + (-31{,}95) = 87{,}33 \\text{ N} $$"}</p>

      <p>Cuarta fuerza d</p>
      <p>
        {"$$ d_x = -22{,}53 \\text{ N}, \\quad d_y = -87{,}33 \\text{ N} $$"}
      </p>
      <p>Magnitud:</p>
      <p>
        {
          "$$ |\\vec{d}| = \\sqrt{(-22{,}53)^2 + (-87{,}33)^2} = \\sqrt{507{,}6 + 7626{,}5} = \\sqrt{8134{,}1} \\approx 90{,}2 \\text{ N} $$"
        }
      </p>
      <p>Dirección:</p>
      <p>
        Como ambas componentes son negativas, el vector se encuentra en el
        tercer cuadrante:
      </p>
      <p>
        {
          "$$ \\theta = 180° + \\arctan\\left(\\frac{87{,}33}{22{,}53}\\right) = 180° + \\arctan(3{,}876) \\approx 180° + 75{,}5° = 255{,}5° $$"
        }
      </p>
      <p>
        La cuarta fuerza tiene una magnitud de ≈ 90,2 N y apunta en la dirección
        de ≈ 255,5° (medido desde el eje x positivo en sentido antihorario).
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
