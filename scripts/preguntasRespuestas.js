let preguntasRespuestasDOM = document.getElementsByClassName('pregunta-respuestas')
let preguntasRespuestas = []

console.log(preguntasRespuestasDOM.length);
// console.log(preguntasRespuestasDOM);
for (let i = 0; i < preguntasRespuestasDOM.length; i++) {
    let opcionesRespuestas = preguntasRespuestasDOM[i].getElementsByClassName('parrafo-cuestionario')
    preguntasRespuestas.push({pregunta: preguntasRespuestasDOM[i].firstElementChild.innerText})
    // console.log(opcionesRespuestas);
    for (let j = 0; j < opcionesRespuestas.length; j++) {
        console.log(preguntasRespuestas[i]);
        // preguntasRespuestas.push(
        //     {
        //         opciones: opcionesRespuestas[j].firstElementChild
        //     }
        // )

        }
}

// console.log(preguntasRespuestas);