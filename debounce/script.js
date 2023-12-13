const btn = document.getElementById("btn")


function debounce (fn,delay){
    let timeOut;


    return function (){
        if(timeOut){
            clearTimeout(timeOut)
        }
        timeOut =  setTimeout(() => {
            fn()
        }, delay)
    }
}

console.dir(
    debounce ())



btn.addEventListener("click", debounce(function (){console.log("Click")},500 ))