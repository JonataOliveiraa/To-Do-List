export default function getTasksData() {
    const t = new Map();
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== null) {
            const value = localStorage.getItem(key);
            if (value !== null)
                t.set(key, value);
        }
    }
    return t;
}
