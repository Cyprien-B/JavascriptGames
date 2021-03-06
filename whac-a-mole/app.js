const squares = document.querySelectorAll('.square')
const mole =document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let currentTime = 60

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    
}

squares.forEach(square =>{
    square.addEventListener('mousedown', () => {
        if (squares.id === randomSquare.id) {
            result++
            score.textContent = result
        }
    })
});
function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000);
}

moveMole()

function countDown() {
currentTime--
timeLeft.textContent = currentTime
if (currentTime ===0 ){
    clearInterval(countDownTimerId)
    alert('Game Over! Your final score is' + result)
}
}

let countDownTimerId = setInterval(countDown, 1000)