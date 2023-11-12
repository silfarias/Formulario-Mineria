const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Submit clicked');

    const encuestaData = {
        edad: document.querySelector('#edad').value,
        id_genero: document.querySelector('#genero').value,
        id_localidad: document.querySelector('#localidad').value,
        respuesta1: document.querySelector('#pregunta1').value,
        respuesta2: document.querySelector('#pregunta2').value,
        respuesta3: document.querySelector('#pregunta3').value,
        respuesta4: document.querySelector('#pregunta4').value,
        respuesta5: document.querySelector('#pregunta5').value,
        respuesta6: document.querySelector('#pregunta6').value,
        respuesta7: document.querySelector('#pregunta7').value,
        respuesta8: document.querySelector('#pregunta8').value,
        respuesta9: document.querySelector('#pregunta9').value,
        respuesta10: document.querySelector('#pregunta10').value,
        respuesta11: document.querySelector('#pregunta11').value,
        respuesta12: document.querySelector('#pregunta12').value
    };

    console.log(encuestaData);
    try {
        console.log('Enviando encuesta...')
        const response = await fetch('/record', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(encuestaData)
        });

        if (response.ok) {
            alert('Encuesta enviada');
            console.log('Encuesta enviada');
            window.location.href = '/';
        }
    } catch (error) {
        alert('Error al enviar la encuesta');
        console.log(error);
    }
});
