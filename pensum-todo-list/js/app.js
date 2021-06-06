const addForm = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

//add todos
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items center">
        <span>${todo}</span>
        <i class="fas fa-trash-alt delete"></i>
    </li>`;
    todoList.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //check if user inputs a todo, if length is a positive number then returns yes
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete todos
todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//search todos

const findTodo = query => {
    Array.from(todoList.children)
        .filter(item => !item.textContent.toLowercase().includes(query))
        .forEach(item => item.classList.add('filtered'));

    Array.from(todoList.children)
    .filter(item => item.textContent.toLowercase().includes(query))
    .forEach(item => item.classList.remove('filtered'));
}

//keyup event in search bar
search.addEventListener('keyup', () => {
    const query = search.value.trim().toLowercase();
    findTodo(query);
});