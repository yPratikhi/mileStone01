function matchPass(){
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;
    let message = document.getElementById("message");

    if(pw1.length != 0){
        if(pw1 == pw2){
            message.textContent="Password Match";
            message.style.color = "#1dcd59";
        }else{
            message.textContent="Password Not Match"
            message.style.color = "#ff4d4d";
        }
    }else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}