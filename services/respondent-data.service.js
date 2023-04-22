import { extractPeopleDataSleep } from './people.service'

export function getRespondentComputationData(id) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/get-user-data/${id}`)
        .then(response => response.json())
        .catch(error => console.error(error));
        // .then(_ => EXAMPLE_PEOPLE_GLOBAL_DATA);
}

export function updateRespondentComputationData(data) {

  console.log(data)
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/update-u-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => extractPeopleDataSleep(data))
      .catch(error => console.error(error));
}
