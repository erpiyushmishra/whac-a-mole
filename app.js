const squares=document.querySelectorAll('.square')
const score=document.querySelector('#score')
const time_left=document.querySelector("#time-left")
let moleSquareId
let result=0
let time=60





function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    randomNo=Math.floor(Math.random()*9)
    squares[randomNo].classList.add('mole')
    moleSquareId=squares[randomNo].id


}

timerId=setInterval(randomSquare,500)

squares.forEach(square => {
    square.addEventListener('mousedown', checkAnswer)
})


function checkAnswer(){
    userClick=this.id
    if (userClick==moleSquareId){
        result++
        score.textContent=result
        moleSquareId=null
    }
}

function countdown(){
    time--
    time_left.textContent=time
    if (time==0){
        clearInterval(timerIntervalId)
        clearInterval(timerId)
        alert("Your time expired. Your Score is "+result)
    }


}

timerIntervalId=setInterval(countdown, 1000)