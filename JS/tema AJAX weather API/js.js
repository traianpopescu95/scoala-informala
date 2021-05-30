let urlNow = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
let urlImg = "http://openweathermap.org/img/w/";
let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

async function getWeatherNow() {
    if(document.querySelector("input").value === "") {
        return;
    }
    document.querySelector(".now").classList.remove("hidden");

    let oras = document.querySelector("input").value;
    let response = await fetch(urlNow + oras);
    let json = await response.json();

    document.querySelector("#weather").src = `${urlImg}${json.weather[0].icon}.png`;
    document.querySelector("#descriere").innerText = json.weather[0].description;
    document.querySelector("#umiditate").innerText = json.main.humidity;
    document.querySelector("#presiune").innerText = json.main.pressure;
    document.querySelector("#temperatura").innerHTML = `${json.main.temp} &#8451`;
    document.querySelector("#min").innerHTML = `${json.main.temp_min} &#8451`;
    document.querySelector("#max").innerHTML = `${json.main.temp_max} &#8451`;

    document.querySelector("#gmap_canvas").src = `https://maps.google.com/maps?q=${oras}&t=k&z=13&ie=UTF8&iwloc=&output=embed`;
}



async function getForecast() {
    if(document.querySelector("input").value === "") {
        return;
    }
    document.querySelector(".forecast").classList.remove("hidden");

    let oras = document.querySelector("input").value;
    let response = await fetch(urlForecast + oras);
    let json = await response.json();
    let list = json.list;

    let str = "";
    let currentDate = new Date(list[0].dt_txt);
    let currentDay = currentDate.toString().substr(0, 10);
    let currentHour = currentDate.getHours();
    let freeSpaces = currentHour/3-1;
    console.log(currentDay);


    document.querySelector("#first").innerText = currentDay.substr(4,7);
    document.querySelector("#second").innerText = `${currentDay.substr(4,4)} ${Number(currentDay.substr(8,10))+1}`;
    document.querySelector("#third").innerText = `${currentDay.substr(4,4)} ${Number(currentDay.substr(8,10))+2}`;
    document.querySelector("#forth").innerText = `${currentDay.substr(4,4)} ${Number(currentDay.substr(8,10))+3}`;
    document.querySelector("#fifth").innerText = `${currentDay.substr(4,4)} ${Number(currentDay.substr(8,10))+4}`;


    for(let i=0;i<freeSpaces;i++) {
        str += `<div class="hourly3"></div>`;
    }
    for (let i = 0; i < 40-freeSpaces; i++) {
        let src = String(urlImg) + String(list[i].weather[0].icon) + ".png";
        let date = new Date(list[i].dt_txt);
        let hour = date.getHours();
        let day = date.toString().substr(0, 10);
         
            str += `
                    <div class="hourly3">
                        <img class="cloudy" src=${src}>
                        <span>${hour}:00</span>
                        <span>${list[i].main.temp} &#8451</span>
                        <span>${list[i].weather[0].description}</span>
                    </div>
                `;
        
    }

    document.querySelector(".meteo").innerHTML = str;

    document.querySelector("#gmap_canvas").src = `https://maps.google.com/maps?q=${oras}&t=k&z=13&ie=UTF8&iwloc=&output=embed`
}


