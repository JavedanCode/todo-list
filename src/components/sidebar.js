export function loadSidebar(sidebar) {
  const top_sidebar = document.createElement("div");
  top_sidebar.id = "top-sidebar";
  const mid_sidebar = document.createElement("div");
  mid_sidebar.id = "mid-sidebar";

  const sidebar_buttons = [
    {
      name: "🧾 All",
      section: "top",
    },
    {
      name: "🗓️ Today",
      section: "top",
    },
    {
      name: "✔️ Completed",
      section: "top",
    },
    {
      name: "📁 Project List",
      section: "mid",
    },
    {
      name: "➕ Add Project",
      section: "mid",
    },
  ];

  sidebar_buttons.forEach((button) => {
    const section_button = document.createElement("button");
    section_button.classList.add("section-btn");
    section_button.textContent = button.name;
    section_button.dataset.name = button.name;

    if (button.section === "top") {
      top_sidebar.appendChild(section_button);
    } else {
      mid_sidebar.appendChild(section_button);
    }
  });
  sidebar.appendChild(top_sidebar);
  sidebar.appendChild(mid_sidebar);
}
