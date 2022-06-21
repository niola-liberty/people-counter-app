//PS: all comments are to check for bugs
//document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("s-btn")
//console.log(countEl)


let count = 0


document.getElementById("btn").addEventListener("click", incremnt)

function incremnt() {
    count = count + 1
    countEl.innerHTML = count
    //console.log(count)
    
}
saveBtn.addEventListener("click", save)
function save(){
     console.log(count)
}



  