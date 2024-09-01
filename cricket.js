let score;
let scoreStr = localStorage.getItem('score');
resetScore(scoreStr)
function resetScore(scoreStr) {

    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };
    score.displayScore = function () {
        document.querySelector('#Matches-played').innerText=`${score.win+score.lost+score.tie}`
        document.querySelector('#win').innerText = `${score.win}`;
        document.querySelector('#lost').innerText = `${score.lost}`;
        document.querySelector('#tie').innerText = `${score.tie}`;
    }
    displayResult()
}

function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
    console.log(randomNumber);
    if (randomNumber >= 0 && randomNumber < 1) {
        return 'Bat'
    }
    else if (randomNumber >= 1 && randomNumber < 2) {
        return 'Ball'
    }
    else {
        return 'Stump'
    }
}
function getResult(userChoice, computerChoice) {
    if (userChoice === null && computerChoice ===null) {
        return ''
    }
    else {
        if (userChoice === 'Bat') {
            if (userChoice === computerChoice) {
                score.tie+=1
                return 'Match is tie'
            }
            else if (computerChoice === 'Ball') {
                score.win+=1
                return 'User won'
            } else {
                score.lost+=1
                return 'Computer won'
            }
        }
        else if (userChoice === 'Ball') {
            if (userChoice === computerChoice) {
                score.tie+=1
                return 'Match is tie'
            }
            else if (computerChoice === 'Bat') {
                score.lost+=1
                return 'Computer won'
            } else {
                score.win+=1
                return 'user won'
            }
        }
        else if (userChoice==='Stump'){
            if (userChoice === computerChoice) {
                score.tie+=1
                return 'Match  is tie'
            }
            else if (computerChoice === 'Ball') {
                score.lost+=1
                return 'Computer won'
            } else {
                score.win++
                return 'User won'
            }
        }
        else{
            if(userChoice===computerChoice){
                return ''
            }
        }
    }
}

function displayResult(userChoice, computerChoice ,resultMsg) {
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#user-move').innerText = userChoice ? ` ${userChoice} ` : 'None';
    document.querySelector('#computer-move').innerText = computerChoice ? `${computerChoice} ` : 'None';
    document.querySelector('#result').innerText =resultMsg||'None';
    document.querySelector('#score').innerText = score.displayScore();

}


