export default function insertTaskData(task) {
    localStorage.setItem(task.name, task.content);
}
