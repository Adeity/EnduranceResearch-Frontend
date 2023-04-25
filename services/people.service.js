import { formatTimeOnlyHoursToJson, formatTime } from '../utils/time-format'

export function getPeopleDataSleep() {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/sleep-respondent-data`)
        .then(response => response.json())
        .then(data => extractPeopleDataSleep(data))
}

export function extractPeopleDataSleep(people) {

    const srData = [];

    people.forEach(respondent => {

        const formComputations = [];
        const deviceComputations = [];
        
        respondent.formComputations?.forEach(element => formComputations.push(computationResultFromDto(element, respondent)))
        respondent.deviceComputations?.forEach(element => deviceComputations.push(deviceComputationResultFromDto(element, respondent)))

        srData.push({
            id: respondent.id,
            formComputations: formComputations,
            deviceComputations: deviceComputations
        })
    });
    return srData;
}

export function formComputationResultToDto(computation) {
    return {
        id: computation.id,
        person_id: computation.personId,
        version: computation.version,
        recalculations: computation.recalculations,
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
        title: respondent.id + " - Dotazníky",
        uploaded: new Date(element.created),
        lastModified: new Date(element.modified),
        compComparison: element.compComparison,
        source: "forms",
        version: element.version,
        recalculations: element.recalculations,

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

export function deviceComputationResultFromDto(element, respondent) {
    return {
        id: element.id,
        title: respondent.id + " - Hodinky",
        uploaded: new Date(element.created),
        lastModified: new Date(element.modified),
        compComparison: element.compComparison,
        source: "device",
        version: element.version,
        recalculations: element.recalculations,

        personId: respondent.id,
        chronotype: element.chronotype,
        latency: element.latencyFAGreater,
        latencyText: element.latencyFAGreaterText,
        wakingRythmFreeDays: element.chronoWaFreeDays,
        wakingRythmFreeDaysText: element.chronoWaTextFreeDays,
        fallingAsleepRythmFreeDays: element.chronoFaFreeDays,
        fallingAsleepRythmFreeDaysText: element.chronoFaTextFreeDays,
        wakingRythmWorkDays: element.chronoWaWorkDays,
        wakingRythmWorkDaysText: element.chronoWaTextWorkDays,
        fallingAsleepRythmWorkDays: element.chronoFaWorkDays,
        fallingAsleepRythmWorkDaysText: element.chronoFaTextWorkDays,
        jetlagBiggerThanX: element.socJetlagGreater,
        jetlagBiggerThanXText: element.socJetlagGreaterText,

        chronoAwakeFrom: formatTimeOnlyHoursToJson(element.awakeFrom),
        chronoAwakeTo: formatTimeOnlyHoursToJson(element.awakeTo),
        chronoSleepFrom: formatTimeOnlyHoursToJson(element.sleepFrom),
        chronoSleepTo: formatTimeOnlyHoursToJson(element.sleepTo)
    }
}

export function deviceComputationResultToDto(computation) {

    return {
        id: computation.id,
        version: computation.version,
        researchParticipantResearchNumber: computation.personId,
        recalculations: computation.recalculations,

        chronoFaFreeDays: computation.fallingAsleepRythmFreeDays,
        chronoWaFreeDays: computation.wakingRythmRythmFreeDays,
        chronoFaWorkDays: computation.fallingAsleepRythmWorkDays,
        chronoWaWorkDays: computation.wakingRythmWorWorkDays,
        chronotype: computation.chronotype,
        created: computation.uploaded,
        modified: computation.lastModified,
        latencyFAGreaterText: computation.latencyText,
        socJetlagGreaterText: computation.jetlagBiggerThanXText,
        chronoFaTextFreeDays: computation.fallingAsleepRythmFreeDaysText,
        chronoWaTextFreeDays: computation.wakingRythmFreeDaysText,
        chronoFaTextWorkDays: computation.fallingAsleepRythmWorkDaysText,
        chronoWaTextWorkDays: computation.wakingRythmWorkDaysText,
        socJetlagGreater: computation.jetlagBiggerThanX,
        latencyFAGreater: computation.latency,

        awakeFrom: formatTime(computation.chronoAwakeFrom),
        awakeTo: formatTime(computation.chronoAwakeTo),
        sleepFrom: formatTime(computation.chronoSleepFrom),
        sleepTo: formatTime(computation.chronoSleepTo)
    }
}