var user = {};
var responses = []

function askForName () {
	var name = prompt("What is your name?");
	user.name = name;
}

var firstQuestion = prompt("Do you have any pets? (yes or now)");

if (firstQuestion.toLowerCase() === 'yes') {
	firstQuestion = true
else if (firstQuestion.toLowerCase === 'no')
	firstQuestion = false
else 
}

askForName();

