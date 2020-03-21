
export const get = (resourceURI, callback) => {
  const baseUrl = window.apiURL
  fetch(baseUrl + resourceURI)
    .then(response => {
      return response.json()
    })
    .then(json => {
      callback(json)
    })
}
