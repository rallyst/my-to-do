import { showAlert } from "./index";
import { listElement, input } from "./index";

import {
  storeTaskInLocalStorage,
  removeTaskFromLocalStorage,
} from "./sessionStorage";

export function addTask(e) {
  e.preventDefault();
  const task = input.value;

  if (!task) {
    showAlert("Please fill out the task", "warning");
    return;
  } else {
    showAlert("Task Added!", "success");
    taskHandler();
  }
}

export function taskHandler() {
  const task = input.value;
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = task;

  const taskDelete = document.createElement("button");
  taskDelete.classList.add("task__delete-btn");
  taskDelete.innerHTML = '<i class="fas fa-times"></i>';

  taskElement.appendChild(taskDelete);
  listElement.appendChild(taskElement);

  storeTaskInLocalStorage(task);

  input.value = "";
}

export function removeTask(e) {
  if (e.target.parentElement.classList.contains("task__delete-btn")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorage(e.target.parentElement);
      showAlert("Task Removed!", "success");
    }
  }
}
