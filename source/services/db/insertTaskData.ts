import { Task } from "../../entities/Task.js";

export default function insertTaskData(task:Task) {
    localStorage.setItem(task.name, task.content)
}