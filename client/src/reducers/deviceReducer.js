const SET_DEVICE = "SET_DEVICE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
// const SET_SELECTED_DEVICE = "SET_SELECTED_DEVICE";
// const SET_SELECTED_ONE_DEVICE = "SET_SELECTED_ONE_DEVICE";

const defaultState = {
  devices: [],
  currentPage: 1,
  totalCount: 0,
  limit: 3
  // selectedDevice: {},
  // selectedOneDevice: {},
};

export default function deviceReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DEVICE:
      return {
        ...state,
        devices: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

//ACTION CREATORS
export const setDevice = (device) => ({ type: SET_DEVICE, payload: device });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, payload: totalCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage });
