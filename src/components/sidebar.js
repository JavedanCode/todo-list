export function loadSidebar(sidebar) {
  const top_sidebar = document.createElement("div");
  top_sidebar.id = "top-sidebar";

  const mid_sidebar = document.createElement("div");
  mid_sidebar.id = "mid-sidebar";

  const bottom_sidebar = document.createElement("div");
  bottom_sidebar.id = "bottom-sidebar";

  top_sidebar.classList.add("sidebar-section");
  mid_sidebar.classList.add("sidebar-section");

  const sidebar_buttons = [
    { name: "🧾 All", key: "all", section: "top" },
    { name: "🗓️ Today", key: "today", section: "top" },
    { name: "✔️ Completed", key: "completed", section: "top" },
    { name: "📁 Project List", key: "projects", section: "mid" },
    { name: "➕ Add Project", key: "addProject", section: "bottom" },
  ];

  const project_container = document.createElement("div");
  project_container.id = "project-container";
  project_container.classList.add("hidden");

  const refs = {};

  sidebar_buttons.forEach((button) => {
    const btn = document.createElement("button");
    if (button.key === "projects") {
      btn.classList.add("section-label");
    } else {
      btn.classList.add("section-btn");
    }
    btn.textContent = button.name;

    refs[button.key] = btn;

    if (button.section === "top") {
      top_sidebar.appendChild(btn);
    } else if (button.section === "mid") {
      mid_sidebar.appendChild(btn);
    } else {
      bottom_sidebar.appendChild(btn);
    }
  });

  mid_sidebar.appendChild(project_container);

  const upper = document.createElement("div");
  upper.appendChild(top_sidebar);
  upper.appendChild(mid_sidebar);

  sidebar.appendChild(upper);
  sidebar.appendChild(bottom_sidebar);

  return { ...refs, projectContainer: project_container };
}
