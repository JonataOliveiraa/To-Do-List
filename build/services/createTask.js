import { Task } from "../entities/Task.js";
export default function createTask(name, content) {
    return new Task(name, content);
}
