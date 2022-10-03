// selectors
const todoinput = document.querySelector('.todoinput');
const todobutton = document.querySelector('.todobutt');
const todolist = document.querySelector('.todolist');
const filteroption = document.querySelector(".filter-todo");

// EventListener
todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click', deletetodo);
filteroption.addEventListener('click',filterTodo);

// Functions
function addtodo(event){
    //prevent from refresh
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoinput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //chechmark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //chech trash mark button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append the list
    todolist.appendChild(todoDiv);
    //clear input
    todoinput.value='';
}

function deletetodo(e){
    const item = e.target;
    //delete too
    if (item.classList[0] === "trash-btn") {
       const todo = item.parentElement;
       ///animatio
       todo.classList.add('fall');
       todo.addEventListener('transitionend',function(){
        todo.remove();
       });
       
    }


    //checkmark
    if(item.classList[0] === "complete-btn"){
       const todo  = item.parentElement;
       todo.classList.toggle('completed');
    }
}

//filter todo
// function filterTodo(e){
//     const todos = todolist.childNodes;
//     todos.forEach(function(todo) {
//       switch (e.target.value) {
//         case "all":
//           todo.style.display = "flex";
//           break;
//         case "done":
//           if (todo.classList.contains("completed")) {
//             todo.style.display = "flex";
//           } else {
//             todo.style.display = "none";
//           }
     
//     }
//     });
//     }