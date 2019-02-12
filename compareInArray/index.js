function compareInArray (arr1, arr2) {
    newArr = []

    function checkArray (array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            if (!array1.includes(array1[i]) || !array2.includes(array1[i])) {
                newArr.push(array1[i]);
            }
        }
    }
    checkArray(arr1, arr2);
    checkArray(arr2, arr1);
    return newArr;
}

// using filter more efficient via CodeWars
function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
}

console.log(compareInArray([1,2,3,4], [1,2,3,4,5]));
console.log(array_diff([1,2,3,4], [1,2,3,4,5]));