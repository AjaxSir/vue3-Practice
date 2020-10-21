export function formatTime(timetemp) {
    const time = new Date(timetemp)
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    return `${year}-${month}-${day}`
}