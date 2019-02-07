let chunkArray = (arr, size) => {
  let newArr = [];

  while(arr.length) {
      newArr.push(arr.splice(0,size));
  }
    return newArr;
};

module.exports = chunkArray;