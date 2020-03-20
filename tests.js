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

function checkListValues (inputString, test){
    addCard(["monday"]);
    test.equal(document.querySelector(".card__title").innerHTML, "monday");
    addListItem([inputString]);
    test.equal(document.querySelector(".list-item-1").innerHTML, "walk the cat");
}


// "Deleting an entry removes it from the list"


document.onkeydown = function(event) {  
    switch (event.keyCode) {
        case 37:
        // test 2. check to see if items are checked off the list
        test("Checking an entry marks it as complete", t =>{
            let checkbox = document.getElementsByClassName(`checkbox-${1}`);
            checkbox[0].checked = true;
            t.equal(document.querySelector(".checkbox-1").checked, true);
        });
        break;
        case 39: 
        test("Submitting a new task adds it to the list", t =>{
            checkListValues("walk the cat",t);
        });
        break;
        case 38: 
        test("Deleting an entry removes it from the list", t => {
            let removeButton = document.getElementsByClassName("button-1");
            // removeButton[0].click();
            let list = document.getElementsByClassName("each_task");
            console.log(list);
            // t.equal(document.)
        });
        }
}