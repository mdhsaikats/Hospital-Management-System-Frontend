// Dropdown Toggle for Sidebar Links
const dropdowns = document.querySelectorAll(".nav-list li a");

dropdowns.forEach(item => {
    item.addEventListener("click", function (event) {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains("dropdown-menu")) {
            event.preventDefault(); // Prevent default link action
            submenu.classList.toggle("active");
        }
    });
});

// Mobile Sidebar Toggle
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");

if (sidebar && menuToggle) {
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
} else {
    console.error("Sidebar or toggle not found!");
}


// Profile Dropdown Toggle
const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.profiledown');
const closeButton = document.querySelector('.close-btn');

if (profile && dropdown && closeButton) {
    profile.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });

    closeButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent closing when clicking the close button
        dropdown.classList.remove('show'); // Close the dropdown
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!profile.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
} else {
    console.error("Profile elements not found!");
}


    
    
    
