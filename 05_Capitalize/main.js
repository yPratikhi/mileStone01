const btn = document.getElementById("btn");

btn.addEventListener('click',text=()=>{

    // Get user's name as input
    let textBox = document.getElementById("textBox").value;
    // Check if first letter is lowercase
    let firstLetter = textBox.charCodeAt(0);
    // Capitalize it if needed using ternary operator
    textBox = (firstLetter >= 97 && firstLetter <= 122) ? textBox[0].toUpperCase() + textBox.slice(1) : textBox;
    console.log(textBox);
    // Display modified name
    let output = document.getElementById("output").innerHTML = "Your name is : "+ textBox;
})





