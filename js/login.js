function validation() {
    var nameRegex = /^[a-zA-Z0-9]+$/;
    var validfirstUsername = document.getElementById('name').value.match(nameRegex);
    var userName = document.getElementById("name");
    var password = document.getElementById("password");
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
    if (password.value === '') {
        alert("Enter the Password");
        password.focus();
        return false;
    }
    if (password.value.length < 4) {
        alert("Password field must be at least 4 characters long");
        password.focus();
        return false;
    }
    return true;
}

function login(e) {
    if (validation() === true) {
        var loginData = [
            {
                "name": "tapmeet",
                "password": "123456"
            },
            {
                "name": "marcus",
                "password": "12345"
            },
            {
                "name": "tripham",
                "password": "1234567"
            }
        ];
        var userValue = document.getElementById('name').value;
        var passwordValue = document.getElementById('password').value;
        for (var i = 0; i < loginData.length; i++) {
            console.log(loginData[i]);
            if (userValue === loginData[i].name && passwordValue === loginData[i].password) {
                console.log('login succ');
                window.location = 'dashboard.html';
                return;
            }

        }
        alert("Invalid Username / Password");
    }
}
