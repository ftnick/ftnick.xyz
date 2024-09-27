// Get all the navigation links
const navLinks = document.querySelectorAll('nav .navitem');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');
const sections = document.querySelectorAll('main section');

const max = window.screen.width

toggleSidebar.onclick = function() {
    toggleSidebar.classList.toggle('active');
    sidebar.classList.toggle('active');
};

window.onload = function() {
    if (window.innerWidth <= max) {
        sidebar.classList.remove('active'); // Ensure sidebar is hidden on load
    }
};

window.onresize = function() {
    if (window.innerWidth >= max) {
        sidebar.classList.remove('active'); // Show sidebar on wide screens
        toggleSidebar.classList.add("hidden")
    } else {
        toggleSidebar.classList.remove("hidden")
    }
};

// Function to highlight the active link
function highlightActiveLink() {
    let scrollPosition = window.scrollY + 100; // Offset for better visibility

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the current scroll position is within the section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the current section link
            navLinks[index].classList.add('active');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', highlightActiveLink);

console.warn("Loaded sidebar.js");