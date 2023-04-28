
let cuerpo = document.getElementsByTagName('body')
let sinTildesTitilantes = document.getElementById('sinTildesTitilantes')
let vocal0 = document.getElementById('vocal-0')
let vocal1 = document.getElementById('vocal-1')
let vocal2 = document.getElementById('vocal-2')
let vocal3 = document.getElementById('vocal-3')
let vocal4 = document.getElementById('vocal-4')
let vocal5 = document.getElementById('vocal-5')
let vocal6 = document.getElementById('vocal-6')
let vocal7 = document.getElementById('vocal-7')
let vocal8 = document.getElementById('vocal-8')
let vocal9 = document.getElementById('vocal-9')

let textoTildesTitilantes = document.getElementById('texto-tildes')

nuevoBody = cuerpo[0].outerHTML.replaceAll('É', `<span class="tilde">É</span>`)
nuevoBody = cuerpo[0].outerHTML.replaceAll('é', `<span class="tilde">é</span>`)
// nuevoBody = cuerpo[0].outerHTML.replaceAll('É', `<span class="tilde">É</span>`)

textoTildesTitilantes.innerHTML = nuevoBody
sinTildesTitilantes.style.display = 'none'

function tildesTitilantes(vocalConTilde, div) {
    let newBody = '';
    newBody = cuerpo[0].outerHTML.replaceAll(vocalConTilde, `<span class="tilde">${vocalConTilde}</span>`)
    div.innerHTML = newBody
    div.style.display = 'block'

    return newBody
}

tildesTitilantes('Á', vocal0)

// let tildes = ['Á', 'á', 'É', 'é', 'Í', 'í', 'Ó', 'ó', 'Ú', 'ú']

// let cuerpo = document.getElementsByTagName('body')
// let textoTildesTitilantes = document.getElementById('texto-tildes')

// let nuevoTexto = cuerpo[0].outerHTML.replaceAll('í', `<span class="tilde">í</span>`)

// textoTildesTitilantes.innerHTML = nuevoTexto;
