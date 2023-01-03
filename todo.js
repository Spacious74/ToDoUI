let totaltask = document.getElementById('taskcontainer').childElementCount;
document.getElementById('taskcounter').innerHTML = totaltask;
let taskTabContainer = document.querySelector('.tasktabcontainer');
if (taskTabContainer.childElementCount == 0) {
    document.querySelector(".emptyContainer").style.display = 'flex';
} else {
    document.querySelector(".emptyContainer").style.display = 'none';
}

let date = new Date();
document.getElementById("date").innerHTML = "Date - " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

let filter = document.getElementById("filter");
filter.addEventListener("keyup", filterTodos)
function filterTodos(e) {
    //convert to lowercase
    let searchText = filter.value.toLowerCase();
    let allTodosList = document.querySelector(".tasktabcontainer").children;
    
    Array.from(allTodosList).forEach(item => {
        let todoitem = item.firstChild.lastChild.value;
        // console.log(todoitem.toLowerCase().indexOf(searchText));
        if (todoitem.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'flex'

        } else {
            item.style.display = 'none'
        }
    })
}

let addBar = document.querySelector('.textfield');
addBar.addEventListener('keyup', ()=>{
    let counter = document.getElementById('charCounter');
    counter.innerText = addBar.value.length + "/30";
});




function deleteme(n) {
    document.getElementById('tasktab' + n).remove();
    let element = document.getElementById("taskcontainer").childElementCount;
    if(element == 0){
        document.querySelector(".emptyContainer").style.display = 'flex';
    }
    document.getElementById('taskcounter').innerHTML = element;
}

function editme(n){
    let inputField = document.getElementById('edittext' + n);
    inputField.removeAttribute('readonly');
    inputField.style.backgroundColor = "white";
    inputField.style.outline = "solid 1px grey";
    inputField.style.borderRadius = "6px";
    inputField.style.padding = "5px";
    inputField.setAttribute("maxlength", "30");

    inputField.autofocus = "true";
    let Edit = document.getElementById('editBtn' + n);
    Edit.style.display = "none";
    let Save = document.getElementById('saveBtn' + n);
    Save.style.display = "block";
}


function saveme(n){
    let editedText = document.getElementById('edittext' + n).value;
    if(editedText.length == 0){
        alert("Please enter a task");
        return;
    } else  if (editedText.trim() == ""){
        alert("Please enter a task not spaces only ");
        return;
    }
    let inputField = document.getElementById('edittext' + n);
    inputField.value = editedText.trim();
    inputField.setAttribute('readonly', true);
    inputField.style.backgroundColor = "transparent";
    inputField.style.outline = "none";
    let Edit = document.getElementById('editBtn' + n);
    Edit.style.display = "block";
    let Save = document.getElementById('saveBtn' + n);
    Save.style.display = "none";
}

let t = 1;

function addtask() {
    let task = document.querySelector('.textfield').value;
    if (task.length < 2) {
        return;
    } else if (task.trim() == ""){
        alert("Please enter a task not spaces only ");
        return;
    }
    document.querySelector('.emptyContainer').style.display = 'none';
    let taskTabContainer = document.querySelector(".tasktabcontainer");
    let taskTab = document.createElement('div');
    taskTab.classList.add("taskstab");
    let id = "tasktab" + t;
    taskTab.setAttribute("id", id);
    taskTabContainer.appendChild(taskTab);

    let taskcont = document.createElement('div');
    taskcont.setAttribute("class", "checkandtext");

    // checkbox
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("name", "check");
    let checkId = "checkbox" + t;
    check.setAttribute("id", checkId);
    let checkfun = "checkedOrNot(" + t + ")";
    check.setAttribute("onclick", checkfun);

    taskcont.appendChild(check);

    // text inside task tab
    let textCont = document.createElement("input");
    textCont.value = task.trim();
    textCont.setAttribute("type","text");
    textCont.setAttribute("class","tasktext");
    let textId = "edittext" + t;
    textCont.setAttribute("id", textId);
    textCont.setAttribute("readonly", true);


    taskcont.append(textCont);

    // delete and edit button inside task tab

    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class","btns");
    btnconId = "btncon" + t;
    btnContainer.setAttribute("id", btnconId);

    // delete button
    let dltbutton = document.createElement("button");
    dltbutton.classList.add("btn", "dltbtn");
    let buttonId = "deleteBtn" + t;
    dltbutton.setAttribute("id", buttonId);
    dltbutton.innerHTML = '<img src="https://img.icons8.com/material-rounded/24/ffffff/trash.png" class="delicon"/>'
    let fun = "deleteme(" + t + ")";
    dltbutton.setAttribute("onclick", fun);


    // edit button 
    let editbutton = document.createElement("button");
    editbutton.classList.add("btn", "editbtn");
    let editId = "editBtn" + t;
    editbutton.setAttribute("id", editId);
    editbutton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/24/ffffff/pencil--v1.png" class="delicon" style="margin-bottom: 5px;"/>';
    let editfun = "editme(" + t + ")";
    editbutton.setAttribute("onclick", editfun);

    // savebutton
    let savebutton = document.createElement("button");
    savebutton.classList.add("btn", "savebtn");
    let saveId = "saveBtn" + t;
    savebutton.setAttribute("id", saveId);
    savebutton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/24/ffffff/save--v1.png" class="delicon" style = "margin-bottom: 5px;"/>'
    let savefun = "saveme(" + t + ")";
    savebutton.setAttribute("onclick", savefun);
    savebutton.style.display = "none";


    btnContainer.append(editbutton,savebutton,dltbutton);

    // done element
    let doneElement = document.createElement("div");
    doneElement.classList.add("done");
    let doneId = "done" + t;
    doneElement.setAttribute("id", doneId);
    doneElement.innerHTML = "Done";
    doneElement.style.display = "none";

    t++;
    taskTab.append(taskcont, doneElement, btnContainer);
    let totaltask = document.getElementById('taskcontainer').childElementCount;
    document.getElementById('taskcounter').innerHTML = totaltask;

    document.querySelector('.textfield').value = "";
    let counter = document.getElementById('charCounter');
    counter.innerText = "0/30";
}

function checkedOrNot(t) {
    let checkElement = document.querySelector("#checkbox" + t);
    // console.log(checkElement.checked);
    let status = document.getElementById("tasktab" + t);
    let deleteBtn = document.getElementById("deleteBtn" + t);
    let editBtn = document.getElementById("editBtn" + t);
    let btns = document.getElementById("btncon" + t);
    let done = document.getElementById("done" + t);
    if (checkElement.checked == true) {
        status.style.backgroundColor = "#c9ffc4";
        deleteBtn.style.display = "none";
        editBtn.style.display = "none";
        btns.style.display = "none";
        done.style.display = "block";

    } else {
        // done.innerHTML = ""; 
        status.style.backgroundColor = "#eef1f5";
        deleteBtn.style.display = "block";
        editBtn.style.display = "block";
        btns.style.display = "flex";
        done.style.display = "none";
    }

}