//Guess the number Game...

let randomNumber = Math.floor(Math.random() * 100);
var count = 0;

do {
    count++;
    var guess =
        parseInt(prompt("Enter a number 1-100"));
    if (guess == randomNumber) {
        var score = 100 - count;
        alert("Congratulations! You got it in " + count + " steps. Score is:" + score);
    } else {
        if (guess > randomNumber) {
            alert("Your guess is greater");
        } else {
            alert("Your guess is smaller");
        }
    }
} while (guess != randomNumber);