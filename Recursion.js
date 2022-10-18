let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

//my Attempt

var finalVal = 0;

function Recurse(obj) {
  var KEYS = Object.keys(obj);
  var initialVal = 0;
  for (let key of KEYS) {
    if (Array.isArray(obj[key])) {
      finalVal += obj[key].reduce((previousVal, currentVal) => {
        return previousVal + currentVal.salary;
      }, initialVal);
    } else {
      Recurse(obj[key]);
    }
  }
  return finalVal;
}
//   console.log(Recurse(company))

//fibonacci (Recursive way)
var fibsArray = [0];
var counter = 0;
// num;
function fibonacci(n) {
  let len = fibsArray.length;

  if (len == n) {
    console.log(fibsArray);
    return fibsArray;
  } else {
    len == 1 ? (counter = 1) : (counter += fibsArray[len - 2]);
    fibsArray.push(counter);
    fibonacci(n);
  }
}
// fibonacci(10);

//merge sort
function mergeSort(Arr) {
  //variables
  var left;
  var right;
  //base case n<2 return
  if (Arr.length < 2) {
    console.log(Arr);
    return Arr;
  }
  //else divide array into two parts
  else {
    if (Arr.length % 2 == 0 && Arr.length > 2) {
      left = Arr.slice(0, Arr.length / 2);
      right = Arr.slice(Arr.length / 2);
      // console.log(left, right);
    } else {
      left = Arr.slice(0, Arr.length / 2 + 0.5);
      right = Arr.slice(Arr.length / 2 + 0.5);
      // console.log(left, right);
    }
  }

  //mergesort the two parts recursively, which ends up merging them due to below

  //merge the two parts using two way array merge
  return merge(mergeSort(left), mergeSort(right));
}
//call merge sort
finalSort = mergeSort([3, 2, 1, 5, 40, 10]);
console.log(finalSort);

//two way array merger
function merge(Arr1, Arr2) {
  var lft = 0;
  var rgt = 0;
  sortedArr = [];
  while (lft <= Arr1.length && rgt <= Arr2.length) {
    if (Arr1[lft] < Arr2[rgt]) {
      sortedArr.push(Arr1.shift(lft));
      lft++;
    } else {
      sortedArr.push(Arr2.shift(rgt));
      rgt++;
    }
  }
  return [...sortedArr, ...Arr1, ...Arr2];
}

//merge sort (headache version)
// var sortList = [];
// //split func
// var original = [];
// var half;
// var sortedArr

// function mergeSort(Arr) {
//   var first;
//   var second = 2;
//   var list;

//   if (sortList.length == 2) {
//     while (sortList[0].length && sortList[1].length) {
//       // Insert the smallest item into sortedArr
//       if (sortList[0][0] < sortList[1][0]) {
//         sortedArr.push(left.shift())
//       } else {
//         sortedArr.push(right.shift())
//       }
//       return [...sortList, ...sortList[0], ...sortList[1]]

//     }
//     // for (let i of sortList[0]) {
//     //   for (let j of sortList[1]) {
//     //     //work on logic to add list to sortList and append the remaining j
//     //     if (i < j ) {
//     //       list.includes(i)? list.push(j) :
//     //       list.push(i);
//     //       list.push(j);
//     //       continue;
//     //     } else {
//     //       list.includes(j)? list.push(i) :
//     //       list.push(j);
//     //       list.push(i);
//     //       continue
//     //     }
//         //  && list.includes(i))
//         // i<j && !list.includes(j)? list.push(i) :list.unshift(j)
//         // list.push(sortList1)
//       }

//   if (sortList[0].length == original.length) {
//     console.log(sortList[0]);
//     return sortList[0];
//   }
//   if (Arr.length == 2) {
//     Arr[0][0] < Arr[1][0]
//       ? sortList.push([...first[0], ...first[1]])
//       : sortList.push([...first[1], ...first[0]]);
//     return;
//   }

//   // else if (Arr.length>2){
//   //   return mergeSort(Arr)
//   //     // comparing sorted arrays into one
//   //     // for (let i of first[0]){
//   //     //   for (let j of first[1]){
//   //     //     i<j && list.includes(i) && list.includes(j)? list.push(i) :list.unshift(j)
//   //     //   }
//   //     // }
//   //   // }
//   // }

//   if (Arr.length % 2 == 0 && Arr.length > 2) {
//     first = Arr.slice(0, Arr.length / 2);
//     second = Arr.slice(Arr.length / 2);
//     gg = [first, second];
//     for (let splitArr in gg) {
//       splitArr.length == 1 ? sortList.push[splitArr[0]] : mergeSort(splitArr);
//     }
//     // mergeSort(first)
//   } else {
//     first = Arr.slice(0, Arr.length / 2 + 0.5);
//     second = Arr.slice(Arr.length / 2 + 0.5);
//     dd = [first, second];
//     for (let splitArr in dd) {
//       splitArr.length == 1 ? sortList.push[splitArr[0]] : mergeSort(splitArr);
//     }
//   }
//   console.log(first, second);
//   // else if (Arr.length %2 ==0){
//   //   first = Arr.slice(0,arr)
//   // }
// }
// // mergeSort([5]);
