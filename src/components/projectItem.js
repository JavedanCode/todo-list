export function loadProjects() {
  const projects = document.createElement("div");
  projects.id = "projects";

  projects.innerHTML = "";

  const projectTitle = document.createElement("h2");
  projectTitle.id = "project-title";
  projectTitle.textContent = "All Tasks";

  const tasks = document.createElement("div");
  tasks.id = "tasks";

  projects.appendChild(projectTitle);
  projects.appendChild(tasks);

  return {
    container: projects,
    tasks,
    projectTitle,
  };
}
