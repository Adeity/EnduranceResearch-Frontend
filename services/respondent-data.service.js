import { extractRespondentsResponseDto } from './people.service'

export function getRespondentComputationData(id) {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/get-user-data/${id}`)
        .then(response => response.json())
        .catch(error => console.error(error));
}

export function updateRespondentComputationData(data, pageInfo) {

  const dto = {
    data: data,
    pageInfo: pageInfo
  }

  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/update-u-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    })
      .then(response => response.json())
      .then(data => extractRespondentsResponseDto(data))
      .catch(error => console.error(error));
}
