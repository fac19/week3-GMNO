// const addCardButton = document.querySelector(".add-card__button");
// const cardTitle = document.querySelector(".add-card__title");
// const cardContainer = document.querySelector(".card-container");
// const cardForm = document.querySelector(".add-card");
// const cardTemplate = document.querySelector("#toDoCard");

// function createCard() {
//     const cardFragment = cardTemplate.content.cloneNode(true);
//     cardFragment.querySelector(".card__title").textContent = cardTitle.value;
//     cardFragment.querySelector(".card__remove-button").addEventListener('click', function () {
//         this.parentNode.remove();
//     }); //why can't this be defined as an inline function?--not working as inline
//     cardContainer.appendChild(cardFragment);
//     addListItem();
// }
// addCardButton.addEventListener('click', createCard);


function addListItem() {
    //need to make this relevant to the particular dom fragment
    //i.e. getting bug when multiple cards (several inputs (multiple of number of cards) appear)
    const addListItemButton = document.querySelector(".card__list-add-button");
    const listTemplate = document.querySelector("#cardListItemTemplate");
    const listInput = document.querySelector(".card__user-input");
    const cardList = document.querySelector(".card__list");

    addListItemButton.addEventListener("click", () => {
        const listFragment = listTemplate.content.cloneNode(true);
        listFragment.querySelector(".card__list-item").textContent = listInput.value;
        cardList.appendChild(listFragment);
        //console.log(listFragment);
    });
}
addListItem(); //to test 

function removeListItem() {
    const removeListItemButton = document.querySelector(".card__list-remove-button")
    console.log(removeListItemButton);
    //write a function which removes a list item when a button is clicked.

}