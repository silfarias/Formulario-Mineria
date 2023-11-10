const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const encuesta = {
        edad: document.getElementById('edad').value,
        id_genero: document.getElementById('genero').value,
        id_localidad: document.getElementById('localidad').value,
        id_respuesta1: document.getElementById('turno').value,
        id_respuesta2: document.getElementById('recursos').value,
        id_respuesta3: document.getElementById('calif').value,
    }
})
