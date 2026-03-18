export function loadLayout() {
  const content = document.createElement("div");
  content.id = "content";
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  const header = document.createElement("div");
  header.classList.add("header");
  const main = document.createElement("div");
  main.id = "main";
  const footer = document.createElement("footer");
  footer.id = "footer";

  content.appendChild(sidebar);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  return {
    content,
    sidebar,
    header,
    main,
    footer,
  };
}
