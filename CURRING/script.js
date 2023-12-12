// function myFun(disc){
//     return (price) =>{
//         return price - price * disc

//     }

// }
// let tenParsentDiscount = myFun(0.5)===============///partial function
// let price = tenParsentDiscount(500)
// console.log(price)














//////curry 
// function curry(func){
//     return function curried(...array){
//         if(array.length >= func.length){
//             return func.apply(this, array)
//         }else{
//              return function(...array2){
//                 return curried.apply(this, array.concat(array2))

//              }
//         }

//     }
    
// }


// function sum(a,b,c){
//     return a + b + c
// }

// let curriedsum = _.curry(sum)
// console.log(curriedsum(1,2,3))
// console.log(curriedsum(1)(10,6))
// console.log(curriedsum(1)(2)(3))













// curring fun date
// function log(date,importence,message){
//     console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${importence} : ${message}`)
// }

// let sum = _.curry(log)



// sum(new Date(), "New Debug" , "Some debug")
// let logNow = sum(new Date())
// logNow("mahin", "Message")















// curring arrow
const multiplay = (a) => (b) => (c) => a * b* c;
console.log(multiplay(1)(3)(2))