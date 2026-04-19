import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";

export const Introduccion = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[0].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
        Introducción a la materia
      </h1>
      <p className="text-xl text-[#757575] leading-relaxed">
        La Física estudia la naturaleza y cómo funciona el universo, desde las
        partículas más pequeñas hasta las galaxias. Es un conjunto de ideas,
        métodos y un proceso en constante evolución para explicar y comprender
        los fenómenos naturales.
      </p>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="material-obligatorio"
      >
        Material obligatorio
      </h2>
      <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        <li className="text-base leading-7 text-[#141414] my-2">
          Wilson, J. D. (2007) "<em>Física</em>"
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          Zears, F.W. (2013) "<em>Física universitaria</em>"
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          Serway, R. A., & Vuille, C. (2012) "<em>Fundamentos de física</em>"
        </li>
      </ul>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="objetivos"
      >
        Objetivos
      </h2>
      <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        <li className="text-base leading-7 text-[#141414] my-2">
          Relacionar los conceptos de la física con el funcionamiento del mundo
          circundante.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          Comprender los rudimentos de la mecánica a fin de aplicarlos en
          desarrollos ulteriores y resolver situaciones problemáticas.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          Incorporar conocimientos de la mecánica de puntos materiales y cuerpos
          extensos.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          Distinguir el rango de validez de los modelos de la realidad con los
          que trabaja la física.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          Interpretar y confeccionar gráficos y extraer información física a
          partir de enunciados coloquiales.
        </li>
      </ul>

      <h2
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
        id="programa"
      >
        Programa de la materia
      </h2>
      <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-3 text-[#444] leading-relaxed">
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">La medición:</strong> Unidades
          fundamentales. Múltiplos y submúltiplos. La medición en física. Cifras
          significativas. Órdenes de magnitud.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">Magnitudes físicas:</strong>{" "}
          Magnitudes escalares y vectoriales. Operaciones con vectores (suma,
          resta, multiplicación por escalar, producto escalar y vectorial). Uso
          del sistema de coordenadas cartesianas, versores y componentes para
          expresar y proyectar vectores. Introducción al análisis dimensional.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">Estática:</strong> Fuerza. Unidades
          de medida. Cuerpos puntuales: resultante y equilibrante. Cuerpos
          extensos: centro de gravedad, resultante y momento neto. Condiciones
          de equilibrio, reacciones de vínculo y funcionamiento de máquinas
          simples.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">Hidrostática:</strong> Densidad.
          Presión. Unidades. Fluido. Fluido ideal. Principio de Pascal. Prensa
          hidráulica. Teorema fundamental de la hidrostática. Experiencia de
          Torricelli. Presión absoluta y manométrica. Teorema de Arquímedes.
          Flotación y empuje. Peso aparente.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">
            Cinemática en una dimensión:
          </strong>{" "}
          Punto material o Partícula. Referencia y coordenadas. Posición,
          desplazamiento, distancia, trayectoria. Velocidad media, instantánea y
          rapidez. Unidades. Aceleración media e instantánea. Ecuaciones
          horarias. Movimiento rectilíneo. Gráficos r(t), v(t) y a(t).
          Interpretaciones gráficas.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">
            Cinemática en dos dimensiones:
          </strong>{" "}
          Movimiento vectorial en el plano: coordenadas intrínsecas, aceleración
          tangencial, normal y total. Tiro oblicuo. Movimiento circular: período
          y frecuencia, velocidad y aceleración angular. Movimiento relativo.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">Dinámica:</strong> Fuerza.
          Clasificación de las fuerzas fundamentales. Leyes de Newton. Peso y
          masa. Fuerzas de contacto (normal y rozamiento), elástica y
          gravitatoria. Sistemas inerciales y no inerciales. Fuerzas ficticias:
          de arrastre y centrífuga. Peralte, péndulo cónico, movimiento
          oscilatorio armónico, péndulo simple, masa-resorte.
        </li>
        <li className="text-base leading-7 text-[#141414] my-2">
          <strong className="text-[#141414]">Trabajo y Energía:</strong> Energía
          cinética. Trabajo de fuerzas. Potencia. Teorema del trabajo y la
          energía cinética. Fuerzas conservativas y no conservativas. Energía
          potencial: gravitatoria y elástica. Teorema de conservación de la
          energía mecánica. Aplicaciones.
        </li>
      </ol>
    </DocsLayout>
  );
};
