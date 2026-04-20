import { Link, Outlet } from "react-router-dom";
import { MathJax } from "better-react-mathjax";

import { DocsLayout } from "../../layout/Docs.tsx";
import { TableOfContents } from "../../components/TableOfContents.tsx";
import modulosData from "../../data/modulos.json";

const Unidad2 = () => {
  const ejercicios = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[0].toc} />}
    >
      <MathJax>
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-primary) mb-4">
          La medición
        </h1>

        <p className="text-xl text-[#757575] leading-relaxed">
          La medición es fundamental en física porque permite describir los
          fenómenos naturales de forma objetiva, precisa y comunicable.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20">
          Teoría
        </h2>
        <hr />

        <h3
          id="por-que-medimos"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          ¿Por qué medimos?
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La medición es fundamental para describir el mundo con precisión.
          Indicaciones vagas o descripciones imprecisas no son útiles; en
          cambio, las mediciones permiten comunicar información clara y
          objetiva. En física, medir es una herramienta esencial para comprender
          y describir la naturaleza.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Aunque algunos aspectos del mundo pueden describirse de forma
          subjetiva, como el color, estas percepciones varían entre personas. En
          cambio, propiedades físicas como la longitud de onda o la frecuencia
          de la luz pueden medirse y son iguales para todos. Por ello, la física
          busca explicar la naturaleza de manera objetiva, basándose en
          mediciones.
        </p>

        <h3
          id="unidades-base"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Unidades base
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          El Sistema Internacional de Unidades (SI) define siete cantidades
          base, consideradas independientes entre sí y suficientes para
          describir todos los fenómenos físicos.
        </p>
        <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
          <li className="text-base leading-7 text-[#141414] my-2">
            Metro (m): Longitud
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Segundo (s): Tiempo
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Kilogramo (kg): Masa
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Ampere (A): Corriente eléctrica
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Kelvin (K): Temperatura
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Mol (mol): Cantidad de sustancia
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Candela (cd): Intensidad luminosa
          </li>
        </ul>

        <h3
          id="prefijos-si"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Prefijos del Sistema Internacional
        </h3>
        <table className="max-w-md mx-auto border-collapse text-sm md:text-base mt-4 mb-6 rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-[#1d2554] text-white">
              <th className="px-4 py-2.5 text-left font-semibold">Múltiplo</th>
              <th className="px-4 py-2.5 text-left font-semibold">Prefijo</th>
            </tr>
          </thead>
          <tbody>
            {[
              { multiplo: "$10^{12}$", prefijo: "tera- (T)", bold: false },
              { multiplo: "$10^{9}$", prefijo: "giga- (G)", bold: false },
              { multiplo: "$10^{6}$", prefijo: "mega- (M)", bold: true },
              { multiplo: "$10^{3}$", prefijo: "kilo- (k)", bold: true },
              { multiplo: "$10^{2}$", prefijo: "hecto- (h)", bold: false },
              { multiplo: "$10$", prefijo: "deca- (da)", bold: false },
              { multiplo: "$10^{-1}$", prefijo: "deci- (d)", bold: false },
              { multiplo: "$10^{-2}$", prefijo: "centi- (c)", bold: true },
              { multiplo: "$10^{-3}$", prefijo: "mili- (m)", bold: true },
              { multiplo: "$10^{-6}$", prefijo: "micro- (μ)", bold: true },
              { multiplo: "$10^{-9}$", prefijo: "nano- (n)", bold: false },
              { multiplo: "$10^{-12}$", prefijo: "pico- (p)", bold: false },
              { multiplo: "$10^{-15}$", prefijo: "femto- (f)", bold: false },
              { multiplo: "$10^{-18}$", prefijo: "atto- (a)", bold: false },
            ].map(({ multiplo, prefijo, bold }, i) => (
              <tr
                key={i}
                className={`border-b border-[#c8d8e8] transition-colors hover:bg-[#cddceb] ${
                  bold
                    ? "bg-[#dce9f5] font-bold text-[#1d2554]"
                    : i % 2 === 0
                      ? "bg-[#f0f5fa]"
                      : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{multiplo}</td>
                <td className="px-4 py-2">{prefijo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-base leading-7 text-[#141414] my-2">
          Por ejemplo, 1 gramo (g) multiplicado por 1000 (que es 10
          <sup>3</sup>) es 1 kilogramo (kg); 1 gramo multiplicado por 1/1000
          (que es 10<sup>-3</sup>) es 1 miligramo (mg).
        </p>

        <h3
          id="conversion-unidades"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Conversión de unidades
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Las conversiones de unidades permiten expresar una misma cantidad
          usando diferentes unidades. Para realizarlas se utilizan factores de
          conversión, que provienen de enunciados de equivalencia.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Un factor de conversión es un cociente equivalente a 1, por lo que al
          multiplicar una cantidad por él no cambia su valor físico, solo su
          unidad. En las conversiones se utiliza el análisis de unidades, que
          consiste en elegir el factor adecuado para que las unidades originales
          se cancelen.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {"$$ 12 ft \\times \\frac{1yd}{3ft}  = 4 yd $$"}
        </p>

        <h3
          id="unidades-cantidades-comunes"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Unidades de cantidades comunes
        </h3>
        <table className="max-w-md mx-auto border-collapse text-sm md:text-base mt-4 mb-6 rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-[#1d2554] text-white">
              <th className="px-4 py-2.5 text-left font-semibold italic">
                Cantidad
              </th>
              <th className="px-4 py-2.5 text-left font-semibold italic">
                Unidad
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { cantidad: "masa", unidad: "kg" },
              { cantidad: "tiempo", unidad: "s" },
              { cantidad: "longitud", unidad: "m" },
              {
                cantidad: "área",
                unidad: (
                  <span>
                    m<sup>2</sup>
                  </span>
                ),
              },
              {
                cantidad: "volumen",
                unidad: (
                  <span>
                    m<sup>3</sup>
                  </span>
                ),
              },
              {
                cantidad: (
                  <span>
                    velocidad (<i>v</i>)
                  </span>
                ),
                unidad: "$$\\dfrac{\\text{m}}{\\text{s}}$$",
              },
              {
                cantidad: (
                  <span>
                    aceleración (<i>a</i> o <i>g</i>)
                  </span>
                ),
                unidad: "$$\\dfrac{\\text{m}}{\\text{s}^2}$$",
              },
            ].map(({ cantidad, unidad }, i) => (
              <tr
                key={i}
                className={`border-b border-[#c8d8e8] transition-colors hover:bg-[#cddceb] ${
                  i % 2 === 0 ? "bg-[#f0f5fa]" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{cantidad}</td>
                <td className="px-4 py-2 text-center">{unidad}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3
          id="conversion-area"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Conversión de unidades de área
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Supongamos que un tablero de avisos tiene un área de 2.5 m<sup>2</sup>
          . Queremos expresar esta área en centímetros cuadrados (cm<sup>2</sup>
          ).
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          Dado que 1 m = 100 cm, hay que elevar al cuadrado el factor lineal
          para convertir unidades de área.
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ \\left( \\frac{10^2 cm}{1 m} \\right)^2 = \\frac{10^4 cm^2}{1 m^2} $$"
          }
        </p>
        <p className="text-base leading-7 text-[#141414] my-2">
          {
            "$$ 2.5 m^2 \\times \\frac{10^4 cm^2}{1 m^2} = 2.5 \\times 10^4 cm^2 $$"
          }
        </p>

        <h3
          id="cifras-significativas"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Cifras significativas
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          Al resolver problemas en física se utilizan números exactos y números
          medidos.
        </p>
        <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
          <li className="text-base leading-7 text-[#141414] my-2">
            Los números exactos no tienen error ni incertidumbre.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Los números medidos provienen de mediciones y siempre tienen cierto
            grado de incertidumbre.
          </li>
        </ul>
        <p className="text-base leading-7 text-[#141414] my-2">
          Para expresar la precisión de una medición se utilizan las cifras
          significativas, que son los dígitos conocidos con certeza más un
          último dígito estimado.
        </p>

        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            Ceros a la izquierda no son significativos.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Ceros entre dígitos sí son significativos.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Ceros al final después del punto decimal son significativos.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Ceros finales en enteros sin punto decimal pueden ser ambiguos.
          </li>
        </ol>

        <p className="text-base leading-7 text-[#141414] my-2">
          Para evitar ambigüedad se usa notación científica, que muestra con
          claridad cuántas cifras significativas tiene un número.
        </p>

        <p className="text-base leading-7 text-[#141414] my-2 font-semibold">
          Cifras significativas en cálculos:
        </p>
        <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
          <li className="text-base leading-7 text-[#141414] my-2">
            Multiplicación y división: el resultado debe tener la misma cantidad
            de cifras significativas que el valor con menos cifras
            significativas.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Suma y resta: el resultado debe tener el mismo número de decimales
            que la cantidad menos precisa.
          </li>
        </ul>

        <h3
          id="redondeo"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Reglas para redondear
        </h3>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            Si el primer dígito eliminado es menor que 5, el anterior permanece
            igual.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Si el primer dígito eliminado es 5 o más, el anterior aumenta en 1.
          </li>
        </ol>

        <h3
          id="resolucion-problemas"
          className="text-xl font-bold mt-10 mb-3 text-[#141414] scroll-mt-20"
        >
          Resolución de problemas
        </h3>
        <p className="text-base leading-7 text-[#141414] my-2">
          La resolución de problemas consiste en aplicar principios y ecuaciones
          a datos específicos para encontrar una cantidad desconocida.
        </p>
        <ol className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8 space-y-2">
          <li className="text-base leading-7 text-[#141414] my-2">
            Leer y analizar el problema.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Dibujar un diagrama si resulta útil.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Anotar datos e incógnitas en un mismo sistema de unidades.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Elegir principios y ecuaciones apropiados.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Sustituir datos y realizar cálculos correctamente.
          </li>
          <li className="text-base leading-7 text-[#141414] my-2">
            Verificar si el resultado es razonable.
          </li>
        </ol>

        <h2
          id="practica"
          className="text-2xl font-bold mt-12 mb-4 text-(--color-primary) scroll-mt-20"
        >
          Práctica
        </h2>
        <hr />

        <ul className="flex gap-2 flex-wrap mt-4">
          {ejercicios.map((numero) => (
            <Link
              key={numero}
              to={`/la-medicion/ejercicio-${numero}`}
              className="bg-[#1d2554] text-white px-3 py-2 text-sm sm:text-base rounded hover:bg-[#374785] transition-colors"
            >
              {`Ejercicio ${numero}`}
            </Link>
          ))}
        </ul>

        <div className="mt-8">
          <Outlet />
        </div>
      </MathJax>
    </DocsLayout>
  );
};

export default Unidad2;
