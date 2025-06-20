import createTask from "../services/createTask.js"
import addTask from "../actions/addTask.js"
import getTasksData from "../services/db/getTasksData.js"
import errorInputEffect from "../actions/errorInputEffect.js"
import { get } from "http"

const taskListBox = document.querySelector("#list")
const createButton = document.querySelector("#create") as HTMLButtonElement
const taskInputC = document.querySelector("#task") as HTMLInputElement
const contentInputC = document.querySelector("#content") as HTMLInputElement

const loaded = getTasksData()
loaded.forEach((content, name) => {
    const task = createTask(name, content)
    taskListBox?.append(task.htmlElement)
})

createButton?.addEventListener("click", (e) => {
    const taskNameInput = document.querySelector("#task") as HTMLInputElement
    const taskContentInput = document.querySelector("#content") as HTMLInputElement

    const task = createTask(taskNameInput.value, taskContentInput.value)
    
    addTask(task)
})

taskInputC.addEventListener("input", () => {
    const taskNameInput = document.querySelector("#task") as HTMLInputElement
    const tasks = getTasksData()
    
    for(let [name, content] of tasks) {
        if(name === taskNameInput.value) {
            errorInputEffect('name', false)
            return;
        }
    }
    taskNameInput.style.borderColor = "#5a9cff"
    return;
})

contentInputC.addEventListener('input', () => contentInputC.style.borderColor = "#5a9cff")

document.addEventListener("keydown", e => {
    if(e.key === "Enter") createButton.click()
})
