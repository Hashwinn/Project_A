document.getElementById("registration-form").addEventListener("submit", function (e) {
    const firstName = document.getElementById("first").value.trim();
    const lastName = document.getElementById("last").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const rePassword = document.getElementById("repassword").value.trim();
    const contact = document.getElementById("mobile").value.trim();
    const gender = document.getElementById("gender").value.trim();

    // Check for empty fields
    if (!firstName || !lastName || !email || !password || !rePassword || !contact || !gender) {
        e.preventDefault();
        alert("All fields are required!");
        return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert("Invalid email format!");
        return;
    }

    // Validate password (at least one number, one letter, one special character, min 8 chars)
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/;
    if (!passwordPattern.test(password)) {
        e.preventDefault();
        alert("Password must contain at least one number, one letter, one special character, and be at least 8 characters long.");
        return;
    }

    // Confirm password match
    if (password !== rePassword) {
        e.preventDefault();
        alert("Passwords do not match!");
        return;
    }

    // Validate contact number (10 digits)
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contact)) {
        e.preventDefault();
        alert("Contact number must be exactly 10 digits.");
        return;
    }

    alert("Registration successful!");
});
