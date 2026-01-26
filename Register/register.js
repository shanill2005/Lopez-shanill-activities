function login() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const confirm = document.getElementById('confirm').value;

   const errorElement = document.getElementById('error');

   if (username.length === 0) {
    errorElement.innerHTML = "username is required";
    errorElement.style.display = "block";
   }
   else if(password.length === 0) {
    errorElement.innerHTML = "password is required";
    errorElement.style.display = "block";
   }
   else if (confirm.length === 0) {
    errorElement.innerHTML = "comfirm your password";
    errorElement.style.display = "block";
   }
   else if(password !== confirm) {
    errorElement.innerHTML = "passwords do not match";
    errorElement.style.display = "block";
   }
   else {
    errorElement.style.display = "none";
    alert('Login successfully!');
   }
    
}

