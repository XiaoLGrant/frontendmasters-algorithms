//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively 
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result

//attempt
function merge1(arr1, arr2) {
  let merged = []

  let index = 0
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[index] < arr2[index]) {
      merged.push(arr1[index])
      arr1 = arr1.slice(1)
    } else {
      merged.push(arr2[index])
      arr2 = arr2.slice(1)
    }
  }
  return merged
}

function mergesort1(arr) {
  if (arr.length === 1) {
    return arr
  } else {
    let split = arr.length / 2
    let leftHalf = arr.slice(0, split)
    let rightHalf = arr.slice(split)
    let leftSorted = mergesort(leftHalf)
    let rightSorted = mergesort(rightHalf)
    return merge(leftSorted, rightSorted)
  }
}


//SOLUTION
function merge(arr1, arr2) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      result.push(arr1[leftIndex])
      leftIndex++
    } else {
      result.push(arr2[rightIndex])
      rightIndex++
    }
  }
  return result.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex))
}

function mergesort(arr) {
  if (arr.length === 1) {
    return arr
  } else {
    const middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergesort(left), mergesort(right))
  }
}
console.log(mergesort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
console.log(mergesort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(mergesort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
