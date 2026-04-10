document.addEventListener("DOMContentLoaded", () => {
    // Inserta la fecha y hora actual en el campo oculto
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toLocaleString();
    }
});