
var myRover = {
  position: [0,0], 
  direction: 'S'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

var f = { 
  changeDirection: myRover.direction = 'N',
  move: goForward(myRover)

}

var r = { 
  changeDirection: myRover.direction = 'E',
  move: goForward(myRover)

}

var b = { 
  changeDirection: myRover.direction = 'S',
  move: goForward(myRover)

}

var l = { 
  changeDirection: myRover.direction = 'W',
  move: goForward(myRover)

}


goForward(myRover);