let list = document.querySelector("ul");
list.addEventListener("click", ev => {
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }else if(ev.target.tagName === "SPAN"){
        let div = ev.target.parentNode;
        div.remove();
    }
}, false);

function newElement(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("textTask").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == ""){
        alert("no add task")
    }else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("textTask").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode(" X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span)
}
