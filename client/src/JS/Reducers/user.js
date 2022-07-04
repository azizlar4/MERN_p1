//IMPORT

import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  lOGOUT_USER,
  REGISTER_USER,
} from "../ActionTypes/user";

//initialState
const initialState = {
  user: null,
  errors: [],
  loadUser: false,
  isAuth: false,
};

//pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };

    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };

    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };

    case lOGOUT_USER:
      localStorage.removeItem("token");
      return { user: null, errors: [], loadUser: false, isAuth: false };

    case CURRENT_USER:
      return { ...state, loadUser: false, user:payload, isAuth: true };

    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };

    default:
      return state;
  }
};
export default userReducer;
