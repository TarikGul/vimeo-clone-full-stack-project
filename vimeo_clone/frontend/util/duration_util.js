export const durationCalc = (secs) => {
    var sec_num = parseInt(secs, 10)
    let minutes = Math.floor(sec_num / 60) % 60
    let seconds = sec_num % 60;

    if (minutes < 10 && minutes > 0) {
        minutes = `0${minutes}`
    } else if (minutes === 0) {
        minutes = `00`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
}