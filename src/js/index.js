import "../index.html";
import "../scss/index.scss";

import { getTasks } from "./sessionStorage";
import { filterTasks } from "./filterTasks";
import { addTask, removeTask } from "./handleTodos";

export const input = document.querySelector(".header__form-input");
export const listElement = document.querySelector(".tasks");

const form = document.querySelector(".header__form");
const filter = document.querySelector(".filter");
const messageContainer = document.querySelector(".message__container");

loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasks);
  listElement.addEventListener("click", removeTask);
  input.addEventListener("keydown", disableEnter);
  filter.addEventListener("keyup", filterTasks);
  form.addEventListener("submit", addTask);
}

export function showAlert(message, className) {
  messageContainer.innerHTML = `<span class="${className} message">${message}</span>`;

  setTimeout(function () {
    document.querySelector(`.${className}`).remove();
  }, 3000);
}

export function disableEnter(e) {
  if (e.keyCode === 13 && e.target.value.length < 3) {
    e.preventDefault();
    showAlert("Task can't be shorter than 3 symbol", "warning");
    return false;
  }
}
