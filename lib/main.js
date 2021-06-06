var subButton = document.querySelector("#submit")

subButton.addEventListener("mouseover", turnOn);

function turnOn() {
    subButton.style.background = "#ff4d007c";
}

subButton.addEventListener("mouseout", turnOff);

function turnOff() {
    subButton.style.background = "#ff4d00";
}

var x = HTMLFormElement.name

console.log(x)

//on submit, collect info + create object "note"

//note object will have title, details, and urgency

//push note into array

//create individual divs based off each note in array