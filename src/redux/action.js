import axios from "axios";
export const CREATE_USER = "CREATE_USER";
export const GET_USERS = "GET_USERS";
export const CREATE_PRESUPUESTO = "CREATE_PRESUPUESTO";
export const GET_PHOTOS = "GET_PHOTOS";
export const CREATE_PHOTO = "CREATE_PHOTO";





const baseUrl = "http://localhost:3001";

export const crearUsuario = (hojaData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/user`, hojaData);
      dispatch({
        type: CREATE_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
};


export const getUsuarios = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/user`);
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
};

export const createPresupuesto = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/presupuesto`, data);
      dispatch({
        type: CREATE_PRESUPUESTO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
};


export const getPhotos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/photo`);
      dispatch({
        type: GET_PHOTOS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
};

export const createPhoto = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/photo`, data);
      dispatch({
        type: CREATE_PHOTO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
};