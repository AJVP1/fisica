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
              {
                multiplo: "\\(10^{-15}\\)",
                prefijo: "femto- (f)",
                bold: false,
              },
              { multiplo: "\\(10^{-18}\\)", prefijo: "atto- (a)", bold: false },
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
                <td className="px-4 py-1.5">{multiplo}</td>
                <td className="px-4 py-1.5">{prefijo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Por ejemplo, 1 gramo (g) multiplicado por 1000 (que es 10<sup>3</sup>{" "}
          ) es 1 kilogramo (kg); 1 gramo multiplicado por 1/1000 (que es 10
          <sup>-3</sup> ) es 1 miligramo (mg).
        </p>

        <h4>Conversión de unidades</h4>
        <p>
          Las conversiones de unidades permiten expresar una misma cantidad
          usando diferentes unidades. Para realizarlas se utilizan factores de
          conversión, que provienen de enunciados de equivalencia (por ejemplo,
          3 ft = 1 yd).
        </p>
        <p>
          Un factor de conversión es un cociente equivalente a 1, por lo que al
          multiplicar una cantidad por él no cambia su valor físico, solo su
          unidad. En las conversiones se utiliza el análisis de unidades, que
          consiste en elegir el factor adecuado para que las unidades originales
          se cancelen. Por ejemplo: si queremos pasar 12 pies a yardas haríamos
        </p>
        <p>{"$$ 12 ft \\times \\frac{1yd}{3ft}  = 4 yd $$"}</p>

        <h4>Unidades de cantidades comunes</h4>
        <table className="w-72 border-collapse text-sm sm:text-base mt-2 mb-4 mx-auto rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-[#1d2554] text-white">
              <th className="px-4 py-2.5 text-left font-semibold italic">Cantidad</th>
              <th className="px-4 py-2.5 text-left font-semibold italic">Unidad</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cantidad: "masa", unidad: "kg" },
              { cantidad: "tiempo", unidad: "s" },
              { cantidad: "longitud", unidad: "m" },
              { cantidad: "área", unidad: <span>m<sup>2</sup></span> },
              { cantidad: "volumen", unidad: <span>m<sup>3</sup></span> },
              { cantidad: <span>velocidad (<i>v</i>)</span>, unidad: "\\(\\dfrac{\\text{m}}{\\text{s}}\\)" },
              { cantidad: <span>aceleración (<i>a</i> o <i>g</i>)</span>, unidad: "\\(\\dfrac{\\text{m}}{\\text{s}^2}\\)" },
            ].map(({ cantidad, unidad }, i) => (
              <tr
                key={i}
                className={`border-b border-[#c8d8e8] transition-colors hover:bg-[#cddceb] ${i % 2 === 0 ? "bg-[#f0f5fa]" : "bg-white"}`}
              >
                <td className="px-4 py-2">{cantidad}</td>
                <td className="px-4 py-2 text-center">{unidad}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4>Conversión de unidades de área</h4>
        <p>
          Supongamos que tenemos el siguiente problema, Un tablero de avisos
          tiene una área de 2.5 m2 . Exprese esta área en centímetros cuadrados
          (cm2 ).
        </p>
        <p>
          Este problema es una conversión de unidades de área, y sabemos que 1 m
          = 100 cm. Por lo tanto, habría que elevar al cuadrado para obtener
          metros cuadrados y centímetros cuadrados.
        </p>
        <p>
          Un error común en esta clase de conversiones es usar factores
          incorrectos. Dado que 1 m = 100 cm, algunos suponen que 1 m
          <sup>2</sup> = 100 cm<sup>2</sup> , lo cual es falso. El factor de
          conversión de área correcto puede obtenerse directamente del factor de
          conversión lineal correcto, 100 cm/m, o 10<sup>2</sup>cm/m, elevándolo
          al cuadrado el factor de conversión lineal:
        </p>
        <p>
          {
            "$$ \\left( \\frac{10^2 cm}{1 m} \\right)^2 = \\frac{10^4 cm^2}{1 m^2} $$"
          }
        </p>
        <p>
          Entonces, 1 m<sup>2</sup> = 10<sup>4</sup> cm<sup>2</sup> (10 000 cm
          <sup>2</sup>), y podemos escribir lo siguiente:
        </p>
        <p>
          {
            "$$ 2.5 m^2 \\times \\frac{10^4 cm^2}{1 m^2} = 2.5 \\times 10^4 cm^2 $$"
          }
        </p>

        <h4>Cifras significativas</h4>
        <p>
          Al resolver problemas en física se utilizan números exactos y números
          medidos.
        </p>
        <ul>
          <li>
            Los números exactos no tienen error ni incertidumbre (por ejemplo,
            constantes o relaciones matemáticas).
          </li>
          <li>
            Los números medidos provienen de mediciones y siempre tienen cierto
            grado de incertidumbre.
          </li>
        </ul>
        <p>
          Para expresar la precisión de una medición se utilizan las cifras
          significativas, que son los dígitos conocidos con certeza más un
          último dígito estimado. Cuantas más cifras significativas tenga una
          medición, mayor es su precisión.
        </p>
        <p>
          Las cifras significativas siguen ciertas reglas para determinar qué
          dígitos cuentan en una medición:
        </p>
        <ol>
          <li>
            Ceros a la izquierda no son significativos; solo indican la posición
            del punto decimal (ej.: 0.0254 tiene 3 cifras significativas).
          </li>
          <li>
            Ceros entre dígitos sí son significativos (ej.: 104.6 tiene 4 cifras
            significativas).
          </li>
          <li>
            Ceros al final después del punto decimal son significativos (ej.:
            2705.0 tiene 5 cifras significativas).
          </li>
          <li>
            Ceros finales en números enteros sin punto decimal pueden ser
            ambiguos (ej.: 500 puede tener 1, 2 o 3 cifras significativas).
          </li>
        </ol>
        <p>
          Para evitar esta ambigüedad se usa la notación científica, que muestra
          claramente cuántas cifras significativas hay (por ejemplo, 5.0 x 10{" "}
          <sup>2</sup>
          5.0 x 10 <sup>2</sup> tiene 2 cifras significativas y 5.00 x 10{" "}
          <sup>2</sup> 5.00x10 <sup>2</sup> tiene 3).
        </p>

        <p>Cifras significativas en cálculos:</p>
        <ul>
          <li>
            Multiplicación y división: el resultado debe tener el mismo número
            de cifras significativas que la cantidad con menos cifras
            significativas.
          </li>
          <li>
            Suma y resta: el resultado debe tener el mismo número de decimales
            que la cantidad con menos posiciones decimales.
          </li>
        </ul>

        <h4>Reglas para redondear</h4>
        <p>
          Para redondear números al aplicar cifras significativas se siguen
          estas reglas:
        </p>
        <ol>
          <li>
            Si el primer dígito que se elimina es menor que 5, el dígito
            anterior permanece igual.
          </li>
          <li>
            Si el primer dígito que se elimina es 5 o más, el dígito anterior se
            incrementa en 1.
          </li>
        </ol>
        <p>
          Estas reglas reflejan que el resultado de un cálculo no puede ser más
          preciso que la medición menos precisa utilizada, por lo que las
          operaciones matemáticas no aumentan la exactitud de los datos.
        </p>

        <h4>Resolución de problemas</h4>
        <p>
          La resolución de problemas es una parte fundamental de la física y
          consiste en aplicar principios y ecuaciones a datos específicos para
          encontrar una cantidad desconocida. Aunque no existe un método único,
          se recomienda seguir un procedimiento general:
        </p>
        <ol>
          <li>
            Leer y analizar el problema para identificar qué se pide y qué datos
            se dan.
          </li>
          <li>Dibujar un diagrama para visualizar la situación si es útil.</li>
          <li>
            Anotar los datos y las incógnitas, asegurándose de usar el mismo
            sistema de unidades (normalmente el SI).
          </li>
          <li>
            Elegir los principios y ecuaciones apropiados y planear una
            estrategia de solución.
          </li>
          <li>
            Sustituir los datos y realizar los cálculos, expresando el resultado
            con unidades y cifras significativas correctas.
          </li>
          <li>
            Verificar si el resultado es razonable, evaluando si su magnitud
            tiene sentido.
          </li>
        </ol>
        <p>
          Este procedimiento ayuda a estructurar el análisis y facilita la
          solución de problemas tanto numéricos como conceptuales.
        </p>

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
