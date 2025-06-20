import { Task } from "../entities/Task.js";
import getTasksData from "../services/db/getTasksData.js";
import errorInputEffect from "./errorInputEffect.js";
import insertTaskData from "../services/db/insertTaskData.js";
import showTask from "./showTask.js";

export default function addTask(task:Task) {
    const taskNameInput = document.querySelector("#task") as HTMLInputElement
    const taskContentInput = document.querySelector("#content") as HTMLInputElement
    const taskListBox = document.querySelector("#list") as HTMLDivElement
    
    task.name = task.name.trim()
    task.content = task.content.trim()

    if (taskNameInput.value === '') {
        taskNameInput.focus()
        errorInputEffect('name');
        return;
    }
    
    if (taskContentInput.value === '') {
        taskContentInput.focus()
        errorInputEffect('content');
        return;
    }

    const tasks = getTasksData()

    for(let [name, content] of tasks) {
        if(name === task.name) {
            errorInputEffect('name')
            console.log('ja existe')
            return;
        }
    }

    showTask(task)//adiçao na lista de task do html
    insertTaskData(task)//adicionando na lista de task do localstorage

    //limpar todos os campo e focar no input inicial
    taskNameInput.value = ''
    taskContentInput.value = ''
    taskNameInput.focus()
}
