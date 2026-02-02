const tasks = [];

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listContainer = document.querySelector(".listTasks");
const clearAllButton = document.getElementById("clearAll");

form.addEventListener("submit", addTask);
clearAllButton.addEventListener("click", clearAllTasks);

function addTask(event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    tasks.push(text);

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const group = document.createElement("div");
    group.classList.add("task-group");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = text;

    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fas", "fa-times", "delete-btn");

    group.appendChild(checkbox);
    group.appendChild(label);

    taskDiv.appendChild(group);
    taskDiv.appendChild(deleteBtn);

    listContainer.appendChild(taskDiv);

    input.value = "";

    deleteBtn.addEventListener("click", () => {
        taskDiv.remove();
    });
}

function clearAllTasks() {
    listContainer.innerHTML = "";
    tasks.length = 0;
}
