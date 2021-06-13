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

// formArr = []



formElem.onsubmit = function createNote(e) {

    e.preventDefault()

    formTitle = document.querySelector("#taskTitle").value
    formDetails = document.querySelector("#taskDetails").value
    formUrgency = document.querySelector("#urgency").value
    // formArr = []
    class Note {
        constructor(formTitle, formDetails, formUrgency){
            this.formTitle = formTitle;
            this.formDetails = formDetails;
            this.formUrgency = formUrgency;
        }

        check(){
            console.log("form urgency is: ", this.formUrgency, "in console")
        }
        
    }

    var newNote = new Note(formTitle, formDetails, formUrgency);

    console.log(newNote)
    newNote.check()
  
  

}

