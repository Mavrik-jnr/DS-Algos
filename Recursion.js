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
    console.log(len);
    fibonacci(n);
  }
}
fibonacci(10);
