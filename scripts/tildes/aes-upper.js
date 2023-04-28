
let cuerpo = document.getElementsByTagName('body')
let sinTildesTitilantes = document.getElementById('sinTildesTitilantes')
let textoTildesTitilantes = document.getElementById('texto-tildes')

let nuevoBody = cuerpo[0].outerHTML.replaceAll('Á', `<span class="tilde">Á</span>`)

textoTildesTitilantes.innerHTML = nuevoBody
sinTildesTitilantes.style.display = 'none'


