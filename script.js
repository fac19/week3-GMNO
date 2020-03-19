const addCardButton = document.querySelector(".add-card__button");
const cardTitle = document.querySelector(".add-card__text");
const cardContainer = document.querySelector(".card-container");
const cardForm = document.querySelector(".add-card");
const cardTemplate = document.querySelector("#todo-card");

// const taskInput = domFragment.querySelector(".card__user-input");
const listForm = document.querySelector(".card__list-form");
const listItem = document.querySelector(".card__list-item");
const cardList = document.querySelector(".card__list");
let index = 1;



function createCard() {
    // I tried including 'required' inside html input tag, but it doesn't seem to work, hence the if statement. 
    if(cardTitle.value == '') {
        alert('Please add a title for your task list and enter.');
    } else {
        
        const domFragment = cardTemplate.content.cloneNode(true);
        domFragment.querySelector(".card__title").innerHTML = cardTitle.value;
        
        domFragment.querySelector(".card").className = `card-${index}`; 
        
        domFragment.querySelector(".card__add-list-item-button").className = `card__add-list-item-button${index}`;
        
        domFragment.querySelector(".card_remove-button").addEventListener('click', function (e) {
            this.parentNode.remove();
        });
        
        
        domFragment.querySelector(`.card__add-list-item-button${index}`).addEventListener('click', addTask);

        
        
        cardContainer.appendChild(domFragment);
        
    }
    // Once user press the 'add' button, the box should be empty, ready for next input. 
    cardTitle.value = '';
}



addCardButton.addEventListener('click', () => {
    createCard();
    index ++;
});

//

function addTask(e) {
    
    if(this.previousElementSibling.value == '') {
        alert('Please add a task and press the button.');
    } else {
        
        // add a list item
        const newListItem = document.createElement('li');
        newListItem.className = 'each-task';
        
        // also add a checkbox.
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('name', 'contents');
        
        // add label for checkbox.
        const labelForCheckbox = document.createElement('label');
        labelForCheckbox.className = 'collection-item';
        labelForCheckbox.setAttribute('for', 'connect'+index);
        
        // Append checkbox to label
        labelForCheckbox.appendChild(checkbox);
        // Create the text node and append to it
        labelForCheckbox.appendChild(document.createTextNode(this.previousElementSibling.value));
        
        newListItem.appendChild(labelForCheckbox);
        
        //add event listener so that when the 
        
        this.parentNode.previousElementSibling.childNodes[1].appendChild(newListItem)
        
    }
    
    // Once user press the 'add' button, task input box should be empty for next task. 
    this.previousElementSibling.value = '';
}

/*            // if(document.querySelector(".card__user-input").value == '') {
//     alert('Please add a task and press the button.');
// } else {
// console.log(`hey this is button${index}`); */