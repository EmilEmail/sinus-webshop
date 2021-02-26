
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const PRODUCTS_URL = `${BASE_URL}products`;
const LOGIN_URL = `${BASE_URL}auth`;


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

const checkLogin = async (user) => {
  try {
    const token = await axios.post(LOGIN_URL, user);
    return token;

  } catch (error) {
    console.log(error)
  }
}

export default getData;
export {checkLogin};