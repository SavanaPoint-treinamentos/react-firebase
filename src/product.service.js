import axios from 'axios';

const api = 'https://savanapoint-training-jwt-api-71376b3781d8.herokuapp.com/api'

export const getProducts = async(token) => {
    try {
        const { data } = await axios.get(`${api}/iternds/products/all`, {
        headers: {
            access_token: token
        }
    });
    return data
    } catch (error) {
         return error
    }
}

export const loginWithApi = async(email, password) => {
    
      const userDatas = {
        email,
        password
      }

      console.log(userDatas)

      try {
        const {  data } = await axios.post(`${api}/iternds/account/login`, userDatas);
        return data
      } catch (error) {
        return error
      }
}