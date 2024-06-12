
/*Calcuilar fatorial de qualquer numero dentro da lista, dada sua posição*/

const numeros = [1,2,3,4,5,6,7,8,9,10]


function fatorialnum(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    } else {
        let resultado = 1;
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


function numlista(posicao) {
    if (posicao >= 0 && posicao < numeros.length) {
        const numero = numeros[posicao];
        return `O fatorial de ${numero} é ${fatorialnum(numero)}.`;
    } else {
        return "Posição inválida na lista.";
    }
}
console.log(numlista(3))
