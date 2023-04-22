import { formatTimeOnlyHoursToJson, formatTime } from '../utils/time-format'

export function getPeopleDataSleep() {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/sleep-respondent-data`)
        .then(response => response.json())
        .then(data => extractPeopleDataSleep(data))
}

export function extractPeopleDataSleep(people) {

    const srData = [];

    people.forEach(respondent => {

        const reports = [];
        
        respondent.computations.forEach(element => reports.push(computationResultFromDto(element, respondent)))

        srData.push({
            id: respondent.id,
            reports: reports
        })
    });
    return srData;
}

export function computationResultToDto(computation) {
    return {
        id: computation.id,
        person_id: computation.personId,
        chronoFa: computation.fallingAsleepRythm,
        chronoWa: computation.wakingRythm,
        chronotype: computation.chronotype,
        created: computation.uploaded,
        modified: computation.lastModified,
        latencyFAGreaterText: computation.latencyText,
        socJetlagGreaterText: computation.jetlagBiggerThanXText,
        chronoFaText: computation.fallingAsleepRythmText,
        chronoWaText: computation.wakingRythmText,
        socJetlagGreater: computation.jetlagBiggerThanX,
        latencyFAGreater: computation.latency,
        awakeFrom: formatTime(computation.chronoAwakeFrom),
        awakeTo: formatTime(computation.chronoAwakeTo),
        sleepFrom: formatTime(computation.chronoSleepFrom),
        sleepTo: formatTime(computation.chronoSleepTo)
    }

}

export function computationResultFromDto(element, respondent) {

    return {
        id: element.id,
        title: respondent.id + " - SLEEP",
        uploaded: new Date(element.created),
        lastModified: new Date(element.modified),

        personId: respondent.id,
        chronotype: element.chronotype,
        latency: element.latencyFAGreater,
        latencyText: element.latencyFAGreaterText,
        wakingRythm: element.chronoWa,
        wakingRythmText: element.chronoWaText,
        fallingAsleepRythm: element.chronoFa,
        fallingAsleepRythmText: element.chronoFaText,
        jetlagBiggerThanX: element.socJetlagGreater,
        jetlagBiggerThanXText: element.socJetlagGreaterText,

        chronoAwakeFrom: formatTimeOnlyHoursToJson(element.awakeFrom),
        chronoAwakeTo: formatTimeOnlyHoursToJson(element.awakeTo),
        chronoSleepFrom: formatTimeOnlyHoursToJson(element.sleepFrom),
        chronoSleepTo: formatTimeOnlyHoursToJson(element.sleepTo)
    }
}