import ExerciseLayout from "../../components/Ejecicio";
import estaticaE7 from "../../assets/estatica-ej7.png";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3>Enunciado</h3>
      <p>
        Una lámpara cuyo peso es $P$, está sostenida por dos cuerdas como
        muestra la figura. Si la tensión en la cuerda vale $P$, entonces los
        ángulos $\alpha$ y $\beta$ son respectivamente:
      </p>
      <ul>
        <li>45 grados y 45 grados</li>
        <li>37 grados y 53 grados</li>
        <li>30 grados y 60 grados</li>
        <li>53 grados y 37 grados</li>
        <li>30 grados y 30 grados</li>
        <li>60 grados y 30 grados</li>
      </ul>
      <img
        src={estaticaE7}
        alt="Diagrama ejercicio 7"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>Podemos escribir cada vector de las tensiones como:</p>
      <p>{"$$ T_1 = (P \\cos(\\alpha), P \\sin(\\alpha)) $$"}</p>
      <p>{"$$ T_2 = (P \\cos(\\beta), P \\sin(\\beta)) $$"}</p>

      <p>Haciendo el equilibrio horizontal:</p>
      <p>{"$$ P \\cos(\\alpha) - P \\cos(\\beta) = 0 $$"}</p>
      <p>{"$$ P \\cdot \\cos(\\alpha) = P \\cdot \\cos(\\beta) $$"}</p>
      <p>$$ \alpha = \beta $$</p>

      <p>Haciendo el equilibrio vertical:</p>
      <p>{"$$ P \\cdot \\sin(\\alpha) + P \\cdot \\sin(\\beta) - P = 0 $$"}</p>
      <p>{"$$ P \\cdot \\sin(\\alpha) + P \\cdot \\sin(\\beta) = P $$"}</p>
      <p>{"$$ 2P \\cdot \\sin(\\alpha) = P $$"}</p>
      <p>{"$$ \\sin(\\alpha) = \\frac{1}{2} $$"}</p>
      <p>{"$$ \\alpha = 30^\\circ $$"}</p>
      <p>{"$$ \\beta = 30^\\circ $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
