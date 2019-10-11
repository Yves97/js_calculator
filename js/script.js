//globals variables
const screen = document.querySelector(".screen-result")
console.log(screen.textContent.charAt())
const number = document.querySelectorAll(".number")
const result = document.querySelector(".result")
const reset = document.querySelector(".reset")

/*** current numbers on screen */
for(let i =0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        screen.innerText = screen.textContent + number[i].textContent
    })
}

/*result */
result.addEventListener('click',function(){
    try{
        screen.innerText = eval(screen.textContent)
        screen.style.color = "green"
    }
    catch{
        screen.innerText = "Math Error"
        screen.style.color = "red"
    }
    
})

/**reset calculator */
reset.addEventListener('click',function(){
    screen.innerText = "0"
    screen.style.color = "white"
})
