/**
 * Reordenar el vector moviendo los ceros al final
 * @param array array de numeros
 * @returns Devuelve el vector reordenado con los ceros al final
 * ```ts
 * function moveZeros (array :number[])
 * ```
 */

export function moveZeros (array :number[]){
    var resultado :number[] =[];
    var cont :number = 0;
    array.forEach(element => {
        if (element == 0){
            cont++
        } else {
            resultado.push(element)
        }
    });
    while (cont--){
        resultado.push(0)
    }
    return resultado
}
