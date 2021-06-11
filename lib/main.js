var subButton = document.querySelector("#submit")

subButton.addEventListener("mouseover", turnOn);

function turnOn() {
    subButton.style.background = "#ff4d007c";
}

subButton.addEventListener("mouseout", turnOff);

function turnOff() {
    subButton.style.background = "#ff4d00";
}


//note object will have title, details, and urgency

formElem = document.querySelector("form")
formTitle = document.querySelector("#taskTitle")
formDetails = document.querySelector("#taskDetails")
formUrgency = document.querySelector("#urgency")
formArr = []
note = {
    title: "",
    details: "",
    urgency: ""
}

//on submit, collect info + create object "note"

formElem.onsubmit = function getNote(e) {

    e.preventDefault()

    console.log("submitted to consle works")
}
//push note into array

//create individual divs based off each note in array