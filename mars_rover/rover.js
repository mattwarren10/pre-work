//Allows user to move the rover and change its direction by entering f, b, r, l as directions.
commands = window.prompt("Enter commands")

//Takes in commands
splitCommands = []


//The rover
var myRover = {
  //         0  1
  position: [0, 0],
  direction: 'N'
};

//Move rover forward
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };
  //Logs rover's position each step.
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]++
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  } 
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  
}

for (i=0; i < commands.length; i++) {
  splitCommands += commands[i].split(', ')  
}

for (i=0; i < splitCommands.length; i++) {
  if (splitCommands[i] === "f") {
    goForward(myRover);

  } else if (splitCommands[i] === "r") {
    turnLeft(myRover)
  } else if (splitCommands[i] === "b") {
    goBackward(myRover)
  } else if (splitCommands[i] === "l") {
    turnLeft(myRover)
  } else {
    false
  }

}

console.log(splitCommands)
