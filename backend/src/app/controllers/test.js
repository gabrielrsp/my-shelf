let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates
