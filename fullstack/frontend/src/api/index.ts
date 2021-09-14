
const API_BASE = "http://localhost:5000/api/v1" // TODO

function handleFetchError(response: Response) {
  if (!response.ok) {
    return Promise.reject(response.statusText)
  }
  return response
}

export function apiUrl(url: string) {
  return `${API_BASE}${url}`
}

export function apiFetch<T>(url: string, initOpts?: RequestInit): Promise<T> {
  // Add authentication details
  const init = {
    ...initOpts,
    credentials: "same-origin" as RequestCredentials,
    headers: initOpts?.headers,
  }

  return fetch(apiUrl(url), init)
    .then(handleFetchError)
    .then((response) => {
        if (response.status === 204) {
            return {} as T
        }
        return response.json()
    })
}



