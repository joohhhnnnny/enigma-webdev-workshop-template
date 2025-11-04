 function loginForm(){

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Your username change it whenever you want bro.
    const username = "robertotoy";


    if(email == "robertdoe@example.com" && password =="123"){

        alert("Login Successfully");

        // put your username for this in this localStorage to display Dashboard page 
        localStorage.setItem ("username", username);
        window.location.href = "html/dashboard.html"
    
    }else{
        alert('Invalid Credentials');

    }


}
