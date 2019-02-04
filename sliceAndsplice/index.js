let frankenSplice = (arr1, arr2, n) => {
    let frankenArray = arr2.slice();

    for (let i = 0; i < arr1.length; i++) {
        frankenArray.splice(n, 0, arr1[i]);
        n++
    }
    return frankenArray;
};

module.exports = frankenSplice;