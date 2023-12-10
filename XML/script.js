
const GET_API = document.querySelector(".GET_API")
const SEND_API = document.querySelector(".SEND_API")

function SendDATA (methort,url,data){
    const promise = new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(methort, url)
        xhr.send(data)
        xhr.responseType = "json"

        xhr.onload = function (){
            if(xhr.status >= 400){
             reject(xhr.response)   
            }else{
            resolve(xhr.response)
            }
        }
        xhr.onerror= function (){
            reject("Something wrong !")
        }
    })
 
    return promise

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
}
function GetFunction(){
    SendDATA("GET", "https://jsonplaceholder.typicode.com/todos/1").then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
 })

}

function SendFunction(){
    SendDATA("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })).then((res) => {
        console.log(res)
    })
    .catch((err) => {
       console.log(err)
})

}







GET_API.addEventListener("click", GetFunction)
SEND_API.addEventListener("click", SendFunction)

