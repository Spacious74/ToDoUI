let totaltask = document.getElementById('taskcontainer').childElementCount;
document.getElementById('taskcounter').innerHTML = totaltask;

function deleteme(n) {
    document.getElementById('tasktab' + n).remove();
    let element = document.getElementById("taskcontainer").childElementCount;
    console.log(element);
    document.getElementById('taskcounter').innerHTML = element;
}

let t = 1;

function addtask() {
    let task = document.querySelector('.textfield').value;
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
    check.setAttribute("id", "checkbox");

    taskcont.appendChild(check);

    // text inside task tab
    let textCont = document.createElement("div");
    textCont.innerText = task;

    taskcont.append(textCont);

    // button inside task tab
    let dltbutton = document.createElement("button");
    dltbutton.classList.add("btn", "dltbtn");
    dltbutton.innerHTML = '<img src="https://img.icons8.com/material-rounded/24/ffffff/trash.png" class="delicon"/>'
    let fun = "deleteme(" + t + ")";
    dltbutton.setAttribute("onclick", fun);
    t++;

    taskTab.append(taskcont, dltbutton);
    let totaltask = document.getElementById('taskcontainer').childElementCount;
    document.getElementById('taskcounter').innerHTML = totaltask;

    document.querySelector('.textfield').value = "";
}