const searchButton = document.querySelector('.searchButton');
const infoCard = document.querySelector('.infoCard');

searchButton.addEventListener('click', (e) => {
    let input = document.getElementById('userInput');
    let xhr = new XMLHttpRequest();
    
   //api test ok, responses ok
    // api test sharp 2 ok, responses ok uppercase lowercase
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=191d5fa7b2969d0320a7c9e00936f23c&units=metric`);
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.response);
            infoCard.innerHTML = `
            <div>
            <img src ="">
            <h1> City: ${response.name}</h1>  
            <h1> Temp: ${response.main.temp} °C </h1>          
            <p style="text-transform: uppercase">${response.weather[0].description}</p>
            </div>
            `
        }
    }
    xhr.send();
})