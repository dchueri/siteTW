/* ------------------ Unidades ------------------ */

/* 
Pequena Coleta
Lanceiro = 0,833;Espadachim = 0,5; Bárbaro = 0,333; 
Arqueiro = 0,333; CL = 2,666; AC = 1,666; CP = 1,666,

Média Coleta 2,5; Grande Coleta 5; Extrema Coleta 7,5  
*/
var lanceiro = new criaUnidade('lanceiro', 0.83333)
var espadachim = new criaUnidade('espadachim', 0.5)
var barbaro = new criaUnidade('barbaro', 0.33333)
var arqueiro = new criaUnidade('arqueiro', 0.33333)
var cl = new criaUnidade('cavalariaLeve', 2.66666)
var ac = new criaUnidade('arqueiroACavalo', 1.66666)
var cp = new criaUnidade('cavalariaPesada', 1.66666)
var tropas = [lanceiro, espadachim, barbaro, arqueiro, cl, ac, cp]
var coletasLiberadas = 4
var saqueTotal = 0
var resultado = []
var resultadoRecursos = []
let corpoTabelaPequena = document.querySelector('table[id="tabela-pequena"]')
let corpoTabelaMedia = document.querySelector('table[id="tabela-media"]')
let corpoTabelaGrande = document.querySelector('table[id="tabela-grande"]')
let corpoTabelaExtrema = document.querySelector('table[id="tabela-extrema"]')
let arrayTabelas = ["tabela-pequena", "tabela-media", "tabela-grande", "tabela-extrema"]

const btn = document.querySelector('#send')


function inserirTropaNaTabela () {

    for (i = 0; i < tropas.length;  i++) {
        if (tropas[i].quantidade > 0) {
            let linhaPequena = document.createElement("tr")
            corpoTabelaPequena.appendChild(linhaPequena)
            let campoImagemPequena = document.createElement("td")
            let campoResultadoPequena = document.createElement("td")
            
            let colocaImagemPequena = document.createElement("img")
            colocaImagemPequena.src = `./site/imagens/${tropas[i].nome}.png`
            let colocaResultadoPequena = document.createTextNode(Math.round(tropas[i].totalPequena))
            campoImagemPequena.appendChild(colocaImagemPequena)
            campoResultadoPequena.appendChild(colocaResultadoPequena)
            linhaPequena.appendChild(campoImagemPequena)
            linhaPequena.appendChild(campoResultadoPequena)

            let linhaMedia = document.createElement("tr")
            corpoTabelaMedia.appendChild(linhaMedia)
            let campoImagemMedia = document.createElement("td")
            let campoResultadoMedia = document.createElement("td")

            let colocaImagemMedia = document.createElement("img")
            colocaImagemMedia.src = `./site/imagens/${tropas[i].nome}.png`
            let colocaResultadoMedia = document.createTextNode(Math.round(tropas[i].totalMedia))
            campoImagemMedia.appendChild(colocaImagemMedia)
            campoResultadoMedia.appendChild(colocaResultadoMedia)
            linhaMedia.appendChild(campoImagemMedia)
            linhaMedia.appendChild(campoResultadoMedia)

            let linhaGrande = document.createElement("tr")
            corpoTabelaGrande.appendChild(linhaGrande)
            let campoImagemGrande = document.createElement("td")
            let campoResultadoGrande = document.createElement("td")

            let colocaImagemGrande = document.createElement("img")
            colocaImagemGrande.src = `./site/imagens/${tropas[i].nome}.png`
            let colocaResultadoGrande = document.createTextNode(Math.round(tropas[i].totalGrande))
            campoImagemGrande.appendChild(colocaImagemGrande)
            campoResultadoGrande.appendChild(colocaResultadoGrande)
            linhaGrande.appendChild(campoImagemGrande)
            linhaGrande.appendChild(campoResultadoGrande)

            let linhaExtrema = document.createElement("tr")
            corpoTabelaExtrema.appendChild(linhaExtrema)
            let campoImagemExtrema = document.createElement("td")
            let campoResultadoExtrema = document.createElement("td")

            let colocaImagemExtrema = document.createElement("img")
            colocaImagemExtrema.src = `./site/imagens/${tropas[i].nome}.png`
            let colocaResultadoExtrema = document.createTextNode(Math.round(tropas[i].totalExtrema))
            campoImagemExtrema.appendChild(colocaImagemExtrema)
            campoResultadoExtrema.appendChild(colocaResultadoExtrema)
            linhaExtrema.appendChild(campoImagemExtrema)
            linhaExtrema.appendChild(campoResultadoExtrema)
        } 
    }
}

function reniciaTabela() {
   
    for (a=0; a < arrayTabelas.length; a++) {
        let linhas = document.getElementById(`${arrayTabelas[a]}`)

        for (i=0; i < linhas.rows.length; i++) {
            if (linhas.rows[2] != null) {
                linhas.deleteRow(2)
            }
        }
        for (i=0; i < linhas.rows.length; i++) {
            if (linhas.rows[2] != null) {
                linhas.deleteRow(2)
            }
        }
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    for (i = 0; i < tropas.length; i++) {
        tropas[i].quantidade = parseInt(document.getElementById(`quantidadeDe${tropas[i].nome}`).value)
    }
    
    reniciaTabela()
    executa()
    inserirTropaNaTabela()
})

function executa() {
    saqueTotal = 0
    iniciaColeta()
    imprimeResultadoHTML()
}

function imprimeResultadoHTML() {
    for (a=0; a < arrayTabelas.length; a++) {
        for (i = 0; i < 6; i += 2) {
            resultadoRecursos[i] =  document.querySelector(`#${arrayTabelas[a]} > tbody:nth-child(3) > tr > td:nth-child(${i + 2}) > p`)
            resultadoRecursos[i].innerHTML = Math.round(saqueTotal)
        }

        for (i = 0; i < 6; i += 2) {
            resultadoRecursos[i] =  document.querySelector(`#${arrayTabelas[a]} > tbody:nth-child(3) > tr > td:nth-child(${i + 2}) > p`)
            resultadoRecursos[i].innerHTML = Math.round(saqueTotal)
        }

        for (i = 0; i < 6; i += 2) {
            resultadoRecursos[i] =  document.querySelector(`#${arrayTabelas[a]} > tbody:nth-child(3) > tr > td:nth-child(${i + 2}) > p`)
            resultadoRecursos[i].innerHTML = Math.round(saqueTotal)
        }
    }
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
            tropas[i].totalPequena = tropas[i].quantidade
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
