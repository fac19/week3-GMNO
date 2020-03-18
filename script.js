//const submitBtn 
const userInput = document.querySelector("#userToDo");
const addButton = document.querySelectorAll("#addListBtn");
let cardList = document.querySelector("#cardList");

/*Need to check if these are live or static nodes*/

function catchUserInput () {
    return userInput.value;
}

addButton.addEventListener("click", function() {
    catchUserInput();
    console.log(catchUserInput());
})

