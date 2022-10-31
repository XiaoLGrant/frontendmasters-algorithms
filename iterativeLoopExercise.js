// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {
  
    function recurse(index, resultSoFar) {
      resultSoFar += array[index];
      
      if(index === array.length - 1) {
        return resultSoFar;
      } else {
        return recurse(index + 1, resultSoFar + joinString);
      }
    }
    
    return recurse(0, '');
  }
  
  console.log(joinElements(['s','cr','t cod', ' :) :)'], 'e'));
  
  function joinElementsLoop(array, joinString) {
    //return array.reduce((acc, c) => acc+joinString+c)
    let result = `${array[0]}`
    for (let i = 1; i < array.length; i++) {
      result += joinString + array[i]
    }
    return result
  }
  
  console.log(joinElementsLoop(['s','cr','t cod', ' :) :)'], 'e'));