function retrievePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "b296f70104dc53b5ba8bfc577925cb01";
    let units = "metric";
    let urlEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${urlEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    // console.log(latitude);
    // console.log(longitude);
    // console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
    console.log(response);
    let temperature = Math.round(response.data.main.temp);
    let heading = document.querySelector("h1");
    heading.innerHTML = `The current temperature is ${temperature}℃`;
}

navigator.geolocation.getCurrentPosition(retrievePosition);
// console.log(position);
// console.log(position.coords.latitude);
// console.log(position.coords.longitude);
