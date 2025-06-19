import getTasksData from "../services/db/getTasksData.js";
import errorInputEffect from "./errorInputEffect.js";
import insertTaskData from "../services/db/insertTaskData.js";
import showTask from "./showTask.js";
export default function addTask(task) {
    const taskNameInput = document.querySelector("#task");
    const taskContentInput = document.querySelector("#content");
    const taskListBox = document.querySelector("#list");
    if (taskNameInput.value === '' || taskContentInput.value === '')
        return;
    const tasks = getTasksData();
    task.name = task.name.trim();
    task.content = task.content.trim();
    for (let [name, content] of tasks) {
        if (name === task.name) {
            errorInputEffect();
            console.log('ja existe');
            return;
        }
    }
    showTask(task);
    console.log('adicionado');
    insertTaskData(task);
    taskNameInput.value = '';
    taskContentInput.value = '';
    taskNameInput.focus();
}
