import axios from 'axios'
import getBaseURL from "./GetBaseURL";
import {getToken} from "./UserFunctions";

export const getAllPost = () => {
    return axios
        .get(getBaseURL()+'api/auth/posting', {
            headers: { Authorization: `Bearer ${getToken()}`, 'Accept' : 'application/json' }
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
