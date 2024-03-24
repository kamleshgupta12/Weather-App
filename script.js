const inputField = document.getElementById("inputTag");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
// console.log(inputField,temp,cityName);
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const clickBtn = document.getElementById("btn");
const cloudIcon = document.querySelector(".weather-icon");
const country = document.getElementById("countyIcon");
const gif = document.querySelector(".png");
const weatherCon = document.querySelector(".weather-container");

const apiKey = "c5655a8f766c7441d775e41339626348";
// let city = "";
async function getData() {
    gif.classList.add("display");
    weatherCon.classList.remove("display");
    try {
        const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await weatherApi.json();
        gif.classList.remove("display");
        weatherCon.classList.add("display");
        console.log(data);
        renderData(data);
    }
    catch {
        // alert("wrong");
    }
}
function renderData(weatherData) {
    temp.innerHTML = `${weatherData?.main?.temp}°C`;
    cityName.innerHTML = weatherData?.name;
    humidity.innerHTML = `${weatherData?.main?.humidity}%`;
    windSpeed.innerHTML = `${weatherData?.wind?.speed}km/h`;
    cloudIcon.src = `http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`;
    country.src = `https://flagcdn.com/144x108/${weatherData?.sys?.country.toLowerCase()}.png`;
    // console.log(temp);
}

function add(e) {
    let inputName = inputField.value;
    city = inputName;
    // console.log(city);
    getData();
}