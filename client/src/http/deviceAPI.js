import { $authHost, $host } from "./index";
import { setType } from "../reducers/typeReducer";
import { deleteBrandAC, setBrand } from "../reducers/brandReducer";
import { setCurrentPage, setDevice, setTotalCount } from "../reducers/deviceReducer";

// Types
export const createType = async (type) => {
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
  dispatch(setCurrentPage(1));
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
    dispatch(setCurrentPage(1));
  } catch (e) {
    throw e;
  }
};

export function deleteBrand (id) {
  return async (dispatch) => {
    try {
      const { data } = await $authHost.delete(`/api/brand?id=${id}`);
      dispatch(deleteBrandAC(id))
      alert(data.message);
    } catch (e) {
      throw e;
    }
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

export const fetchDevices = (typeId, brandId, page, limit=5) => {
  return async dispatch => {
    try {
      const { data } = await $host.get("/api/device", {params: {typeId, brandId, page, limit}});
      dispatch(setDevice(data.rows))
      dispatch(setTotalCount(data.count))
    } catch (e) {
      alert(e.response.data.message);
    }
    
  } 
};

export const fetchOneDevice = async (id) => {
  try {
    const { data } = await $host.get("/api/device/" + id);
    return data;
  } catch(e) {
    alert(e.response.data.message);
  }
};
