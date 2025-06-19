export default function errorInputEffect(vibrate:boolean = true) {
    const taskNameInput = document.querySelector("#task") as HTMLInputElement
    taskNameInput.focus()
    taskNameInput.style.borderColor = "#ff5a5a"
    if(vibrate) {
        document.body.classList.add("vibrando")
        setTimeout(() => {
            document.body.classList.remove("vibrando")
        }, 250);
    }
    return;
}