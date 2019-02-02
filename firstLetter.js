function titleCase(str) {
    let wordArray = str.toLowerCase().split(' ');

    let result = wordArray.map( word => {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    });

    return result.join(' ');

}
console.log(titleCase("leFt handed MINDS are USuallly Right"));



