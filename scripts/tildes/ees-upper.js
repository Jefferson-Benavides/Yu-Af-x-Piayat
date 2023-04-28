
let cuerpo = document.getElementsByTagName('body')
let sinTildesTitilantes = document.getElementById('sinTildesTitilantes')
let textoTildesTitilantes = document.getElementById('texto-tildes')

let nuevoBody = cuerpo[0].outerHTML.replaceAll('É', `<span class="tilde">É</span>`)

textoTildesTitilantes.innerHTML = nuevoBody
sinTildesTitilantes.style.display = 'none'


