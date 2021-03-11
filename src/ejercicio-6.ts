type punto = [number, number]

/**
 * Sumar dos puntos coordenada a coordenada
 * @param P1 punto 1
 * @param P2 punto 2
 * @returns Devuelve la suma
 * ```ts
 * suma (P1 :punto,P2 :punto)
 * ```
 */
function suma (P1 :punto,P2 :punto) {
    var resultado :punto = [P1[0]+P2[0],P1[1]+P2[1]]
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
function resta (P1 :punto,P2 :punto){
    var resultado :punto = [P1[0]-P2[0],P1[1]-P2[1]]
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
function producto (P :punto,valor :number){
    var resultado :punto = [P[0]*valor,P[1]*valor]
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
function distEuclidea (P1 :punto,P2 :punto){
    var resultado :number = Math.sqrt( Math.pow((P2[0]-P1[0]),2) +  Math.pow((P2[1]-P1[1]),2))
    return resultado
}