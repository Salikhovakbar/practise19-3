const formEl = document.getElementById("form");
const inputAd = document.getElementById("add-input-task");
const removeInputText = document.getElementById("remove-task");
const btnAdd = document.getElementById("btn-create");
const btnDeleteAll = document.getElementById("btn-delete");
const boxAddedTasks = document.querySelector(".added-tasks");
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const boxEl = document.createElement("div");
const pEl = document.createElement("p");
const btnsBox = document.createElement("div")
const btnComplete = document.createElement("button");
const btnEdit = document.createElement("button");
const btnDelete = document.createElement("button");
const realesedTime = document.createElement("button");
boxAddedTasks.appendChild(boxEl);
boxEl.appendChild(pEl);
boxEl.appendChild(btnsBox);
btnsBox.appendChild(btnComplete);
btnsBox.appendChild(btnEdit);
btnsBox.appendChild(btnDelete);
btnsBox.appendChild(realesedTime); 
pEl.innerText = inputAd.value;
inputAd.value = "";
pEl.className = "task"
btnsBox.className = "box-of-btns"
btnComplete.innerHTML = '<i class="bi bi-check2-square"></i>   <p class="name-of-btn">Complete</p>';
btnEdit.innerHTML = '<i class="bi bi-pen"></i>   <p class="name-of-btn">Edit</p>';
btnDelete.innerHTML = '<i class="bi bi-trash3-fill"></i>   <p class="name-of-btn">Delete</p>';
realesedTime.innerHTML = '<i class="bi bi-clock"></i> '  + time;
btnComplete.addEventListener("click", () => {
    pEl.classList.toggle("taskStyle");
})
btnEdit.addEventListener("click", () => {
if(pEl.hasAttribute("contenteditable")){
    pEl.removeAttribute("contenteditable");
    btnEdit.innerHTML = '<i class="bi bi-pen"></i>   <p class="name-of-btn">Edit</p>';
    pEl.style.border = "none"; 
}
else{
    pEl.setAttribute("contenteditable", true);
    pEl.style.outline = "none";
    btnEdit.innerHTML = '<i class="bi bi-pencil-square"></i>';
    pEl.style.border = "0.5px solid black"; 
}
})
btnDelete.addEventListener("click", () => {
    boxEl.remove();
})
})
removeInputText.addEventListener("click", () => {
    inputAd.value = "";
})
btnDeleteAll.addEventListener("click", () => {
    boxAddedTasks.innerHTML = "";
})