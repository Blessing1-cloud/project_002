let allTodos =[]

function handlenewTodo(){
    let newTodo = prompt("todo name")
    console.log("You added :", newTodo);
    allTodos.push(newTodo);
    init()

}
// Todos array

function init() {
    document.getElementById("todos")
    .innerHTML= allTodos.map(todo=>`<li class="todo_element">${todo} 
    <input type="checkbox"/><li>`);
    
}

init();