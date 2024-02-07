export function getMethods() {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/get-methods`)
        .then(response => response.json())
}