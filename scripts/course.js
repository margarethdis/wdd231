const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', indentifier: 'CSE110', completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', indentifier: 'WDD130', completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', indentifier: 'CSE111', completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', indentifier: 'WDD131', completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', indentifier: 'WDD231', completed: false },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', indentifier: 'CSE210', completed: false }
];

function displayCourses(filter = 'all') {
    const container = document.querySelector('#course-list');
    container.innerHTML = ''; // Limpia la lista antes de mostrar

    const filtered = filter === 'all' 
        ? courses 
        : courses.filter(course => course.subject === filter);

    filtered.forEach(course => {
        const div = document.createElement('div');
        div.className = `course-card ${course.completed ? 'completed' : 'not-completed'}`;
        div.innerHTML = `<strong>${course.subject} ${course.number}</strong>`;
        container.appendChild(div);
    });

    // Calcular créditos totales usando reduce
    const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector('#total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Eventos para los botones de filtro
document.querySelector('#all').addEventListener('click', () => displayCourses('all'));
document.querySelector('#wdd').addEventListener('click', () => displayCourses('WDD'));
document.querySelector('#cse').addEventListener('click', () => displayCourses('CSE'));

// Mostrar todos al cargar la página
displayCourses();