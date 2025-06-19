import { Task } from "../entities/Task.js";

export default function createTask(name:string, content:string) {
    return new Task(name, content)
}