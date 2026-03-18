import logoImg from "../img/logo.png";

export function loadHeader(header) {
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = logoImg;
  logo.alt = "phoenix logo";

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = "Todo Phoenix";

  header.appendChild(logo);
  header.appendChild(title);
}
