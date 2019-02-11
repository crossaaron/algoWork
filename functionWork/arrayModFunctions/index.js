let someArr = ['existing item'];

const addToArray = (arr, itemToAdd) => {
    let newArr = [...arr];
    newArr.push(itemToAdd);
    return newArr;
};

const removeFromArray =  (arr, itemToRemove) => {
    let newArr = [...arr];
    if (newArr.indexOf(itemToRemove) >= 0) {
        newArr.splice(newArr.indexOf(itemToRemove), 1);
        return newArr;
    }
};

console.log(addToArray(someArr, 'added an item'));
console.log(removeFromArray(someArr, 'existing item'));