let name = [1,2,3]
let itator = name[Symbol.iterator]()
console.log(itator.next())
console.log(itator.next())
console.log(itator.next())