import axios from 'axios'

export const register = newUser => {
    return axios
        .post('api/auth/signup', newUser, {
          headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post(
            'api/auth/login',
            {
                email: user.email,
                password: user.password
            },
            {
                headers: { 'Content-Type': 'application/json' ,'X-Requested-With': 'XMLHttpRequest'}
            }
        )
        .then(response => {
            console.log(response)
            localStorage.setItem('usertoken', response.data.access_token)
            return response.data.access_token
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () => {
    return axios
        .get('api/auth/user', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })

}