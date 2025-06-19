import deleteTaskData from "../services/db/deleteTaskData.js";
export class Task {
    name;
    content;
    buttonDelete;
    htmlElement;
    constructor(taskName, taskContent) {
        this.name = taskName;
        this.content = taskContent;
        const taskNameInput = document.querySelector("#task");
        const divBodyComponent = document.createElement("div");
        const divActionMenu = document.createElement("div");
        divBodyComponent.className = "task";
        divActionMenu.className = "action-menu";
        const h3TaskName = document.createElement("h3");
        h3TaskName.textContent = `Task: ${this.name}`;
        h3TaskName.className = "task-name";
        const h3TaskContent = document.createElement("h3");
        h3TaskContent.textContent = `Content: ${this.content}`;
        h3TaskContent.className = "task-content";
        this.buttonDelete = document.createElement("button");
        this.buttonDelete.textContent = 'Deletar';
        this.buttonDelete.addEventListener("click", e => {
            divBodyComponent.remove();
            deleteTaskData(this.name);
            taskNameInput.style.borderColor = "#5a9cff";
        });
        divActionMenu.append(h3TaskContent, h3TaskName, this.buttonDelete);
        divBodyComponent.append(divActionMenu);
        this.htmlElement = divBodyComponent;
    }
}
