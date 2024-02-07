import { formatTimeOnlyHoursToJson, formatTime } from '../utils/time-format'
import { extractRespondentsResponseDto } from './people.service'

export function getGlobalSleepData() {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/global-chrono`)
        .then(response => response.json())
        .then(response => {
            const chronoData = [];
            response.forEach(element => {
                chronoData.push({
                    id: element.id,
                    title: element.title,
                    awake_from: formatTimeOnlyHoursToJson(element.awakeFrom),
                    awake_to: formatTimeOnlyHoursToJson(element.awakeTo),
                    sleep_from: formatTimeOnlyHoursToJson(element.sleepFrom),
                    sleep_to: formatTimeOnlyHoursToJson(element.sleepTo)
                })

            });
            chronoData.sort(function(a, b) { return a.id - b.id})
            return chronoData;
        });
}

export function updateGlobalSleepData(data, pageInfo) {

    const chonoVals = []
    data.forEach(value => {
        chonoVals.push(
            {
                id: value.id,
                title: value.title,
                awake_from: formatTime(value.awake_from),
                awake_to: formatTime(value.awake_to),
                sleep_from: formatTime(value.sleep_from),
                sleep_to: formatTime(value.sleep_to)
            }
        )
    })

    const body = {
        data: chonoVals,
        pageInfo: pageInfo
    }

    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/update-global-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => extractRespondentsResponseDto(data))
        .catch(error => console.error(error));
}