import { formatTimeForExcel } from '../utils/time-format.js'


export function exportToExcel(personId) {
    return fetch(`${process.env.BASE_URL}/comps/export-to-xls/${personId}`, {})
    .then(res => res.blob())
    .then(data => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', "reports_" + personId + "_" + formatTimeForExcel(new Date()) +  ".xlsx");
      document.body.appendChild(link);
      link.click();
    })
    .catch(err => console.error(err));
}

export function exportSelectedToExcel(respIds) {
    return fetch(`${process.env.BASE_URL}/comps/export-to-xls`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(respIds)
          }
    )
    .then(res => res.blob())
    .then(data => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', "reports_" + formatTimeForExcel(new Date()) +  ".xlsx");
      document.body.appendChild(link);
      link.click();
    })
    .catch(err => console.error(err));
}

export function exportAllToExcel() {
    return fetch(`${process.env.BASE_URL}/comps/export-all-to-xls`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
      }
    )
    .then(res => res.blob())
    .then(data => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', "reports_" + formatTimeForExcel(new Date()) +  ".xlsx");
      document.body.appendChild(link);
      link.click();
    })
    .catch(err => console.error(err));
}

export function exportUnregisteredToExcel() {
    return fetch(`${process.env.BASE_URL}/comps/export-unregistered`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
      }
    )
    .then(res => res.blob())
    .then(data => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', "reports_unregistered_" + formatTimeForExcel(new Date()) +  ".xlsx");
      document.body.appendChild(link);
      link.click();
    })
    .catch(err => console.error(err));
}