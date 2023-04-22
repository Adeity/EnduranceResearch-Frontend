export const formatTime = ({hours, minutes}) => {
    return hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}

export const fromString = (text) => {
    let index = text.indexOf(":");
    let hours = Number(text.substring(index-2, index))
    let minutes = Number(text.substring(index+1, index+3))
    return { hours: hours, minutes: minutes}
}

export const formatTimeWithYear = (date) => {
    return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() + " " + formatTime( {hours: date.getHours(), minutes: date.getMinutes()});
} 

export const formatTimeForExcel = (date) => {
    return date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) + "-" + 
           (date.getMonth()+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) + "-" + 
           date.getFullYear();
}

export const formatTimeOnlyHoursToJson = (time) => {
    return { 
        hours: Number(time.slice(0, 2)), 
        minutes: Number(time.slice(3, 5)) 
    }
}