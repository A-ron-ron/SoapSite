import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, 
  USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, 
  USER_LOGOUT, 
  USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL,
  USER_FAVE_REQUEST, USER_FAVE_SUCCESS, USER_FAVE_FAIL,
  USER_CART_REQUEST, USER_CART_SUCCESS, USER_CART_FAIL,
 } from "../constants/userConstants";

function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default: return state;
  }
}

function userUpdateReducer(state = {}, action) {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userFaveReducer(state = {}, action) {
  switch (action.type) {
    case USER_FAVE_REQUEST:
      return { loading: true };
    case USER_FAVE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_FAVE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


function userCartReducer(state = {}, action) {
  switch (action.type) {
    case USER_CART_REQUEST:
      return { loading: true };
    case USER_CART_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_CART_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
  userSigninReducer, userRegisterReducer, userUpdateReducer, userFaveReducer, userCartReducer,
}