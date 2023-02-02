import * as type from "./actionTypes";
import axios from "axios";

const baseUrl = "https://sore-lime-reindeer-toga.cyclic.app/api/";

const getProduct = (query) => (dispatch) => {
  dispatch({ type: type.REQUEST });

  return axios
    .get(baseUrl + "product?limit=20", query)
    .then((r) => {
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

export { getProduct };
