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
var coletasLiberadas = 4
var saqueTotal = 0


function executa() {
    console.clear()
    iniciaColeta()
    imprimeColetas()
}

function criaUnidade(nome, capacidade) {
    this.nome = nome
    this.capacidade = capacidade
    this.quantidade = 0
    this.saque = 0
    this.totalPequena = 0
    this.totalMedia = 0
    this.totalGrande = 0
    this.totalExtrema = 0
}

/* ------------------------------------------------ */
/* --------------- Tipos de coletas --------------- */

function coletaPequena(tropa, q) {
    tropa.saque = tropa.capacidade * q
    return Math.round(tropa.saque)
}

function coletaMedia(tropa, q) {
    tropa.saque = tropa.capacidade * 2.5 * q
    return Math.round(tropa.saque)
}

function coletaGrande(tropa, q) {
    tropa.saque = tropa.capacidade * 5 * q
    return Math.round(tropa.saque)}

function coletaExtrema(tropa, q) {
    tropa.saque = tropa.capacidade * 7.5 * q
    return Math.round(tropa.saque)}

/* ------------------------------------------------ */
/* --------------- Divisor de tropas -------------- */

function iniciaColeta () {

    for (i=0; i < tropas.length; i++) {
        if (coletasLiberadas === 1) {
            coletaPequena(tropas[i], tropas[i].quantidade)
            saqueTotal += tropas[i].saque
        } else if (coletasLiberadas === 2) {
            tropas[i].totalPequena = tropas[i].quantidade * 0.714286
            tropas[i].totalMedia = tropas[i].quantidade * 0.285714
            coletaPequena(tropas[i], tropas[i].totalPequena)
            coletaMedia(tropas[i], tropas[i].totalMedia)
            saqueTotal += tropas[i].saque
        } else if (coletasLiberadas === 3) {
            tropas[i].totalPequena = tropas[i].quantidade * 0.625
            tropas[i].totalMedia = tropas[i].quantidade * 0.25
            tropas[i].totalGrande = tropas[i].quantidade * 0.125
            coletaPequena(tropas[i], tropas[i].totalPequena)
            coletaMedia(tropas[i], tropas[i].totalMedia)
            coletaGrande(tropas[i], tropas[i].totalGrande)
            saqueTotal += tropas[i].saque
        } else if (coletasLiberadas === 4) {
            tropas[i].totalPequena = tropas[i].quantidade * 0.576923
            tropas[i].totalMedia = tropas[i].quantidade * 0.230769
            tropas[i].totalGrande = tropas[i].quantidade * 0.115385
            tropas[i].totalExtrema = tropas[i].quantidade * 0.076923
            coletaPequena(tropas[i], tropas[i].totalPequena)
            coletaMedia(tropas[i],tropas[i].totalMedia)
            coletaGrande(tropas[i], tropas[i].totalGrande)
            coletaExtrema(tropas[i], tropas[i].totalExtrema)
            saqueTotal += tropas[i].saque
        }
    }
}

/* ------------------------------------------------ */
/* ----- Escolha a quantidade de cada tropa ------ */
console.clear()
for (i=0; i < tropas.length; i++) {
    tropas[i].quantidade = readline.questionInt('Digite o numero de ' + tropas[i].nome + `\n`)
    console.clear()
}

function imprimeColetas () {
    console.clear()
    console.log ('*** PEQUENA COLETA ***')
    for (i = 0; i < tropas.length; i++) {
            if (tropas[i].quantidade != 0) {
            console.log(Math.round(tropas[i].totalPequena) + ' ' + tropas[i].nome)
        }
    }
    console.log ('**********************')

    if (coletasLiberadas > 1) {
        console.log ('*** MÉDIA COLETA ***')
        for (i = 0; i < tropas.length; i++) {
                if (tropas[i].quantidade != 0) {
                console.log(Math.round(tropas[i].totalMedia) + ' ' + tropas[i].nome)
            }
        }
        console.log ('*********************')
    }
    
    if (coletasLiberadas > 2) {
        console.log ('*** GRANDE COLETA ***')
        for (i = 0; i < tropas.length; i++) {
                if (tropas[i].quantidade != 0) {
                console.log(Math.round(tropas[i].totalGrande) + ' ' + tropas[i].nome)
            }
        }
        console.log ('**********************')
    } 
    
    if (coletasLiberadas > 3) {
        console.log ('*** EXTREMA COLETA ***')
        for (i = 0; i < tropas.length; i++) {
                if (tropas[i].quantidade != 0) {
                console.log(Math.round(tropas[i].totalExtrema) + ' ' + tropas[i].nome)
            }
        }
        console.log ('**********************')
    }
}

executa()