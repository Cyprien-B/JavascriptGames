const cardArray = [
  {
    name: "Cyprien",
    img: "img/Cyprien.jpg",
  },
  {
    name: "familybiz",
    img: "img/familybiz.jpg",
  },
  {
    name: "Xou",
    img: "img/Xou.jpg",
  },
  {
    name: "Math+Xou",
    img: "img/Math+Xou.jpg",
  },
  {
    name: "Mathildou",
    img: "img/Mathildou.jpg",
  },
  {
    name: "Xouassis",
    img: "img/Xouassis.jpg",
  },
  {
    name: "Cyprien",
    img: "img/Cyprien.jpg",
  },
  {
    name: "familybiz",
    img: "img/familybiz.jpg",
  },
  {
    name: "Xou",
    img: "img/Xou.jpg",
  },
  {
    name: "Math+Xou",
    img: "img/Math+Xou.jpg",
  },
  {
    name: "Mathildou",
    img: "img/Mathildou.jpg",
  },
  {
    name: "Xouassis",
    img: "img/Xouassis.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random())


/*creation de la grille*/

const gridDisplay = document.querySelector('#grid') /* ici on selectione directement l'id !! au ''*/
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function creatBord() {
  for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img') // bien decouper les choses en étapes 
      card.setAttribute('src' , 'img/blank.jpg')
      card.setAttribute('data-id' , i);
      card.addEventListener('click',flipCard)
      gridDisplay.appendChild(card)
     
  }
}
creatBord()

function checkMatch() {
  const cards = document.querySelectorAll('#grid img')
  if(cardsChosen[0] === cardsChosen[1]){
    alert('You found a match')
    cards[cardsChosenIds[0]].setAttribute('src' , 'img/white.jpg')
    cards[cardsChosenIds[1]].setAttribute('src' , 'img/white.jpg')
    cards[cardsChosenIds[0]].removeEventListener('click' , flipCard)
    cards[cardsChosenIds[1]].removeEventListener('click' , flipCard)
    cardsWon.push(cardsChosen)
  }
  else{
    alert('Sorry, try again')
    cards[cardsChosenIds[0]].setAttribute('src' , 'img/blank.jpg')
    cards[cardsChosenIds[1]].setAttribute('src' , 'img/blank.jpg')
    
  }
  cardsChosen = []
  cardsChosenIds = []
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }

  
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute("src" , cardArray[cardId].img)
  if(cardsChosen.length === 2){
    setTimeout( checkMatch , 1000)

  }

  
  
}