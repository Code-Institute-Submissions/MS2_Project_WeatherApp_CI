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
            <img src ="">
            <h2> City: ${response.name}</h2>  
            <h3> Temp: ${response.main.temp} °C </h3>          
            <p style="text-transform: uppercase">${response.weather[0].description}</p>
            </div>
            `
        } //else {
            //console.log('error');
           // alert('Please type in correct city name'); // if not city name entered, error alert is generated
        //}
        document.getElementById('userInput').value = ""; // this line clears the input box after submit
    }
    xhr.send();
    
})
