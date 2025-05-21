function getWeather() {
  const city = document.getElementById("city").value;
  fetch(`weather.php?city=${encodeURIComponent(city)}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
          <h2>${data.name}</h2>
          <p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
            ${data.weather[0].description}
            </p>
          <p>🌡 ${data.main.temp}°C</p>
        `;
      } else {
        document.getElementById("result").innerText = "City not found.";
      }
    })
    .catch(() => {
      document.getElementById("result").innerText = "Error retrieving weather.";
    });
}
