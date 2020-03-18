// const addCardButton = document.querySelector(".add-card__button");
// const cardTitle = document.querySelector(".add-card__title");
// const cardContainer = document.querySelector(".card-container");
// const cardForm = document.querySelector(".add-card");
// const cardTemplate = document.querySelector("#toDoCard");


// function createCard() {
//     const domFragment = cardTemplate.content.cloneNode(true);
//     domFragment.querySelector(".card__title").textContent = cardTitle.value;
//     domFragment.querySelector(".card__remove-button").addEventListener('click', function () {
//         this.parentNode.remove();
//     });
//     cardContainer.appendChild(domFragment);
//     addListItem();

// }
// addCardButton.addEventListener('click', createCard);


function addListItem(){
    const userInput = document.querySelector(".card__user-input");
    const addButton = document.querySelector(".card__add-li-button");
    const listTemplate = document.querySelector("#cardListItem")
    //let cardList = document.querySelector(".card__list");
    //Need to check if these are live or static nodes
    //console.log(addButton);
    addButton.addEventListener("click", () => {
        
    });
}
addListItem(); //to test 