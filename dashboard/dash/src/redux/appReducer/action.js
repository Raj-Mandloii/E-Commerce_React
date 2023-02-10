import * as type from "./actionTypes";
import axios from "axios";

const baseUrl = "https://sore-lime-reindeer-toga.cyclic.app/api/";

const getProduct = (current) => (dispatch) => {
  dispatch({ type: type.REQUEST });

  return axios
    .get(baseUrl + `product?limit=20&page=${current}`)
    .then((r) => {
      console.log(r.data)
      return dispatch({ type: type.SUCCESS, payload: r.data });
    })
    .catch((e) => {
      return dispatch({ type: type.FAILURE });
    });
};

const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: type.REQUEST });

  return axios
    .get(baseUrl + "product/", id)
    .then((r) => {
      console.log("Single Product", r.data);
      return dispatch({ type: type.SUCCESS, payload: r.data });
    })
    .catch((e) => {
      return dispatch({ type: type.FAILURE });
    });
};

// const postData = (payload) => (dispatch) =>{
//     console.log("post  :::::::::::::::::::");

//     dispatch({type:type.ADDREQUEST})

//     return axios.post(`https://backend-production-f813.up.railway.app/job/create`,payload)
//     .then(r => {

//         return dispatch({type:type.ADDSUCCESS})
//     }).catch(e=>{
//         return dispatch({type:type.ADDFAILURE})
//     })
// }

export { getProduct, getSingleProduct };
