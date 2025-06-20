import getTasksData from "../services/db/getTasksData.js";
import errorInputEffect from "./errorInputEffect.js";
import insertTaskData from "../services/db/insertTaskData.js";
import showTask from "./showTask.js";
export default function addTask(task) {
    const taskNameInput = document.querySelector("#task");
    const taskContentInput = document.querySelector("#content");
    const taskListBox = document.querySelector("#list");
    task.name = task.name.trim();
    task.content = task.content.trim();
    if (taskNameInput.value === '') {
        taskNameInput.focus();
        errorInputEffect('name');
        return;
    }
    if (taskContentInput.value === '') {
        taskContentInput.focus();
        errorInputEffect('content');
        return;
    }
    const tasks = getTasksData();
    for (let [name, content] of tasks) {
        if (name === task.name) {
            errorInputEffect('name');
            console.log('ja existe');
            return;
        }
    }
    showTask(task);
    insertTaskData(task);
    taskNameInput.value = '';
    taskContentInput.value = '';
    taskNameInput.focus();
}
