const addCardButton = document.querySelector(".add-card__button");
const cardTitle = document.querySelector(".add-card__text"); 
const cardContainer = document.querySelector(".card-container");
const cardForm = document.querySelector(".add-card");
const cardTemplate = document.querySelector("#todo-card");

// const taskInput = domFragment.querySelector(".card__user-input");
const listForm = document.querySelector(".card__list-form");
const listItem = document.querySelector(".card__list-item");
const cardList = document.querySelector(".card__list");
let index = 0;

let listIndex = 0;

function createCard() {
    // if (cardTitle.value == '') {
    //     alert('Please add a title for your task list and enter.'); //CAN THIS BE REMOVED (feel like title should be optional)
    // } else {
        
        index++;
        
        const domFragment = cardTemplate.content.cloneNode(true);

        const fragCardTitle = domFragment.querySelector(".card__title"); 
        fragCardTitle.textContent = cardTitle.value;
        fragCardTitle.classList.add(`card_title${index}`);
        
        // //Test #1
        // test("Does the card title equal the user input text?", t => {
        //     t.equal(cardTitle.value, domFragment.querySelector(".card__title").textContent);
        // })
        
        domFragment.querySelector(".card").className = `card-${index}`;
        
        // //Test #2
        // test("The index should equal the number of cards", t => {
        //     t.equal(index,1);
        // })
        
        domFragment.querySelector(".card__add-list-item-button").className = `card__add-list-item-button${index}`;
        
        domFragment.querySelector(".card_remove-button").addEventListener('click', function () {
            this.parentNode.remove();
            index--; 
            
            // //Test #3
            // test("When the card is removed does in the index = the amount of cards", t => {
            //     t.equal(index, 2);
            // });
            
        });
        
        domFragment.querySelector(`.card__add-list-item-button${index}`).addEventListener('click', addTask);
        
        cardContainer.appendChild(domFragment);
        
    // }
    
    // //Test 4
    // test("This should be empty ready for the new user input", t => {
    //     t.equal(cardTitle.value , "");   
    // });
}

addCardButton.addEventListener('click', () => {
    createCard();
    let onCardTitle = document.querySelector(`.card_title${index}`);
    let cardTitleStr = onCardTitle.textContent;
    storeCard(cardTitleStr);
    cardTitle.value = ""; //cardTitle is defined globally
});

function addTask(e) {
    if (this.previousElementSibling.value == '') {
        alert('Please add a task and press the button.');
    } else {
        listIndex ++;
        // add a list item
        const newListItem = document.createElement('li');
        newListItem.className = 'each-task';
        
        // also add a checkbox.
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = "checkbox";

        checkbox.setAttribute('name', 'contents');

        //if the check box is selected add the checked class and move it to the bottom of the list
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                checkbox.parentNode.classList.add("checkbox-checked");
                newListItem.parentNode.appendChild(newListItem);
            } else {
                checkbox.parentNode.classList.remove("checkbox-checked");
            }
        });
        
        checkbox.addEventListener("keypress", function(e){
            if(e.which === 13){
                this.checked = !this.checked;
            }
        });
        
        // add label for checkbox.
        const labelForCheckbox = document.createElement('label');
        labelForCheckbox.className = 'collection-item';
        labelForCheckbox.setAttribute('for', 'connect' + index);
        
        // Append checkbox to label
        labelForCheckbox.appendChild(checkbox);
        // Create the text node and append to it
        labelForCheckbox.appendChild(document.createTextNode(this.previousElementSibling.value));
        
        // Create remove list button with a class button
        const removeListItemButton = document.createElement("button");
        removeListItemButton.className = `button-${index}`;
        removeListItemButton.textContent = "x";
        labelForCheckbox.appendChild(removeListItemButton);
        removeListItemButton.addEventListener("click", () => {

            newListItem.parentNode.removeChild(newListItem);
            listIndex --;

        })
        
        
        newListItem.appendChild(labelForCheckbox);
                
        this.parentNode.previousElementSibling.appendChild(newListItem);
    }
    
    this.previousElementSibling.value = '';
    
    e.preventDefault();
    
}
