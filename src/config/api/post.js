import axios from 'axios';


//constants imports
const { BASE_URL } = require("../constants/index");

//main function
async function Post(path, postData, token, paramObj, contentType) {
  let url = BASE_URL + path;
  let headers;

  if (contentType === "multipart") {
    headers = {
      headers: token
        ? {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }
        : {
            "Content-Type": "multipart/form-data",
          },
    };
  } else {
    headers = {
      headers: token
        ? {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        : {
            "Content-Type": "application/json",
          },
    };
  }

  if (paramObj) {
    const config = {
      // headers: { Authorization: `Bearer ${token}` },
      headers : headers,
      params:  paramObj ,
    };
    const { data } = await axios.post(url, postData, config);
    return data;
  }
  const { data } = await axios.post(url, postData, headers);
  return data;
}

export { Post };

// import axios from "axios";
// import { BASE_URL } from "../constants";
// import {CONTENT_TYPE} from "../constants"

// async function Post(path, postData, token, paramObj,contentType = CONTENT_TYPE.JSON) {
//   try {
//     let url = BASE_URL + path;
//     const header = {
//       headers: token
//         ? {
//             "Content-Type": contentType,
//             Authorization: `Bearer ${token}`,
//           }
//         : {
//             "Content-Type": contentType,
//           },
//     };

//     if (paramObj) {
//       const config = {
//         headers: { Authorization: `Bearer ${token}` },
//         params: { paramObj },
//       };
//       const response = await axios.post(url, postData, config);
//       return response;
//     }
//     const response = await axios.post(url, postData, header).catch((e) => {

//      return(e)
//     }
//   );
//     return response;
//   } catch (error) {
//     if (error.response) {
//       if (error.response.status === 401) {
//         localStorage.clear();
//         window.location.href = "/signin?error_code=session_expired";
//         console.log("SESSION EXPIRED");
//       }
//     }
//   }
// }

// export { Post };
