import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3>Enunciado</h3>
      <p>
        Un vagón de juguete con masa de 7,00 kg se mueve en línea recta sobre
        una superficie horizontal sin fricción. Tiene una rapidez inicial de
        4,00 m/s y luego es empujado a lo largo de 3m, en la dirección de la
        velocidad inicial, por una fuerza cuya magnitud es de 10,0 N.
      </p>
      <ol>
        <li>
          Use el teorema de trabajo y energía para calcular la rapidez final del
          vagón
        </li>
        <li>
          Calcule la aceleración producida por la fuerza y úsela para calcular
          la rapidez final del vagón con la fórmula utilizada en cinemática.
          Compare este resultado con el del inciso a).
        </li>
      </ol>

      <h3>Solución</h3>
      <p>
        Como no hay fuerzas conservativas, el trabajo neto es igual al cambio en
        la energía cinética:
      </p>
      <p>{`$$ W_{net} = \\Delta KE = \\frac{1}{2} m (v_f^2 - v_i^2) $$`}</p>
      <p>Reemplazando los valores:</p>
      <p>{`$$ 10.0 \\cdot 3.00 = \\frac{1}{2} \\cdot 7.00 (v_f^2 - 4.00^2) $$`}</p>
      <p>{`$$ 30.0 = 3.50 (v_f^2 - 16.0) $$`}</p>
      <p>{`$$ v_f^2 = 24.86 $$`}</p>
      <p>{`$$ v_f = 4.96 \\, \\text{m/s} $$`}</p>
      <p>Para el inciso b), la aceleración es:</p>
      <p>{"$$ \\sum F = m \\cdot a $$"}</p>
      <p>{"$$  F = m \\cdot a $$"}</p>
      <p>{`$$ a = \\frac{F}{m} = \\frac{10.0}{7.00} = 1.43 \\, \\text{m/s}^2 $$`}</p>
      <p>Ahora que tenemos la aceleración, podemos encontrar el tiempo:</p>
      <p>{`$$ t = \\frac{v_f - v_i}{a} = \\frac{4.96 - 4.00}{1.43} = 0.67 \\, \\text{s} $$`}</p>
      <p>Y la rapidez final es:</p>
      <p>{`$$ v_f = v_i + a \\cdot t $$`}</p>
      <p>{`$$ v_f = 4.00 + 1.43 \\cdot 0.67 = 4.96 \\, \\text{m/s} $$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
