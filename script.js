document.addEventListener("DOMContentLoaded", function () {
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
});
});

    // Mobile sidebar toggle
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.body.insertBefore(menuToggle, document.body.firstChild);
    
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });