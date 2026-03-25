const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click" ,function(){
    const taskText = taskInput.value.trim();
    if (taskText === ""){
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click",function(){
        li.classList.toggle("completed");
    })
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn")
    deleteBtn.addEventListener("click",function(){
        li.remove();
    })
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
})

