export function renderTasks(tasks, container) {
  container.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item", task.priority);
    taskItem.dataset.id = task.id;

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.classList.add("task-checkbox");

    const textContainer = document.createElement("div");
    textContainer.classList.add("task-text");

    const title = document.createElement("span");
    title.classList.add("task-title");
    title.textContent = task.title;

    const desc = document.createElement("span");
    desc.classList.add("task-desc");
    desc.textContent = task.description || "";

    textContainer.appendChild(title);
    textContainer.appendChild(desc);

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(title);

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "✏";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑";

    const date = document.createElement("span");
    date.classList.add("task-date");
    date.textContent = task.date || "";

    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);
    taskActions.prepend(date);

    taskItem.appendChild(taskLeft);
    taskItem.appendChild(taskActions);

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(textContainer);

    container.appendChild(taskItem);
  });
}
