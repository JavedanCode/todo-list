export function loadModal() {
  const overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  overlay.classList.add("hidden");

  const modal = document.createElement("div");
  modal.id = "modal";

  const content = document.createElement("div");
  content.classList.add("modal-content");

  const title = document.createElement("h2");
  title.textContent = "Add Task";

  const input = document.createElement("input");
  input.placeholder = "Task title";

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Description";

  const dateInput = document.createElement("input");
  dateInput.type = "date";

  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  const select = document.createElement("select");

  const options = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    select.appendChild(option);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Add";

  content.appendChild(title);
  content.appendChild(input);
  content.appendChild(textarea);
  content.appendChild(dateInput);
  content.appendChild(select);
  content.appendChild(submitBtn);

  modal.appendChild(content);
  overlay.appendChild(modal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
    }
  });

  function openModal(mode = "add", taskData = null) {
    overlay.classList.remove("hidden");

    if (mode === "edit" && taskData) {
      title.textContent = "Edit Task";
      submitBtn.textContent = "Save";

      input.value = taskData.title || "";
      textarea.value = taskData.description || "";
      dateInput.value = taskData.date || "";
      select.value = taskData.priority || "low";

      textarea.classList.remove("hidden");
      dateInput.classList.remove("hidden");
      select.classList.remove("hidden");
    } else if (mode === "project") {
      title.textContent = "Add Project";
      submitBtn.textContent = "Add";

      input.value = "";
      input.placeholder = "Project Title";

      textarea.classList.add("hidden");
      dateInput.classList.add("hidden");
      select.classList.add("hidden");
    } else {
      title.textContent = "Add Task";
      submitBtn.textContent = "Add";
      input.placeholder = "Task title";

      textarea.classList.remove("hidden");
      dateInput.classList.remove("hidden");
      select.classList.remove("hidden");

      const today = new Date().toISOString().split("T")[0];

      input.value = "";
      textarea.value = "";
      dateInput.value = today;
      select.value = "low";
    }

    setTimeout(() => input.focus(), 0);
  }

  function closeModal() {
    overlay.classList.add("hidden");
  }

  return {
    overlay,
    openModal,
    closeModal,
    input,
    textarea,
    dateInput,
    select,
    submitBtn,
  };
}
