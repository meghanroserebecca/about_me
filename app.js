'use strict';

console.log('Hello from app.js');

var firstYesOrNoQuestionAnswer = prompt('I challenge you to a battle of wits. For the Princess! To the Death! Do you accept?')

if (firstYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
firstYesOrNoQuestionAnswer.toLowerCase() == 'y') {
  alert('Good, then pour the wine...Inhale this, but do not touch.');
}
else if (firstYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
firstYesOrNoQuestionAnswer.toLowerCase() === 'n'){
  alert('You\'re just stalling, now. Pour the wine...Inhale this, but do not touch');
}
else {
  alert('Truly, you have a dizzying intellect.');
}

var secondYesOrNoQuestionAnswer = prompt('Do you smell anything?')

if (secondYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
secondYesOrNoQuestionAnswer.toLowerCase() === 'n') {
  alert('What you do not smell is iocane powder. It is odorless, tasteless, dissolves instantly in liquid and is among the most deadly poisons known to man. ');
}
else if (secondYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
secondYesOrNoQuestionAnswer.toLowerCase() === 'y'){
  alert('You are a liar. You smell nothing, and what you do not smell is iocane powder. It is odorless, tasteless, dissolves instantly in liquid and is among the most deadly poisons known to man.')
}
else {
  alert('Truly, you have a dizzying intellect. This battle of wits is over before it\'s begun');
}

if (secondYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
secondYesOrNoQuestionAnswer.toLowerCase() === 'y' ||
secondYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
secondYesOrNoQuestionAnswer.toLowerCase() === 'n') {
var thirdYesOrNoQuestionAnswer = prompt('Turn away. Good! Now you may look. I have placed the iocane powder in one of our two wine glasses. The battle of wits has begun. It ends when you decide and we both drink who is right and who is dead. All right, do you drink from your own cup?')

if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'yes'||
thirdYesOrNoQuestionAnswer.toLowerCase() === 'y') {
  alert('You have died. They were both poisoned. I spent the last few years building up an immunity to iocane powder.');
}
else if (thirdYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
thirdYesOrNoQuestionAnswer.toLowerCase() === 'n') {
  alert('Then drink deep of my cup, as I drink deep of yours. Now, you have died. They were both poisoned. I spent the last few years building up an immunity to iocane powder.');
}
else {
  alert('Truly, you have a dizzying intellect.');
}
}

var fourthYesOrNoQuestionAnswer = prompt('Have you ever heard of Plato? Aristotle? Socrates?')

if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'yes' ||
fourthYesOrNoQuestionAnswer.toLowerCase() === 'y') {
  alert('Morons.');
}
else if (fourthYesOrNoQuestionAnswer.toLowerCase() === 'no' ||
fourthYesOrNoQuestionAnswer.toLowerCase() === 'n') {
  alert('You are a moron.');
}
else {
  alert('Are we even speaking the same language, here?')
}
