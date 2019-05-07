

const cardsArray =[
{
rank:"queen",
suit:"hearts",
cardImage: "https://i.ibb.co/0rKgDFM/queen-of-hearts.png"
},
{
rank:"queen",
suit: 	"diamonds",
cardImage: "https://i.ibb.co/k43S4Pd/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "https://i.ibb.co/LSYRXpy/king-of-diamonds.png"
},
{
rank:"king",
suit: 	"diamonds",
cardImage: "https://i.ibb.co/k43S4Pd/queen-of-diamonds.png"
}
];



const checkForMatch = function() {
if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
}

 reset()
};



let cardsInPlay = [];
let matchCounter = 0;

const shuffleFunction = (cards) => {
  const currentCardIndex = cards.length;
  let tempValue;
  let randIndex;
  do {
randomIndex = Math.floor(Math.random() * currentCardIndex);
    currentIndex -= 1;
      tempValue = cards[currentCardIndex];
    cards[currentCardIndex] = cards[randIndex];
    cards[randomIndex] = tempValue;
  }
  while (0 !== currentCardIndex);

  return cards;
}


const flipCard = function() {
  let cardId = this.getAttribute('data-id');
  if(cardsInPlay.length >= 2){
    CardsInPlay = [];
  }
 cardsInPlay.push(cardsArray[cardId])
  this.setAttribute('src',cardsArray[cardId].cardImage);
 if (cardsInPlay.length === 2) {
     setTimeout(checkForMatch, 300)

   }
};




const createBoard = () => {
  for (i = 0; i < cardsArray.length; i++) {
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'https://i.ibb.co/886JHQ0/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click', flipCard);
document.getElementById("game-board").appendChild(cardElement);
}
};

createBoard();

const reset = function () {
  for (i=0; i<cardsArray.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('src', 'https://i.ibb.co/886JHQ0/back.png');
  }
  cardsInPlay = [];
  matchCounter = 0;
};



const button = document.getElementById('button');

button.addEventListener('click', reset);




let footer = document.querySelector('footer');

const colorChange = function() {
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

  event.target.style.backgroundColor = rgb;

}

footer.addEventListener('click', colorChange);
