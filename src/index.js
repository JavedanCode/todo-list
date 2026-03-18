import "./styles.css";

console.log("Webpack is working");

//The core idea

//Add tasks
//delete tasks
//mark complete
//edit task

//structure
//due date
// priority (low, mid, high)
//local storage
//filters:
// all , today , completed

//for ui
//we have a primary sidebar.
//different sections for:
// all tasks, today, completed, project list, add project
//main area: Title for exampe today , task list, add task button

const addTaskBtn = document.getElementById("add-task-btn");
const modalOverlay = document.getElementById("modal-overlay");

// OPEN MODAL
addTaskBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

// CLOSE MODAL (click outside)
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});
