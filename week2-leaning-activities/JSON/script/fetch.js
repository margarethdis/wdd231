const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("📦 Data recibida:", data);

    // Mostrar los datos en la página
    const container = document.getElementById("post-container");

    container.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
