document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;
    
    if (username === "admin" && password === "29112003") {
        window.location.href = "dashboard.html"; // Change to your actual webpage
    } else {
        alert("Invalid credentials");
    }
});
