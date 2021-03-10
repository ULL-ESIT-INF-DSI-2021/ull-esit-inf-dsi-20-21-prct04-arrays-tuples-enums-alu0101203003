/**
 * Decodificación Resistencias
 * @param resistor Array de colores
 * @returns Devuelve el código
 * ```ts
 * decodeResistor (s :string[])
 * ```
 */

export function decodeResistor (resistor :string[]){
    type tupla = (string | number);
    let tupla_code :tupla[][] = [["Negro",0],["Marron",1],["Rojo",2],["Naranja",3],["Amarillo",4],["Verde",5],["Azul",6],["Violeta",7],["Gris",8],["Blanco",9]]
    var code :string ="";
    var i :number = 0;
    var j :number = 0;
    while(i < tupla_code.length){
        if (tupla_code[i][0] == resistor[j]){
            var codigo = tupla_code[i][1].toString()
            code += codigo
            j++
            i = -1
            if (j>1){
                return code
            }
        }
        i++
    }
    return "Error: Color incorrecto"

}