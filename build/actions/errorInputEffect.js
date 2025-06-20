export default function errorInputEffect(input, vibrate = true) {
    const taskNameInput = document.querySelector("#task");
    const taskContentInput = document.querySelector("#content");
    switch (input) {
        case 'name':
            taskNameInput.focus();
            taskNameInput.style.borderColor = "#ff5a5a";
            break;
        case 'content':
            taskContentInput.focus();
            taskContentInput.style.borderColor = "#ff5a5a";
            break;
    }
    if (vibrate) {
        document.body.classList.add("vibrando");
        setTimeout(() => {
            document.body.classList.remove("vibrando");
        }, 250);
    }
}
