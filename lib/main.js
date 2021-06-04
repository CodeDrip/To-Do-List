var myH3 = document.querySelector("h3")

myH3.addEventListener("mouseover", turnBlue);

function turnBlue() {
    myH3.style.color = "blue";
}

myH3.addEventListener("mouseout", turnBlack);

function turnBlack() {
    myH3.style.color = "black"
}