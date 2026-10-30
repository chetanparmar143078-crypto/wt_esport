// PAGE SWITCHING
function showPage(id) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(id);

    if (page) {
        page.classList.add("active-page");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ADMIN LOGIN
function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "admin") {

        document.getElementById("username").value = "";
        document.getElementById("adminPassword").value = "";

        showPage("admin");
        showAdmin("dashboard");

    } else {

        alert("Incorrect Username or Password!");

    }
}


// ADMIN PANEL
function showAdmin(id) {

    document.querySelectorAll(".admin-tab").forEach(tab => {
        tab.classList.remove("active");
    });

    document.querySelectorAll(".admin-menu").forEach(button => {
        button.classList.remove("active");
    });

    const tab = document.getElementById(id);
    const button = document.getElementById("b-" + id);

    if (tab) {
        tab.classList.add("active");
    }

    if (button) {
        button.classList.add("active");
    }
}


// LOGOUT
function logout() {
    showPage("home");
}


// ERROR MESSAGE
function setError(id, message) {
    document.getElementById(id).textContent = message;
}


// JAVASCRIPT VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("passwordVal").value;
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    // CLEAR OLD ERRORS
    ["nameError", "emailError", "passwordError", "phoneError", "messageError"]
    .forEach(id => setError(id, ""));


    // 1. ALL FIELDS REQUIRED
    if (!name || !email || !password || !phone || !message) {

        alert("All fields are required!");

        if (!name)
            setError("nameError", "Name is required.");

        if (!email)
            setError("emailError", "Email is required.");

        if (!password)
            setError("passwordError", "Password is required.");

        if (!phone)
            setError("phoneError", "Phone number is required.");

        if (!message)
            setError("messageError", "Message is required.");

        return;
    }


    // 2. PASSWORD LENGTH
    if (password.length < 8) {

        setError("passwordError", "Password must contain at least 8 characters.");

        alert("Password must be at least 8 characters long!");

        return;
    }


    // 3. EMAIL PATTERN
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(email)) {

        setError("emailError", "Enter a valid email address.");

        alert("Invalid email format!");

        return;
    }


    // 4. PASSWORD PATTERN
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordPattern.test(password)) {

        setError("passwordError", "Use uppercase, lowercase, number and special character.");

        alert("Password must include uppercase, lowercase, number and special character!");

        return;
    }


    // 5. PHONE NUMBER PATTERN
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        setError("phoneError", "Phone number must contain exactly 10 digits.");

        alert("Enter a valid 10-digit phone number!");

        return;
    }


    // SUCCESS MESSAGE
    alert("Message submitted successfully!");

    this.reset();

});


// CLEAR ERROR WHEN USER TYPES
document.querySelectorAll("#contactForm input, #contactForm textarea").forEach(field => {

    field.addEventListener("input", () => {

        const error = document.getElementById(field.id + "Error");

        if (error) {
            error.textContent = "";
        }

    });

});