function register() {
    const username =document.getElementById('username').value;
    const password =document.getElementById('password').value;
    const confirm =document.getElementById('confirm').value;

    if(username.length === 0) {
        alert("Username required");
    }
    
    else if(password.length === 0) {
        alert("Password required");
    }

     else if(confirm.length== 0) {
        alert("Password required");
    }

    else if(password !== confirm) {
        alert('Password mismatch');
    }

    else {
        alert('Registered successfully');
    }
}



