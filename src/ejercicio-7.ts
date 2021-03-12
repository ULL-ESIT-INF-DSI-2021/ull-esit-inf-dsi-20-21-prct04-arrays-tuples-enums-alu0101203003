type punto = [number, number, number, ...number[]]

/**
 * Sumar dos puntos coordenada a coordenada
 * @param P1 punto 1
 * @param P2 punto 2
 * @returns Devuelve la suma
 * ```ts
 * suma (P1 :punto,P2 :punto)
 * ```
 */
export function suma (P1 :punto,P2 :punto) {
    var resultado :punto = [0,0,0]
    if (P1.length != P2.length){
        return "Error. Puntos con distinto numero de coordenadas"
    } else {
        for(var i:number = 0; i < P1.length; i++){
            resultado[i] = P1[i] + P2[i];
        }
    }
    return resultado
}

/**
 * Restar dos puntos coordenada a coordenada
 * @param P1 punto 1
 * @param P2 punto 2
 * @returns Devuelve la resta
 * ```ts
 * resta (P1 :punto,P2 :punto)
 * ```
 */
 export function resta (P1 :punto,P2 :punto){
    var resultado :punto = [0,0,0]
    if (P1.length != P2.length){
        return "Error. Puntos con distinto numero de coordenadas"
    } else {
        for(var i:number = 0; i < P1.length; i++){
            resultado[i] = P1[i] - P2[i];
        }
    }
    return resultado
}

/**
 * Calcular el producto de un punto por un número
 * @param P1 punto 1
 * @param valor factor a multiplicar
 * @returns Devuelve el producto
 * ```ts
 * producto (P :punto,valor :number)
 * ```
 */
 export function producto (P :punto,valor :number){
    var resultado :punto = [0,0,0]
    for(var i:number = 0; i < P.length; i++){
        resultado[i] = P[i] * valor
    }
    return resultado
}

/**
 * Calcular la distancia euclídea entre dos puntos
 * @param P1 punto 1
 * @param P2 punto 2
 * @returns Devuelve la distancia
 * ```ts
 * distEuclidea (P1 :punto,P2 :punto)
 * ```
 */
 export function distEuclidea (P1 :punto,P2 :punto){
    if (P1.length != P2.length){
        return "Error. Puntos con distinto numero de coordenadas"
    } else {
        var sum :number = 0;
        for(var i:number = 0; i < P1.length; i++){
            sum = sum + Math.pow((P2[i]-P1[i]),2)
        }
        var resultado :number = Math.sqrt(sum)
    }
    return resultado
}