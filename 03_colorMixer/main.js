var color1 = prompt("Enter th Color");
var color2 = prompt("Enter the Color");

switch(color1 +" "+color2){
    case "red blue":
    case "blue red":
        document.body.style.backgroundColor="orange";
        break;
    case "red yellow":
    case "yellow red":
        document.body.style.backgroundColor="purple";
        break;
    case "blue yellow":
    case "yellow blue":
        document.body.style.backgroundColor="green";
        break;
        default:
            document.write("This color is not Present.....");
}












// // Define two strings representing colors
// var color1 = "red";
// var color2 = "yellow";

// // Use a switch statement to determine the resulting color
// switch (color1 + " " + color2) {
//   case "red blue":
//   case "blue red":
//     console.log("purple");
//     break;
//   case "red yellow":
//   case "yellow red":
//     console.log("orange");
//     break;
//   case "blue yellow":
//   case "yellow blue":
//     console.log("green");
//     break;
//   default:
//     console.log("Invalid color combination");
// }