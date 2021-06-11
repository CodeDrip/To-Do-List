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


//on submit, collect info + create object "note"

formElem = document.querySelector("form")

formArr = []



formElem.onsubmit = function createNote(e) {

    e.preventDefault()

    formTitle = document.querySelector("#taskTitle").value
    formDetails = document.querySelector("#taskDetails").value
    formUrgency = document.querySelector("#urgency").value
    // formArr = []
    note = {
        title: formTitle,
        details: formDetails,
        urgency: formUrgency
    }

    //push note into array


    function addToArr() {
        formArr.push(note)
    }

    addToArr()

    console.log(formArr)
    console.log(formArr.length)


}

//create individual divs based off each note in array