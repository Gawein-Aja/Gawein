import axios from 'axios'

export const Auth = {
    signup: (data, successCb, failCb) => {
        axios.post('auth/signup', data, {
                headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
            }).then(response => {
                successCb(response);
            }).catch(err => {
                failCb(err);
            })
    },
    login: (data, successCb, failCb) => {
        axios.post(
            'auth/login', data,{
                headers: { 'Content-Type': 'application/json' ,'X-Requested-With': 'XMLHttpRequest'}
            }).then(response => {
                localStorage.setItem('user.access_token', response.data.access_token);
                successCb(response.data.user);
            }).catch(err => {
            console.log(err);
                failCb(err);
            })
    },
    logout: (successCb, failCb) => {
        axios.get('auth/logout', {
                headers: { Authorization: `Bearer ${User.access_token()}` }
            }).then(response => {
                localStorage.clear();
                successCb(response);
            }).catch(err => {
                failCb(err);
                alert(err.response.data.message);
        });
    },
    checkAuth: (successCb, failCb) => {
        axios.get('auth/user', {
            headers: { Authorization: `Bearer ${User.access_token()}` }
        }).then(response => {
            successCb(response.data);
        }).catch(err => {
            failCb(err);
        })
    },
    getProfile: (successCb, failCb) => {
        axios.get('auth/user', {
                headers: { Authorization: `Bearer ${User.access_token()}` }
            }).then(response => {
                successCb(response.data);
            }).catch(err => {
                failCb(err);
            })
    }
}

export const User = {
    id: () => {
        return localStorage.getItem('user.id');
    },
    name: () => {
        return localStorage.getItem('user.name');
    },
    access_token: () => {
        return localStorage.getItem('user.access_token');
    },
    avatar_url: () => {
        return localStorage.getItem('user.avatar_url');
    },
    created_at: () => {
        return localStorage.getItem('user.created_at');
    },
    email: () => {
        return localStorage.getItem('user.email');
    },
}
