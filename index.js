

const allEl = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","'", "<",">",".","?", "/"]

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let pass3 = document.getElementById("pass3");
let pass4 = document.getElementById("pass4");

let inputEl = document.getElementById("input-el")

function generatePass() {
    
    pass1.textContent = ""
    pass2.textContent = ""
    pass3.textContent = ""
    pass4.textContent = ""
    
    for (let i=0; i<inputEl.value; i++){
    let randomEl1 = Math.floor(Math.random()*allEl.length)
    let randomEl2 = Math.floor(Math.random()*allEl.length)
    let randomEl3 = Math.floor(Math.random()*allEl.length)
    let randomEl4 = Math.floor(Math.random()*allEl.length)   
    
    pass1.textContent += allEl[randomEl1]
    pass2.textContent += allEl[randomEl2]
    pass3.textContent += allEl[randomEl3]
    pass4.textContent += allEl[randomEl4]
    }
}

