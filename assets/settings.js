// Get modal elements
const modal = document.getElementById('settingsModal');
const settingsButton = document.getElementById('settingsButton');
const closeModal = document.getElementById('closeModal');
const darkModeToggle = document.getElementById('darkModeToggle');

// Function to open the modal
settingsButton.onclick = function() {
    modal.style.display = 'block';
}

// Function to close the modal
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
    document.body.querySelector("nav").classList.toggle("light-mode")
    
    const modalmain = document.querySelectorAll('.modal');
    modalmain.forEach(modalmain => {
        modalmain.classList.toggle('light-mode');
    });

    const modalcontent = document.querySelectorAll('.modal-content');
    modalcontent.forEach(modalcontent => {
        modalcontent.classList.toggle('light-mode');
    });

    const navItems = document.querySelectorAll('.navitem');
    navItems.forEach(item => {
        item.classList.toggle('light-mode');
    });

    const titles = document.querySelectorAll('.title');
    titles.forEach(title => {
        title.classList.toggle('light-mode');
    });

    const subtitles = document.querySelectorAll('.subtitle');
    subtitles.forEach(subtitle => {
        subtitle.classList.toggle('light-mode');
    });

    const expandable = document.querySelectorAll('.expandable');
    expandable.forEach(expandable => {
        expandable.classList.toggle('light-mode');
    });

    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.classList.toggle('light-mode');
    });

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.toggle('light-mode');
    });

    const footers = document.querySelectorAll('footer');
    footers.forEach(footer => {
        footer.classList.toggle('light-mode');
    });
}

// Dark Mode Toggle
darkModeToggle.onchange = function() {
    if (this.checked) {
        toggleLightMode();
        localStorage.setItem('darkMode', 'true');
    } else {
        toggleLightMode();
        localStorage.setItem('darkMode', 'false');
    }
}

console.warn("Loaded settings.js");