function validateName(name) {
    const namePattern = /^[A-Za-z\s]+$/; 
    if (name.trim() === "") {
        return "Name is required.";
    } else if (!namePattern.test(name)) {
        return "Name must contain only letters and spaces.";
    }
    return "";
}
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
        return "Email is required.";
    } else if (!emailPattern.test(email)) {
        return "Invalid email format.";
    }
    return "";
}
function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/; 
    if (phone.trim() === "") {
        return "Phone number is required.";
    } else if (!phonePattern.test(phone)) {
        return "Phone number must be 10 digits.";
    }
    return "";
}
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    let nameError = validateName(name);
    let emailError = validateEmail(email);
    let phoneError = validatePhone(phone);

    if (nameError) {
        alert(nameError);
        return false;
    }

    if (emailError) {
        alert(emailError);
        return false;
    }

    if (phoneError) {
        alert(phoneError);
        return false;
    }

    return true; // Form is valid
}
