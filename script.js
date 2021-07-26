const searchButton = document.querySelector('.searchButton');
const infoCard = document.querySelector('.infoCard');

searchButton.addEventListener('click', (e) => {
    let input = document.querySelector('.userInput').value;
    let xhr = new XMLHttpRequest();
    
    //test api 1 ok, test api 2 fail

    xhr.open('GET', 'https://=${input}');
    xhr.onreadystatechange = function() {
        if(this.readyState === XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.response);
            infoCard.innerHTML = `
            <div> 
            <h1>${response.data.item}</h1>
            <h2>${response.data.item}</h2>           
            </div>
            `
        }
    }
    xhr.send();
})