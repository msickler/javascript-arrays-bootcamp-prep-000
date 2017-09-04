chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
]

function addElementToBeginningOfArray(array, element) {
return  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
}

function removeElementFromBeginningOfArray(array, element) {
  array.slice(1)
  return array
}
