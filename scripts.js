document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var selected = document.querySelector('input[name="select"]:checked').value;

    if (username === 'admin' && password === '1234' && selected === 'Employee') {
        alert("LogIn Successful as an Employee.");
        window.location.href = 'Home.html';
    } else if (username === 'admin' && password === '1234' && selected === 'Employer') {
        alert("LogIn successfully as Employer");
        window.location.href = 'Home.html';
    }
    else {
        alert('Incorrect username or password.');
    }
});