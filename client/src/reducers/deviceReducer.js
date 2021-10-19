const SET_TYPE = "SET_TYPE";
const SET_DEVICE = "SET_DEVICE";
const SET_BRAND = "SET_BRAND";
const SET_SELECTED_TYPE = "SET_SELECTED_TYPE";
const SET_SELECTED_BRAND = "SET_SELECTED_BRAND";
// const SET_SELECTED_DEVICE = "SET_SELECTED_DEVICE";
// const SET_SELECTED_ONE_DEVICE = "SET_SELECTED_ONE_DEVICE";

const defaultState = {
  types: [
    { id: 1, name: "Холодильник" },
    { id: 2, name: "Телефон" },
    { id: 3, name: "Ноутбук" },
    { id: 4, name: "Телевизор" },
  ],
  brands: [
    { id: 1, name: "Samsung" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Asus" },
    { id: 4, name: "Xiaomi" },
    { id: 5, name: "LG" },
    { id: 6, name: "Lenovo" },
    { id: 7, name: "Midea" },
    { id: 8, name: "Acer" },
  ],
  devices: [
    {
      id: 1,
      name: "Xiaomi Mi Mix 4",
      price: 30000,
      rating: 5,
      img: `www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`,
    },
    {
      id: 2,
      name: "iPhone 12 Pro",
      price: 30000,
      rating: 5,
      img: `www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`,
    },
    {
      id: 3,
      name: "Samsung S11",
      price: 30000,
      rating: 5,
      img: `www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`,
    },
    {
      id: 4,
      name: "Asus ZenBook 14",
      price: 30000,
      rating: 5,
      img: `www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`,
    },
    
  ],
  selectedType: {},
  selectedBrand: {},
  // selectedDevice: {},
  // selectedOneDevice: {},
};

export default function deviceReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        types: [...state.types, action.payload],
      };
    case SET_BRAND:
      return {
        ...state,
        brands: [...state.brands, action.payload],
      };
    case SET_DEVICE:
      return {
        ...state,
        device: [...state.devices, action.payload],
      };
    case SET_SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload,
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
export const setDevice = device => ({ type: SET_DEVICE, payload: device });
export const setBrand = brand => ({ type: SET_BRAND, payload: brand });
export const setType = type => ({ type: SET_TYPE, payload: type });
export const setSelectedType = type => ({ type: SET_SELECTED_TYPE, payload: type });
export const setSelectedBrand = brand => ({ type: SET_SELECTED_BRAND, payload: brand });
