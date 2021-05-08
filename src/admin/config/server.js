const axios = require("axios");
// const getToken = () => ["Admin ", localStorage.getItem(TOKEN)].join("");
const header = {
  "Content-Type": "application/json",
  //   Authorization: getToken(),
};
// const headerAuth = {
//   Authorization: getToken(),
// };

// const SERVER_URL = process.env.REACT_APP_SERVER_URL.replace(
//   "localhost",
//   window.location.hostname
// );
// console.log(SERVER_URL);
const server = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: header,
});

// module.exports.TOKEN = TOKEN;
module.exports.header = header;
// module.exports.headerAuth = headerAuth;
// module.exports.SERVER_URL = SERVER_URL;
module.exports.server = server;
