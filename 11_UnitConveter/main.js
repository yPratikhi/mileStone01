// function celsiusToFahrenheit(celsius){
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// const celsius = 12;
// const fahrenheit = celsiusToFahrenheit(celsius);
// console.log(`${celsius} degree to fahrenheit ${fahrenheit}`);

function convert(){
    var c = document.getElementById('data').value;
    var f = (c * 9/5) + 32;
    document.getElementById('res').innerText = `${c}C = ${f}F`;
}
document.getElementById('button').addEventListener('click',()=>{
        convert();
})
