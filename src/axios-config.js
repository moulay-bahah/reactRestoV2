// for dev perpuse
import axios from "axios";
// for production perpuse
//import axiosConf from "axios";

// for dev 
const axiosConf = axios.create({
  baseURL: "http://localhost:3001",
  //baseURL:"http://restaurant.test/api",
  /*
  headers: {
    'Access-Control-Allow-Origin': '*',
    
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  */
 // withCredentials: true
});

// in all case
export { axiosConf }