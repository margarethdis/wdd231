// Coordenadas de San Pedro Sula, Honduras
const lat = '15.5042';
const lon = '-88.0250';
const apiKey = 'REEMPLAZA_CON_TU_API_KEY'; // Pegar clave de OpenWeatherMap aquí

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    }
  } catch (error) {
    console.error('Error fetching forecast:', error);
  }
}

function displayCurrentWeather(data) {
  const tempSpan = document.getElementById('current-temp');
  const descSpan = document.getElementById('weather-desc');

  if (tempSpan && descSpan) {
    tempSpan.textContent = Math.round(data.main.temp);
    descSpan.textContent = data.weather[0].description;
  }
}

function displayForecast(data) {
  const forecastContainer = document.getElementById('forecast-container');
  if (!forecastContainer) return;

  forecastContainer.innerHTML = '';

  // Filtra lecturas de mediodía (12:00:00) para 3 días
  const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

  dailyData.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

    const p = document.createElement('p');
    p.innerHTML = `<strong>${dayName}:</strong> ${Math.round(item.main.temp)}°F - ${item.weather[0].description}`;
    forecastContainer.appendChild(p);
  });
}

fetchWeather();
fetchForecast();