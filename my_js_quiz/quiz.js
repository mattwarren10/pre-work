var user = {};
var responses = [];

function question1() {
	var name = prompt("What is your name?");
	user.name = name;
}

function question2() {
	var pets = prompt("Do you have any pets? (yes or no)");
	if ( pets.toLowerCase() === 'yes' ) {
		pets = true;
	}
	else if ( pets.toLowerCase() === 'no' ){
		pets = false;
	}
	else {
		alert("Please answer yes or no.")
		return question2();
	}
	responses.push(pets)
}

function question3() {
	var google = prompt("What year was Google incepted? (1994, 1996, 1998)");
	google = google.toLowerCase();
	switch(google) {
	case '1994':
		google = false;
		break;
	case '1996':
		google = false;
		break;
	case '1998':
		google = true;
		break;
	}
	responses.push(google);
}

function question4() {
	favorite = prompt("Which web app allows a user to input a RegExp? (repl.it, rubular, keycodes)")
	if (favorite === "repl.it") {
		favorite = false;
	}
	else if (favorite === "rubular") {
		favorite = true;
	}
	else if (favorite === "keycodes") {
		favorite = false;
	}
	else {
		var alert = alert("Please answer one of the three choices.");
		question4();
	}
	responses.push(favorite);
}

function question5() {
	flavor = prompt("What is the best tasting ice cream flavor? (chocolate or vanilla)");
	if (flavor === "chocolate") {
		flavor = false;
	}
	else if (flavor === "vanilla") {
		flavor = true;
	}
	else {
		console.log("Please choose between chocolate and vanilla.");
		question5;
	}
	responses.push(flavor);
}

function evaluate(responsesArray) {

// declare two variables to store the totals
var correct = 0;
var incorrect = 0;
// populate the “totals” variables from the “responsesArray”
for ( i = 0; i < responsesArray.length; i++) {
	if (responsesArray[i] === true) {
		correct += 1 ;
	}
	else if (responsesArray[i] === false) {
		incorrect += 1;
	}
}
// save the “totals” variables inside the user object
user.correct = correct
user.incorrect = incorrect
// call showResults
showResults();
}

function showResults() {

// display the user results
console.log("Your results: " + user.correct + " correct and " + user.incorrect + " incorrect.")
}



question1();
question2();
question3();
question4();
question5();
evaluate(responses)