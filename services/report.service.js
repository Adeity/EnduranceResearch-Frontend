import { computationResultToDto } from './people.service'
import { extractPeopleDataSleep } from './people.service'


export function getReport(id) {
    return Promise.resolve(EXAMPLE_REPORT);
}

export function updateReport(report ) {

    const report_dto  = computationResultToDto(report)
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/update-computation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report_dto)
      })
      .then(response => response.json())
      .then(response => extractPeopleDataSleep(response))
      .catch(error => {
          console.error(error)
      });
}