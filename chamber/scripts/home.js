// --- CONFIGURACIÓN DE DATOS ---
const apiKey = 'e89989fdd1211f0e2985b848ebe0e7ae'; 
const lat = '15.50'; 
const lon = '-88.03'; 
// Usamos "weather" para clima actual en lugar de "forecast" si solo quieres el momento, 
// pero mantendré tu forecast porque es más completo para la tarea.
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const membersUrl = 'data/members.json'; 

// --- SECCIÓN 1: CLIMA ---
async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            // Si la API falla o está desactivada, mostramos el clima de prueba
            showMockWeather();
        }
    } catch (error) {
        console.error("Error al obtener el clima:", error);
        showMockWeather(); // Respaldo si no hay internet
    }
}

function displayWeather(data) {
    const currentDiv = document.querySelector('#current-weather');
    const forecastDiv = document.querySelector('#forecast');
    
    const current = data.list[0];
    const description = current.weather[0].description;
    const icon = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
    
    currentDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
            <img src="${icon}" alt="${description}" style="background: #eee; border-radius: 50%;">
            <div>
                <p style="font-size: 1.5rem; margin:0;"><strong>${Math.round(current.main.temp)}°C</strong></p>
                <p style="margin:0; text-transform: capitalize;">${description}</p>
                <p style="margin:0; font-size: 0.8rem;">Humedad: ${current.main.humidity}%</p>
            </div>
        </div>
    `;

    let forecastHTML = '<h3 style="text-align:center; margin-top:10px;">Próximos Días</h3><div style="display:flex; justify-content:space-around; font-size:0.9rem;">';
    const forecastIndices = [8, 16, 24];
    
    forecastIndices.forEach(index => {
        const dayData = data.list[index];
        const date = new Date(dayData.dt_txt).toLocaleDateString('es-HN', { weekday: 'short' });
        forecastHTML += `
            <div style="text-align:center;">
                <p style="margin:0; font-weight:bold;">${date.toUpperCase()}</p>
                <p style="margin:0;">${Math.round(dayData.main.temp)}°C</p>
            </div>
        `;
    });
    forecastHTML += '</div>';
    forecastDiv.innerHTML = forecastHTML;
}

// Función de respaldo (Mock)
function showMockWeather() {
    const currentDiv = document.querySelector('#current-weather');
    currentDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
            <img src="https://openweathermap.org/img/w/01d.png" alt="soleado" style="background: #eee; border-radius: 50%;">
            <div>
                <p style="font-size: 1.5rem; margin:0;"><strong>31°C</strong></p>
                <p style="margin:0;">Soleado (SPS)</p>
            </div>
        </div>`;
}

// --- SECCIÓN 2: SPOTLIGHTS ---
async function fetchSpotlights() {
    try {
        const response = await fetch(membersUrl);
        const members = await response.json();
        
        const eligibleMembers = members.filter(m => 
            m.membershipLevel === "Gold" || m.membershipLevel === "Silver"
        );
        
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffled.slice(0, 3);
        
        displaySpotlights(selectedMembers);
    } catch (error) {
        console.error("Error al cargar los miembros:", error);
    }
}

function displaySpotlights(members) {
    const container = document.querySelector('.spotlight-container');
    if(!container) return;
    container.innerHTML = ''; 
    
    members.forEach(m => {
        const card = document.createElement('section'); // Cambiado a section para mejor semántica
        card.className = 'spotlight-card';
        
        card.innerHTML = `
            <h3>${m.name}</h3>
            <p class="level-tag">${m.membershipLevel} Member</p>
            <hr>
            <p><strong>Phone:</strong> ${m.phone}</p>
            <p><strong>URL:</strong> <a href="${m.website}" target="_blank">Website</a></p>
            <p><em>${m.other || ''}</em></p>
        `;
        container.appendChild(card);
    });
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchSpotlights();
});