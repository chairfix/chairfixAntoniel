import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";



const baseUrl = "http://localhost:3001";


export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error en login:", error.response?.data || error.message);
      throw error; // 👈 esto es clave
    }
  };
};

export const register = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/people`, {
        email,
        password,
      });

      dispatch({
        type: REGISTER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error en registro:", error.response?.data || error.message);
      throw error; // para capturar desde el modal
    }
  };
};