let tasks = [];
let currentTaskIndex = -1;

document
  .getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

function addTask() {
  const taskInput = document.getElementById("taskInput").value;

  if (taskInput !== "") {
    if (currentTaskIndex === -1) {
      tasks.push(taskInput);
    } else {
      tasks[currentTaskIndex] = taskInput;
      currentTaskIndex = -1;
      document.getElementById("addUpdateButton").textContent = "Add";
    }
  }

  document.getElementById("taskInput").value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;
    li.appendChild(span);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(index);
    li.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      deleteTask(index);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const taskInput = document.getElementById("taskInput");
  taskInput.value = tasks[index];
  currentTaskIndex = index;
  document.getElementById("addUpdateButton").textContent = "Update";
}
