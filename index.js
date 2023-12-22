console.log("Array Practice questions");
//https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/
//Peak elements in array
let arr1 = [1, 5, 2, 3, 7, 8, 10];

function peakElement(arr) {
  let len = arr.length;
  if (len === 1) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] > arr[i + 1]) {
      console.log("Peak element", arr[i]);
    } else if (i === len - 1 && arr[i] > arr[i - 1]) {
      console.log("Peak element", arr[i]);
    } else if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      console.log("Peak element", arr[i]);
    }
  }
}

// peakElement(arr1);

//----------------------------------------------------------------------------------------
// find the minimum (or maximum) element of an array
let arr2 = [5, 4, 3, 8, 0, 6, 5, 2, -1];

function minMax(arr) {
  let max = -Infinity;
  let min = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}
// console.log(minMax(arr2));

//----------------------------------------------------------------------------------------
//program to reverse an array or string
let arr3 = [5, 4, 3, 7, 6, 8, 0];

function reverseArray(arr) {
  let len = arr.length;
  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }

  return arr;
}
// console.log(reverseArray(arr3));

//-------------------------------------------------------------------------------------
//Sort an array

let arr4 = [5, 8, 6, 2, 3, 0, 9, 7, 2, 0, 1];
///-------- Bubble Sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort(arr4));

//---------- Selection sort

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    console.log(arr[max]);
    let temp = arr[max];
    arr[max] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }

  return arr;
}

// console.log(selectionSort(arr4));
