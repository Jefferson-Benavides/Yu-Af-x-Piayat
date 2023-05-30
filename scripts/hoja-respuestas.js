// alert('hola')
let divContendorHojaRespuestas = document.getElementById('hoja-container')
let respuestas = ``

for (let i = 1; i < 32; i++) {
    divContendorHojaRespuestas.innerHTML += `<div class="abc-choices">
    <p class"numero">${i}.
    <p class="choice">A</p>
    <p class="choice">B</p>
    <p class="choice">C</p>
</div> </p>`
}