import axios from 'axios'
import getBaseURL from './GetBaseURL'

export const register = newUser => {
    return axios
        .post(getBaseURL()+'api/auth/signup', newUser, {
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
            getBaseURL()+'api/auth/login',
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

export const isLogin = () => {
    if (getToken()) {
        return true;
    }
    return false;
}

export const getToken = () => {
    return localStorage.getItem('usertoken');
}

export const getProfile = () => {
    return axios
        .get(getBaseURL()+'api/auth/user', {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })

}
