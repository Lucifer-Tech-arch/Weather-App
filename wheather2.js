const apikey = "9f3316faa84c535a2279f7e8ede82ac5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let temp = document.querySelector(".temp");
let winddata = document.querySelector("#winddata")
let humiddata = document.querySelector("#humiddata");
let search = document.querySelector("#search");
let btn = document.querySelector(".box");
let icon = document.querySelector(".weathericon");

async function cheakweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humiddata.innerHTML = data.main.humidity + "%";
    winddata.innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
        icon.src = "cloudy.png";
    }
    else if (data.weather[0].main == "Rain") {
        icon.src = "rain.png";
    }
    else if (data.weather[0].main == "Haze") {
        icon.src = "haze.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "clear.png";
    }
    else if(data.weather[0].main =="Mist") {
        icon.src = "mist.png";
    }

}
btn.addEventListener("click", () => {
    cheakweather(search.value);
})
