let button = document.querySelector('#buttonAdd');
let list = document.querySelector('#newTask');
let todo;

function toLocal(){
    todo = list.innerHTML;
    localStorage.setItem('note', todo);
}

if(localStorage.getItem("note")){
    list.innerHTML = localStorage.getItem('note');
}


button.addEventListener('click', ()=> {
    let li = document.createElement('li');
    let inputTask = document.querySelector('#inputTasks').value;
    let t = document.createTextNode(inputTask);

    li.appendChild(t);
    if(inputTask == ''){
        alert('add task')
    }else{
        list.appendChild(li);
    }

    document.getElementById('inputTasks').value = '';
    let span = document.createElement('span');
    let x = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(x);
    li.appendChild(span);

    toLocal();
})

//delete tsk

list.addEventListener('click', event => {
    if(event.target.tagName == 'LI'){
        event.target.classList.toggle('checked');
        toLocal();
    }else if(event.target.tagName == 'SPAN'){
        let div = event.target.parentNode;
        div.remove();
        toLocal();
    }
})
