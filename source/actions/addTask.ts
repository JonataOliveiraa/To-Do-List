import { Task } from "../entities/Task.js";
import getTasksData from "../services/db/getTasksData.js";
import errorInputEffect from "./errorInputEffect.js";
import insertTaskData from "../services/db/insertTaskData.js";
import showTask from "./showTask.js";

export default function addTask(task:Task) {
    const taskNameInput = document.querySelector("#task") as HTMLInputElement
    const taskContentInput = document.querySelector("#content") as HTMLInputElement
    const taskListBox = document.querySelector("#list") as HTMLDivElement
    if(taskNameInput.value === '' || taskContentInput.value === '') return;
    
    const tasks = getTasksData()

    task.name = task.name.trim()
    task.content = task.content.trim()

    for(let [name, content] of tasks) {
        if(name === task.name) {
            errorInputEffect()
            console.log('ja existe')
            return;
        }
    }

    showTask(task)//adiçao na lista de task do html
    console.log('adicionado')
    insertTaskData(task)//adicionando na lista de task do localstorage

    //limpar todos os campo e focar no input inicial
    taskNameInput.value = ''
    taskContentInput.value = ''
    taskNameInput.focus()
}
