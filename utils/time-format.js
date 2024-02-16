export const formatTime = ({hours, minutes}) => {
    return hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}

export const fromString = (text) => {

    if(text.length != 5) {
        return {hours: NaN, minutes: NaN}
    }

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
        hours: Number(time[0]),
        minutes: Number(time[1])
    }
}

export const isValidHHMM = (time) => {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/
    return regex.test(time)
}