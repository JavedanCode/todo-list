import { setCurrentProject, setView, deleteProject } from "../modules/state";

export function renderProjects(projects, container, render) {
  container.innerHTML = "";

  projects
    .filter((project) => project.name !== "All Tasks")
    .forEach((project) => {
      const wrapper = document.createElement("div");

      const btn = document.createElement("button");
      btn.textContent = project.name;
      btn.dataset.id = project.id;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑";

      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        deleteProject(project.id);

        render();
      });

      btn.addEventListener("click", () => {
        setCurrentProject(project.id);
        setView("project");
        render();

        document
          .querySelectorAll("#project-container button[data-id]")
          .forEach((b) => b.classList.remove("active"));

        btn.classList.add("active");
      });

      wrapper.appendChild(btn);
      wrapper.appendChild(deleteBtn);

      container.appendChild(wrapper);
    });
}
