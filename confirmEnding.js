function confirmEnding(str, target) {

//slices the string based on length of the target
    let wordPiece = str.slice(str.length - target.length);
    // console.log(wordPiece === target);
    return wordPiece === target;

}


//*** Test Cases *****

// TEST 1  Expected True
if (confirmEnding("Bastian", "n") === true) {
    console.log("Test 1 passed");
}  else {
    console.log("Test 1 Failed");
}

// TEST 2  Expected true
if (confirmEnding("the cow jumped over the moon", "moon") === true) {
    console.log("Test 1 passed");
}  else {
    console.log("Test 1 Failed");
}

// TEST 3  Expected false
if (confirmEnding("Bastian", "apple") === true) {
    console.log("Test 1 passed");
}  else {
    console.log("Test 1 Failed");
}

// TEST 4 Expected false
if (confirmEnding("the cow jumped over the moon", "the cow jumped") === true) {
    console.log("Test 1 passed");
}  else {
    console.log("Test 1 Failed");
}

