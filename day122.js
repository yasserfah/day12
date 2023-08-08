console.log("Hello World");

    var words = ['rock','paper','cissors'
];
function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for(var x=0; x<20; x++){
    console.log(randomWord(words));}
function playRound(){

    let player= prompt("choose");
    let computer=randomWord(words);
    // console.log(computer)
    // if (player=='paper' && computer=='cissors'){
    //     console.log('you lose')}
    // else if (player=='cissors' && computer=='rock'){
    //     console.log('you lose')}
    // else if (player=='rock' && computer=='paper'){
    //         console.log('you lose')}
    // else{console.log('you win')}
}
function game(i=0){
    let j=0
    let k=0
    let player = prompt("choose");
    let computer=randomWord(words);
    let playerScore=0;
    let computerScore=0
    
    for (let i = 1; i <=7; i++){
        if(player === computer){
            console.log('Tie')
            playRound()
            i++
        }
        else if(player == 'rock'){ playRound()
            if(computer == 'paper'){
                console.log('Computer Won');
                computerScore++;
                i++
                
  
            }else{ playRound()
                console.log('player Won')
                playerScore++;
                i++
                
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){ playRound()
                console.log('Computer Won');
                computerScore++;
                i++
                
            }else{ playRound()
                console.log('player Won');
                playerScore++;
                i++
            
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){ playRound()
                console.log('Computer Won');
                computerScore++;
                i++
                
            }else{ playRound()
                console.log('player Won');
                playerScore++;
                i++
                
            }
        }
    }
    console.log('player '+playerScore+' computer '+computerScore)
   

}

game()


