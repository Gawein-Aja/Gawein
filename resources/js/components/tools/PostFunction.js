import axios from 'axios'

export const getAllPost = () => {
    return axios
        .get('api/auth/posting', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}`, 'Accept' : 'application/json' }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
