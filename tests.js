// test 1. add a task to list so I can keep track of them.

// create function to add cards.
function addCard(titles){
titles.forEach(index => {
    cardTitle.value = index;
    addCardButton.click();
    cardTitle.value = "";
    });
}

function addListItem(lists){
    for (let i=0; i < lists.length; i++){
    let input = document.getElementsByClassName(`card__user-input-${i+1}`);  //returns a HTML collection
    let button = document.getElementsByClassName(`card__add-list-item-button${i+1}`);
    input[i].value = lists[i]; 
    button[i].click();
    }
}

//
function checkListValues (inputString, test){
    addCard(["monday"]);
    test.equal(document.querySelector(".card__title").innerHTML,"monday");
    addListItem([inputString]);
    test.equal(document.querySelector(".list-item-1").innerHTML,"walk the cat");
}




document.onkeydown = function(event) {  
    switch (event.keyCode) {
        case 37: // if event keyCode == left key then call previousImage function
        addCard(["monday"]);
        break;
        case 39: // if event keyCode == right key then call nextImage function
        test("Check cards are created and list items are added", t =>{
            checkListValues("walk the cat",t);
        });
        break;
        }
}