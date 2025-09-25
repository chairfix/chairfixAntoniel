import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

const baseUrl = "http://localhost:3001"; // 🔁 Cambia si usas otro backend

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

      return response.data; // ✅ Retornar el usuario
    } catch (error) {
      console.log("Error en login:", error.response?.data || error.message);
      throw error;
    }
  };
};

export const register = (name, email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/people`, {
        name,
        email,
        password,
      });

      dispatch({
        type: REGISTER,
        payload: response.data,
      });

      return response.data; // ✅ Retornar nuevo usuario
    } catch (error) {
      console.error("Error en registro:", error.response?.data || error.message);
      throw error;
    }
  };
};
