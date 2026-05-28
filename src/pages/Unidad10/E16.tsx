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
    </ExerciseLayout>
  );
}

export default Ejercicio16;
