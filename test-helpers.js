function test(nameOfTest, testFunction) {
    function equal(actual, expected, message = `Expected ${actual} to equal ${expected}`) {
        if (actual === expected) {
            console.log(`Pass: ${message}`);
        } else {
            console.info(`Fail: ${message}`);
        }
    }

    function notEqual(actual, expected, message = `Expected ${actual} not to equal ${expected}`) {
        if (actual !== expected) {
            console.log(`Pass: ${message}`);
        } else {
            console.info(`Fail: ${message}`);
        }
    }

    const assertion = {
        equal,
        notEqual
    }

    console.group(nameOfTest);
    testFunction(assertion);
    console.groupEnd(nameOfTest);
}
