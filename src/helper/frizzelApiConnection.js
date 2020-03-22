import { request } from 'graphql-request'

export const get = (resourceURI, callback) => {
  const baseUrl = window.apiURL
  const fetch = window.fetch
  fetch(baseUrl + resourceURI)
    .then(response => {
      return response.json()
    })
    .then(json => {
      callback(json)
    })
}
