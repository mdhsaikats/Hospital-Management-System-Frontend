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

function toggleScheduleForm() {
    const form = document.getElementById('scheduleForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function formatTime(time) {
    let [hours, minutes] = time.split(":");
    let suffix = hours >= 12 ? "PM" : "AM";
    hours = ((hours % 12) || 12).toString();
    return `${hours}:${minutes} ${suffix}`;
}

function addDoctorSchedule() {
    const doctor = document.getElementById("doctorSelection").value;
    const startTime = formatTime(document.getElementById("startTime").value);
    const endTime = formatTime(document.getElementById("endTime").value);
    const timePeriod = `${startTime} - ${endTime}`;
    
    const now = new Date();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentTime = formatTime(`${currentHours}:${currentMinutes}`);
    
    let status = 'Inactive';
    if (currentTime >= startTime && currentTime < endTime) {
        status = 'Active';
    }
    
    const row = `<tr>
        <td>${doctor}</td>
        <td>${timePeriod}</td>
        <td class="${status === 'Active' ? 'status-active' : 'status-inactive'}">${status}</td>
    </tr>`;
    
    document.getElementById("scheduleList").innerHTML += row;
    toggleScheduleForm();
}