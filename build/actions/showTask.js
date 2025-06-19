export default function showTask(task) {
    const taskListBox = document.querySelector("#list");
    taskListBox?.append(task.htmlElement);
}
