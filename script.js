function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rolar2dados(){
    let resultado = []

    for (let i=0;i<1000;i++){
        resultado.push(getRandomIntInclusive(1,6) + getRandomIntInclusive(1,6))
      }

    return resultado
    }

function criandoObjeto(){
    let chave = 2
    let valor = 0
    let objeto = {}

    for (let i=0;i<11;i++){
        objeto[chave]=valor
        chave++
    }

    return objeto
  }

function preenchendoObjeto(objeto){
    let resultado = rolar2dados()
    let cont = 0

    for (let i=0;i<resultado.length;i++){
        cont = objeto[resultado[i]]
        cont++
        objeto[resultado[i]] = cont
    }

    return objeto
  }

function criarSpan(valor1,valor2){
    let tagSpan = document.createElement('span')
    tagSpan.innerText = `${valor1}: ${valor2}`
    return tagSpan
}

function criarDiv(valor1,valor2){
    let tagDiv = document.createElement('div')
    tagDiv.classList.add('graf')
    tagDiv.innerText = `${valor1}: ${valor2}`
    tagDiv.style.width = `${valor2}px`
    return tagDiv
}

let objeto = preenchendoObjeto(criandoObjeto())
let chaves = Object.keys(objeto)
let valores = Object.values(objeto)

let tagDivtext = document.querySelector('.text')
let tagDivgraf = document.getElementById('graf')

for (let i=0;i<chaves.length;i++){
    let span = criarSpan(chaves[i],valores[i])
    let div = criarDiv(chaves[i],valores[i])
    tagDivtext.appendChild(span)
    tagDivgraf.appendChild(div)
}

