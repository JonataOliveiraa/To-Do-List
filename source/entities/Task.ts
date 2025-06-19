import deleteTaskData from "../services/db/deleteTaskData.js";

export class Task {
    name:string;
    content:string;
    buttonDelete:HTMLButtonElement;
    
    htmlElement:HTMLDivElement;

    constructor(taskName:string, taskContent:string) {
        this.name = taskName
        this.content = taskContent

        const taskNameInput = document.querySelector("#task") as HTMLInputElement

        const divBodyComponent = document.createElement("div") //container
        const divActionMenu = document.createElement("div") //menu
        divBodyComponent.className = "task"
        divActionMenu.className = "action-menu"
        
        //task display
        const h3TaskName = document.createElement("h3")
        h3TaskName.textContent = `Task: ${this.name}`
        h3TaskName.className = "task-name"

        const h3TaskContent = document.createElement("h3")
        h3TaskContent.textContent = `Content: ${this.content}`
        h3TaskContent.className = "task-content"

        //delete button task event
        this.buttonDelete = document.createElement("button")
        this.buttonDelete.textContent = 'Deletar'
        this.buttonDelete.addEventListener("click", e => {
            divBodyComponent.remove()
            deleteTaskData(this.name)
            
            taskNameInput.style.borderColor = "#5a9cff"
        })
        
        //constroying
        divActionMenu.append(h3TaskContent, h3TaskName, this.buttonDelete)
        divBodyComponent.append(divActionMenu)

        this.htmlElement = divBodyComponent
    }
}