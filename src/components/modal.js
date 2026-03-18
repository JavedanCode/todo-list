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

      input.value = taskData.title;
      textarea.value = taskData.desc;
      dateInput.value = taskData.date;
      select.value = taskData.priority;
    } else {
      title.textContent = "Add Task";
      submitBtn.textContent = "Add";

      input.value = "";
      textarea.value = "";
      dateInput.value = "";
      select.value = "low";
    }
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
