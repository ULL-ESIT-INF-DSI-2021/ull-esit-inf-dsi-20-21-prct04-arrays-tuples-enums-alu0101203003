type coordenada = [number, number]

export function agent(X :number, Y :number, initialPoint :coordenada, endPoint: coordenada) {
    if ( (initialPoint[0] || endPoint[0]) > X || (initialPoint[1] || endPoint[1]) > Y ){
        return "Error. Punto inicial o final colocado fuera del tablero"
    }
    var resultado :string[] = [];
    var agente :coordenada = initialPoint
    while ( (agente[0] != endPoint[0]) && (agente[1] != endPoint[1]) ){
        if (agente[0] < endPoint[0]){
            agente[0]++
            resultado.push("South")
        }
        if (agente[1] < endPoint[1]){
            agente[1]++
            resultado.push("East")
        }
        if (agente[0] > endPoint[0]){
            agente[0]--
            resultado.push("North")
        }
        if (agente[1] > endPoint[1]){
            agente[1]--
            resultado.push("West")
        }
    }
    return resultado
}