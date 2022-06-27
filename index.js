//PS: all comments are to check for bugs
//document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("s-btn")
let welcomeEl = document.getElementById("welcome")
let saveH = document.getElementById("save-h")

stName = prompt("Hello, please what is your name?", "name")
welcomeEl.innerHTML = "Welcome " + stName;
welcomeEl.innerHTML += "👋"

 count = 0


document.getElementById("btn").addEventListener("click", incremnt)

function incremnt() {
    count += 1
    countEl.innerHTML = count
    //console.log(count)
    
}
saveBtn.addEventListener("click", save)
function save(){ 
    countStr= " " + count + " - "
    saveH.innerHTML += countStr
    countEl.innerHTML = count
    count = 0
     console.log(count)
}



    
