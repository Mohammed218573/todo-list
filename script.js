const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];
const savedTasks = localStorage.getItem("tasks");
if(savedTasks){
    tasks = JSON.parse(savedTasks);
}
tasks.forEach(function(task){
    const li = document.createElement("li");
    li.textContent = task;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn")
    deleteBtn.addEventListener("click",function(){
        li.remove();
        tasks = tasks.filter(function(t){
            return t !== task; 
        })
        localStorage.setItem("tasks",JSON.stringify(tasks))
    })
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
})
    

addBtn.addEventListener("click" ,function(){
    const taskText = taskInput.value.trim();
    if (taskText === ""){
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;
    tasks.push(taskText);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    li.addEventListener("click",function(){
        li.classList.toggle("completed");
    })
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn")
    deleteBtn.addEventListener("click",function(){
        li.remove();
        tasks = tasks.filter(function(task){
            return task !== taskText; 
        })
        localStorage.setItem("tasks",JSON.stringify(tasks))
        
    })
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
})

