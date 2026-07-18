// Año automático en el footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Fecha de última modificación
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Menú interactivo para móviles
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuToggle.textContent = navMenu.classList.contains("show") ? "X" : "☰";
});

// Listado dinámico de materias escolares
const courses = [
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2 },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2 },
    { subject: 'WDD', number: 231, title: 'Web Frontend Development I', credits: 2 },
    { subject: 'CSE', number: 110, title: 'Programming Building Blocks', credits: 3 },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 3 }
];

const coursesWrapper = document.getElementById("courses-wrapper");
const totalCreditsEl = document.getElementById("total-credits");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayCourses(filteredCourses) {
    coursesWrapper.innerHTML = "";
    
    if (filteredCourses.length === 0) {
        coursesWrapper.innerHTML = "<p>No courses available</p>";
        totalCreditsEl.textContent = "0";
        return;
    }

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = `course-badge ${course.subject.toLowerCase()}`;
        courseDiv.textContent = `${course.subject} ${course.number}`;
        coursesWrapper.appendChild(courseDiv);
    });

    // Suma e imprime los créditos acumulados
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsEl.textContent = totalCredits;
}

filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");

        if (filterValue === "all") {
            displayCourses(courses);
        } else {
            const filtered = courses.filter(course => course.subject.toLowerCase() === filterValue);
            displayCourses(filtered);
        }
    });
});

// Carga inicial completa
displayCourses(courses);