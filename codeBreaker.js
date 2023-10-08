const randomNum = Math.floor(Math.random()*999);
var response = document.getElementById("resp");
var numTries = document.getElementById("numValue");
var numTriesVal = 7;
var won  = false;

function testResults(form){
    var userGuess = form.numberGuess.value;
    if (userGuess>randomNum){
        response.textContent = "Feedback: Your guess is too high.";
    } else if (userGuess<randomNum){
        response.textContent = "Feedback: Your guess is too low.";
    } else if (userGuess==randomNum){
        response.textContent = "Feedback: Correct Guess. You've still got it.";
        won = true;
    } else{
        response.textContet = "STOP. You have failed.";
    }
    numTries.textContent = numTriesVal-1;
    numTriesVal = numTriesVal-1;
    endgame();
}
    function endgame(){
        if (numTriesVal <= 0 && won!=true){
            response.textContent = "YOU FAILED. YOU DID NOT GET IT WITHIN 7 TRIES. The number was " + randomNum + ".";
            numTries.textContent = "FAIL";
            var userGuess = "TERMINATE";
        } else if (won==true){
            response.textContent = "You won! The correct number was " +randomNum+ ".";
            numTries.textContent = "PASS";
            var userGuess = "TERMINATE";
        }
    }


