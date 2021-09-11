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
var nTropas = 1000
var coletasLiberadas = 4
var tropa = arqueiro


function criaUnidade(nome, capacidade) {
    this.nome = nome
    this.capacidade = capacidade    
}

/* ------------------------------------------------ */
/* --------------- Tipos de coletas --------------- */

function coletaPequena(tropa, q) {
    let saqueTotal = tropa.capacidade * q
    return console.log('Coleta Pequena \nNome: ' + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

function coletaMedia(tropa, q) {
    let saqueTotal = tropa.capacidade * 2.5 * q
    return console.log('Coleta Média \nNome: ' + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

function coletaGrande(tropa, q) {
    let saqueTotal = tropa.capacidade * 5 * q
    return console.log('Coleta Grande \nNome: ' + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

function coletaExtrema(tropa, q) {
    let saqueTotal = tropa.capacidade * 7.5 * q
    return console.log('Coleta Extrema \nNome: ' + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

/* ------------------------------------------------ */
/* --------------- Divisor de tropas -------------- */

function iniciaColeta () {
if (coletasLiberadas === 1) {
    coletaPequena(tropa, nTropas)
} else if (coletasLiberadas === 2) {
    coletaPequena(tropa, nTropas * 0.714286)
    coletaMedia(tropa, nTropas * 0.285714)
} else if (coletasLiberadas === 3) {
    coletaPequena(tropa, nTropas * 0.625)
    coletaMedia(tropa, nTropas * 0.25)
    coletaGrande(tropa, nTropas * 0.125)
} else if (coletasLiberadas === 4) {
    coletaPequena(tropa, nTropas * 0.576923)
    coletaMedia(tropa, nTropas * 0.230769)
    coletaGrande(tropa, nTropas * 0.115385)
    coletaExtrema(tropa, nTropas * 0.076923)
}
}

//console.log(coletaPequena(ac, nTropas))
//console.log(coletaMedia(barbaro, nTropas))
console.log(iniciaColeta())

