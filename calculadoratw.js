/* ------------------ Unidades ------------------ */
/* 
Pequena Coleta
Lanceiro = 0,833;Espadachim = 0,5; Bárbaro = 0,333; 
Arqueiro = 0,333; CL = 2,666; AC = 1,666; CP = 1,666,

Média Coleta 2,5; Grande Coleta 5; Extrema Coleta 7,5  
*/
const readline = require('readline-sync')
var lanceiro = new criaUnidade('Lanceiro', 0.83333)
var espadachim = new criaUnidade('Espadachim', 0.5)
var barbaro = new criaUnidade('Barbaro', 0.33333)
var arqueiro = new criaUnidade('Arqueiro', 0.33333)
var cl = new criaUnidade('Cavalaria Leve', 2.66666)
var ac = new criaUnidade('Arqueiro a Cavalo', 1.66666)
var cp = new criaUnidade('Cavalaria Pesada', 1.66666)
var tropas = [lanceiro, espadachim, barbaro, arqueiro, cl, ac, cp]
var nTropas = 0
var coletasLiberadas = 3
var tropa = arqueiro

function criaUnidade(nome, capacidade) {
    this.nome = nome
    this.capacidade = capacidade
    this.quantidade = 0
}

/* ------------------------------------------------ */
/* --------------- Tipos de coletas --------------- */

function coletaPequena(tropa, q) {
    let saqueTotal = tropa.capacidade * q
    return console.log('Coleta Pequena \n' + tropa.quantidade + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

function coletaMedia(tropa, q) {
    let saqueTotal = tropa.capacidade * 2.5 * q
    return console.log('Coleta Média \n' + tropa.quantidade + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

function coletaGrande(tropa, q) {
    let saqueTotal = tropa.capacidade * 5 * q
    return console.log('Coleta Grande \n' + tropa.quantidade + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

function coletaExtrema(tropa, q) {
    let saqueTotal = tropa.capacidade * 7.5 * q
    return console.log('Coleta Extrema \n' + tropa.quantidade + tropa.nome + '\nSaque: ' + Math.round(saqueTotal))
}

/* ------------------------------------------------ */
/* --------------- Divisor de tropas -------------- */

function iniciaColeta () {

    for (i=0; i < tropas.length; i++) {
        if (coletasLiberadas === 1) {
            coletaPequena(tropa, nTropas)
            break
        } else if (coletasLiberadas === 2) {
            let quantidadePequena = nTropas * 0.714286
            let quantidadeMedia = nTropas * 0.285714
            coletaPequena(tropa, quantidadePequena)
            coletaMedia(tropa, quantidadeMedia)
            break
        } else if (coletasLiberadas === 3) {
            let quantidadePequena = nTropas * 0.625
            let quantidadeMedia = nTropas * 0.25
            let quantidadeGrande = nTropas * 0.125
            coletaPequena(tropa, quantidadePequena)
            coletaMedia(tropa, quantidadeMedia)
            coletaGrande(tropa, quantidadeGrande)
            break
        } else if (coletasLiberadas === 4) {
            let quantidadePequena = nTropas * 0.576923
            let quantidadeMedia = nTropas * 0.230769
            let quantidadeGrande = nTropas * 0.115385
            let quantidadeExtrema = nTropas * 0.076923
            coletaPequena(tropa, quantidadePequena)
            coletaMedia(tropa, quantidadeMedia)
            coletaGrande(tropa, quantidadeGrande)
            coletaExtrema(tropa, quantidadeExtrema)
            break
        }
    }
}

/* ------------------------------------------------ */
/* -------------- Escolha suas tropas ------------- */
for (i=0; i < tropas.length; i++) {
    tropas[i].quantidade = readline.questionInt('Digite o numero de ' + tropas[i].nome + `\n`)
    nTropas += tropas[i].quantidade
}

//nTropas = lanceiro.quantidade + espadachim.quantidade + barbaro.quantidade + arqueiro.quantidade + cl.quantidade + ac.quantidade + cp.quantidade
console.log(nTropas)

//console.log(coletaPequena(ac, nTropas))
//console.log(coletaMedia(barbaro, nTropas))
iniciaColeta()

