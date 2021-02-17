//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addToDo);

//Functions

function addToDo(event) {
 
//Prevent form from submitting

event.preventDefault();
 
 //Todo DIV

 const todoDiv = document.createElement('div')
 todoDiv.classList.add("todo");
 
 //Create LI

 const newTodo = document.createElement('li');
 newTodo.innerText = 'hey';
 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);

 //Complete Button

 const completedButton = document.createElement('button');
 completedButton.innerHTML = '<i class="fas fa-check"></i>';
 completedButton.classList.add("complete-btn");
 todoDiv.appendChild(completedButton);

 //Deleted Button

 const deleteButton = document.createElement('button')
 deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
 deleteButton.classList.add(completed-btn);
 todoDiv.appendChild(deleteButton);
 //APPEND TO LIST
 todoList.appendChild(todoDiv);
}