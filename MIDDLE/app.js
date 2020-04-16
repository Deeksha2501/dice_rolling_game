var scores, roundScore, dice, activePlayer, gamePlaying, pre_dice = 0;
initialize();
document.querySelector('.m').style.color = 'white';

//adding event listener on clicking roll dice button
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //generating dice number
        dice = Math.floor(Math.random() * 6) + 1;

        //changing dice image
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = "block";
        diceDOM.src = 'dice-' + dice + '.png';
        console.log(dice);

        //update the score and round score value
        if (dice === 6 && prev_dice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
        else if (dice !== 1) {
            //add score to the round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prev_dice = dice;
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
        if (scores[activePlayer] >= 30) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';


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