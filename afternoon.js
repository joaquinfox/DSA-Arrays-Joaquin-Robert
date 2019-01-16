'use strict';

// function URLify(string) {
//   let newString = string.split('');
//   console.log(newString);
//   for(let i = 0; i < newString.length; i++) {
//     if(newString[i] === ' ') {
//       newString[i] = '%20';
//     }
//   }
//   return newString.join('');
// }

// console.log(URLify('www.thinkful.com /tauh ida parv een'));

// function filter(arr) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] >= 5) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(filter([1, 3, 5, 4, 6, 7, 8, 9]));

// function maxSum(arr) {
//   let max = arr[0];
//   let current = 0;
//   for(let i = 0; i < arr.length; i++) {
//     current = current + arr[i];
//     console.log(current);
//     if( current > max ) {
//       max = current;
//     }
//   }
//   return max;
// }

// console.log(maxSum([4,6,-3,5,-2,1]));

// function mergeArray(arr1, arr2) { 
//   let newArr = [...arr1,...arr2]; 
//   return newArr.sort(function(a, b){
//     return a-b;
//   }); 
// }

// console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// function merge(arr1, arr2) {
//   let newArr = [...arr1, ...arr2];
//   console.log(newArr);
//   for(let i = 0; i < newArr.length; i++) {
//       if(newArr[i] < newArr[])


//     for(let j = 0; j < arr2.length; j++) {
//       if(arr1[i] < arr2[j]) {
//         newArr.push(arr1[i]);
//       } else {
//         return newArr.push(arr2[j]);
//       }
//     }
//   }
//   return newArr;
// }

// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// function removeChar(string, removedCharacters) {
//   let notUseable = [];
//   for(let i = 0; i < removedCharacters.length; i++) {
//     notUseable.push(removedCharacters[i]);
//   }
//   let newString;
//   for(let i = 0; i < string.length; i++) {
//     if (string[i])
//   }
//   return notUseable;
// }

// function removeChar(string) {
//   let oldString = string;
//   let newStringArr = oldString.match(/[^aeiou]/ig);
//   let newString = '';
//   for(let i = 0; i < newStringArr.length; i++) {
//     newString = newString+newStringArr[i];
//   }
//   return newString;
// }

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny'));

// function products(arr) {
//   let newArr = [];
//   let poppedArr;
//   let product;
//   for(let i =0; i < arr.length; i++) {
//     arr.splice(i, 1);
//     console.log(arr);
//     // for(let i = 0; i < poppedArr.length; i++) {
//     //   product = poppedArr[i] * poppedArr[i + 1] * poppedArr[i + 2];
//     //   newArr.push(product); 
//     }
//     return newArr;
//   }
// // }

// console.log(products([1, 3, 9, 4]));

// function twoD(arr) {
//   let columns = [];
//   for(let i = 0; i < arr.length; i++ ) {
//     for(let j = 0; j < arr[i].length; j++) {
//       columns.push(arr[j][i]);
//       console.log('Columns', columns);
//     }
//   }

//   for(let i = 0; i < arr.length; i++) {
//     let rowSum = arr[i][0] + arr[i][1] + arr[i][2] + arr[i][3] + arr[i][4];
//     if(rowSum !== 5) {
//       arr[i][0] = 0;
//       arr[i][1] = 0;
//       arr[i][2] = 0;
//       arr[i][3] = 0;
//       arr[i][4] = 0;
//     }
//   }
//   return arr;
// }

// console.log(twoD([[1,0,1,1,0],
//                   [0,1,1,1,0],
//                   [1,1,1,1,1],
//                   [1,0,1,1,1],
//                   [1,1,1,1,1]]));