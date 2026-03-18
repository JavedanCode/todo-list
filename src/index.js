import "./styles.css";
import { loadLayout } from "./layout/layout";
import { loadSidebar } from "./components/sidebar";
import { loadMain } from "./components/mainContent";
import { loadHeader } from "./components/header";
import { loadFooter } from "./components/footer";
import { loadModal } from "./components/modal";

const layout = loadLayout();

loadHeader(layout.header);
loadSidebar(layout.sidebar);
const mainRefs = loadMain(layout.main);
loadFooter(layout.footer);

const modal = loadModal();

document.body.appendChild(layout.content);
document.body.appendChild(modal.overlay);

mainRefs.addTaskBtn.addEventListener("click", () => {
  modal.openModal("add");
});

// const addTaskBtn = document.getElementById("add-task-btn");
// const modalOverlay = document.getElementById("modal-overlay");

// // OPEN MODAL
// addTaskBtn.addEventListener("click", () => {
//   modalOverlay.classList.remove("hidden");
// });

// // CLOSE MODAL (click outside)
// modalOverlay.addEventListener("click", (e) => {
//   if (e.target === modalOverlay) {
//     modalOverlay.classList.add("hidden");
//   }
// });
