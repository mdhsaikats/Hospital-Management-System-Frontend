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


    // Mobile sidebar toggle
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.body.insertBefore(menuToggle, document.body.firstChild);
    
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

 // Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Get the profile container and dropdown
    const profile = document.querySelector('.profile');
    const dropdown = document.querySelector('.profiledown');
    const closeButton = document.querySelector('.close-btn');

    // Toggle 'show' class when profile is clicked
    profile.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    // Close the dropdown when the close button is clicked
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent closing when clicking the close button
        dropdown.classList.remove('show'); // Close the dropdown
    });
});

/*For the dropdown*/
function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdownContent");
    var button = document.querySelector(".user-dropdown button");
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

function addUser(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var idNumber = document.getElementById("idNumber").value;
    var designation = document.getElementById("designation").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var joiningDate = document.getElementById("joiningDate").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (!fullName || !idNumber || !designation || !email || !phone || !address || !dob || !joiningDate || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    alert("User " + fullName + " added successfully!");
    document.getElementById("dropdownContent").style.display = "none";
}

/*For permission Part*/

function togglePermissionsDropdown() {
    var dropdown = document.getElementById("permissionsDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    var permissionsDropdown = document.getElementById("permissionsDropdown");
    var permissionsButton = document.querySelector(".permissions-dropdown button");
    
    if (!permissionsButton.contains(event.target) && !permissionsDropdown.contains(event.target)) {
        permissionsDropdown.style.display = "none";
    }
});

function savePermissions(event) {
    event.preventDefault();
    var role = document.getElementById("userRole").value;
    alert("Permissions updated for role: " + role);
    document.getElementById("permissionsDropdown").style.display = "none";
}