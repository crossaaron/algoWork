//orginial
function sumAll(arr) {
    //determine large number and small Number
    let largeNum = (arr[0] - arr[1]) < 0 ? arr[1] : arr[0];
    let smallNum = (arr[0] - arr[1]) < 0 ? arr[0] : arr[1];

    //alternative solution
    //Math.max(arr[0], arr[1]);
    //Math.min(arr[0], arr[1]);

    let total = 0;

    for (let i = smallNum ; i <= largeNum; i++) {
        total += i;
    }

    return total;
}
console.log(sumAll([5, 10]));