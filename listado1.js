const goleadores_url = "https://nicobolso.github.io/goleadores/"

function cargarDatos(url) {
    document.getElementById("data").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())



        .then(listado => {
            let row = ""
            for (let i = 0; i < listado.length; i++) {
                row =
                    `
               <td>`+ listado[i].nombre + `</td>
               <td>`+ listado[i].apellido + `</td>
               <td>`+ listado[i].fechas + `</td>
               
               
               `

                document.getElementById("data").innerHTML += row
            }