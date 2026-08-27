const form = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        showMessage("Please enter your name.");
        return;
    }

    if (email === "" || !isValidEmail(email)) {
        showMessage("Please enter a valid email address.");
        return;
    }

    if (phone === "" || !isValidPhone(phone)) {
        showMessage("Please enter a valid 10-digit phone number.");
        return;
    }

    if (department === "") {
        showMessage("Please select a department.");
        return;
    }

    if (message === "") {
        showMessage("Please enter your message.");
        return;
    }

    formMessage.textContent =
        "Appointment request submitted successfully!";

    formMessage.style.marginTop = "10px";

    form.reset();
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}
function showMessage(message) {
    formMessage.textContent = message;
    formMessage.style.marginTop = "10px";
    
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});