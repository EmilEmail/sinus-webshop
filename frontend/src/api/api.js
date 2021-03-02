
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const PRODUCTS_URL = `${BASE_URL}products`;


const getData = async () => {
  try {
    const response = await axios.get(PRODUCTS_URL);
    const data = response.data;
    console.log(data);
    return data;

  } catch (error) {
    console.log(error)
  }
}
const getUser = async (USER_URL) => {
  try {
    const response = await axios.get(USER_URL);
    const data = response.data;
    console.log(data);
    console.log(response);
    return data;

  } catch (error) {
    console.log(error)
  }
}

const checkLogin = async (LOGIN_URL, user) => {
  try {
    const token = await axios.post(LOGIN_URL, user);
    console.log(token.data.token)
    return token;

  } catch (error) {
    console.log(error)
  }
}
const registerUser = async (REGISTER_URL, newUser) => {
  try {
    const response = await axios.post(REGISTER_URL, newUser);
    console.log(response)
    return response;

  } catch (error) {
    console.log(error)
  }
}

const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default getData;
export { getUser, checkLogin, registerUser, setToken };