import axios from 'axios';

export const postNewTip = (payload) => {
    return post("https://localhost:5001/Tip", payload);
}

export const getTipsList = () => {
    return get("https://localhost:5001/Tip");
}

export const get = (url, payload) => {
    return axios.get(url, payload, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
        }
    });
}

export const post = (url, payload) => {
    return axios.post(url, payload, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
}