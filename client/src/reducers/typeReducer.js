const SET_TYPE = "SET_TYPE";
const SET_SELECTED_TYPE = "SET_SELECTED_TYPE";

const defaultState = {
  types: [],
  selectedType: {},
};

export default function typeReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        types: action.payload,
      };
    case SET_SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload,
      };
    default:
      return state;
  }
}

//ACTION CREATORS
export const setType = types => ({ type: SET_TYPE, payload: types });
export const setSelectedType = type => ({ type: SET_SELECTED_TYPE, payload: type });
