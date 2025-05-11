const currentPage = location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a ");

navLinks.forEach(link => {
    if (link.getAttribute("href")=== currentPage) {
        link.classList.add("active");
    }
});