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

function toggleAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

// Convert HH:MM to 24-hour format for comparison
function getTimeObject(time) {
    let [hours, minutes] = time.split(":").map(Number);
    return new Date(1970, 0, 1, hours, minutes); // Use a fixed date
}

// Convert HH:MM to AM/PM format for display
function formatTimeDisplay(time) {
    let [hours, minutes] = time.split(":").map(Number);
    let suffix = hours >= 12 ? "PM" : "AM";
    hours = ((hours % 12) || 12).toString();
    return `${hours}:${minutes.toString().padStart(2, '0')} ${suffix}`;
}

function addDoctorAppointment() {
    const doctor = document.getElementById("doctorDropdown").value;
    const startTimeRaw = document.getElementById("appointmentStartTime").value;
    const endTimeRaw = document.getElementById("appointmentEndTime").value;
    
    if (!startTimeRaw || !endTimeRaw) {
        alert("Please select start and end times.");
        return;
    }

    // Convert to display format
    const startTimeDisplay = formatTimeDisplay(startTimeRaw);
    const endTimeDisplay = formatTimeDisplay(endTimeRaw);
    const timePeriod = `${startTimeDisplay} - ${endTimeDisplay}`;
    
    // Get current time
    const now = new Date();
    const currentTime = new Date(1970, 0, 1, now.getHours(), now.getMinutes()); // Fixed date for comparison
    
    // Convert start and end times to objects
    const startTime = getTimeObject(startTimeRaw);
    const endTime = getTimeObject(endTimeRaw);
    
    // Determine status based on time comparison
    let status = currentTime >= startTime && currentTime < endTime ? 'Active' : 'Inactive';

    // Create the table row
    const row = `<tr>
        <td>${doctor}</td>
        <td>${timePeriod}</td>
        <td class="${status === 'Active' ? 'status-active' : 'status-inactive'}">${status}</td>
    </tr>`;
    
    // Append the row correctly
    document.getElementById("appointmentList").insertAdjacentHTML('beforeend', row);
    
    // Toggle form visibility
    toggleAppointmentForm();
}
