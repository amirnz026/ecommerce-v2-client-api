import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const TOKEN = () => {
//   if (
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//       .currentUser.accessToken
//   ) {
//     return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//       .currentUser.accessToken;
//   } else {
//     return "";
//   }
// };

// const tokenValue = TOKEN();
const tokenValue = "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${tokenValue}` },
});
