
const screen = document.querySelector(".screen-result")
const number = document.querySelectorAll(".bouton .number")

//console.log(number);


for(let i =0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        screen.innerText = screen.textContent + number[i].textContent
    })
}

function resultat(){
    try{
        screen.innerText = eval(screen.textContent)
        screen.style.color = "green"
    } 
    catch{
        screen.innerText = "Math Error"
        screen.style.color = "red"
    }
}

function reset(){
    screen.innerText = "0"
    screen.style.color = "white"
}