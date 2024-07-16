function showweatherDetails(event) {
event.preventDefault();

const city = document.getElementById('city').ariaValueMax;
const apiKey ='2f4b631ca95d6d8c3a291f2715fd9f10';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} &#8451;</p>
    <p>Weather: ${data.weather[0].description}</p>`;
})

.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
});
}


document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

async function getWeather() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apikey ='2f4b631ca95d6d8c3a291f2715fd9f10';
    const url = `https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API KEY}`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}C</p>
            <p>Description: {data.weather[0].description}</p>
            `;
        } else {
            throw new Error(data.message);
        }

    } catch (error) {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    }
}
