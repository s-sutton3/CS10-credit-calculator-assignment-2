// Event listener
document.getElementById("calculate").addEventListener("click", calcInterest);

// Event function
function calcInterest() {

// Input
let num1 = +document.getElementById("num1");
let num2 = +document.getElementById("num2");
let num3 = +document.getElementById("num3");
let num4 = +document.getElementById("num4");
let num5 = +document.getElementById("num5");

// Process
let interest = (num1 * (1 + num2 / num3) ** (num4 / num5))

// Output
document.getElementById("numInt").innerHTML = interest;
}