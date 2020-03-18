const addCardButton = document.querySelector(".add-card__button");
const cardTitle = document.querySelector(".add-card__text");
const cardContainer = document.querySelector(".card-container");
const cardForm = document.querySelector(".add-card");
const cardTemplate = document.querySelector("#todo-card");




function createCard(){
const domFragment = cardTemplate.content.cloneNode(true);
domFragment.querySelector(".card__title").innerHTML = cardTitle.value;
domFragment.querySelector(".card_remove-button").addEventListener('click', function (e) {
this.parentNode.remove();
});


cardContainer.appendChild(domFragment);

}


addCardButton.addEventListener('click', createCard);
