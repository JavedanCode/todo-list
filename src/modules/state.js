import { taskFactory } from "./task";

let __tasks = [];

function addTask(taskData) {
  const newTask = taskFactory(taskData);
  __tasks.push(newTask);
}

function removeTask(id) {
  __tasks = __tasks.filter((task) => task.id !== id);
}

function toggleCompletion(id) {
  const task = __tasks.find((t) => t.id === id);

  if (task) {
    task.completed = !task.completed;
  }
}

function updateTask(id, newData) {
  const task = __tasks.find((t) => t.id === id);

  if (task) {
    if (newData.title !== undefined) task.title = newData.title;
    if (newData.description !== undefined)
      task.description = newData.description;
    if (newData.date !== undefined) task.date = newData.date;
    if (newData.priority !== undefined) task.priority = newData.priority;
  }
}

function getTasks() {
  return [...__tasks];
}

function getTaskById(id) {
  return __tasks.find((t) => t.id === id);
}

export {
  addTask,
  removeTask,
  toggleCompletion,
  updateTask,
  getTasks,
  getTaskById,
};
