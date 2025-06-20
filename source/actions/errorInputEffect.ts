export default function errorInputEffect(input:'name' | 'content', vibrate:boolean = true) {
    const taskNameInput = document.querySelector("#task") as HTMLInputElement
    const taskContentInput = document.querySelector("#content") as HTMLInputElement

    switch(input) {
        case 'name':
            taskNameInput.focus()
            taskNameInput.style.borderColor = "#ff5a5a"
        break;

        case 'content':
            taskContentInput.focus()
            taskContentInput.style.borderColor = "#ff5a5a"
        break; 
    }

    if(vibrate) {
        document.body.classList.add("vibrando")
        setTimeout(() => {
            document.body.classList.remove("vibrando")
        }, 250);
    }
}