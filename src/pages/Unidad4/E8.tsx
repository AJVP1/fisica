import ExerciseLayout from "../../components/Ejecicio";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3>Enunciado</h3>
      <p>
        Una revista especializada infoma que cierto auto deportivo tiene 53,0 %
        de su peso en las ruedas delanteras y el 47,0 % sobre las traseras, con
        una distancia entre ejes de $d= 2,46$ m. Esto implica que la fuerza
        normal total sobre las ruedas delanteras es de $0,530 P$ y sobre las
        traseras, de $0,470 P$, donde $P$ es el peso total. Al espacio entre el
        eje delantero y trasero se llama distancia entre ejes. ¿qué tan adelante
        del eje trasero esta el centro de gravedad del automóvil?
      </p>

      <h3>Solución</h3>
      <p>
        Tomamos como centro de momentos el eje trasero. Para que este el sistema
        en equilibrio se debe cumplir que:
      </p>
      <p>Datos:</p>
      <ul>
        <li>$F_1 = 0,470 P$</li>
        <li>$F_2 = 0,530 P$</li>
        <li>$d_1 = 0$ m</li>
        <li>$d_2 = 2,46$ m</li>
        <li>$d_c$ es lo que debemos encontrar</li>
      </ul>
      <p>$$ F_1 \cdot d_1 + F_2 \cdot d_2 - P \cdot d_c = 0 $$</p>
      <p>$$ F_1 \cdot d_1 + F_2 \cdot d_2 = P \cdot d_c $$</p>
      <p>Reemplazando los valores:</p>
      <p>$$ 0,470 P \cdot 0 + 0,530 P \cdot 2,46 = P \cdot d_c $$</p>
      <p>$$ 1,3038 P = P \cdot d_c $$</p>
      <p>{"$$ d_c = 1,3038 \\text{ m} $$"}</p>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
