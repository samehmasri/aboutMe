'use strict'

var score = 0;


alert('Welcome to my page, This is some questions for you :)')

var username = prompt("Let's stast with what's' your name?")
alert("Hello " + username + " Nice to meet you");


function question(userInput, correctMessage, wrongMessage) {

    if (userInput === 'yes') {
        alert(correctMessage);
        score++
    } else {
        alert(wrongMessage);
    }
}


var color = prompt('Can you guess that is Black is my favorite?:P').toLocaleLowerCase();
question(color, 'correct! black is my favorite color!', 'Oops! wrong answre')
// if (color === 'yes') {
//     alert('correct! black is my favorite color!');
//     score++
// } else {
//     alert('Oops! wrong answre');
// }


var know = prompt("would you like to get to know me ? (yes , no)").toLowerCase();
question(know, 'I am glad to know that :)', 'As you like :(');
// if (know === 'yes') {
//     alert('I am glad to know that :)');
//     score++
// } else {
//     alert('As you like :(');

// }




var whereStudy = prompt("would you like to know where did i studied ? (yes , no)").toLowerCase();
question(whereStudy, 'Lovely :)', ' Okay :(');
// if (whereStudy === 'yes') {
//     alert('Lovely :)');
//     score++
// } else {
//     alert(' Okay :(');

// }





var whatGoals = prompt("would you like to know what is my goals? (yes , no)").toLowerCase();
question(whatGoals, "Thats nice I will show you some of them", "Your lose anyway :(")
// if (whatGoals === 'yes') {
//     alert("Thats nice I will show you some of them")
//     score++
// }
// else {
//     alert("Your lose anyway :(")

// }




var studyYears = prompt("would you like to know how many years did my education last? (yes , no)".toLowerCase());
question(studyYears, "Okay I will tell you", "Idont care too :(")
// if (studyYears === 'yes') {
//     alert("Okay I will tell you")
//     score++
// }
// else {
//     alert("Idont care too :(")
// }






var correctNumber = 14;
var totalGuessAttempts = 0;
var maxGuessAttempts = 4;



var userin;

function guessNumber() {
    for (var i = 4; i > 0; i--) {
        userin = prompt('Guess a Number between 10 and 16 : ' + i);
        userin = Number(userin);

        if (userin == correctNumber) {
            score++;


            alert("gzzz it's right");
            break;
        } else if (userin < correctNumber) {
            alert("higher");
        } else {
            alert("lower");
        }

    }
}


guessNumber();



var correct = false;

var totalGuessAttemptsCars = 0;
var likeCars = ['Audi', 'BMW', 'Ferarri', 'Mercedes'];

var maxGuessAttemptsCars = 6;
var userInputCars;
function askCars() {
    for (var i = 0; i < maxGuessAttemptsCars; i++) {
        userInputCars = prompt('Give me one of the Car brands that I like?');
        for (var j = 0; j < likeCars.length; j++) {
            if (likeCars[j] === userInputCars) {
                alert('Omg! You are correct. the Car brands that I like the most : ' + likeCars);
                correct = true;
                totalGuessAttemptsCars++;
                score++;
                break;
            }
        }
        if (correct) {


            break;
        }
        if (maxGuessAttemptsCars === totalGuessAttemptsCars) {

            alert('you ran out of attempts. My favorites brand is : ' + likeCars);
            correct = true;
        }
        else {
            alert('No try again');
        }
    }
}


askCars();
console.log(score)
alert('You got ' + score + ' correct answers!!');
