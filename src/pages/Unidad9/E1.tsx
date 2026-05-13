import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3>Enunciado</h3>
      <p>
        Un niño se encuentra jugando con un palo y un disco de hockey en un lago
        congelado de Canadá, cuando el niño golpea al disco con su bastón, al
        cual le proporciona una rapidez inicial de 20,0 m/s. El disco permanece
        en el hielo disminuyendo su velocidad constantemente hasta detenerse a
        una distancia de 120 metros
      </p>
      <ol>
        <li>¿Cuál es la aceleración con que el disco se detiene?</li>
        <li>Determine el coeficiente de fricción entre el disco y el hielo.</li>
      </ol>

      <h3>Solución</h3>
      <p>
        Tenemos el caso de un movimiento rectilíneo uniformemente variado, donde
        el objeto no frena por cuenta propia sino que es frenado por la fricción
        del hielo.
      </p>
      <p>
        Para resolver el primer item, vamos a resolverlo como un item de mruv
        normal
      </p>
      <p>
        {
          "$$ 120 \\text{m} = 0 \\text{m} + 20 \\frac{\\text{m}}{\\text{s}} \\cdot t + \\frac{1}{2} \\cdot a  \\cdot t^2 $$"
        }
      </p>
      <p>
        {
          "$$ 0 \\frac{\\text{m}}{\\text{s}} = 20 \\frac{\\text{m}}{\\text{s}} + a \\cdot t $$"
        }
      </p>
      <p>De la segunda ecuación:</p>
      <p>{"$$ a \\cdot t = -20 \\frac{\\text{m}}{\\text{s}}  $$"}</p>
      <p>Reemplazo en la primera</p>
      <p>
        {
          "$$ 120 \\text{m} = 20 \\frac{\\text{m}}{\\text{s}} \\cdot t + \\frac{1}{2} \\cdot -20 \\frac{\\text{m}}{\\text{s}}  \\cdot t $$"
        }
      </p>
      <p>{"$$ 120 \\text{m} = 10 \\frac{\\text{m}}{\\text{s}} \\cdot t $$"}</p>
      <p>{"$$ t = 12 \\text{s} $$"}</p>
      <p>Ahora podemos encontrar la aceleración:</p>
      <p>{"$$ a \\cdot t = -20 \\frac{\\text{m}}{\\text{s}}  $$"}</p>
      <p>{"$$ a = -1.67 \\frac{\\text{m}}{\\text{s}^2} $$"}</p>
      <p>
        Para el segundo punto, podemos ver que el sistema en movimiento por lo
        tanto
      </p>
      <p>{"$$ \\sum F = m \\cdot a $$"}</p>
      <p>Donde</p>
      <p>{"$$ -\\mu_\\text{d} \\cdot N = m \\cdot a $$"}</p>
      <p>{"$$ -\\mu_\\text{d} \\cdot m \\cdot g = m \\cdot a $$"}</p>
      <p>
        {
          "$$ \\mu_\\text{d} = \\frac{a}{g} = \\frac{1.67 \\frac{\\text{m}}{\\text{s}^2}}{9.8 \\frac{\\text{m}}{\\text{s}^2}} = 0.17 $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
