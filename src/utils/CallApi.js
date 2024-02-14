import axios from 'axios';
import { BASE_URL } from "./constants"

export const callAPI = async(resource) => {
const config = {

    headers: {
          "Content-Type" : "application/json",   
          "Accept" : "application/json",   
    }
};

    const {data} = await axios.get(`${BASE_URL}/${resource}`, config);
    return data;
}