import { config } from '../../config'
import axios from 'axios'

export const getAddress = async () => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.get(`${config.api_host}/api/delivery-addresses?limit=`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export const getLocation = async (lokasi, kodeInduk) => {
  return await axios.get(`https://server-atihan-production.up.railway.app/${lokasi}?kode_induk=${kodeInduk}`);
}

export const createAddress = async data => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.post(`${config.api_host}/api/delivery-addresses`, data, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}




// import axios from "axios"


// export const registerUser = async (data) => {
//   return await axios.post(`https://server-atihan-production.up.railway.app/auth/register`, data);
// }

// export const loginUser = async (data) => {
//   return await axios.post(`https://server-atihan-production.up.railway.app/auth/login`, data);
// }

// export const logoutUser = async () => {
//   let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

//   return await axios.post(`https://server-atihan-production.up.railway.app/auth/logout`, null, {
//     headers: {
//       authorization: `Bearer ${token}`
//     }
//   }).then(res => {
//     localStorage.removeItem('auth');
//     return res
//   });
// }