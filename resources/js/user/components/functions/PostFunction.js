import axios from "axios";
import { User } from "./UserFunctions";

export const Post = {
    all: (successCb, failCb) => {
        axios
            .get("auth/posting", {
                headers: {
                    Authorization: `Bearer ${User.access_token()}`,
                    Accept: "application/json"
                }
            })
            .then(response => {
                successCb(response.data);
            })
            .catch(err => {
                failCb(err);
            });
    },
    add: (data, successCb, failCb) => {
        axios
            .post("auth/post", data, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: `Bearer ${User.access_token()}`,
                    Accept: "application/json"
                }
            })
            .then(response => {
                successCb(response);
            })
            .catch(err => {
                failCb(err);
            });
    },
    get: (successCb, failCb) => {
        axios
            .get("auth/getpost", {
                headers: {
                    Authorization: `Bearer ${User.access_token()}`,
                    Accept: "application/json"
                }
            })
            .then(response => {
                successCb(response.data);
            })
            .catch(err => {
                failCb(err);
            });
    },
    getbyid: (id, successCb, failCb) => {
        axios
            .get(`auth/post/${id}`, {
                headers: {
                    Authorization: `Bearer ${User.access_token()}`,
                    Accept: "application/json"
                }
            })
            .then(response => {
                successCb(response.data);
            })
            .catch(err => {
                failCb(err);
            });
    },
    update: (id, data, successCb, failCb) => {
        axios
            .post(`auth/postupdate/${id}`, data, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: `Bearer ${User.access_token()}`,
                    Accept: "application/json"
                }
            })
            .then(response => {
                successCb(response);
            })
            .catch(err => {
                failCb(err);
            });
    },
    delete: (id, successCb, failCb) => {
        axios
            .delete(`auth/postdelete/${id}`, {
                headers: {
                    Authorization: `Bearer ${User.access_token()}`,
                    Accept: "application/json"
                }
            })
            .then(response => {
                successCb(response.data);
            })
            .catch(err => {
                failCb(err);
            });
    }
};
