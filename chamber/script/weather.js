const apiKey = "e871a87727d726e8174b73309d3fe7c2";
const city = "La Ceiba";
const units = "metric";

// API endpoints
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

async function getWeather() {
  try {
    // Clima actual
    const weatherResponse = await fetch(currentWeatherURL);
    const weatherData = await weatherResponse.json();

    const temp = weatherData.main.temp.toFixed(1);
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;

    const weatherHTML = `
      <p><strong>Temp:</strong> ${temp}°C</p>
      <p><img src="${iconURL}" alt="${description}"> ${description}</p>
    `;
    document.getElementById("weather-info").innerHTML = weatherHTML;

    // Pronóstico
    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();

    const forecastList = forecastData.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    ).slice(0, 3); // Próximos 3 días

    const forecastHTML = forecastList.map(day => {
      const date = new Date(day.dt_txt);
      const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
      const dayTemp = day.main.temp.toFixed(1);
      const dayDesc = day.weather[0].description;
      const dayIcon = day.weather[0].icon;
      const dayIconURL = `https://openweathermap.org/img/w/${dayIcon}.png`;

      return `
        <div class="forecast-day">
          <p><strong>${weekday}</strong></p>
          <p><img src="${dayIconURL}" alt="${dayDesc}"> ${dayTemp}°C - ${dayDesc}</p>
        </div>
      `;
    }).join("");

    document.getElementById("forecast-info").innerHTML = forecastHTML;

  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weather-info").innerHTML = "<p>Error loading current weather.</p>";
    document.getElementById("forecast-info").innerHTML = "<p>Error loading forecast.</p>";
  }
}

getWeather();
