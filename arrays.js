chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
]

function addElementToBeginningOfArray() {
return  ["milkyway", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  return(chocolateBars.unshift("m&m"))
}
