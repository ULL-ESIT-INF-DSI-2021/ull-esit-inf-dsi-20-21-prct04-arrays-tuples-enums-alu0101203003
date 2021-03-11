/**
 * Calcular sum y concatenar cadenas
 * @param array Conjunto de letras y numeros
 * @returns Devuelve las letras que encadenan
 * ```ts
 * meanAndConcatenate (palabras :string[])
 * ```
 */

export function meanAndConcatenate (array :(string|number)[]){
    var resultado :(string|number)[];
    var sum :number = 0;
    var cont :number = 0;
    var concatenado :string = "";
    array.forEach(element => {
        if (typeof element === "number"){
            sum = sum + element;
            cont++
        }
        if (typeof element === "string"){
            concatenado += element;
        }
    });
    var media :number = sum/cont
    return [media,concatenado]
}
