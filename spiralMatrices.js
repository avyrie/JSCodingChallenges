// Write a function that takes in an n x m array and returns a one-dimensional array of all the array's elements in spiral order.
// Ex. array = [
// [1, 2, 3, 4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10, 9, 8, 7]
// ]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

let array1 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
]


// ----- Solution #1 -----

const spiral = (arr) => {
    const spiralArr = []
    let endRow = arr.length;
    let endCol = arr[0].length;
    let begRow = 0;
    let begCol = 0;
    while (endRow > begRow && endCol > begCol) {
      for (let i = begCol; i < endCol; i++) {
        spiralArr.push(arr[begRow][i]);
      }
      begRow++;
      if (begRow === endRow) {
        break;
      }
      for (let i = begRow; i < endRow; i++) {
        spiralArr.push(arr[i][endCol - 1]);
      }
      endCol--;
      if (begCol === endCol) {
        break;
      }
      for (let i = endCol - 1; i >= begCol; i--) {
        spiralArr.push(arr[endRow - 1][i]);
      }
      endRow--;
      if (begRow === endRow) {
        break;
      }
      for (let i = endRow - 1; i >= begRow; i--) {
        spiralArr.push(arr[i][begCol]);
      }
      begCol++;
      if (begCol === endCol) {
        break;
      }
    }
    return spiralArr;
  } 
  console.log(spiral(array1))

  // Thank you to Nate Daniels