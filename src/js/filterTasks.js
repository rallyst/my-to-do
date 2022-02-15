export function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".task").forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}
