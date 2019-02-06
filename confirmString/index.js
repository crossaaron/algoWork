let confirmString = (arr) => {
    // convert all letters in array to lower case
    let baseString = arr[0].toLowerCase();
    let checkString = arr[1].toLowerCase();

    //loop through 2nd array and check first array if letters are there
    for (let i = 0; i < checkString.length; i++) {
        if (baseString.indexOf(checkString[i]) === -1) {
            return false
        }
    }
    return true
};

module.exports = confirmString;