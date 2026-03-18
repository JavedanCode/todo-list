export function loadMain(main) {
  const addTaskBtn = document.createElement("button");
  addTaskBtn.id = "add-task-btn";
  addTaskBtn.textContent = "➕";

  const projects = document.createElement("div");
  projects.id = "projects";

  const projectTitle = document.createElement("h2");
  projectTitle.id = "project-title";
  projectTitle.textContent = "All Tasks";

  const tasks = document.createElement("div");
  tasks.id = "tasks";

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item", "low");

  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskTitle = document.createElement("span");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = "Sample Task";

  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(taskTitle);

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "✏";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "🗑";

  taskActions.appendChild(editBtn);
  taskActions.appendChild(deleteBtn);

  taskItem.appendChild(taskLeft);
  taskItem.appendChild(taskActions);

  tasks.appendChild(taskItem);

  projects.appendChild(projectTitle);
  projects.appendChild(tasks);

  main.appendChild(addTaskBtn);
  main.appendChild(projects);

  return {
    addTaskBtn,
    tasks,
    projectTitle,
  };
}
