let confirmEnding = (str,target) => {
    //slices the string based on length of the target
    let wordPiece = str.slice(str.length - target.length);
    //returns true/false if target equals the end of the word
    return wordPiece === target;
};


module.exports = confirmEnding;

