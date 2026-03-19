import "./styles.css";
import { loadLayout } from "./layout/layout";
import { loadSidebar } from "./components/sidebar";
import { loadMain } from "./components/mainContent";
import { loadHeader } from "./components/header";
import { loadFooter } from "./components/footer";
import { loadModal } from "./components/modal";
import { renderTasks } from "./dom/renderTasks";
import { loadProjects } from "./components/projectItem";
import { renderProjects } from "./dom/renderProjects";
import {
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
} from "./modules/state";

function getToday() {
  return new Date().toISOString().split("T")[0];
}
// Load the general layout: header, sidebar, main, footer
const layout = loadLayout();

// load header
loadHeader(layout.header);

//load sidebar
const sidebarRefs = loadSidebar(layout.sidebar);

const projectRefs = loadProjects();

//load main and it's projects
const mainRefs = loadMain(layout.main, projectRefs.container);

// load footer
loadFooter(layout.footer);

// load modal
const modal = loadModal();

document.body.appendChild(layout.content);
document.body.appendChild(modal.overlay);

function setActiveButton(button, selector) {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function syncUIWithState() {
  const view = getView();

  document.querySelectorAll(".section-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (view === "all") setActiveButton(sidebarRefs.all, ".section-btn");
  if (view === "today") setActiveButton(sidebarRefs.today, ".section-btn");
  if (view === "completed")
    setActiveButton(sidebarRefs.completed, ".section-btn");

  if (view === "project") {
    const currentProject = getCurrentProject();

    if (!currentProject) return;

    const btn = document.querySelector(
      `#project-container button[data-id="${currentProject.id}"]`,
    );

    if (btn) btn.classList.add("active");
  }
}

function render() {
  const view = getView();

  renderProjects(getProjects(), sidebarRefs.projectContainer, render);

  mainRefs.addTaskBtn.style.display = view === "project" ? "flex" : "none";

  let tasks = [];

  if (view === "project") {
    tasks = getTasks();
    const currentProject = getCurrentProject();
    if (!currentProject) return;

    projectRefs.projectTitle.textContent = currentProject.name;
  } else if (view === "all") {
    tasks = getAllTasks();
    projectRefs.projectTitle.textContent = "All Tasks";
  } else if (view === "completed") {
    tasks = getAllTasks().filter((t) => t.completed);
    projectRefs.projectTitle.textContent = "Completed Tasks";
  } else if (view === "today") {
    const today = getToday();
    tasks = getAllTasks().filter((t) => t.date === today);
    projectRefs.projectTitle.textContent = "Today's Tasks";
  } else {
    throw new Error("Unrecognized View!");
  }

  renderTasks(tasks, projectRefs.tasks);

  syncUIWithState();
}

render();

//add task button event listener
mainRefs.addTaskBtn.addEventListener("click", () => {
  modal.openModal("add");
  modal.submitBtn.onclick = null;
  modal.submitBtn.onclick = () => {
    const title = modal.input.value.trim();

    if (!title) {
      alert("Task must have a title");
      return;
    }
    const today = getToday();

    const taskData = {
      title: title,
      description: modal.textarea.value,
      date: modal.dateInput.value || today,
      priority: modal.select.value,
    };
    addTask(taskData);
    render();
    modal.closeModal();
  };
});

sidebarRefs.addProject.addEventListener("click", () => {
  modal.openModal("project");

  modal.submitBtn.onclick = null;
  modal.submitBtn.onclick = () => {
    const name = modal.input.value.trim();

    if (!name) {
      alert("Project name cannot be empty");
      return;
    }

    if (name.length > 30) {
      alert("Project name must be under 30 characters");
      return;
    }

    addProject(name);
    render();
    modal.closeModal();
  };
});

sidebarRefs.all.addEventListener("click", () => {
  setView("all");
  setActiveButton(sidebarRefs.all, ".section-btn");
  render();
});

sidebarRefs.completed.addEventListener("click", () => {
  setView("completed");
  setActiveButton(sidebarRefs.completed, ".section-btn");
  render();
});

sidebarRefs.today.addEventListener("click", () => {
  setView("today");
  setActiveButton(sidebarRefs.today, ".section-btn");
  render();
});

sidebarRefs.projects.addEventListener("click", () => {
  sidebarRefs.projectContainer.classList.toggle("hidden");
});

projectRefs.tasks.addEventListener("click", (e) => {
  const taskItem = e.target.closest(".task-item");
  if (!taskItem) return;

  const id = taskItem.dataset.id;

  if (e.target.classList.contains("delete-btn")) {
    removeTask(id);
    render();
  }

  if (e.target.classList.contains("edit-btn")) {
    const task = getTaskById(id);

    if (!task) return;

    modal.openModal("edit", task);
    modal.submitBtn.onclick = null;
    modal.submitBtn.onclick = () => {
      const today = getToday();
      const title = modal.input.value.trim();

      if (!title) {
        alert("Task must have a title");
        return;
      }

      const updatedData = {
        title: title,
        description: modal.textarea.value,
        date: modal.dateInput.value || today,
        priority: modal.select.value,
      };

      updateTask(id, updatedData);

      render();

      modal.closeModal();
    };
  }
});

projectRefs.tasks.addEventListener("change", (e) => {
  if (e.target.classList.contains("task-checkbox")) {
    const taskItem = e.target.closest(".task-item");
    const id = taskItem.dataset.id;

    toggleCompletion(id);

    render();
  }
});
