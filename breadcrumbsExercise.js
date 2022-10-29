//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

//attempt
// const uniqSort = function(arr) {
//   const breadcrumbs = {};
//   let repeat = true
//   let noDuplicates = []
//   for (let i = 0; i < arr.length; i++) {
//     console.log(breadcrumbs[arr[i]])
//     if (breadcrumbs[arr[i]]) {
//       repeat = false
//     } else {
//       breadcrumbs[arr[i]] = true
//       noDuplicates.push(arr[i])
//       // arr = [...arr.slice(0, i), ...arr.slice(i+1)]
//       // console.log(arr.slice(0, i), i)
//     }
//   }
  
  
//   return noDuplicates.sort((a, b) => a - b);
// };

//solution
const uniqSort = function(arr) {
    const breadcrumbs = {}
    const result = []
    for (let i = 0; i < arr.length; i++) {
      if (!breadcrumbs[arr[i]]){
        result.push(arr[i])
        breadcrumbs[arr[i]] = true
      }
    }
    return result.sort((a,b) => a - b)
  }
  
  console.log(uniqSort([4,2,2,3,2,2,2])); // => [2,3,4]