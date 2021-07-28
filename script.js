const searchButton = document.querySelector('.searchButton');
const infoCard = document.querySelector('.infoCard');

searchButton.addEventListener('click', (e) => {
    let input = document.getElementById('userInput');
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=191d5fa7b2969d0320a7c9e00936f23c&units=metric`);
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.response);
            infoCard.innerHTML = `
            <div>
            <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">
            <h2>${response.name}</h2>  
            <h3>${Math.floor(response.main.temp)} °C </h3>          
            <h5 class="text-muted">${response.weather[0].main}</h5>
            </div>
            `      
             
        } else if (this.readyState === XMLHttpRequest.DONE && this.status == 404){
            alert (`You typed: ${input.value}. Please type in a city name.`) // Alerts if wrong input, ie no city written. Fixed now. 
        } 
        document.getElementById('userInput').value = ""; // Clears input box from typed name after search performed
        
    } 
     xhr.send();
    
})
