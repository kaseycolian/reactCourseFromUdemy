export const INFO_FETCHED = 'INFO_FETCHED';
export const NEW_INFO = 'NEW_INFO';

export function fetchInfo() {
  return (dispatch) => {
    return fetch('http://www.json-generator.com/api/json/get/coLCADGZOW?indent=2', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(loadInfo(json))
    })
    .catch(error => console.log(error));
  }
}
//this type & payload is what will get caught by the reducer
//dispatch will alert reducer that action is finished
//it will match INFO_FETCHED called in reducer
//payload is where we put the actual details of what came back
export function loadInfo(results) {
  return {
    type : INFO_FETCHED,
    payload : results
  }
}
