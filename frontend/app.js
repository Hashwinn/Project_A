document.getElementById("registration-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        e.preventDefault();
        alert("All fields are required!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        e.preventDefault();
        alert("Invalid email format!");
        return;
    }

    alert("Registration successful!");
});
