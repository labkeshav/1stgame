'use strict';
// Generating a number bw 1 and 20
let secretNum  = Math.trunc(Math.random()*20)+1 ;
console.log(secretNum);
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

let score = 20;
let highScore = 0; 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

// When no input
    if(!guess){
        displayMessage('please enter a number');

        //When num is correct
    }else if(guess === secretNum){
        document.querySelector('.number').textContent = secretNum;
        displayMessage('Correct Number');
        //changing css styles
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When input is not correct
    }else if(guess !== secretNum){
        if(score>0){
            // document.querySelector('.message').textContent = guess>secretNum ? 'Too high' : 'Too low' ;
            displayMessage(guess>secretNum ? 'Too high' : 'Too low' );
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            displayMessage('Yve lost the game');
            document.querySelector('body').style.backgroundColor = '#FF0000';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNum;
        }
        
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score  = 20;
    secretNum  = Math.trunc(Math.random()*20)+1 ;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
