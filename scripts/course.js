// 1. Lista de cursos (Base de datos local)
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will teach them how to solve problems with code...',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to HTML and CSS...',
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more proficient with the Python programming language...',
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with HTML and CSS and introduces JavaScript...',
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, compliance, and performance optimization...',
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the concepts of object-oriented programming...',
        completed: false
    }
];

// 2. Función para mostrar los cursos en el HTML
function displayCourses(filteredCourses) {
    const courseContainer = document.querySelector("#course-list");
    
    // Limpiamos el contenedor antes de agregar los nuevos
    courseContainer.innerHTML = "";

    filteredCourses.forEach(course => {
        // Creamos el elemento del curso
        const card = document.createElement("div");
        card.classList.add("course-card");

        // Si el curso está completado (true), le ponemos una clase para el color
        if (course.completed) {
            card.classList.add("completed");
        }

        // Agregamos el texto (ejemplo: WDD 231)
        card.textContent = `${course.subject} ${course.number}`;
        
        // Lo metemos al contenedor
        courseContainer.appendChild(card);
    });

    // Bonus: Calcular el total de créditos mostrados
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector("#total-credits").textContent = `Total Credits: ${totalCredits}`;
}

// 3. Configuración de los botones de Filtro
const allBtn = document.querySelector("#all");
const cseBtn = document.querySelector("#cse");
const wddBtn = document.querySelector("#wdd");

// Evento para mostrar todos
allBtn.addEventListener("click", () => {
    displayCourses(courses);
});

// Evento para filtrar por CSE
cseBtn.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

// Evento para filtrar por WDD
wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

// 4. Llamada inicial al cargar la página por primera vez
displayCourses(courses);