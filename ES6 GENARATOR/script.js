///===========Symbol itaretor 
// let name = [1,2,3]
// let itator = name[Symbol.iterator]()
// console.log(itator.next())
// console.log(itator.next())
// console.log(itator.next())



////////////========genaretor
function *genaretor(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    return "Done";
}
let gen = genaretor()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())