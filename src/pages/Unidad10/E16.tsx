import ExerciseLayout from "../../components/Ejecicio";
import energia from "../../assets/energia-ej16.png";

function Ejercicio16() {
  return (
    <ExerciseLayout number={16}>
      <h3>Enunciado</h3>
      <p>
        El esquema representa a Santiago con su patineta quien, partiendo del
        reposo, se desliza desde una altura de 5,0 metros atravesando luego un
        piso de 3,0 metros de longitud y coeficiente de rozamiento dinámico =
        0,30 para luego subir por el lado derecho (masa de Santiago = 70 kg)
      </p>
      <ol>
        <li>¿qué altura máxima podrá alcanzar?</li>
        <li>
          ¿Con qué velocidad inicial debería iniciar el descenso desde la
          izquierda para poder subir completamente por el lado derecho?
        </li>
      </ol>
      <img
        src={energia}
        alt="Diagrama ejercicio 16"
        className="block mx-auto my-4 w-full sm:w-3/4 md:w-1/2"
      />

      <h3>Solución</h3>
      <p>
        Empecemos calculando la energia que tiene Santiago en la parte alta:
      </p>
      <p>{`$$ E_p = m \\cdot g \\cdot h = 70 \\,\\text{kg} \\cdot 9.8 \\,\\text{m/s}^2 \\cdot 5.0 \\,\\text{m} = 3430 \\,\\text{J} $$`}</p>
      <p>
        Al llegar al suelo va a tener la misma energía, por un periodo de 3
        metros, va a estar sometido a la fuerza de rozamiento, la cual es igual
        a:
      </p>
      <p>{`$$ F_r = \\mu_d \\cdot m \\cdot g = 0.30 \\cdot 70 \\,\\text{kg} \\cdot 9.8 \\,\\text{m/s}^2 = 205.8 \\,\\text{N} $$`}</p>
      <p>Por lo tanto, el trabajo realizado por la fuerza de rozamiento es:</p>
      <p>{`$$ W_r = F_r \\cdot d = 205.8 \\,\\text{N} \\cdot 3.0 \\,\\text{m} = 617.4 \\,\\text{J} $$`}</p>
      <p>
        Por lo tanto, la energía cinética que tiene Santiago al llegar al lado
        derecho es:
      </p>
      <p>{`$$E_k' = E_k - W_r = 3430 \\,\\text{J} - 617.4 \\,\\text{J} = 2812.6 \\,\\text{J}$$`}</p>
      <p>
        Finalmente, para calcular la altura máxima que puede alcanzar, usamos la
        conservación de la energía:
      </p>
      <p>{`$$E_k' = E_p'$$`}</p>
      <p>{`$$2812.6 \\,\\text{J} = m \\cdot g \\cdot h'$$`}</p>
      <p>{`$$h' = \\frac{2812.6 \\,\\text{J}}{70 \\,\\text{kg} \\cdot 9.8 \\,\\text{m/s}^2} = 4.1 \\,\\text{m}$$`}</p>
      <p>
        Para contestar el segundo item, vamos a necesitar que la energía con la
        que inicia ya tenga incluida la energía que le va a quitar la parte de
        rozamiento, por lo tanto la energía total inicial necesaria es:
      </p>
      <p>{`$$E_{total} = E_p + W_r = 3430 \\,\\text{J} + 617.4 \\,\\text{J} = 4047.4 \\,\\text{J}$$`}</p>
      <p>
        Santiago tendrá que colocar esta energía de 617.4 J para poder subir
        completamente por el lado derecho. Por lo tanto, su velocidad inicial
        necesaria es:
      </p>
      <p>{`$$E = \\frac{1}{2} m v^2$$`}</p>
      <p>{`$$617.4 \\,\\text{J} = \\frac{1}{2} \\cdot 70 \\,\\text{kg} \\cdot v^2$$`}</p>
      <p>{`$$v = \\sqrt{\\frac{2 \\cdot 617.4 \\,\\text{J}}{70 \\,\\text{kg}}} = 4.2 \\,\\text{m/s}$$`}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio16;
