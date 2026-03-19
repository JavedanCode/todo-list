export function loadMain(main, projects) {
  const addTaskBtn = document.createElement("button");
  addTaskBtn.id = "add-task-btn";
  addTaskBtn.textContent = "➕";

  main.appendChild(addTaskBtn);
  main.appendChild(projects);

  return {
    container: main,
    addTaskBtn,
  };
}
