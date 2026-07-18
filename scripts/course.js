const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: '...', completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: '...', completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: '...', completed: true },
    { subject: 'WDD', number: 131, title: 'Web Frontend Development I', credits: 2, certificate: 'Web and Computer Programming', description: '...', completed: true },
    { subject: 'WDD', number: 231, title: 'Web Frontend Development II', credits: 3, certificate: 'Web and Computer Programming', description: '...', completed: false }
];

const wrapper = document.getElementById('courses-wrapper');
const creditsElement = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayCourses(filteredCourses) {
    wrapper.innerHTML = '';
    filteredCourses.forEach(course => {
        const badge = document.createElement('div');
        badge.classList.add('course-badge');
        if (course.completed) {
            badge.classList.add('completed');
        }
        badge.textContent = `${course.subject} ${course.number}`;
        wrapper.appendChild(badge);
    });
    
    // Cálculo de créditos usando reduce
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    creditsElement.textContent = totalCredits;
}

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const filter = e.target.getAttribute('data-filter');
        if (filter === 'all') {
            displayCourses(courses);
        } else {
            const filtered = courses.filter(course => course.subject.toLowerCase() === filter);
            displayCourses(filtered);
        }
    });
});

// Carga inicial
displayCourses(courses);