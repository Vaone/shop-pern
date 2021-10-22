const SET_BRAND = "SET_BRAND";
const SET_SELECTED_BRAND = "SET_SELECTED_BRAND";

const defaultState = {
  brands: [],
  selectedBrand: {},
};

export default function brandReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BRAND:
      return {
        ...state,
        brands: action.payload,
      };
    case SET_SELECTED_BRAND:
      return {
        ...state,
        selectedBrand: action.payload,
      };
    default:
      return state;
  }
}

//ACTION CREATORS
export const setBrand = brands => ({ type: SET_BRAND, payload: brands });
export const setSelectedBrand = brand => ({ type: SET_SELECTED_BRAND, payload: brand });