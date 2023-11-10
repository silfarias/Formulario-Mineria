const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Submit clicked');
});
