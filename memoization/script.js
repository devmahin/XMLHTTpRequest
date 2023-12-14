

//////////////
// function add(x){
//     return 10 + x
// }

// //////////=====heigher order fun
// function memo (func){
//     let cache = {};
//     return function (x){
//         console.log(cache)
//         if(cache[x]){
//             console.log("Result is cache")
//             return cache[x]
//         }else{
//             console.log("Result")
//             let result = func(x)
//             cache[x] = result
//             return result
//         }
//     }
// }

// let calculater = memo(add);
// console.log(calculater(10))
// console.log(calculater(20))
// console.log(calculater(30))
















///// multiple paramitar

function add(...x){
    console.log(x)
    return x.reduce((sum,current) => sum + current)
}

////////=====heigher order fun
function memo (func){
    let cache = {};

    return function (...x){
         let key = JSON.stringify(x);
        if(cache[key]){
            console.log("Result is cache")
            return cache[key]
        }
        
        else{
            console.log("Result")
            let result = func(...x)
            cache[key] = result
            return result
        }
    }
}
let calculater = memo(add);
console.log(calculater(10,20,30,40))
console.log(calculater(10,20,30,40))
