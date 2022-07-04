//importation
import axios from "axios";
import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  lOGOUT_USER,
  REGISTER_USER,
} from "../ActionTypes/user";

//register
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("api/auth/register", newUser);
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

//login
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("api/auth/login",user);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

//current
export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    let result = await axios.get("api/auth/current",config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

//logout
export const logout = () => async (dispatch) => {
    dispatch({ type: lOGOUT_USER });
  };