function test(nameOfTest, testFunction) {

    function equal(actual, expected, message = `Expected ${actual} to equal ${expected}`) {
        if (actual === expected) {
            console.log(`Pass: ${message}`);
        } else {
            console.info(`Fail: ${message}`);
        }
    }

    assertion = {
        equal
    }

    console.group(nameOfTest);
    testFunction(assertion);
    console.groupEnd(nameOfTest);
}

// Testing to the test
// test("testing", t => {
//     t.equal(2, 3);
// })



// test("Should check if there is 1 list item in card__list", t => {
//     //This test is currently not updating dynamically (with respect to the add-list-item-button)
//     //Therefore it is always a fail test or always a pass test
//     //Therefore it currently does not work. 

//     const expected = 0; //
//     //console.log(document.querySelector(".card__list").childNodes);
//     const result = document.querySelector(".card__list").childNodes.length;
//     // console.log(result);
//     t.equal(result, expected)

// })