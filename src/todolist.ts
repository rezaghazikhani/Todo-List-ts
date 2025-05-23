const todoValue = document.querySelector(".todo-value") as HTMLInputElement;
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement;
const clearAll = document.querySelector(".clear-todos") as HTMLButtonElement;
const todoList = document.querySelector(".todoList") as HTMLUListElement;


interface Todo {
    id: string,
    title: string,
    isComplete: boolean
}

const nandleSubmit = (event: Event) => {
    event.preventDefault();
    const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: todoValue.value,
        isComplete: false
    };
    addTodoToDom(newTodo);
    todoValue.value = "";
    todoValue.focus();
};

const addTodoToDom = (todo: Todo) => {
    todoList.insertAdjacentHTML('beforeend',
        `
        <li>
        ${todo.title}<span class="icon"">
          <i class="fas fa-trash"></i>
          </span>
        </li>
    `)
}

addTodo.addEventListener('click', (event) => nandleSubmit(event))