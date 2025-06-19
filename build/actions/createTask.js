import { Task } from "../entities/Task";
export default function addTask(event, name, contet) {
    const taskNameInput = document.querySelector("#task");
    const taskContentInput = document.querySelector("#content");
    if (!name || !contet)
        return;
    for (let el of tasks) {
        if (el) {
            if (el.taskName === taskInput.value.trim()) {
                taskInput.focus();
                document.body.classList.add("vibrando");
                setTimeout(() => {
                    document.body.classList.remove("vibrando");
                }, 250);
                return;
            }
        }
    }
    const task = new Task(taskInput.value.trim(), contentInput.value);
    task.taskButtonDelete.addEventListener("click", e => {
        const i = tasks.findIndex(el => el.taskName === task.taskName);
        if (i !== -1) {
            tasks.splice(i, 1);
        }
    });
    taskList?.append(task.htmlElement);
    tasks.push(task);
    taskInput.value = '';
    contentInput.value = '';
    taskInput.focus();
}
