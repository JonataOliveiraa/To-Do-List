import { Task } from "../entities/Task";

export default function showTask(task:Task) {
    const taskListBox = document.querySelector("#list") as HTMLDivElement
    taskListBox?.append(task.htmlElement)
}