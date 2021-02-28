document.addEventListener("DOMContentLoaded", () => {

  function createButton(dataDescription) {
    let button = document.createElement("button");
    button.innerHTML = "X";
    return button;
  }

  document.getElementById("create-task-form").addEventListener("submit", function(event) {

    const tasks = document.getElementById("tasks")
    const task = document.createElement("LI");
    let listItem = document.createTextNode(this[0].value + " "); 
    task.appendChild(listItem);
    
    task.appendChild(createButton(this[0].value)).addEventListener("click", function() {
      this.parentElement.remove();
    });
    task.addEventListener("dblclick", function() {
      alert(`${this.innerText.split(" ")[0].replace(/^\w/, (c) => c.toUpperCase())} has been double clicked.`);
    });
    tasks.appendChild(task);
 
    this[0].value = ""
    event.preventDefault();
  });

  
});
