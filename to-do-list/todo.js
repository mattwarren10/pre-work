

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var todoList = document.getElementById('todo-list-items');
  var todoInput = document.getElementById('todo-input');
  var li = document.createElement('li');

  var doneList = document.getElementById('done-list-items');
  

  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var todoInputValue = todoInput.value;
    li.innerHTML = todoInputValue;
    todoList.appendChild(li);
  }

  function markAsDone() {
    finishedElement = todoList.firstChild;
    todoList.removeChild(todoList.firstChild);
    doneList.appendChild(finishedElement).style.textDecoration='line-through';
  }
  

