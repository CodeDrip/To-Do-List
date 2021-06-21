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



noteArr = []

var formElem = document.querySelector("form")


//Add to Array first with div ID i indicator

// Call from Array with i to make correct div




formElem.onsubmit = function createNote(e) {

    e.preventDefault()



    var note = document.createElement('div');
    var noteList = document.querySelector('.notelist')


    var newTit = document.createElement('p')
    var newDet = document.createElement('p')
    // var newUrg = document.createElement('p')

    // var paraSec = document.querySelector('.oneNote')
    // var newNoteTitle = document.querySelector('.newNoteTitle')
    // var newNoteDetails = document.querySelector('.newNoteDetails')
    // var newNoteUrg = document.querySelector('.newNoteUrg')

    formTitle = document.querySelector("#taskTitle").value
    formDetails = document.querySelector("#taskDetails").value
    formUrgency = document.querySelector("#urgency").selectedIndex
    i = noteArr.length


    class Note {
        constructor(formTitle, formDetails, formUrgency, i){
            this.formTitle = formTitle;
            this.formDetails = formDetails;
            this.formUrgency = formUrgency;
            this.i = i + 1;
        }

        // check(){
        //     console.log("form urgency is: ", this.formUrgency, "in console")
        //     return this.formUrgency
        // }
        
        makeColor() {

        // if (this.formUrgency = 0) {

        //     document.querySelector(`#note${newNote.i}`).style.backgroundColor = "white"
        //     console.log("white")
        //     console.log(newNote)
        //     console.log(newNote.formUrgency)

        // }
        }
        // makeDiv(){

        //     note.className = "oneNote";
        //     noteList.appendChild(note); 

        //     newPara.className = "newNoteTitle"
        //     newPara.innerHTML = this.formTitle

        //     var paraSec = document.querySelector('.oneNote')
        //     paraSec.appendChild(newPara)
        // }
        // addToArr() {
        //     noteArr.push(this.Note)
        // }
        
    }

    var newNote = new Note(formTitle, formDetails, formUrgency, i);

    console.log(newNote.formUrgency)
    // newNote.check()
    // newNote.makeDiv()
    // newNote.addToArr()

    var thisInfo = newNote.formUrgency

    function addToArr() {
        noteArr.push(newNote)

    }

    addToArr()

    // console.log(noteArr)

    function makeDiv(){

        note.className = "oneNote";
        note.id = `note${newNote.i}`
        // noteList.appendChild(note); 
        noteList.insertAdjacentElement('beforeend', note);

        newTit.className = "newNoteTitle"
        newTit.id = `title${i}`
        newTit.innerHTML = newNote.formTitle

        newDet.className = "newNoteTitle"
        newDet.id = `title${i}`
        newDet.innerHTML = newNote.formDetails

        var paraSec = document.getElementById(`note${newNote.i}`)
        paraSec.insertAdjacentElement('beforeend', newTit);
        paraSec.insertAdjacentElement('beforeend', newDet);


        console.log(newNote.formUrgency)

        console.log(thisInfo)



        if (thisInfo = 0) {

            document.querySelector(`#note${newNote.i}`).style.backgroundColor = "white"
            console.log("white")
            console.log(newNote)
            console.log(newNote.formUrgency)
        } else if (newNote.formUrgency = 1) {
            paraSec.style.backgroundColor = "grey"
            console.log("grey")
            console.log(newNote)
            console.log(newNote.formUrgency)
        } else {
            paraSec.style.backgroundColor = "black"
            console.log("black")
            console.log(newNote)
            console.log(newNote.formUrgency)
        }

    }

    makeDiv()

    console.log(thisInfo)

    // if (thisInfo = 0) {

    //     document.querySelector(`#note${newNote.i}`).style.backgroundColor = "white"
    //     console.log("white")
    //     console.log(newNote)
    //     console.log(newNote.formUrgency)
    // }

    // newNote.makeColor()

}

console.log(noteArr)

// for (let i = 0; i < noteArr.length; i++){
    // console.log(noteArr)
// }