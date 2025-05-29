const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("No se pudo obtener la data.");
    }
    const data = await response.json();
    console.log("📦 Data recibida:", data);
  } catch (error) {
    console.error("🚨 Error:", error.message);
  }
};

fetchData();
