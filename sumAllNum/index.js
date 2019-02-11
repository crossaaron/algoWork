//orginial
function sumAll(arr) {
    //determine large number and small Number
    let largeNum = (arr[0] - arr[1]) < 0 ? arr[1] : arr[0];
    let smallNum = (arr[0] - arr[1]) < 0 ? arr[0] : arr[1];

    let diff = largeNum - smallNum
    //initial sum of numbers
    let initNumSum = arr[0] + arr[1]
    let betweenArr = [];
    let total = 0;

    for (let i = smallNum + 1; i < largeNum; i++) {
        betweenArr.push(i);
        total += i;
    }

    let totalSum = total + initNumSum;
    return totalSum;
}
console.log(sumAll([20, 10]));