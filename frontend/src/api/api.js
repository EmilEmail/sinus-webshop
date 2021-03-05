
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const PRODUCTS_URL = `${BASE_URL}products`;
const LOGIN_URL = `${BASE_URL}auth/`;
const REGISTER_URL = `${BASE_URL}register/`;
const USER_URL = `${BASE_URL}me/`;
const EDIT_URL = `${BASE_URL}products/`;
const ORDER_URL = `${BASE_URL}orders/`;

export { PRODUCTS_URL, LOGIN_URL, REGISTER_URL, USER_URL, EDIT_URL, ORDER_URL };



const get = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;

  } catch (error) {
    console.log(error)
  }
}

const post = async (url, obj) => {
  try {
    const token = await axios.post(url, obj);
    console.log(token.data.token)
    return token;

  } catch (error) {
    console.log(error)
  }
}

const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const placeNewOrder = async (ORDER_URL, items) => {
  try {
    const response = await axios.post(ORDER_URL, items);
    return response;
  } catch (error) {
    console.log(error)
  }
}

const patch = async (EDIT_URL, newProduct) => {
  try {
    const response = await axios.patch(EDIT_URL, newProduct);
    console.log(response)
    return response;
  } catch (error) {
    console.log(error)
  }
}
const remove = async (url) => {
  try {
    const response = await axios.delete(url);
    console.log(response)
    return response;
  } catch (error) {
    console.log(error)
  }
}
const deleteProductInDB = async (DELETE_URL) => {
  try {
    const response = await axios.delete(DELETE_URL);
    console.log(response)
    return response;
  } catch (error) {
    console.log(error)
  }
}

export { get, post, patch, remove };
// export default getData;
export { setToken, deleteProductInDB, placeNewOrder };
