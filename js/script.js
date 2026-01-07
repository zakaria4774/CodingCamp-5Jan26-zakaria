const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filter = document.getElementById("filter");

form.addEventListener("submit", addTodo);
filter.addEventListener("change", filterTodo);

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value === "" || dateInput.value === "") {
    alert("Form tidak boleh kosong");
    return;
  }

  const li = document.createElement("li");
  li.dataset.date = dateInput.value;

  li.innerHTML = `
    <span>${todoInput.value} - ${dateInput.value}</span>
    <button onclick="deleteTodo(this)">X</button>
  `;

  todoList.appendChild(li);
  todoInput.value = "";
  dateInput.value = "";
}

function deleteTodo(button) {
  button.parentElement.remove();
}

function filterTodo() {
  const todos = document.querySelectorAll("li");
  const today = new Date().toISOString().split("T")[0];

  todos.forEach(todo => {
    if (filter.value === "all") {
      todo.style.display = "flex";
    } else {
      todo.style.display =
        todo.dataset.date === today ? "flex" : "none";
    }
  });
}