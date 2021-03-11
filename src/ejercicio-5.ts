/**
 * Multiplica cada elemento del vector por el valor
 * @param array array de numeros
 * @param valor valor por el que multiplicar
 * @returns Devuelve el vector multiplicado
 * ```ts
 * function multiplyAll(array :number[])
 * ```
 */

export function multiplyAll(array :number[]){
    return (valor :number) =>{
        var resultado :number[] = [];
        array.forEach(element => {
            resultado.push(element*valor);
        });
        return resultado;
    }
}
