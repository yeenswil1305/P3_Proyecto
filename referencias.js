document.addEventListener('DOMContentLoaded', () => {
    const datosForm = document.querySelector('#DATOS-VALIDAR');

    datosForm.addEventListener('submit', async (e) => {
        e.preventDefault();

       
        const data = {};

      
        if (document.getElementById('one').value) {
            data.referencia1 = document.getElementById('one').value;
        }
        if (document.getElementById('two').value) {
            data.referencia2 = document.getElementById('two').value;
        }
        if (document.getElementById('three').value) {
            data.referencia3 = document.getElementById('three').value;
        }
        if (document.getElementById('four4').value) {
            data.referencia4 = document.getElementById('four4').value;
        }
        if (document.getElementById('five').value) {
            data.referencia5 = document.getElementById('five').value;
        }

        
        if (Object.keys(data).length > 0) {
            
            fetch('http://localhost:3000/referencias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(responseData => {
                    
                    console.log('Respuesta del servidor:', responseData);

                    
                    window.location.href = 'index.html'; 
                })
                .catch(error => {
                    console.error('Error al enviar los datos al servidor:', error);
                });
        } else {
            
            window.location.href = 'index.html'; 
        }
    });
});
