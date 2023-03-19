import axios from "axios";

// const BASE_URL="http://localhost:4000/api/v1/";
const BASE_URL="https://ecombackendvip.up.railway.app/api/v1/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;


export const publicRequest=axios.create({
    baseURL: BASE_URL,

});



export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
    }
   
  });

  export const productRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data, application/json",
        Authorization: `Bearer ${TOKEN}`,
    }
   
  });

//   "Content-Type": "application/json",
// multipart/form-data,


// headers: {
//       Accept: "application/json",
//     "Content-Type": "multipart/form-data, application/json",
//      Authorization: `Bearer ${TOKEN}`,
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   },