var scores, roundScore, dice1 , dice2, activePlayer, gamePlaying;
document.querySelector('.a').style.color = 'white';

//initialize a new game
initialize();

//adding event listener on clicking roll dice button
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //generating dice number
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        //changing dice image
        var diceDOM1 = document.querySelector('.dice-1');
        var diceDOM2 = document.querySelector('.dice-2');
        diceDOM1.style.display = "block";
        diceDOM1.src = '../dice-' + dice1 + '.png';
        diceDOM2.style.display = "block";
        diceDOM2.src = '../dice-' + dice2 + '.png';

        //update the score and round score value
        if (dice1 > 1 && dice2 > 1) {
            //add score to the round score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
    }

});

//adding event listener on clicking roll dice button
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var w_score = document.querySelector('.f_score').value;
        if (scores[activePlayer] >= w_score) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }

});

function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;

    //changing roundscore to 0
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    //changing style of active panels
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //don't wanna display dice
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', initialize);


//initialize a new game
function initialize() {
    //initilizing scores to zero
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //initially hiding dice when game starts;
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';


    //initialising score value to 0
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player-1';
    document.querySelector('#name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};