let passLen = document.getElementById("pass-len").value
let passArray = []

let lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let symbols=[".","?","!","_","@"]
let numbers=[1,2,3,4,5,6,7,8,9,0]

let data = [].concat(lowerCase,upperCase,symbols,numbers)

// console.log(data)

newPassBtn = document.getElementById("new-pass-btn")

newPassBtn.addEventListener('click',generatePassword)

function generatePassword(){
    passLen = document.getElementById("pass-len").value
    passArray = []
    for(let i =0;i<4;i++){
        let password = "" 
        for(let i=0; i<passLen;i++){
            let randIndex = Math.floor(Math.random()*data.length);
            password +=data[randIndex]
        }
        passArray.push(password)
    }
    renderPassHtml(passArray)
}

function renderPassHtml (array){
    const passHtml = passArray.map(pass => {
       return `<input type="text" class="password" onfocus="copyPass()" value="${pass}"></input>`
    }).join('')
    document.getElementById("pass-container").innerHTML = passHtml
}


function copyPass(){
    const copyPass= document.activeElement.value
    document.activeElement.select()
    document.execCommand('copy');
    setTimeout(() => {document.activeElement.value = "Copied"}, 250);
    setTimeout(() => {document.activeElement.value = copyPass}, 600);
}

document.body.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        // generatePassword()
        newPassBtn.click()
    }
});