// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25

//attempt -- errors out/won't stop looping
function makeChange1(num) {
  let coins = 0
  let total = num
  while (total > 0) {
    if (total - 25 > 0) {
      total -= 25
      coins++
    } else if (total - 10 > 0) {
      total -= 10
      coins ++
    } else if (total - 5 > 0) {
      total -= 5
      coins++
    }
  }
  return coins
}

//solution
function makeChange2(coins, amount){
  coins.sort((a, b) => b - a)
  let totalCoins = 0
  let i = 0
  while (amount > 0){
    if (coins[i] <= amount) {
      amount -= coins[i]
      totalCoins++
    } else {
      i++
    }
  }
  return totalCoins
}


// input amount: 40 , output # of coins: 3 (25, 10, 5)
console.log(makeChange2([25, 10, 5], 40))
// input amount: 35, output # of coins: 2 (25, 10)
console.log(makeChange2([25, 10, 5], 35))

//BRUTE FORCE: RECURSION SOLUTION
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
  recursionCounter++;
  console.log(`${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if(minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

makeChange(10);

//DYNAMIC PROGRAMMING: MEMOIZATION & RECURSION
const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
  // Return the value if it’s in the cache
  if (cache[c]) return cache[c];

  let minCoins = -1;

  // Find the best coin
  coins.forEach(coin => {
    if (c - coin >= 0) {
      let currMinCoins = makeChange(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins
      }
    }
  })

  // Save the value into the cache
  cache[c] = minCoins + 1;
  return cache[c];
}

console.log(makeChange(12));
