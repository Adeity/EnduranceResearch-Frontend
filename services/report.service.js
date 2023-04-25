import { formComputationResultToDto, deviceComputationResultToDto } from './people.service'
import { extractPeopleDataSleep } from './people.service'


export function getReport(id) {
    return Promise.resolve(EXAMPLE_REPORT);
}

export function updateFormComputation(computation) {

    const computation_dto  = formComputationResultToDto(computation)
    return updateComputation('update-form-computation', computation_dto);
}

export function updateDeviceComputation(computation) {

  const computation_dto  = deviceComputationResultToDto(computation)
  return updateComputation('update-device-computation', computation_dto);
}

function updateComputation(endpoint, computation_dto) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(computation_dto)
  })
  .then(response => response.json())
  .then(response => extractPeopleDataSleep(response))
  .catch(error => {
      console.error(error)
  });
}