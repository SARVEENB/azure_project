function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");

    if (loginForm.style.display === "none"){
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}
// Dummy user database
const user = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //find user in DB
    const user = users.find(user => user.username === username);

    if (user) {
        if(user.password === password) {
            alert('Login successful !');
        } else {
            showError('Incorrect password !');
        }
    } else {
        alert('User not Found!');
    }
    window.location.reload()
});

/// JS fos signup page

document.getElementById('signup-form').addEventListener('submit', function(event) {event.preventDefault();

//clear existing error message
var errormessages = document.querySelectorAll('.error-message');
errormessages.forEach(function(element) {
    element.textcontent = '';
});

//Get from values

var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var confirmpassword = document.getElementById('confirmpassword').value;

//validation check up - If Fields are empty

if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmpassword.trim() === '') {
    showError('please fill in all fields');
    return;
}

//check if password match
if(password !== confirmpassword) {
    showError('confirmpassword', 'Password do not match');
    return;
}else {
    showError('confirmpassword', '', true);
}

// check password length
if(password.length < 9) {
    showError('password', 'Password must be at least 9 characters long');
    return;
}else {
    showError('password', '', true);
}

// check for special characters in password
var specialchars = /[!@#$%^&*(),.?":{}|<>]/;
if (!specialchars.test(password)) {
    showError('password', 'Password must contain at least one special character');
    return;
}else {
    showError('password', '', true);
}

//check for atleast one capital letter in password
var capitalletter = /[A-Z]/;
if(!capitalletter.test(password)){
    showError('password', 'Password must contain at least one capital letter');
    return;
}else {
    showError('password', '', true);
}

//check for atleast one number in password
var number = /[0-9]/;
if(!number.test(password)){
   showError('password', 'Passwors must contain atleast one number');
   return;
}else {
    showError('password', '', true);
}

//Refreshing the page after submission
window.location.reload()

// log the form data to console

console.log('Username:' , username);
console.log('Email:' , email);
console.log('Password:' , password);
console.log('Confirm Password:' , confirmpassword);

});

function showError(inputID, errormessage, hide = false) {
    var errorContainer = document.getElementById(inputID + '-error');
    if(hide) {
        errorContainer.textContent = '';
    } else {
    errorContainer.textContent = errormessage;
    }
}
