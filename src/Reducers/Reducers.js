import {
  ADD_CHARACTERS,
  CHARACTER_DETAIL,
  GET_CHARACTERS,
  REMOVE_CHARACTERS,
  UPDATE_CHARACTERS,
} from "../Actions/Actions.js";

const initialState = {
  characters: [],
  newCharacters: [],
  detail: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case ADD_CHARACTERS:
      return {
        ...state,
        newCharacters: action.payload,
      };
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: [...state.characters, action.obj],
      };
    case REMOVE_CHARACTERS:
      return {
        ...state,
        characters: state.characters.filter((item) => item.id !== action.id),
      };
    case CHARACTER_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}
