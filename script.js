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
        } //else {
            //console.log('error');
           // alert('Please type in correct city name'); // if not city name entered, error alert is generated
        //} //
        document.getElementById('userInput').value = ""; // this line clears the input box after submit
    }
    xhr.send();
    
})
