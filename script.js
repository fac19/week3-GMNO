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
    const addListItemButton = document.querySelector(".card__add-li-button");
    const listTemplate = document.querySelector("#cardListItemTemplate");
    const listInput = document.querySelector(".card__user-input");
    const cardList = document.querySelector(".card__list")
    //let cardList = document.querySelector(".card__list");
    //Need to check if these are live or static nodes
    //console.log(addButton);
    addListItemButton.addEventListener("click", () => {
        const listFragment = listTemplate.content.cloneNode(true); 
        listFragment.querySelector(".card__list-item").textContent = listInput.value;
        cardList.appendChild(listFragment);
        console.log(listFragment);
    });
}
addListItem(); //to test 

function removeListItem(){
    const removeListItemButton = document.querySelector(".card__list-remove-button")
    console.log(removeListItemButton);
    //write a function which removes a list item when a button is clicked.
}