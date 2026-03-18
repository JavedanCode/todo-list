import githubLogo from "../img/github-mark.svg";

export function loadFooter(footer) {
  const p = document.createElement("p");

  const text = document.createTextNode("Copyright © 2026 ");

  const link = document.createElement("a");
  link.href = "https://github.com/JavedanCode";
  link.textContent = "JavedanCode";

  const img = document.createElement("img");
  img.classList.add("github-logo");
  img.src = githubLogo;

  link.appendChild(img);

  p.appendChild(text);
  p.appendChild(link);

  footer.appendChild(p);
}
