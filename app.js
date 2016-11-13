'use strict';

console.log('Hello from app.js');
var userName = prompt('What is your name, challenger?');
var score = 0;

function firstQuestionFunction() {
  var firstYesOrNoQuestionAnswer = prompt('I challenge you to a battle of wits. For the Princess! To the Death! Do you accept?');

  console.log('First question answered with ' + firstYesOrNoQuestionAnswer);

  if (firstYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
  firstYesOrNoQuestionAnswer.toLowerCase() == 'y') {
    alert('Good, then pour the wine...Inhale this, but do not touch.');
    score++;
  }
  else if (firstYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
  firstYesOrNoQuestionAnswer.toLowerCase() === 'n'){
    alert('You\'re just stalling, now. Pour the wine...Inhale this, but do not touch');
  }
  else {
    alert('Truly, you have a dizzying intellect.');
  }
}

firstQuestionFunction();

function secondQuestionFunction() {
  var secondYesOrNoQuestionAnswer = prompt('Do you smell anything?');

  console.log('Second question answered with ' + secondYesOrNoQuestionAnswer);

  if (secondYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
  secondYesOrNoQuestionAnswer.toLowerCase() === 'n') {
    alert('What you do not smell is iocane powder. It is odorless, tasteless, dissolves instantly in liquid and is among the most deadly poisons known to man. ');
    score++;
  }
  else if (secondYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
  secondYesOrNoQuestionAnswer.toLowerCase() === 'y'){
    alert('You are a liar. You smell nothing, and what you do not smell is iocane powder. It is odorless, tasteless, dissolves instantly in liquid and is among the most deadly poisons known to man.');
  }
  else {
    alert('Truly, you have a dizzying intellect. This battle of wits is over before it\'s begun');
  }
}

secondQuestionFunction();


function thirdQuestionFunction() {

  var thirdYesOrNoQuestionAnswer = prompt('Turn away. Good! Now you may look. I have placed the iocane powder in one of our two wine glasses. The battle of wits has begun. It ends when you decide and we both drink who is right and who is dead. All right, do you drink from your own cup?');

  console.log('Third question answered with ' + thirdYesOrNoQuestionAnswer);

  if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
  thirdYesOrNoQuestionAnswer.toLowerCase() === 'y') {
    alert('You have died. They were both poisoned. I spent the last few years building up an immunity to iocane powder.');
  }
  else if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
  thirdYesOrNoQuestionAnswer.toLowerCase() === 'n') {
    alert('Then drink deep of my cup, as I drink deep of yours. Now, you have died. Both cups were both poisoned. I spent the last few years building up an immunity to iocane powder.');
  }
  else {
    alert('Truly, you have a dizzying intellect.');
  }
}


thirdQuestionFunction();

function fourthQuestionFunction() {
  var fourthYesOrNoQuestionAnswer = prompt('Have you ever heard of Plato? Aristotle? Socrates?');

  console.log('Fourth question answered with ' + fourthYesOrNoQuestionAnswer);

  if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
  fourthYesOrNoQuestionAnswer.toLowerCase() === 'y') {
    alert('Morons.');
    score++;
  }
  else if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
  fourthYesOrNoQuestionAnswer.toLowerCase() === 'n') {
    alert('You are a moron.');
  }
  else {
    alert('Are we even speaking the same language, here?');
  }
}

fourthQuestionFunction();

function fifthQuestionFunction() {
  var fifthYesOrNoQuestionAnswer = prompt('Do you want to get into a land war in Asia, or challenge a Sicilian when DEATH is on the line?');

  console.log('Fifth question answered with ' + fifthYesOrNoQuestionAnswer);

  if (fifthYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
  fifthYesOrNoQuestionAnswer.toLowerCase() === 'y') {
    alert('Clearly, you are a moron.');
  }
  else if (fifthYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
  fifthYesOrNoQuestionAnswer.toLowerCase() == 'n') {
    alert('Then at least you are not a COMPLETE moron!');
    score++;
  }
  else {
    alert('Truly, you have a dizzying intellect.');
  }
}

fifthQuestionFunction();


function sixthQuestionFunction() {
  var youLive = false;
  var cupNumberGuess = parseInt(prompt('Ok, all kidding aside, I have seriously put iocane powder into 9 of these 10 cups. \
    Not so much as to kill you on the first failed taste, but on the fourth failed attempt, you die. \
    So which cup, from 1-10, do you choose?'));
  var secretNumber = 7;
  var count = 0;
  console.log ('The challenger has selected cup number: ', cupNumberGuess, 'the secretNumber is ', secretNumber );
  console.log ('numberGuess has type of ', typeof cupNumberGuess, 'secretNumber has type of ', typeof secretNumber);
  while (count < 4){
    if (cupNumberGuess === secretNumber) {
      youLive = true;
      count = 4;
      score++;
    } else if (cupNumberGuess > secretNumber){
      cupNumberGuess = parseInt(prompt('Hm. Interesting choice. By which I mean WRONG. You guessed too HIGH! I\'m certain you\'re feeling a bit...sickly, yes? Try again!'));
      console.log(cupNumberGuess);
      count++;
    } else {
      cupNumberGuess = parseInt(prompt ('Hm. Interesting choice. By which I mean WRONG. You guessed too LOW! I\'m certain you\'re feeling a bit...sickly, yes? Try again!'));
      count++;
    }
  }
  if (youLive) {
    alert('You have succeeded, by avoiding death!');
  } else {
    alert('And now, you have died. No more drinky drinky for you!');
  }
}



sixthQuestionFunction();

function seventhQuestionFunction() {
  var countriesGuess = prompt('You survived the battle of wits and your game of chance! \
  Now, can you guess a country that the Dread Pirate Roberts has sailed to?');
  var dreadPirateCountries = ['australia', 'new zealand', 'sicily', 'france'];
  var countryGuessCount = 0;
  var youGuessedIt = false;

  while (countryGuessCount < 6 && !youGuessedIt) {
    for (var i = 0; i < dreadPirateCountries.length; i++) {
      console.log(dreadPirateCountries[i]);
      console.log(countriesGuess);
      //if (countriesGuess.toLowerCase() === dreadPirateCountries[i]) {
      if (dreadPirateCountries.includes(countriesGuess.toLowerCase())) {
        youGuessedIt = true;
        alert('Great work! I have sailed to ' + countriesGuess);
        score++;
        break;
      } else if (countriesGuess.toLowerCase() !== dreadPirateCountries[i]) {
        countriesGuess = prompt('Hm, nope. I fear I have never traveled there. Guess again! (Note to self: travel to ' + countriesGuess + ')');
        countryGuessCount++;
      }else {
        alert('I\'m sorry, but you\'re all out of guesses. Nice try! Here are the countries I have sailed to: ' + dreadPirateCountries[i]);
        countryGuessCount++;
      }
    }
  }
}
seventhQuestionFunction();
alert('Thanks for playing ' + userName + '! You scored ' + score + ' out of 7 questions correct!');
