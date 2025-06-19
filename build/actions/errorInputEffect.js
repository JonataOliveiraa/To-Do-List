export default function errorInputEffect(vibrate = true) {
    const taskNameInput = document.querySelector("#task");
    taskNameInput.focus();
    taskNameInput.style.borderColor = "#ff5a5a";
    if (vibrate) {
        document.body.classList.add("vibrando");
        setTimeout(() => {
            document.body.classList.remove("vibrando");
        }, 250);
    }
    return;
}
