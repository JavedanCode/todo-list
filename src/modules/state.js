import { projectFactory } from "./project";
import { taskFactory } from "./task";

let __projects = [];

let currentView = "project";

let currentProjectId = null;

function saveState() {
  const data = {
    projects: __projects,
    currentProjectId,
    currentView,
  };

  localStorage.setItem("todoApp", JSON.stringify(data));
}

function setView(view) {
  currentView = view;
}

function getView() {
  return currentView;
}

function getAllTasks() {
  return __projects.flatMap((p) => p.tasks);
}

function getProjects() {
  return [...__projects];
}

function getCurrentProject() {
  return __projects.find((p) => p.id === currentProjectId);
}

function setCurrentProject(id) {
  currentProjectId = id;
}

function addProject(name) {
  const newProject = projectFactory(name);
  __projects.push(newProject);
  saveState();
}

function deleteProject(id) {
  if (__projects.length <= 1) {
    alert("You must have at least one project");
    return;
  }

  __projects = __projects.filter((p) => p.id !== id);

  currentProjectId = __projects[0].id;

  saveState();
}

function addTask(taskData) {
  const project = getCurrentProject();

  if (!project) return;

  const newTask = taskFactory(taskData);
  project.tasks.push(newTask);
  saveState();
}

function removeTask(id) {
  for (const project of __projects) {
    const initialLength = project.tasks.length;
    project.tasks = project.tasks.filter((t) => t.id !== id);

    if (project.tasks.length !== initialLength) {
      break;
    }
  }

  saveState();
}

function toggleCompletion(id) {
  for (const project of __projects) {
    const task = project.tasks.find((t) => t.id === id);

    if (task) {
      task.completed = !task.completed;
      break;
    }
  }

  saveState();
}

function updateTask(id, newData) {
  for (const project of __projects) {
    const task = project.tasks.find((t) => t.id === id);

    if (task) {
      if (newData.title !== undefined) task.title = newData.title;
      if (newData.description !== undefined)
        task.description = newData.description;
      if (newData.date !== undefined) task.date = newData.date;
      if (newData.priority !== undefined) task.priority = newData.priority;

      break;
    }
  }

  saveState();
}

function getTasks() {
  const project = getCurrentProject();
  return project ? [...project.tasks] : [];
}

function getTaskById(id) {
  for (const project of __projects) {
    const task = project.tasks.find((t) => t.id === id);
    if (task) return task;
  }
  return null;
}

function loadState() {
  const raw = localStorage.getItem("todoApp");

  if (!raw) {
    const defaultProject = projectFactory("All Tasks");
    __projects = [defaultProject];
    currentProjectId = defaultProject.id;
    currentView = "project";
    return;
  }

  const data = JSON.parse(raw);

  if (Array.isArray(data)) {
    __projects = data;
    currentProjectId = data[0]?.id || null;
    currentView = "project";
  } else {
    __projects = data.projects || [];
    currentProjectId = data.currentProjectId || __projects[0]?.id || null;
    currentView = "all";
  }
}

loadState();

export {
  getProjects,
  addProject,
  setCurrentProject,
  getCurrentProject,
  addTask,
  removeTask,
  toggleCompletion,
  updateTask,
  getTasks,
  getTaskById,
  setView,
  getView,
  getAllTasks,
  deleteProject,
};
