import { $authHost, $host } from "./index";
import { setType } from "../reducers/typeReducer";
import { setBrand } from "../reducers/brandReducer";
import { setDevice } from "../reducers/deviceReducer";

// Types
export const createType = async (dispatch, type) => {
  try {
    const { data } = await $authHost.post("/api/type", type);
    return data;
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const fetchTypes = async (dispatch) => {
  const { data } = await $host.get("/api/type");
  dispatch(setType(data));
  return data;
};

// Brands
export const createBrand = async (brand) => {
  try {
    const { data } = await $authHost.post("/api/brand", brand);
    return data;
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const fetchBrands = async (dispatch) => {
  try {
    const { data } = await $host.get("/api/brand");
    dispatch(setBrand(data));
  } catch (e) {
    throw e;
  }
};

// Devices
export const createDevice = async (device) => {
  try {
    const { data } = await $authHost.post("/api/device", device);
    return data;
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const fetchDevices = async (dispatch) => {
  const { data } = await $host.get("/api/device");
  dispatch(setDevice(data.rows));
  return data.rows;
};

export const fetchOneDevice = async (id) => {
  try {
    const { data } = await $host.get("/api/device/" + id);
    return data;
  } catch(e) {
    alert(e.response.data.message);
  }
};
