document.getElementById('cambiarContenido').addEventListener('click', function() {
    fetch('../pages/artista.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        const main = document.getElementById('main');
        main.innerHTML = data;
    })
    .catch(error => {
        console.error('Hubo un problema con la petición Fetch:', error);
    });
});