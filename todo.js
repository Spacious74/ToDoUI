let totaltask = document.getElementById('taskcontainer').childElementCount;
document.getElementById('taskcounter').innerHTML = totaltask;
let taskTabContainer = document.querySelector('.tasktabcontainer');
if (taskTabContainer.childElementCount == 0) {
    document.querySelector(".emptyContainer").style.display = 'flex';
} else {
    document.querySelector(".emptyContainer").style.display = 'none';
}

function deleteme(n) {
    document.getElementById('tasktab' + n).remove();
    let element = document.getElementById("taskcontainer").childElementCount;
    console.log(element);
    if(element == 0){
        document.querySelector(".emptyContainer").style.display = 'flex';
    }
    document.getElementById('taskcounter').innerHTML = element;
}

let t = 1;

function addtask() {
    let task = document.querySelector('.textfield').value;
    if (task.length < 2) {
        return;
    }
    document.querySelector('.emptyContainer').style.display = 'none';
    let taskTabContainer = document.querySelector(".tasktabcontainer");
    let taskTab = document.createElement('div');
    taskTab.classList.add("taskstab");
    let id = "tasktab" + t;
    taskTab.setAttribute("id", id);
    // taskTab.style.display = "flex";
    taskTabContainer.appendChild(taskTab);

    let taskcont = document.createElement('div');
    taskcont.style.display = "flex";
    taskcont.style.alignItems = "center";

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
    let textCont = document.createElement("div");
    textCont.innerText = task;

    taskcont.append(textCont);

    // delete button inside task tab
    let dltbutton = document.createElement("button");
    dltbutton.classList.add("btn", "dltbtn");
    let buttonId = "deleteBtn" + t;
    dltbutton.setAttribute("id", buttonId);
    dltbutton.innerHTML = '<img src="https://img.icons8.com/material-rounded/24/ffffff/trash.png" class="delicon"/>'
    let fun = "deleteme(" + t + ")";
    dltbutton.setAttribute("onclick", fun);

    // done element
    let doneElement = document.createElement("div");
    doneElement.classList.add("done");
    let doneId = "done" + t;
    doneElement.setAttribute("id", doneId);
    doneElement.innerHTML = "Done " + '<img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-thumbs-up-achievements-flaticons-flat-flat-icons-2.png" class="delicon"/>';
    doneElement.style.display = "none";

    t++;
    taskTab.append(taskcont, doneElement, dltbutton);
    let totaltask = document.getElementById('taskcontainer').childElementCount;
    document.getElementById('taskcounter').innerHTML = totaltask;

    document.querySelector('.textfield').value = "";
}

function checkedOrNot(t) {
    let checkElement = document.querySelector("#checkbox" + t);
    // console.log(checkElement.checked);
    let status = document.getElementById("tasktab" + t);
    let deleteBtn = document.getElementById("deleteBtn" + t);
    let done = document.getElementById("done" + t);
    if (checkElement.checked == true) {
        status.style.backgroundColor = "#c9ffc4";
        deleteBtn.style.display = "none";
        done.style.display = "block";

    } else {
        status.style.backgroundColor = "#eef1f5";
        deleteBtn.style.display = "block";
        done.style.display = "none";
    }

}