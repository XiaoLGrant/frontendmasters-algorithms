//TASK: Implement bubblesort! -- loops through array and bubbles up highest value each time

//attempt
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

//optimized solution
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubblesort(array) {
  var swapped;
  do {
    swapped = false;
    for(let i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array
}

console.log(bubblesort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
console.log(bubblesort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(bubblesort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
