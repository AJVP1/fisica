import modulos from "../data/modulos.json";

const Introduccion = () => {
  return (
    <section className="bg-[#fafafa] max-w-237 mx-auto p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d2554] text-center mt-4 md:mt-6">
        Introducción a la materia
      </h2>
      <p className="mt-4 md:mt-6">
        La Física estudia la naturaleza y cómo funciona el universo, desde las
        partículas más pequeñas hasta las galaxias. Es un conjunto de ideas,
        métodos y un proceso en constante evolución para explicar y comprender
        los fenómenos naturales.
      </p>
      <p>
        En el Ciclo Básico Común (CBC) de la Universidad de Buenos Aires, la
        materia se enfoca principalmente en los conceptos fundamentales de la
        mecánica y en su aplicación para resolver problemas. Se busca que los
        estudiantes desarrollen habilidades para analizar fenómenos naturales,
        realizar deducciones lógicas y formular soluciones matemáticas y
        computacionales.
      </p>

      <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#1d2554] mt-4 md:mt-6">
        Material obligatorio:
      </h2>
      <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        <li className="mt-2 md:mt-3">
          Wilson, J. D. (2007) "<em>Física</em>"
        </li>
        <li className="mt-2 md:mt-3">
          Zears, F.W. (2013) "<em>Física universitaria</em>"
        </li>
        <li className="mt-2 md:mt-3">
          Serway, R. A., & Vuille, C. (2012) "<em>Fundamentos de física</em>"
        </li>
      </ul>

      <h2 className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-[#1d2554] font-semibold">
        Objetivos:
      </h2>
      <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Relacionar los conceptos de la física con el funcionamiento del mundo
          circundante.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Comprender los rudimentos de la mecánica a fin de aplicarlos en
          desarrollos ulteriores y resolver situaciones problemáticas.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Incorporar conocimientos de la mecánica de puntos materiales y cuerpos
          extensos.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Distinguir el rango de validez de los modelos de la realidad con los
          que trabaja la física.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Interpretar y confeccionar gráficos y extraer información física a
          partir de enunciados coloquiales.
        </li>
      </ul>

      <h2 className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-[#1d2554] font-semibold">
        Programa de la materia
      </h2>
      <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        {modulos.map((modulo) => (
          <li key={modulo.id} className="mt-1">
            <h3 className="mt-2 text-sm sm:text-base md:text-lg">
              {modulo.titulo}
            </h3>
          </li>
        ))}
      </ol>
      <p>
        El programa está dividido en ocho unidades: las primeras introducen o
        repasan conceptos fundamentales de álgebra vectorial, mientras que las
        restantes estudian modelos físicos que permiten explicar y predecir
        diversos fenómenos de la naturaleza. Estos temas se abordan tanto desde
        una perspectiva conceptual como mediante modelos matemáticos.
      </p>
    </section>
  );
};

export default Introduccion;
