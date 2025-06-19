export default function getTasksData():Map<string, string> {
    const t:Map<string, string> = new Map()

    for(let i = 0 ; i < localStorage.length ; i++) {
        const key = localStorage.key(i)
        if(key !== null) {
            const value = localStorage.getItem(key)
            if(value !== null) t.set(key, value)
        }
    }
    return t
}