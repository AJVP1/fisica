// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";
// importamos componente de contacto
import ContactSection from "../../components/Contacto";

const Unidad2 = () => {
  const ejercicios = Array.from({ length: 28 }, (_, i) => i + 1);

  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-3 sm:p-4 md:p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1d2554] mt-6">
          Juegos Estáticos con información completa
        </h2>

        <h3 className="text-[#1d2554]">Teoría</h3>
        <hr />

        <h4>Por qué medimos?</h4>
        <p>
          La medición es fundamental para describir el mundo con precisión.
          Indicaciones vagas o descripciones imprecisas no son útiles; en
          cambio, las mediciones permiten comunicar información clara y
          objetiva. En física, medir es una herramienta esencial para comprender
          y describir la naturaleza. Aunque algunos aspectos del mundo pueden
          describirse de forma subjetiva, como el color, estas percepciones
          varían entre personas. En cambio, propiedades físicas como la longitud
          de onda o la frecuencia de la luz pueden medirse y son iguales para
          todos. Por ello, la física busca explicar la naturaleza de manera
          objetiva, basándose en mediciones.
        </p>

        <h4>Unidades base</h4>
        <p>
          El Sistema Internacional de Unidades (SI) define siete cantidades
          base, consideradas independientes entre sí y suficientes para
          describir todos los fenómenos físicos. Estas son:
        </p>
        <ul>
          <li>Metro (m): Longitud</li>
          <li>Segundo (s): Tiempo</li>
          <li>Kilogramo (kg): Masa</li>
          <li>Ampere (A): Corriente eléctrica</li>
          <li>Kelvin (K): Temperatura</li>
          <li>Mol (mol): Cantidad de sustancia</li>
          <li>Candela (cd): Intensidad luminosa</li>
        </ul>

        <h4>Prefijos del Sistema Internacional</h4>
        <table className="w-64 border-collapse text-sm sm:text-base mt-2 mb-4 mx-auto rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-[#1d2554] text-white">
              <th className="px-4 py-2.5 text-left font-semibold">Múltiplo</th>
              <th className="px-4 py-2.5 text-left font-semibold">Prefijo</th>
            </tr>
          </thead>
          <tbody>
            {[
              { multiplo: "\\(10^{12}\\)", prefijo: "tera- (T)", bold: false },
              { multiplo: "\\(10^{9}\\)", prefijo: "giga- (G)", bold: false },
              { multiplo: "\\(10^{6}\\)", prefijo: "mega- (M)", bold: true },
              { multiplo: "\\(10^{3}\\)", prefijo: "kilo- (k)", bold: true },
              { multiplo: "\\(10^{2}\\)", prefijo: "hecto- (h)", bold: false },
              { multiplo: "\\(10\\)", prefijo: "deca- (da)", bold: false },
              { multiplo: "\\(10^{-1}\\)", prefijo: "deci- (d)", bold: false },
              { multiplo: "\\(10^{-2}\\)", prefijo: "centi- (c)", bold: true },
              { multiplo: "\\(10^{-3}\\)", prefijo: "mili- (m)", bold: true },
              { multiplo: "\\(10^{-6}\\)", prefijo: "micro- (μ)", bold: true },
              { multiplo: "\\(10^{-9}\\)", prefijo: "nano- (n)", bold: false },
              { multiplo: "\\(10^{-12}\\)", prefijo: "pico- (p)", bold: false },
              { multiplo: "\\(10^{-15}\\)", prefijo: "femto- (f)", bold: false },
              { multiplo: "\\(10^{-18}\\)", prefijo: "atto- (a)", bold: false },
            ].map(({ multiplo, prefijo, bold }, i) => (
              <tr
                key={i}
                className={`border-b border-[#c8d8e8] transition-colors hover:bg-[#cddceb] ${
                  bold ? "bg-[#dce9f5] font-bold text-[#1d2554]" : i % 2 === 0 ? "bg-[#f0f5fa]" : "bg-white"
                }`}
              >
                <td className="px-4 py-1.5">{multiplo}</td>
                <td className="px-4 py-1.5">{prefijo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Practica */}
        <h3 className="text-[#1d2554]">Práctica</h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          {ejercicios.map((numero) => (
            <Link
              key={numero}
              to={`/la-medicion/ejercicio-${numero}`}
              className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
            >
              {`Ejercicio ${numero}`}
            </Link>
          ))}
        </ul>

        <Outlet />

        <ContactSection />
      </section>
    </MathJax>
  );
};

export default Unidad2;
