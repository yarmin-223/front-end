
const apiKey = 'Fwi4wDd8EvLKL0g4JCVrJO3SOZeBw8nL';
const limit = 15;  // la api de gift tiene un tope de 50 ojo


const apitendencia = 'https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey + '&limit=' + limit;

const apidebusqueda = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&limit=' + limit + '&q=';



function limpiargifs(){
    const gifsbusqueda = document.getElementById("gifyarmin");
  gifsbusqueda.innerHTML ="";

}

function buscargifs(){
    const inputbusqueda = document.getElementById("barradebusqueda");
    if (inputbusqueda.value == "" ) {
        
        alert("debes escribir un texto");

    } else {
        limpiargifs();
                
        fetch(apidebusqueda + inputbusqueda.value)
        .then(response => response.json())
        .then(datos => {

            const gifContainer = document.getElementById("gifyarmin");

            datos.data.forEach(item => {
            const title = item.title;
            const imageUrl = item.images.original.url;
    
                const gifDiv = document.createElement('div');
                gifDiv.classList.add('gif');

                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = title;

                const p = document.createElement('p');
                p.classList.add('parrafo');
                p.textContent = title;

                gifDiv.appendChild(img);
                gifDiv.appendChild(p);

                gifContainer.appendChild(gifDiv);
            });

        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });

    }


    

}

function capturarenter(event){
     if (event.key === 'Enter') {
        buscargifs();
        
    }
   
}






fetch(apitendencia)
  .then(response => response.json())
  .then(datos => {

    const gifContainer = document.getElementById("gifyarmin");

    datos.data.forEach(item => {
      const title = item.title;
      const imageUrl = item.images.original.url;

        const gifDiv = document.createElement('div');
        gifDiv.classList.add('gif');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = title;

        const p = document.createElement('p');
        p.classList.add('parrafo');
        p.textContent = title;

        gifDiv.appendChild(img);
        gifDiv.appendChild(p);

        gifContainer.appendChild(gifDiv);
    });

  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });