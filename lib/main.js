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
    let noteOb = {
        title: formTitle,
        details: formDetails,
        urgency: formUrgency
    }

    console.log(noteOb)

    //push note into array


    // function addToArr() {
    //     formArr.push(note)
    // }

    // addToArr()


    // function createDiv() {

        // for (let i = 0; i < formArr.length; i++){

            // console.log(formArr[i])
            note = document.createElement('div');
            note.className = "oneNote";
            noteCont = document.getElementsByClassName("noteList")
            noteCont.appendChild(note);  
        
        // }
    // }

    // createDiv()

}

// for (let i = 0; i < formArr.length; i++){

//     console.log(formArr[i])
//     var note = document.createElement('div');
//     note.className = "oneNote";
//     document.querySelector('.noteList').appendChild(note);  

//   }


//create individual divs based off each note in array

// for (let index = formArr.length; index < formArr.length; index++) {
//     console.log(array[index]);
//     function createNoteDiv() {
    
//         var newDiv = document.createElement('div');  
//         newDiv.className = "oneNote";
//         document.querySelector('.noteList').appendChild(newDiv);
    
//         var divTitle = document.createElement("p")
//         divTitle.className = "newNoteTitle"
//         document.querySelector('.oneNote').appendChild(divTitle);
//         divTitle.innerHTML = note[index].formTitle
//         console.log(divTitle.innerHTML)
//         console.log(note[index].formTitle)

        

//         var divDetails = document.createElement("p")
//         divDetails.className = "newNoteDetails"
//         document.querySelector('.oneNote').appendChild(divDetails);
    
    
//         var divUrg = document.createElement("p")
//         divUrg.className = "newNoteUrg"
//         document.querySelector('.oneNote').appendChild(divUrg);
    
    
//     }
//     createNoteDiv()
//   }

// function createNoteDiv() {
    
//     var newDiv = document.createElement('div');  
//     newDiv.className = "oneNote";
//     document.querySelector('.noteList').appendChild(newDiv);

//     var divTitle = document.createElement("p")
//     divTitle.className = "newNoteTitle"
//     document.querySelector('.oneNote').appendChild(divTitle);


//     var divDetails = document.createElement("p")
//     divDetails.className = "newNoteDetails"
//     document.querySelector('.oneNote').appendChild(divDetails);


//     var divUrg = document.createElement("p")
//     divUrg.className = "newNoteUrg"
//     document.querySelector('.oneNote').appendChild(divUrg);


// }