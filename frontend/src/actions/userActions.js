import Axios from "axios";
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, 
  USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL,
  USER_FAVE_REQUEST, USER_FAVE_SUCCESS, USER_FAVE_FAIL,
  USER_CART_REQUEST, USER_CART_SUCCESS, USER_CART_FAIL
} from "../constants/userConstants";

const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
  dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, name, email, password } });
  try {
    const { data } = await Axios.put("/api/users/" + userId,
      { name, email, password }, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
}

const addFave = (userInfo, prodId) => async (dispatch, getState) => {
  console.log("running action");
  try {
    const {
      userSignin: {
        userInfo: { token },
      },
    } = getState();
    dispatch({ type: USER_FAVE_REQUEST, payload: prodId });
    console.log("dispatched ", userInfo._id);
    const { data } = await Axios.put(
      `/api/users/${userInfo._id}/faveList`,
      { prodId },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    console.log("ranRoute");
    dispatch({ type: USER_FAVE_SUCCESS, payload: data });
  } catch (error) {
    // report error
    dispatch({ type: USER_FAVE_FAIL, payload: error.message });
    console.log("error");
  }
};

const addCart = (userInfo, prodId) => async (dispatch, getState) => {
  console.log("running action");
  try {
    const {
      userSignin: {
        userInfo: { token },
      },
    } = getState();
    dispatch({ type: USER_CART_REQUEST, payload: prodId });
    console.log("dispatched ", userInfo._id);
    const { data } = await Axios.post(
      `/api/users/${userInfo._id}/cart`,
      { prodId },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    console.log("ranRoute");
    dispatch({ type: USER_CART_SUCCESS, payload: data });
  } catch (error) {
    // report error
    dispatch({ type: USER_CART_FAIL, payload: error.message });
    console.log("error");
  }
};


const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", { name, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}
export { signin, register, logout, update, addFave, addCart };