// ///===========Symbol itaretor 
// // let name = [1,2,3]
// // let itator = name[Symbol.iterator]()
// // console.log(itator.next())
// // console.log(itator.next())
// // console.log(itator.next())



// ////////////========genaretor
// function *genaretor(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     yield 6;
//     return "Done";
// }
// let gen = genaretor()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())




// // all genarator function 

// function *name(){} 
// function * name(){} 
// function* name(){} 


// // class genarator function
// class myclass{
//     *myFun(){
        
//     }
// }

// // object litareal 
// const myclasss = {
//     *myFun2(){

//     }
// }



// genaretor function
// let object = {
//     name1: 1,
//     name2: 2,
//     name3: 3,
//     name4: 4,
//     name5: 5,
// }

// function *myFun(object){
//     let arr = Object.entries(object)
//     for(let array of arr){
//         yield array[1]
//     }}
// let fun = myFun(object)



// for(let element of fun){
//     console.log(element)
// }



//////genaretor yeild
// function *myFun(start,end,step){
//     let current = start;
//     while(current < end){
//         yield current;
//         console.log("How")
//         current += step;
//     }
    

// }
// let curr = myFun(0,1000,5)
// console.log(curr.next())
// console.log(curr.next())



///////genaretor flow
// function *genarator(num1,num2){
//     let k = yield num1 + num2  
//     let l = yield num1 + num2  + k
//     yield num1 + num2  + k + l

// }
// let gen = genarator(10,20)
// console.log(gen.next()) 
// console.log(gen.next(50)) 
// console.log(gen.next(100)) 




/////genaretor asyne await

function takeOrder (costomer){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order taken for ${costomer}`)
        }, 1000);
    })
}

function procesOrder (costomer){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order progress for ${costomer}`)
        }, 1000);
    })
}

function completedOrder (costomer){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order complete for ${costomer}`)
        }, 1000);
    })
}


async function* solution(customer){
    yield await takeOrder(customer)
    yield await procesOrder(customer)
    yield await completedOrder(customer)
}

let gen = solution("mahin")
// console.log(gen.next())
gen.next().then(({value}) =>
    console.log(value))
gen.next().then(({value}) =>
    console.log(value))
gen.next().then(({value}) =>
    console.log(value))