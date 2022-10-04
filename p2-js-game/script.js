// Start game
function playGame() {
  // when this function is called then show the options
    let start = document.getElementById("start-screen")
    let option = document.getElementById("option-screen")
    let fight = document.getElementById("fight-screen")
    let monster = document.getElementById("monster-win")
    let player = document.getElementById("player-win")
    start.style.display = "none";
    option.style.display = "flex";
    fight.style.display = "none";
    monster.style.display = "none";
    player.style.display = "none";

}
// end of start game

// Animation for typewriter effect on text
const text = document.getElementById("text");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 25);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++ 
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}
// end of animation
// Choose your own adventure functionalities
  // initialize variables
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
let state = {}
  // starts the game
function startGame() {
  // keeps track of user health
  state = {}
  showText(1)
}
  // shows what option the user is on
function showText(textIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
  // selects option and takes any option that user selects
function selectOption(option) {
  // if nextText <= 0 thenreturn to the start of the game
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  // else if nextText == 100 which is hard coded in the textNodes, then start the dice game
  else if (nextTextNodeId == 100) {
    return diceGame()
  }
  state = Object.assign(state, option.setState)
  showText(nextTextNodeId)
}

// array of option with option of object inside
const textNodes = [
  {
    id: 1,
    text: "You couldn't move or see, but you can still listen. You can hear the rumbling of leaves and smell the blood coming from just above you. You opened your eyes, slightly squinting as you begin to adjust on your surroundings. As you stood up you see a creepy ghoul",
    options: [
      {
        text: 'Hide inside a fallen tree',
        setState: { amulet: true },
        nextText: 2
      },
      {
        text: 'Fight',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: "You thought you could defeat the ghoul but because you had too many injuries, you were killed.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 2,
    text: 'You found an amulet inside the tree. You left only when the goul left. As you were walking around, You came across a travelling merchant',
    options: [
      {
        text: 'Trade the amulet for a sword',
        requiredState: (currentState) => currentState.amulet,
        setState: { amulet: false, sword: true },
        nextText: 4
      },
      {
        text: 'Trade the amulet for a shield',
        requiredState: (currentState) => currentState.amulet,
        setState: { amulet: false, shield: true },
        nextText: 4
      },
      {
        text: 'Ignore the travelling merchant',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'After leaving the merchant you start to feel tired and saw a cave while you were walking around. Next to it was an old house',
    options: [
      {
        text: 'Explore the cave',
        nextText: 5
      },
      {
        text: 'Explore the old house',
        nextText: 6
      },
      {
        text: 'Make a bonfire and sleep outside',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'You fell into a deep sleep inside the cave and some mutants killed you while you were sleeping',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'While you were trying to break in, Someone came out of the old house and shoot you in the face',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'You wake up well rested and full of energy ready to explore around the vicinity.',
    options: [
      {
        text: 'Go in the castle',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 9
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 10
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 11
      },
      {
        text: 'Throw the amulet at it',
        requiredState: (currentState) => currentState.amulet,
        nextText: 12
      }
    ]
  },
  {
    id: 9,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'You threw the amulet at the monster and somehow magically, you went into a rock paper scissor duel with him.',
    options: [
      {
        text: 'Play',
        nextText: 100
      }
    ]
  }
]
// starts the dice game 
function diceGame () {
  let start = document.getElementById("start-screen")
  let option = document.getElementById("option-screen")
  let fight = document.getElementById("fight-screen")
  let monster = document.getElementById("monster-win")
  let player = document.getElementById("player-win")
  start.style.display = "none";
  option.style.display = "none";
  fight.style.display = "block";
  monster.style.display = "none";
  player.style.display = "none";
  
  let playerScore = 0
  let monsterScore = 0
  const buttons = document.querySelectorAll('input')

  function MonsterPlay() {
    // randomizes monster picks
      let choices = ['rock', 'paper', 'scissors']
      return choices[Math.floor(Math.random() * choices.length)]
  }

  function disableButtons() {
    // disable button when game ends
      buttons.forEach(elem => {
          elem.disabled = true
      })
  }

  function playRound(playerSelection) {
      let monsterSelection = MonsterPlay()
      let result = ""
      // initialize player 
      if ((playerSelection == 'rock' && monsterSelection == 'scissors') ||
          (playerSelection == 'scissors' && monsterSelection == 'paper') ||
          (playerSelection == 'paper' && monsterSelection == 'rock')) {
          playerScore += 1
          result = ('You win! ' + playerSelection + ' beats ' + monsterSelection
              + "<br><br>Player score: " + playerScore + "<br>Monster score: " + monsterScore)

          if (playerScore == 5) {
              result += '<br><br>You won the duel!'
              disableButtons()
              playerWon()
          }
      }
      //  initialize tie
      else if (playerSelection == monsterSelection) {
          result = ('It\'s a tie. You both chose ' + playerSelection
              + "<br><br>Player score: " + playerScore + "<br>Monster score: " + monsterScore)
      }
      // initialize monster
      else {
          monsterScore += 1
          result = ('You lose! ' + monsterSelection + ' beats ' + playerSelection
              + "<br><br>Player score: " + playerScore + "<br>Monster score: " + monsterScore)

          if (monsterScore == 5) {
              result += '<br><br>The monster won'
              disableButtons()
              monsterWon()
          }
      }

      document.getElementById('result').innerHTML = result
      return
  }

  buttons.forEach(button =>{
      button.addEventListener('click', function(){
          playRound(button.value)
      })
  })
}
// if player wins
function playerWon () {
  let start = document.getElementById("start-screen")
  let option = document.getElementById("option-screen")
  let fight = document.getElementById("fight-screen")
  let monster = document.getElementById("monster-win")
  let player = document.getElementById("player-win")
  start.style.display = "none";
  option.style.display = "none";
  fight.style.display = "none";
  monster.style.display = "none";
  player.style.display = "block";
  let playerwon = document.getElementById("player-win")
  playerwon.innerText = "As you defeat the monster on his no sense game, you've never felt this fullfilled on your life before. You gathered all the items you could find and sets of to another adventure";
}
// if monster wins
function monsterWon() {
  let start = document.getElementById("start-screen")
  let option = document.getElementById("option-screen")
  let fight = document.getElementById("fight-screen")
  let monster = document.getElementById("monster-win")
  let player = document.getElementById("player-win")
  start.style.display = "none";
  option.style.display = "none";
  fight.style.display = "none";
  monster.style.display = "block";
  player.style.display = "none";
  let monsterwon = document.getElementById("monster-win")
  monsterwon.innerText = "Your eyes felt heavy as you hold on to your last breath. The monster won. If only you had lived another life, what would you be today? you ask youself as you slowly drift away"
  
}
startGame()