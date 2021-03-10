/**
 * Palabras encadenadas
 * @param palabras Array de colores
 * @returns Devuelve las letras que encadenan
 * ```ts
 * meshArray (palabras :string[])
 * ```
 */

export function meshArray (palabras :string[]){
    var resultado :string = "";
    for (var i :number = 0; i < palabras.length-1; i++){
        var palabra1 :string[] = palabras[i].split("");
        var palabra2 :string[] = palabras[i+1].split("");
        var j :number = palabra1.length-1;
        var cont :number = 0;
        while (j > -1){
            if (palabra1[j] == palabra2[0]){
                break;
            } else {
                j--;
                cont++;
            }
        }
        for (var k :number = 0; k <= cont; k ++){
            if (palabra1[j] != palabra2[k]){
                return "Error al encadenar"
            } else {
                resultado += palabra1[j];
            }
        j++
        }
    }
    return resultado
}
