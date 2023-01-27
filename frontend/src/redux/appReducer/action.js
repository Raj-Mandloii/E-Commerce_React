import * as type from "./actionTypes";
import axios from "axios";

const getProduct = (query) => (dispatch) => {
  console.log(query);
  dispatch({ type: type.REQUEST });

  return axios
    .get("https://backend-production-f813.up.railway.app/job", query)
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
