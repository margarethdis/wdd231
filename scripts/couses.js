
const courses = [
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        credits: 2,
        completed: true
    },

    {
        code:"WDD 131",
        name:"Dynamic Web Fundamentals",
        credits:2,
        completed:false
    },

    {
        code:"WDD 231",
        name:"Front-end Web Development I",
        credits: 2,
        completed: false
    },

    {
        code:"CSE 110",
        name: "Introduction to Programming",
        credits: 2,
        completed: true
    },

    {
        code:"CSE 111",
        name: "Programming with Functions",
        credits: 2,
        completed: true
    },

    {
        code:"CSE 210",
        name:"Programming with Classes",
        credits:2,
        completed: true
    },

    {
        code: "CSE 310",
        name:"Data Structures",
        credits: 2,
        completed:false
    }

]

function displayCourses(courseArray) {
    const container = document.getElementById("course-list");
    container.innerHTML = ""; // Limpia contenido anterior
  
    let totalCredits = 0;
  
    courseArray.forEach((course) => {
      const card = document.createElement("div");
      card.classList.add("course-card");
      if (course.completed) {
        card.classList.add("completed");
      }
  
      // Contenido de la tarjeta
      card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
        <p>Status: ${course.completed ? "✅ Completed" : "❌ Not Completed"}</p>
      `;
  
      totalCredits += course.credits;
      container.appendChild(card);
    });
  
    // Actualizar el total de créditos
    document.getElementById("total-credits").textContent = totalCredits;
  }

  // Mostrar todos los cursos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    displayCourses(courses); // Esta es la función que hicimos en el paso anterior
  });


  // Filtrar cursos por tipo
document.getElementById("all").addEventListener("click", () => {
    displayCourses(courses);
  });
  
  document.getElementById("wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.code.startsWith("WDD"));
    displayCourses(wddCourses);
  });
  
  document.getElementById("cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.code.startsWith("CSE"));
    displayCourses(cseCourses);
  });


  const filterButtons = document.querySelectorAll(".filters button");

function setActiveButton(buttonId) {
  filterButtons.forEach(btn => btn.classList.remove("active"));
  document.getElementById(buttonId).classList.add("active");
}

document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
  setActiveButton("all");
});

document.getElementById("wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(course => course.code.startsWith("WDD"));
  displayCourses(wddCourses);
  setActiveButton("wdd");
});

document.getElementById("cse").addEventListener("click", () => {
  const cseCourses = courses.filter(course => course.code.startsWith("CSE"));
  displayCourses(cseCourses);
  setActiveButton("cse");
});

  
  
  
