import axios from "axios";
import * as types from "./actionTypes";

const baseUrl = "https://sore-lime-reindeer-toga.cyclic.app/api/";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post(baseUrl + "user/register", payload)
    .then((r) => {
      return dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE, payload: e }));
};

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post(baseUrl + "user/login", payload)
    .then((r) => {
      return dispatch({
        type: types.LOGIN_SUCCESS,
        payload: r.data.token,
        profile: r.data,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.LOGIN_FAILURE, payload: e });
    });
};

const profile = (payload) => (dispatch) => {
  dispatch({ type: types.PROFILE_REQUEST });
  const options = {
    method: "GET",
    url: `http://localhost:8080/user/${payload.username}`,
    headers: { Authorization: `Bearer ${payload.token}` },
  };

  return axios(options)
    .then((r) => dispatch({ type: types.PROFILE_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.PROFILE_FAILURE, payload: e }));
};

export { login, register, profile };
