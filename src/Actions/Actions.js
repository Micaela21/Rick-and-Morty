export const GET_CHARACTERS = "GET_CHARACTERS";
export const ADD_CHARACTERS = "ADD_CHARACTERS";
export const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";
export const REMOVE_CHARACTERS = "REMOVE_CHARACTERS";
export const CHARACTER_DETAIL = "CHARACTER_DETAIL";
export const GET_YOUR_CHARACTER = "GET_YOUR_CHARACTER";

export function getCharacters(ids) {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/${ids}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "GET_CHARACTERS",
          payload: json,
        });
      });
  };
}

export function addCharacters(name) {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "ADD_CHARACTERS",
          payload: json.results,
        });
      });
  };
}

export function upDateCharacters(obj) {
  return {
    type: "UPDATE_CHARACTERS",
    obj,
  };
}

export function removeCharacters(id) {
  return {
    type: "REMOVE_CHARACTERS",
    id,
  };
}

export function characterDetail(id) {
  return function (dispatch) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "CHARACTER_DETAIL",
          payload: json,
        });
      });
  };
}
