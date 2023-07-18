import { formComputationResultToDto, deviceComputationResultToDto } from './people.service'
import { extractRespondentsResponseDto } from './people.service'


export function getReport(id) {
    return Promise.resolve(EXAMPLE_REPORT);
}

export function updateFormComputation(computation, pageInfo) {

    const computation_dto  = formComputationResultToDto(computation)
    return updateComputation('update-form-computation', computation_dto, pageInfo);
}

export function updateDeviceComputation(computation, pageInfo) {

  const computation_dto = deviceComputationResultToDto(computation)
  return updateComputation('update-device-computation', computation_dto, pageInfo);
}

function updateComputation(endpoint, computation_dto, pageInfo) {

  const dto = {
    data: computation_dto,
    pageInfo: pageInfo
  }

  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dto)
  })
  .then(response => response.json())
  .then(response => extractRespondentsResponseDto(response))
  .catch(error => {
      console.error(error)
  });
}