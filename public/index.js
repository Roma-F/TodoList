let buttonTask = document.querySelector("#buttonAdd");
let tasks = document.querySelector(".tasks");


buttonTask.addEventListener("click", ev => {
        let newTsk = document.createElement("div");
        let inputTasks = document.querySelector("#inputTsk").value;
        let txt = document.createTextNode(inputTasks);
        newTsk.appendChild(txt);

        if(inputTasks == "") {
            alert("pls add text tasks");
        }else {
            tasks.appendChild(newTsk);
        }
        document.querySelector("#inputTsk").value = "";
        let span = document.createElement("span");
        let x = document.createTextNode(" X");
        span.className= "close";
        span.appendChild(x);
        newTsk.appendChild(span);
})

//deleted tsk
tasks.addEventListener("click", ev => {
    if(ev.target.tagName == "DIV"){
        ev.target.classList.toggle("checked");
    }else if(ev.target.tagName == "SPAN"){
        let div = ev.target.parentNode;
        ev.target.classList.toggle("checked");
        div.remove();
    }
})
