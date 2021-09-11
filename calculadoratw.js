/* ------------------ Unidades ------------------ */
/* 
Pequena Coleta
Lanceiro = 0,833;Espadachim = 0,5; Bárbaro = 0,333; 
Arqueiro = 0,333; CL = 2,666; AC = 1,666; CP = 1,666,

Média Coleta 2,5; Grande Coleta 5; Extrema Coleta 7,5  
*/

var lanceiro = new criaUnidade('Lanceiro', 0.83333)
var espadachim = new criaUnidade('Espadachim', 0.5)
var barbaro = new criaUnidade('Barbaro', 0.33333)
var arqueiro = new criaUnidade('Arqueiro', 0.33333)
var cl = new criaUnidade('CavalariaLeve', 2.66666)
var ac = new criaUnidade('Arqueiro a Cavalo', 1.66666)
var cp = new criaUnidade('Cavalaria Pesada', 1.66666)
var readline = require('readline');
var resp = "";

function criaUnidade(nome, capacidade) {
    this.nome = nome
    this.capacidade = capacidade    
}

/* ------------------------------------------------ */
/* --------------- Tipos de coletas --------------- */

function coletaPequena(tropa, q) {
    let saqueTotal = tropa.capacidade * q
    return 'Nome: ' + tropa.nome + ' Saque: ' + Math.round(saqueTotal)
}

function coletaMedia(tropa, q) {
    let saqueTotal = tropa.capacidade * 2.5 * q
    return 'Nome: ' + tropa.nome + ' Saque: ' + Math.round(saqueTotal)
}

function coletaGrande(tropa, q) {
    let saqueTotal = tropa.capacidade * 5 * q
    return 'Nome: ' + tropa.nome + ' Saque: ' + Math.round(saqueTotal)
}

function coletaExtrema(tropa, q) {
    let saqueTotal = tropa.capacidade * 7.5 * q
    return Math.round(saqueTotal)
}

/* ------------------------------------------------ */
/* --------------- Divisor de tropas -------------- */

/* if (inputUm === 1) {
    coletaPequena(tropa, 150)
} */

console.log(coletaPequena(ac, 150))
console.log(coletaMedia(barbaro, 150))
console.log(ac.nome === 'Arqueiro a Cavalo')

