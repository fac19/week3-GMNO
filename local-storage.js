
// Reminder notes on local storage:
// if(localStorage){
//     localStorage.setItem("name", "Peter");
//     console.log(localStorage.getItem("name"));
//     localStorage.removeItem("name");
// }else{
//     alert("Your browser does not support local storage")
// }

if(localStorage){
    localStorage.clear(); 

    function storeCard(callStoreCardFunctions) {
        cardObj = {   //need to get this info from the card
            "cardTitle": "hello", //change to actual card title
            "cardDesctiption": "monday shopping", //cahnge to actual card description
        };

        listItemObj = {};

        function storeListItems(){
            const listItemArray = ["item1", "item2", "item3"]; //change-to-actual-list-item (in the node list)
            for(let i=0; i<listItemArray.length; i++){
                listItemObj[`${i}`] = listItemArray[i]; 
            } //this would not work, as it needs to be dynamically updated when a list item is added. 
        }

        //delete if not required:
        storeCardFunctions = {
            storeListItems,
        }; //as this needs to be called elsewhere.
        callStoreCardFunctions(storeCardFunctions);

        //save objects to local storage (as JSON strings)
        let cardInfo = "card" + index + "Info";
        let cardTasks = "card" + index + "Tasks"; 
        localStorage.setItem(cardInfo, JSON.stringify(cardObj));
        localStorage.setItem(cardTasks, JSON.stringify(listItemObj));

        //for testing (gets storage items)
        console.log(localStorage.getItem(cardInfo));
        console.log(localStorage.getItem(cardTasks));
    }//call this function inside createCard function script.js.
    storeCard(s => s.storeListItems()); 
    //storeCard(); //for testing

    function removeStoredCard() {
        //this function should remove storage data for a card if the user deletes the card

    }//call this function inside removeCard function in script.js


    function getCards() {
        //this function should get local storage data, and restore the to-do list from this data
    }

}else{
    alert("Your browser does not support local storage")
}