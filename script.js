let cards = []
let sum = 0
let blackjack=false
let isAlive=false
let message=''
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
    name : "John ",
    playerChips:145
}
let playerEl= document.getElementById("player-el")
playerEl.textContent = player.name + ": $ " +player.playerChips
function getrandomcard(){
    let v= Math.floor(Math.random()*13)+1
    if(v===1){
        return 11
    }
    else if(v>10){
        return 10;
    }
    else{
        return v;
    }
}
function startgame(){
    isAlive=true
  let firstcard=getrandomcard()
  let secondcard=getrandomcard()
cards =[firstcard,secondcard]
sum=firstcard+secondcard

    rendergame()
}
function rendergame(){
    sumEl.innerText = "Sum:" + sum
    cardEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] +" "
    }
    if(sum < 21){
      message = "Do you want to draw a new card?"
    }else if( sum === 21){
        message = "You've got Blackjack!"
        blackjack=true
    }else {
        message = "You're out of the game"
        isAlive=false
    }
    messageEl.innerText = message
}
function newcard(){
    if(isAlive === true && blackjack=== false){
    let card=getrandomcard()
    sum += card
    cards.push(card)
    rendergame()
    }
    
}

