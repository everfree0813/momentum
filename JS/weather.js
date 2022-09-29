const API_KEY = "67d3ac468c96c5489a710e37f98f703b";

function onGeoOk(position) {

    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            // const name = data.name;
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        });
}

function onGeoError() {
    alert("I can't find you. No weater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);