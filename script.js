const apiKey ='2451d9592281d059a12c190fb41b1f32'
;  // Replace this with your actual OpenWeatherMap API key.

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city');
        return;
    }

  

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {  // City not found
                alert('City not found. Please check the city name and try again.');
                return;
            }

            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

            document.querySelector('.weather-info').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Something went wrong, please try again later.');
        });
}
