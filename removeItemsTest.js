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


test("testing", t => {
    t.equal(2, 3);
})