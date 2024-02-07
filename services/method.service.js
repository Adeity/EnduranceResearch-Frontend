export function getMethods() {
    return fetch(`${process.env.BASE_URL}/comps/get-methods`)
        .then(response => response.json())
}