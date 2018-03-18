function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value) == false)
    {
        alert('Invalid Email Address');
        emailField.focus();
        return false;
    }
}
document.getElementById("fname").addEventListener("input", forceLower);
document.getElementById("lname").addEventListener("input", forceLower);
function forceLower(evt) {
    var words = evt.target.value.split(/\s+/g);
    var newWords = words.map(function (element) {
        element = element.toLowerCase();
        return element !== "" ? element[0].toUpperCase() + element.substr(1, element.length) : "";
    });
    evt.target.value = newWords.join(" ");
}
function validateregister() {
    var nameRegex = /^[a-zA-Z0-9]+$/;
    var validfirstUsername = document.getElementById('uname').value.match(nameRegex);
    var userName = document.getElementById("uname");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var firstname = document.getElementById("fname");
    var lastname = document.getElementById("lname");
    if (email.value === '') {
        alert("Enter email");
        email.focus();
        return false;
    }
    if (validateEmail(email) === false) {
        return false;
    }

    if (typeof userName.value == 'undefined' || !userName.value || userName.value.length === 0 || userName.value === "") {
        alert("Enter Username");
        userName.focus();
        return false;
    }
    if (userName.value.length < 5) {
        alert("Enter atleast 5 chars in username");
        userName.focus();
        return false;
    }
    if (validfirstUsername === null) {
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.document.getElementById('name').focus();
        userName.focus();
        return false;
    }
    if (firstname.value === '' || firstname.value === null) {
        alert("Enter First Name");
        firstname.focus();
        return false;
    }
    if (lastname.value === '' || lastname.value === null) {
        alert("Enter the Last Name");
        lastname.focus();
        return false;
    }
    if (password.value === '' || password.value === null) {
        alert("Enter the Password");
        password.focus();
        return false;
    }
    if (password.value.length < 4) {
        alert("Password field must be at least 4 characters long");
        password.focus();
        return false;
    }
    window.location = 'login.html';
}