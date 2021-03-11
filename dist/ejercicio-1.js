/**
 * Decodificación Resistencias
 * @param resistor Array de colores
 * @returns Devuelve el código
 * ```ts
 * decodeResistor (resistor :string[])
 * ```
 */
export function decodeResistor(resistor) {
    let codigosColor = [["Negro", 0], ["Marron", 1], ["Rojo", 2], ["Naranja", 3], ["Amarillo", 4], ["Verde", 5], ["Azul", 6], ["Violeta", 7], ["Gris", 8], ["Blanco", 9]];
    var code = "";
    var i = 0;
    var j = 0;
    while (i < codigosColor.length) {
        if (codigosColor[i][0] == resistor[j]) {
            var codigo = codigosColor[i][1].toString();
            code += codigo;
            j++;
            i = -1;
            if (j > 1) {
                return code;
            }
        }
        i++;
    }
    return "Error: Color incorrecto";
}
