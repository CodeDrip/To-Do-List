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





var formElem = document.querySelector("form")



formElem.onsubmit = function createNote(e) {

    e.preventDefault()



    var note = document.createElement('div');
    var noteCont = document.querySelector('.notelist')


    // var newPara = document.createElement('p')
    // var paraSec = document.querySelector('.oneNote')
    // var newNoteTitle = document.querySelector('.newNoteTitle')
    // var newNoteDetails = document.querySelector('.newNoteDetails')
    // var newNoteUrg = document.querySelector('.newNoteUrg')

    formTitle = document.querySelector("#taskTitle").value
    formDetails = document.querySelector("#taskDetails").value
    formUrgency = document.querySelector("#urgency").value


    class Note {
        constructor(formTitle, formDetails, formUrgency){
            this.formTitle = formTitle;
            this.formDetails = formDetails;
            this.formUrgency = formUrgency;
        }

        check(){
            console.log("form urgency is: ", this.formUrgency, "in console")
        }

        makeDiv(){

            note.className = "oneNote";
            noteCont.appendChild(note); 
            // newPara.className = "newNoteTitle"
        }
        
    }

    var newNote = new Note(formTitle, formDetails, formUrgency);

    console.log(newNote)
    newNote.check()
    newNote.makeDiv()

}

