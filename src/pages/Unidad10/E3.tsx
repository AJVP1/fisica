import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3>Enunciado</h3>
      <p>
        Considere una situación igual a la del problema anterior, pero suponga
        ahora que no hay fuerza de rozamiento sobre el bloque A de 20,0 N que
        descansa sobre la mesa. La polea es ligera y sin fricción.
      </p>
      <ol>
        <li>Calcule la tensión T en la cuerda ligera que une los bloques</li>
        <li>
          Para un desplazamiento en el cual el bloque de 12,0 N desciende 1,20
          m, calcule el trabajo total realizado sobre: el bloque A y el bloque
          B.
        </li>
        <li>
          Para el desplazamiento del inciso b), calcule el trabajo total
          realizado sobre el sistema de dos bloques. ¿Cómo se compara su
          respuesta con el trabajo realizado sobre el bloque de 12,0 N por la
          gravedad?
        </li>
        <li>
          Si el sistema se libera del reposo, ¿cuál es la rapidez del bloque de
          12,0 N cuando ha descendido 1,20 m?
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        En este caso, como no hay rozamiento ahora el sistema va a estar
        acelerado. Esto quiere decir que si aplicamos la segunda ley de Newton:
      </p>
      <p>{`$$ \\sum F = m \\cdot a $$`}</p>
      <p>Para esto, vamos a necesitar saber la masa de cada bloque:</p>
      <p>{`$$ m_A = \\frac{20.0}{9.8} = 2.04 \\, \\text{kg} $$`}</p>
      <p>{`$$ m_B = \\frac{12.0}{9.8} = 1.22 \\, \\text{kg} $$`}</p>
      <p>Aplicando esto al bloque B</p>
      <p>{`$$ P - T = m_B \\cdot a $$`}</p>
      <p>{`$$ 12 - T = 1.22 \\cdot a $$`}</p>
      <p>Aplicando esto al bloque A</p>
      <p>{`$$ T = m_A \\cdot a $$`}</p>
      <p>{`$$ T = 2.04 \\cdot a $$`}</p>
      <p>Despejando la aceleración de cada bloque:</p>
      <p>{`$$ a = 3.68 \\, \\text{m/s}^2 $$`}</p>
      <p>Y finalmente, la tensión en la cuerda es:</p>
      <p>{`$$ T = 7.51 \\, \\text{N} $$`}</p>

      <p>Para el inciso b), la fuerza de cada bloque es:</p>
      <p>{`$$ F_A = m_A \\cdot a = 2.04 \\cdot 3.68 = 7.51 \\, \\text{N} $$`}</p>
      <p>{`$$ F_B = m_B \\cdot a = 1.22 \\cdot 3.68 = 4.49 \\, \\text{N} $$`}</p>
      <p>Y el trabajo realizado por cada bloque es:</p>
      <p>{`$$ W_A = F_A \\cdot d = 7.51 \\cdot 1.20 = 9.01 \\, \\text{J} $$`}</p>
      <p>{`$$ W_B = F_B \\cdot d = 4.49 \\cdot 1.20 = 5.39 \\, \\text{J} $$`}</p>
      <p>Para el inciso c), el trabajo total realizado sobre el sistema es:</p>
      <p>{`$$ W_{total} = W_A + W_B = 9.01 + 5.39 = 14.40 \\, \\text{J} $$`}</p>
      <p>El trabajo realizado sobre el bloque de 12.0 N por la gravedad es:</p>
      <p>{`$$ W_{gravity} = P \\cdot d = 12.0 \\cdot 1.20 = 14.40 \\, \\text{J} $$`}</p>
      <p>
        Por lo tanto, el trabajo total realizado sobre el sistema es igual al
        trabajo realizado por la gravedad sobre el bloque de 12.0 N.
      </p>
      <p>Para el punto d), tenemos un MRUV, por lo tanto:</p>
      <p>{"$$ x = x_0 + \\frac{1}{2} \\cdot a \\cdot t^2 $$"}</p>
      <p>
        Reemplazando podemos encontrar el tiempo que le llevo bajar los 1.20 m.
      </p>
      <p>{`$$ 0 = 1.2 + \\frac{1}{2} \\cdot -3.68 \\cdot t^2 $$`}</p>
      <p>{"$$ t = 0.81 \\, \\text{s} $$"}</p>
      <p>Ahora podemos encontrar la rapidez del bloque</p>
      <p>{`$$ v = a \\cdot t = 3.68 \\cdot 0.81 = 2.98 \\, \\text{m/s} $$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
