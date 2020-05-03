arrA= ['pera', 'uva', 'maca', 'limao']
arrB = ['banana', 'pera', 'mexirica', 'limao', 'abacate']

const newArr = arrA.concat(arrB)

//console.log(newArr)

console.log(Array.from(new Set(newArr)))

//console.log([...new Set(newArr)])
