const randomNum = Math.floor(Math.random()*999);
const response = document.querySelector("p");

function testResults(form){
    var userGuess = form.numberGuess.value;
    if (userGuess>randomNum){
        response.textContent = "Feedback: Your guess is too high."
    } 
    if (userGuess<randomNum){
        response.textContent = "Feedback: Your guess is too low."
    }
    if (userGuess==randomNum){
        response.textContent = "Feedback: Correct Guess. You've still got it."
    }
}


