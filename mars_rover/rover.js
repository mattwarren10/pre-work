//    10 x 10 grid

// initial position 0,0
// initially facing N


// Actions for rover
// forwards
// backwards
// turn left
// turn right


// CMD + SHIFT + D    --->    Duplicate current line
// CMD + CTRL + UP    --->   Move up
// CMD + CTRL + DOWN  --->   Move down



var myRover = {
  //         0  1
  position: [0, 0],
  direction: 'N'
};


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
}


function turnLeft (rover) {
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
}

function turnRight (rover) {
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
  
}





goForward(myRover);
goForward(myRover);


//                      Y coordinate
//                            |
console.log( myRover.position[1] === 2 );



turnLeft(myRover);
console.log( myRover.direction === 'W' );

turnLeft(myRover);
console.log( myRover.direction === 'S' );


turnRight(myRover)
console.log( myRover.direction === 'W' );
