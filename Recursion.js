// Loop
function sumTo(n){
  let sum = 0
  for (let i=1; i<= n; i++){
      sum+=i
  }
  return sum
}

//Recursion
function sumToRecursion(n){
  if (n==1){
      return 1
  }
  else{
     return n + sumToRecursion(n-1)
  }
}

// arithmetic progression

function sumToAP(n){
  return n * (n+1)/2
}

//Test 100
// console.log("Loop gave", sumTo(100000))
// console.log("Recursion also gave", sumToRecursion(100000))
// console.log("AP gave", sumToAP(100000))

//FACTORIALS

function factorial (n){
  if (n==1){
      return 1
  }
  return n * factorial(n-1)
}
//Test 5
// console.log("Factorial of 5", factorial(5))

function fibR(n){
  let prev = 1
  let prev2 = 1
  // let count =
  for (let i=3; i <=n; i++){
      val = prev + prev2
      prev2 = prev
      prev = val

  }
  return prev
}
function fib(n){
  if (n<=1){
      return n
  }

      return  fib(n-2)-fib(n-1)

  // let count =

}

// console.log(fib(77))
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//recursion
function printList(list){


  if (list){
      console.log(list.value)
      
      printList(list.next)
  }
  // console.log(list)
  return

}

// printList(list)

function printListLoop(list){
  let currentList=list
  while(currentList){
      console.log(currentList.value)
      currentList = currentList.next
  }
}
// printListLoop(list)

//REVERSE A LINKED LIST
function reverseList(list){

  list.prev = list.next
  if (!list.next){
      console.log(list)

      return


  }
  reverseList(list.next)

}

//Collatz Conjecture
let count = 0
function Collatz (n) {
  if (n<=1){
      console.log("n is", n, " Value Conjectured with", count, " steps")
      return
  }
  if (n%2 === 0){
      count+=1
      console.log(n)
      Collatz(n/2)
  }else{
      count+=1
      console.log(n)
      Collatz((3*n) + 1)
  }
  
}
// Collatz(15)

//sum up all nonnegatives
function SumUp(n){

  if (n<=1){
      return n
  }

  return n + SumUp(n-1)
}

// console.log(SumUp(0))

//traverse an n*m Grid to find unique paths. Contraints are you move 1 unit at a time.


function Traverse(n,m, a, b){
  if (n-1 == 0 && m > 1){
      return Traverse(n, m-1)
  }
  if (m-1 ==0 && n >1){
      return Traverse(n-1,m)
  }
  if (n==1 && m==1){
      return 1 + Traverse(b-1, a-1, )
  }
  // if (n==2 && m==2){
  //     return 1 + Traverse(n-1, m-1, a=n, b=m)
  // }
  return Traverse(n-1, m-1, )
}

// console.log(Traverse(2,4))

/**
* @param {string[]} operations
* @return {number}
*/
var calPoints = function (operations) {
  let sum = 0
  let scoreArray = []
  for (let i=0; i<=operations.length; i++) {
      
      let ops = operations[i]
      if (Number.isInteger(+ops)){
          scoreArray.push(+ops)
          sum += +ops
      }
      // We then tackle each and every one of our ops
      switch (ops) {
          case "C":
              sum = sum - scoreArray[scoreArray.length-1]
             scoreArray.pop()
              break
          case "D":
              val = scoreArray[scoreArray.length-1] + scoreArray[scoreArray.length-1]
              sum += val
              scoreArray.push(val)
              break
          case "+":
              console.log(scoreArray)
              val = scoreArray[scoreArray.length-1] + scoreArray[scoreArray.length-2]
              sum += val
              scoreArray.push(val)
              break
          default:
              break

      }

  }
  return sum

};
// console.log(calPoints(["5","2","C","D","+"]))

/**
* @param {string} s
* @return {boolean}
* 
*/

// NOT SOLVED !!!!!
var isValid = function(s) {

  let valid = false
  for (let i=s.length; i >0 ;  i-=2){
      // && i-2 >-1
      // splice(-2, 2)
      console.log("the first and last of the element", s[i-2], s[i-1])
      if (s[i-2] === "(" && s[i-1] === ")"  ){
          console.log(s[i-1], s[i-2])
          valid = true
       
      }
      else{
          valid=false
       
      }
  
  }
  return valid
  
  };



const binarySearchRecur=(arr, n, low, high)=>{
  // low = arr[0]
  // high = arr.length -1
  mid = Math.floor((high +low)/2)
  guess = arr[mid]

  // console.log(guess)
  console.log("THE GREAT MID",guess)

  if (guess === n){
      console.log("the number was found at index", mid)
      return mid
  }
  if (high <low){
      console.log('not found')
      return "not found"
  }

  
  else if (guess < n){
      low = mid + 1
      binarySearch(arr, n, low, high)
  }
  else if (guess > n){
      high = mid - 1
      binarySearch(arr, n, low, high)
  }
}



// binarySearchRecur([1,2, 5, 7, 30, 49, 136, 200,202,208, 400, 600,604, 609], 700, 0, 13)

const binarySearchLoop= (arr,n )=> {

  low = 0
  high = arr.length -1
  while (low<=high){
      mid = Math.floor((high +low)/2)
      console.log(mid)
      if(arr[mid]===n){
          console.log( n,"found at index", mid)
          return mid
      }
      else if (arr[mid] < n){
          low = mid + 1
      }
      else if (arr[mid]>n){
          high = mid- 1
      }
      
 }
//    console.log('nott')
 return "not found"

}

// binarySearchLoop([1,2, 5, 7, 30, 49, 136, 200,202,208, 400, 600,604, 609], 600) 