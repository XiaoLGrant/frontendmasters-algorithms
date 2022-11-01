// Task 1: Without peeking, write your own recursive factorial method

function calcFactorial(n) {
    let p = 1
    function calc (n) {
        p *= n
        if (n === 1) {
          return p
        } else {
          return calc(n - 1)
        }
    }
    return calc(n)
  }
  
  console.log(calcFactorial(5), 120)
  console.log(calcFactorial(4), 24)
  
  // Task 2: Use your memo function from the previous exercise to memoize your factorial method
  
  function calcMemoizedFactorial(n) {
    let p = 1
    let cache = {}
    function calc (n) {
      if (cache.hasOwnProperty(n)) {
        return cache[n]
      } else {
        p *= n
        if (n === 1) {
          cache[n] = p // will save result under key of 1, not sure how to fix this
          console.log(cache)
          return cache[n]
        } else {
          return calc(n - 1)
        }
      }
    }
    return calc(n)
  }
  
  console.log(calcMemoizedFactorial(5), 120)
  console.log(calcMemoizedFactorial(4), 24)
  
  
  //SOLUTION
  const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (n in cache) {
        console.log('Fetching from cache', n);
        return cache[n];
      }
      else {
        console.log('Calculating result', n);
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    }
  }
  const factorial = memoize(
    (x) => {
      if (x === 0) {
        return 1;
      }
      else {
        return x * factorial(x - 1);
      }
    }
  );