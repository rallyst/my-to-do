import { listElement } from "./index";

export function getTasks() {
  let tasks;
  if (sessionStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(sessionStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = task;

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("task__delete-btn");
    taskDelete.innerHTML = '<i class="fas fa-times"></i>';

    taskElement.appendChild(taskDelete);
    listElement.appendChild(taskElement);
  });
}

export function storeTaskInLocalStorage(task) {
  let tasks;

  if (sessionStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(sessionStorage.getItem("tasks"));
  }

  tasks.push(task);

  sessionStorage.setItem("tasks", JSON.stringify(tasks));
}

export function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (sessionStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(sessionStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.parentElement.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  sessionStorage.setItem("tasks", JSON.stringify(tasks));
}
