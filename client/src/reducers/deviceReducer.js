const SET_DEVICE = "SET_DEVICE";
// const SET_SELECTED_DEVICE = "SET_SELECTED_DEVICE";
// const SET_SELECTED_ONE_DEVICE = "SET_SELECTED_ONE_DEVICE";

const defaultState = {
  devices: [],
  // selectedDevice: {},
  // selectedOneDevice: {},
};

export default function deviceReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DEVICE:
      return {
        ...state,
        device: action.payload,
      };
    default:
      return state;
  }
}

//ACTION CREATORS
export const setDevice = (device) => ({ type: SET_DEVICE, payload: device });
