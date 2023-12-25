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
    let temp = arr[max];
    arr[max] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }

  return arr;
}

// console.log(selectionSort(arr4));

//--------- Insertion sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// console.log(insertionSort(arr4));

//-------------------------merge sort

//-------------------- Quick sort

//-----------------------------------------------------------------------
//Kth largest elements in array

function kthLargest(arr, k) {
  let sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[k - 1];
}
// console.log(kthLargest(arr4, 2));

//-----------------------------------------------------------------------
//count the occurance of element

function countElement(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }
  console.log(count);
}

// console.log(countElement(arr4));

//-------------------------------------------------------------------------
//Program to reverse each word in sentence

let str = "Welcome to Javascript world";

function reverseWordsString(str, del) {
  return str.split(del).reverse().join(del);
}
// let str2= reverseWordsString(str,'')
// console.log(reverseWordsString(str2,' '))

//-------------------------------------------------------------------------
//Anangram

const str2 = "army";
function isAnagram(str1, str2) {
  const obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) {
      obj[str2[i]] = obj[str2[i]] - 1;
    } else {
      return false;
    }
  }

  return true;
}
// console.log(isAnagram(str2, "mary"));

//----------------------------------------------------------------------
//fibonacci series

function fibonacci(term) {
  let prev = 0;
  let curr = 1;
  let next;
  console.log(prev);
  console.log(curr);
  for (let i = 2; i < term; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
    console.log(next);
  }
}
// fibonacci(5);

//-----------------------------------------------------------------------
//Armstrong number

function armstrongNumber(num) {
  let temp = num;
  let calcNum = 0;
  while (temp > 0) {
    let lastD = temp % 10;
    temp = parseInt(temp / 10);
    // calcNum = calcNum * 10 + lastD;
    calcNum = calcNum + lastD ** 3;
  }
  return calcNum;
}
// console.log(armstrongNumber(153));

//-------------------------------------------------------------------
//Factorial

function factorial(num) {
  let result = 1;
  if (num == 0 || num == 1) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(5));

//--------------------------------------------------------------------------
//Palindrome

function isPalindrome(str) {
  let len = str.length - 1;
  for (let i = 0; i <= parseInt(len / 2); i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }

  return true;
}

// console.log(isPalindrome("aabaa"));

//--------------------------------------------------------------------------
//Remove duplicate values from an array in javascript

function duplicateRemoval(arr) {
  let set = new Set([...arr]);
  return [...set];
}
// console.log(duplicateRemoval([4, 2, 2, 4, 7, 5, 6]));

//--------------------------------------------------------------------------
//Add two arrays values of same index and create another array

function addArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i] + arr2[i];
  }
  return result;
}
// console.log(addArray([1, 4, 4, 6, 8, 9], [2, 6, 5, 8, 3, 1]));

//---------------------------------------------------------------------------
// 2:0 => 2 is element of arr2 and 0 is how many times 2 is repeating in arr1;

let arr5 = [3, 4, 5, 6, 5, 4, 5];
let arr6 = [2, 3, 4, 5, 6];

function calculateNumber(arr1, arr2) {
  let result = arr2.map((item) => {
    let count = arr1.reduce((acc, ele) => {
      if (ele === item) {
        acc = acc + 1;
      }
      return acc;
    }, 0);
    return `${item}:${count}`;
  });
  return result;
}

// console.log(calculateNumber(arr5, arr6));

//-------------------------------------------------------------------------
//Convert nested object into flat obj

let student = {
  name: "Saurabh",
  address: {
    present: {
      city: "Ara",
      pincode: 802301,
    },
    office: {
      city: "Vadodara",
      pincode: 201301,
    },
  },
};

function flattenObj(obj, name, final) {
  if (typeof obj !== "object") {
    return;
  }

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenObj(obj[key], name + "_" + key, final);
    } else {
      final[name + "_" + key] = obj[key];
      console.log(key);
    }
  }

  return final;
}

// console.log(flattenObj(student, "student", {}));

//------------------------------------------------------------------------------

//write function for add(a)(b)(c).....();

function add(a) {
  return (b) => {
    return b ? add(a + b) : a;
  };
}

// console.log(add(3)(5)());

//------------------------------------------------------------------------------
// Convert multi-dimenstional array to array

let multiDimen = [1, 2, [3, 4], [5, 6, 7], [[8], 9], 10];

function flattenArray(arr, result = []) {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(flattenArray(multiDimen, [], 0));

//--------------------------------------------------------------------------
// write programs to sort only positive number in array

let arr7 = [-1, 2, 5, 8, -5, 6, 0, 6];
function sortPositive(arr) {
  let eliminatedArr = arr.filter((item) => item > 0);
  return eliminatedArr.sort((a, b) => a - b);
}

// console.log(sortPositive(arr7));

//-------------------------------------------------------------------------
//Remove duplicate keys and merge arrays values of an object in javascript

let originalArr = [
  { id: 1, elements: [1, 2] },
  { id: 2, elements: [5, 6] },
  { id: 2, elements: [8, 7] },
  { id: 3, elements: [8, 10] },
];

function removeDuplicateKey(arr) {
  let result = arr.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].elements.push(...item.elements);
    } else {
      acc[item.id] = item;
    }
    return acc;
  }, {});

  return Object.values(result);
}

// console.log(removeDuplicateKey(originalArr));

//-------------------------------------------------------------------
//Program to shift zero at last in an array

let arr8 = [1, 0, 2, 3, 0, 7, 9, 0, 10];

function shiftZeroAtEnd(arr) {
  let count = 0;
  let arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < arrLen) {
    arr[count++] = 0;
  }

  return arr;
}

// console.log(shiftZeroAtEnd(arr8));

//---------------------------------------------------------------------
//Program to fetch student object which marks average is greater than other students

let students = [
  { name: "Ram", marks: [70, 60, 80, 65, 90] },
  { name: "Shyam", marks: [80, 64, 70, 75, 81] },
  { name: "Mohan", marks: [90, 64, 80, 75, 58] },
];

function fetchStudent(obj) {
  let result = obj.reduce(
    (acc, item) => {
      let total = item.marks.reduce((ac, it) => ac + it, 0);
      let average = total / 5;
      if (acc.average < average) {
        return { row: item, average: average };
      }
      return acc;
    },
    { row: {}, average: 0 }
  );
  return result;
}

// console.log(fetchStudent(students));

//----------------------------------------------------------------------------
// program to return 0dd repeating values of an array with count
//output : ['a:1','d:3']

let originalArr2 = ["a", "b", "c", "a", "b", "c", "a"];

function collectRepeating(arr) {
  let count = arr.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});

  let result = [];
  for (let key in count) {
    if (count[key] % 2 === 1) {
      result.push(`${key}:${count[key]}`);
    }
  }
  return result;
}

// console.log(collectRepeating(originalArr2));

//-------------------------------------------------------------------------------------
//Same key value put together in array

//output ==> { 'ABC':[123,786],'XYZ':[456]}

let input = [
  { type: "ABC", value: 123 },
  { type: "XYZ", value: 786 },
  { type: "ABC", value: 786 },
];

function simlarKey(arr) {
  let result = arr.reduce((acc, item) => {
    if (acc[item.type]) {
      acc[item.type].push(item.value);
    } else {
      acc[item.type] = [item.value];
    }
    return acc;
  }, {});

  return result;
}

// console.log(simlarKey(input));

//------------------------------------------
//Remove duplicate from given array

//------------------------------------------
//Find to max sum of chunk of array
