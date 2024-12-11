let toDo = []
function addToDo() {
    let list = document.querySelectorAll("header input")
    let obj = {
        toDo: list[0].value,
        complete: false
    }
    
    toDo.push(obj);
    reseteForm(list);
    todoListCreated();
    console.log(toDo);
}

function reseteForm(node) {
    node[0].value = "";
}

function todoListCreated() {  
    let listNode = document.querySelector("main ul");
    listNode.innerHTML = "";
    toDo.forEach((ele, i)=>{
        let li = document.createElement("li");
        li.innerHTML = `${ele.toDo} <span><button onclick="removeList(${i})">X</button></span>`
        listNode.appendChild(li)
    })
}

function removeList(index) {
    toDo.splice(index, 1);
    todoListCreated();
}

let button = document.getElementById("addButton");
button.onclick = addToDo;